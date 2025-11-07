<h2>核心设计</h2>
      <p>本地扫描是独立的插件集，用于已获权限主机的信息收集和后渗透（<code>core/local_scanner.go</code> + <code>plugins/local/</code>）：</p>
      <ul>
        <li><strong>独立插件</strong>：每个功能一个独立插件</li>
        <li><strong>明确调用</strong>：必须通过<code>-local</code>参数指定插件名</li>
        <li><strong>可选编译</strong>：使用build tags控制是否编译</li>
      </ul>

      <h2>插件分类</h2>

      <h3>信息收集类（<code>plugins/local/</code>）</h3>
      <table>
        <tr><th>插件</th><th>功能</th><th>用法</th></tr>
        <tr><td>systeminfo</td><td>系统信息收集</td><td>-local systeminfo</td></tr>
        <tr><td>envinfo</td><td>环境变量收集</td><td>-local envinfo</td></tr>
        <tr><td>fileinfo</td><td>文件信息收集</td><td>-local fileinfo</td></tr>
        <tr><td>avdetect</td><td>AV/EDR检测</td><td>-local avdetect</td></tr>
        <tr><td>dcinfo</td><td>域控信息收集</td><td>-local dcinfo</td></tr>
      </table>

      <h3>权限维持类</h3>
      <table>
        <tr><th>插件</th><th>平台</th><th>方法</th></tr>
        <tr><td>winregistry</td><td>Windows</td><td>注册表启动项</td></tr>
        <tr><td>winschtask</td><td>Windows</td><td>计划任务</td></tr>
        <tr><td>winservice</td><td>Windows</td><td>Windows服务</td></tr>
        <tr><td>winstartup</td><td>Windows</td><td>启动文件夹</td></tr>
        <tr><td>winwmi</td><td>Windows</td><td>WMI事件</td></tr>
        <tr><td>crontask</td><td>Linux</td><td>Cron任务</td></tr>
        <tr><td>systemdservice</td><td>Linux</td><td>Systemd服务</td></tr>
        <tr><td>ldpreload</td><td>Linux</td><td>LD_PRELOAD劫持</td></tr>
        <tr><td>shellenv</td><td>Linux</td><td>Shell配置文件</td></tr>
      </table>

      <h3>攻击辅助类</h3>
      <table>
        <tr><th>插件</th><th>功能</th></tr>
        <tr><td>reverseshell</td><td>反向Shell</td></tr>
        <tr><td>forwardshell</td><td>正向Shell</td></tr>
        <tr><td>socks5proxy</td><td>SOCKS5代理</td></tr>
        <tr><td>keylogger</td><td>键盘记录</td></tr>
        <tr><td>minidump</td><td>进程内存dump</td></tr>
        <tr><td>downloader</td><td>文件下载</td></tr>
        <tr><td>cleaner</td><td>痕迹清理</td></tr>
      </table>

      <h2>执行流程（<code>core/local_scanner.go:44</code>）</h2>

      <h3>严格的插件验证</h3>
      <pre><code>func (s *LocalScanStrategy) Execute(info common.HostInfo, ch chan struct{}, wg *sync.WaitGroup) {
    // 验证本地插件是否存在
    if common.LocalPlugin != "" {
        if !plugins.Exists(common.LocalPlugin) {
            common.LogBase(fmt.Sprintf("错误: 本地插件 '%s' 不存在或在当前平台不可用", common.LocalPlugin))
            return
        }
    }

    // 执行指定的本地插件
    ExecuteScanTasks(targets, s, ch, wg)
}</code></pre>

      <h3>为什么必须显式指定插件？</h3>
      <ul>
        <li>避免误触发攻击性功能（不能自动执行keylogger）</li>
        <li>用户明确知道在做什么</li>
        <li>符合安全测试规范（明确授权范围）</li>
      </ul>

      <h2>示例：systeminfo插件（<code>plugins/local/systeminfo.go</code>）</h2>

      <h3>简单直接的实现</h3>
      <pre><code>func (p *SystemInfoPlugin) Scan(ctx context.Context, info *common.HostInfo) *ScanResult {
    var output strings.Builder

    // 基本系统信息
    output.WriteString(fmt.Sprintf("操作系统: %s\
", runtime.GOOS))
    output.WriteString(fmt.Sprintf("架构: %s\
", runtime.GOARCH))
    output.WriteString(fmt.Sprintf("CPU核心数: %d\
", runtime.NumCPU()))

    // 主机名
    if hostname, err := os.Hostname(); err == nil {
        output.WriteString(fmt.Sprintf("主机名: %s\
", hostname))
    }

    // 当前用户
    if currentUser, err := user.Current(); err == nil {
        output.WriteString(fmt.Sprintf("当前用户: %s\
", currentUser.Username))
    }

    return &ScanResult{Success: true, Output: output.String()}
}</code></pre>

      <h3>跨平台支持：运行时适配</h3>
      <p>不用复杂的条件编译，让Go的标准库处理平台差异：</p>
      <ul>
        <li><code>runtime.GOOS</code> - 自动识别操作系统</li>
        <li><code>os.Hostname()</code> - 跨平台获取主机名</li>
        <li><code>user.Current()</code> - 跨平台获取用户信息</li>
      </ul>

      <h2>示例：avdetect插件（<code>plugins/local/avdetect.go</code>）</h2>

      <h3>embed.FS嵌入AV数据库</h3>
      <pre><code>//go:embed auto.json
var avDatabase []byte

type AVProduct struct {
    Processes []string `json:"processes"`  // 特征进程列表
    URL       string   `json:"url"`        // 产品URL
}

func NewAVDetectPlugin() *AVDetectPlugin {
    plugin := &AVDetectPlugin{
        avProducts: make(map[string]AVProduct),
    }

    // 加载嵌入的JSON数据库
    json.Unmarshal(avDatabase, &plugin.avProducts)
    return plugin
}</code></pre>

      <h3>进程匹配检测</h3>
      <pre><code>func (p *AVDetectPlugin) Scan(ctx context.Context, info *common.HostInfo) *ScanResult {
    // 获取运行进程
    processes := p.getRunningProcesses()

    // 检测AV产品 - 使用JSON数据库
    for avName, avProduct := range p.avProducts {
        for _, avProcess := range avProduct.Processes {
            for _, runningProcess := range processes {
                if strings.Contains(runningProcess, avProcess) {
                    detectedAVs = append(detectedAVs, avName)
                }
            }
        }
    }
}</code></pre>

      <h2>Build Tags：可选编译</h2>

      <h3>问题：为什么本地插件默认不编译？</h3>
      <ul>
        <li>包含攻击性功能（keylogger, reverseshell）</li>
        <li>容易被杀软标记为恶意软件</li>
        <li>增加二进制体积</li>
        <li>大多数扫描场景不需要</li>
      </ul>

      <h3>解决方案：Build Tags（<code>plugins/local/*.go:1</code>）</h3>
      <pre><code>//go:build plugin_systeminfo || !plugin_selective</code></pre>

      <h3>编译选项</h3>
      <table>
        <tr><th>需求</th><th>命令</th><th>结果</th></tr>
        <tr><td>默认编译</td><td>go build</td><td>包含所有本地插件</td></tr>
        <tr><td>排除本地插件</td><td>go build -tags plugin_selective</td><td>不包含本地插件</td></tr>
        <tr><td>仅systeminfo</td><td>go build -tags "plugin_selective,plugin_systeminfo"</td><td>仅systeminfo</td></tr>
      </table>

      <h2>设计权衡</h2>

      <h3>为什么不自动执行所有本地插件？</h3>
      <ul>
        <li>❌ 安全风险：keylogger等插件需要明确授权</li>
        <li>❌ 合规问题：自动执行攻击性功能违反安全测试规范</li>
        <li>❌ 实用主义：大多数场景只需要特定功能</li>
      </ul>

      <h3>为什么用独立插件而不是单个大插件？</h3>
      <ul>
        <li>✅ 灵活性：用户选择需要的功能</li>
        <li>✅ 安全性：减少意外执行攻击性功能的风险</li>
        <li>✅ 可维护性：每个插件代码独立，易于测试</li>
      </ul>