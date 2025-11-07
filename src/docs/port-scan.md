<h2>设计目标</h2>
      <p>端口扫描在速度和稳定性之间取得平衡：</p>
      <ul>
        <li><strong>稳定性优先</strong>：使用标准TCP连接，兼容性最好</li>
        <li><strong>资源感知</strong>：智能处理连接耗尽问题</li>
        <li><strong>集成服务识别</strong>：扫描即识别，无需二次连接</li>
        <li><strong>零特权</strong>：普通用户即可运行</li>
      </ul>

      <h2>扫描方法：TCP Connect</h2>

      <h3>为什么只用Connect扫描？</h3>
      <p>fscan只实现TCP Connect扫描，不使用SYN扫描：</p>
      <table>
        <tr><th>特性</th><th>Connect扫描</th><th>SYN扫描</th></tr>
        <tr><td>权限需求</td><td>普通用户</td><td>需要root/管理员</td></tr>
        <tr><td>实现复杂度</td><td>调用系统connect()</td><td>需要原始套接字</td></tr>
        <tr><td>兼容性</td><td>全平台</td><td>需处理平台差异</td></tr>
        <tr><td>集成服务识别</td><td>连接已建立，直接识别</td><td>需二次连接</td></tr>
      </table>

      <h3>实现方式（<code>core/port_scan.go:210</code>）</h3>
      <pre><code>func scanSinglePort(host string, port int, timeout time.Duration) error {
    // 使用标准TCP连接
    conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", host, port), timeout)
    if err != nil {
        return err  // 端口关闭或超时
    }
    defer conn.Close()

    // 端口开放，立即进行服务识别
    serviceInfo := SmartIdentify(conn)

    return nil
}</code></pre>

      <h2>并发控制：Semaphore模式</h2>

      <h3>使用golang.org/x/sync/semaphore</h3>
      <p>不使用简单channel，而用加权信号量（<code>core/port_scan.go:54</code>）：</p>
      <pre><code>import "golang.org/x/sync/semaphore"

sem := semaphore.NewWeighted(int64(ThreadNum))  // 默认600
g, ctx := errgroup.WithContext(context.Background())

for _, host := range hosts {
    for _, port := range ports {
        sem.Acquire(ctx, 1)  // 获取信号量

        g.Go(func() error {
            defer sem.Release(1)  // 释放信号量
            return scanSinglePort(host, port, timeout)
        })
    }
}

g.Wait()  // 等待所有goroutine完成</code></pre>

      <h3>为什么用semaphore而非channel？</h3>
      <ul>
        <li>✅ 支持加权获取（未来可扩展）</li>
        <li>✅ 与errgroup集成，统一错误处理</li>
        <li>✅ 支持context取消</li>
      </ul>

      <h2>资源耗尽智能重试</h2>

      <h3>问题：高并发导致连接失败</h3>
      <p>扫描1万端口 × 600并发 = 可能耗尽文件描述符：</p>
      <ul>
        <li>"too many open files"</li>
        <li>"cannot assign requested address"（本地端口耗尽）</li>
        <li>"no buffer space available"</li>
      </ul>

      <h3>解决方案：智能重试（<code>core/port_scan.go:113</code>）</h3>
      <pre><code>func connectWithRetry(addr string, timeout time.Duration, maxRetries int) (net.Conn, error) {
    for attempt := 0; attempt < 3; attempt++ {
        conn, err := net.DialTimeout("tcp", addr, timeout)
        if err == nil {
            return conn, nil
        }

        // 只对资源耗尽错误重试，端口关闭直接返回
        if !isResourceExhaustedError(err) {
            return nil, err
        }

        // 指数退避：50ms → 150ms
        time.Sleep(time.Duration(50*(attempt+1)) * time.Millisecond)
    }
    return nil, lastErr
}</code></pre>

      <h3>资源耗尽检测（<code>core/port_scan.go:144</code>）</h3>
      <pre><code>func isResourceExhaustedError(err error) bool {
    errStr := err.Error()
    patterns := []string{
        "too many open files",
        "no buffer space available",
        "cannot assign requested address",
    }
    for _, p := range patterns {
        if strings.Contains(errStr, p) {
            return true
        }
    }
    return false
}</code></pre>
      <p><strong>设计理念</strong>：区分"端口关闭"和"资源不足"，只重试后者</p>

      <h2>集成服务识别</h2>

      <h3>扫描即识别（<code>core/port_scan.go:233</code>）</h3>
      <p>连接建立后立即识别服务，避免二次连接：</p>
      <pre><code>conn, _ := net.DialTimeout("tcp", addr, timeout)
defer conn.Close()

// 连接已建立，复用它进行服务识别
serviceInfo := SmartIdentify(host, port, conn, timeout)

if serviceInfo.Name != "unknown" {
    LogInfo("%s [%s]", addr, serviceInfo.Name)
}

// 智能判断是否为Web服务
if IsWebServiceByFingerprint(serviceInfo) {
    MarkAsWebService(host, port)  // 后续自动调用WebTitle/WebPOC
}</code></pre>

      <h3>为什么集成？</h3>
      <ul>
        <li>✅ 减少50%网络请求（不需要二次连接）</li>
        <li>✅ 降低被检测概率</li>
        <li>✅ 加快扫描速度</li>
      </ul>

      <h2>结果存储：sync.Map</h2>

      <h3>为什么用sync.Map？</h3>
      <p>存储开放端口列表（<code>core/port_scan.go:56</code>）：</p>
      <pre><code>var aliveMap sync.Map

// 并发写入（无需加锁）
aliveMap.Store(addr, struct{}{})

// 收集结果
var aliveAddrs []string
aliveMap.Range(func(key, _ interface{}) bool {
    aliveAddrs = append(aliveAddrs, key.(string))
    return true
})</code></pre>
      <p><strong>优势</strong>：</p>
      <ul>
        <li>内置并发安全，无需手动加锁</li>
        <li>读多写少场景性能优于Mutex+Map</li>
        <li>支持Range遍历</li>
      </ul>

      <h2>进度条集成</h2>

      <h3>实时进度（<code>core/port_scan.go:45</code>）</h3>
      <pre><code>// 预计算总任务数
totalTasks := len(hosts) * len(ports)
common.InitProgressBar(int64(totalTasks), "端口扫描中（600线程）")

// 每完成一个端口
defer func() {
    common.UpdateProgressBar(1)
}()

// 扫描完成
common.FinishProgressBar()</code></pre>

      <h2>设计权衡</h2>

      <h3>为什么不用SYN扫描？</h3>
      <ul>
        <li>✅ Connect扫描无需权限，开箱即用</li>
        <li>✅ 连接已建立，服务识别无需二次连接</li>
        <li>✅ 代码简单，跨平台一致</li>
        <li>❌ 缺点：速度比SYN慢（但集成服务识别后总体更快）</li>
        <li>❌ 缺点：会在目标日志留下记录</li>
      </ul>

      <h3>为什么用semaphore而非channel？</h3>
      <ul>
        <li>✅ 与errgroup天然集成</li>
        <li>✅ 支持context取消</li>
        <li>✅ 代码更清晰</li>
        <li>❌ 缺点：需要额外依赖golang.org/x/sync</li>
      </ul>

      <h3>为什么智能重试而非降低并发？</h3>
      <ul>
        <li>✅ 大部分端口不会耗尽资源，降低并发浪费性能</li>
        <li>✅ 仅对真正失败的连接重试，精准应对</li>
        <li>✅ 指数退避避免反复失败</li>
        <li>❌ 缺点：增加少量代码复杂度</li>
      </ul>