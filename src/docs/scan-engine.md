<h2>设计目标</h2>
      <p>扫描引擎是 fscan 的核心调度系统，负责根据不同场景选择扫描策略：</p>
      <ul>
        <li><strong>策略选择</strong>：根据命令行参数自动选择扫描模式</li>
        <li><strong>并发控制</strong>：使用 goroutine 池限制并发数</li>
        <li><strong>插件调度</strong>：流式执行插件任务，避免内存膨胀</li>
        <li><strong>异常处理</strong>：单个任务失败不影响整体扫描</li>
      </ul>

      <h2>策略模式：核心架构</h2>

      <h3>问题：一个工具，四种用法</h3>
      <p>fscan 支持四种不同的扫描场景：</p>
      <table>
        <tr><th>参数</th><th>策略</th><th>用途</th></tr>
        <tr><td>-h IP</td><td>ServiceScanStrategy</td><td>网络服务扫描（默认）</td></tr>
        <tr><td>-u URL</td><td>WebScanStrategy</td><td>Web 应用扫描</td></tr>
        <tr><td>-local</td><td>LocalScanStrategy</td><td>本地信息收集</td></tr>
        <tr><td>-alive</td><td>AliveScanStrategy</td><td>存活探测</td></tr>
      </table>

      <h3>策略接口设计</h3>
      <p>所有策略实现统一接口（简化版）：</p>
      <pre><code>type ScanStrategy interface {
    Execute(info HostInfo, ch chan struct{}, wg *WaitGroup)
    GetPlugins() ([]string, bool)
    IsPluginApplicableByName(plugin, host string, port int, isCustom bool) bool
}</code></pre>

      <h3>策略选择逻辑</h3>
      <p>引擎根据参数自动选择策略（<code>core/scanner.go:30</code>）：</p>
      <pre><code>func selectStrategy(info HostInfo) ScanStrategy {
    switch {
    case AliveOnly || ScanMode == "icmp":
        return NewAliveScanStrategy()  // 存活探测
    case LocalMode:
        return NewLocalScanStrategy()  // 本地扫描
    case len(URLs) > 0:
        return NewWebScanStrategy()    // Web扫描
    default:
        return NewServiceScanStrategy() // 服务扫描
    }
}</code></pre>
      <p><strong>使用策略模式的原因：</strong>不同场景的扫描流程完全不同，用 if/else 会导致代码混乱</p>

      <h2>ServiceScanStrategy：三阶段流程</h2>

      <h3>阶段划分</h3>
      <p>服务扫描（最复杂的策略）分三阶段：</p>
      <ol>
        <li><strong>目标发现</strong>：解析 IP → 存活探测 → 端口扫描</li>
        <li><strong>目标准备</strong>：构造 <code>[]HostInfo</code> 列表（host:port对）</li>
        <li><strong>插件执行</strong>：流式调度所有插件任务</li>
      </ol>

      <h3>分阶段的原因</h3>
      <table>
        <tr><th>阶段</th><th>输入</th><th>输出</th><th>过滤率</th></tr>
        <tr><td>IP 解析</td><td>192.168.1.0/24</td><td>256 个 IP</td><td>-</td></tr>
        <tr><td>存活探测</td><td>256 个 IP</td><td>42 个存活主机</td><td>83%</td></tr>
        <tr><td>端口扫描</td><td>42 个主机</td><td>125 个开放端口</td><td>-</td></tr>
        <tr><td>插件扫描</td><td>125 个端口</td><td>执行 2000+ 任务</td><td>-</td></tr>
      </table>
      <p><strong>关键优化</strong>：存活探测淘汰 80%+ 主机，避免对死主机做端口扫描</p>

      <h2>并发模型：Goroutine 池</h2>

      <h3>问题：无限制并发的灾难</h3>
      <p>扫描 10 万个端口 × 20 个插件 = 200 万个任务，如果每个任务创建一个 goroutine：</p>
      <ul>
        <li>200 万个 goroutine × 8KB 栈 = 16GB 内存</li>
        <li>操作系统线程数爆炸</li>
        <li>调度器开销巨大</li>
      </ul>

      <h3>解决方案：Channel Semaphore</h3>
      <p>使用带缓冲 channel 限制并发数（<code>core/scanner.go:59</code>）：</p>
      <pre><code>ch := make(chan struct{}, ThreadNum)  // 默认 600
wg := sync.WaitGroup{}

for _, task := range tasks {
    wg.Add(1)
    ch <- struct{}{}  // 获取槽位，满了会阻塞

    go func(t Task) {
        defer func() {
            wg.Done()
            <-ch  // 释放槽位
        }()
        t.Run()
    }(task)
}
wg.Wait()</code></pre>
      <p><strong>核心思想</strong>：channel 的缓冲区大小决定最大并发数</p>

      <h2>流式任务调度：零内存膨胀</h2>

      <h3>问题：预构建任务列表的内存开销</h3>
      <p>10 万端口 × 20 插件 = 200 万任务对象，每个对象 200 字节 = 400MB 内存</p>

      <h3>解决方案：流式生成任务</h3>
      <p>不预先构建任务列表，边生成边执行（<code>core/scanner.go:140</code>）：</p>
      <pre><code>// 流式执行，不预构建任务列表
for _, target := range targets {
    for _, pluginName := range pluginsToRun {
        if plugins.Exists(pluginName) {
            if strategy.IsPluginApplicableByName(pluginName, target.Host, target.Port, isCustomMode) {
                executeScanTask(pluginName, target, ch, wg)  // 立即执行
            }
        }
    }
}</code></pre>
      <p><strong>内存优化</strong>：同时只有 ThreadNum 个任务对象存在</p>

      <h2>插件系统集成</h2>

      <h3>统一注册表</h3>
      <p>所有插件自注册到全局注册表（<code>plugins/init.go:90</code>）：</p>
      <pre><code>var plugins = make(map[string]*PluginInfo)

func Register(name string, factory func() Plugin) {
    plugins[name] = &PluginInfo{
        factory: factory,
        ports:   []int{},
        types:   []string{"service"},
    }
}</code></pre>

      <h3>过滤器系统</h3>
      <p>策略通过过滤器类型选择插件：</p>
      <table>
        <tr><th>策略</th><th>过滤器</th><th>插件范围</th></tr>
        <tr><td>ServiceScanStrategy</td><td>FilterService</td><td>排除本地插件</td></tr>
        <tr><td>WebScanStrategy</td><td>FilterWeb</td><td>仅 Web 插件</td></tr>
        <tr><td>LocalScanStrategy</td><td>FilterLocal</td><td>仅本地插件</td></tr>
        <tr><td>AliveScanStrategy</td><td>FilterNone</td><td>无插件</td></tr>
      </table>

      <h2>错误处理：失败不中断</h2>

      <h3>Panic 捕获</h3>
      <p>每个任务都有 recover 保护（<code>core/scanner.go:186</code>）：</p>
      <pre><code>defer func() {
    if r := recover(); r != nil {
        LogError("插件 %s 扫描 %s:%d 时panic: %v", plugin, host, port, r)
    }
    wg.Done()
    <-ch
}()</code></pre>
      <p><strong>设计原则</strong>：单个插件崩溃不影响其他 199 万个任务</p>

      <h2>设计权衡</h2>

      <h3>不是流水线架构的原因</h3>
      <ul>
        <li>✅ 策略模式更灵活：不同场景差异太大，统一流水线会充满 if/else</li>
        <li>✅ Web 扫描不需要端口扫描，本地扫描不需要网络通信</li>
        <li>✅ 代码更清晰：每个策略独立实现自己的逻辑</li>
        <li>❌ 缺点：策略间无法复用流水线代码</li>
      </ul>

      <h3>用 Channel 而不是 Worker 池的原因</h3>
      <ul>
        <li>✅ Channel 是 Go 的原生并发原语，无需第三方库</li>
        <li>✅ 代码简洁：10 行实现并发控制</li>
        <li>✅ 性能足够：channel 的开销可以忽略</li>
        <li>❌ 缺点：无法动态调整并发数</li>
      </ul>

      <h3>流式调度而不是预构建的原因</h3>
      <ul>
        <li>✅ 内存占用从 O(n*m) 降到 O(ThreadNum)</li>
        <li>✅ 大规模扫描不会 OOM</li>
        <li>❌ 缺点：无法预先知道总任务数（进度条需要预计算）</li>
      </ul>