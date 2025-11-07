<h2>设计目标</h2>
      <p>存活探测通过ICMP快速过滤不可达主机，减少无效扫描：</p>
      <ul>
        <li><strong>快速</strong>：3-6秒内完成256个IP探测</li>
        <li><strong>自适应</strong>：根据权限自动选择最佳方式</li>
        <li><strong>零配置</strong>：无需用户手动选择探测方法</li>
        <li><strong>降级机制</strong>：权限不足时自动切换</li>
      </ul>

      <h2>三层降级架构</h2>

      <h3>自动降级链</h3>
      <p>fscan按优先级尝试三种ICMP实现（<code>core/icmp.go:102</code>）：</p>
      <table>
        <tr><th>方式</th><th>函数</th><th>权限需求</th><th>性能</th></tr>
        <tr><td>监听模式ICMP</td><td>RunIcmp1</td><td>监听ICMP套接字</td><td>最快</td></tr>
        <tr><td>无监听ICMP</td><td>RunIcmp2</td><td>发送ICMP包</td><td>中等</td></tr>
        <tr><td>系统ping命令</td><td>RunPing</td><td>无需权限</td><td>最慢</td></tr>
      </table>

      <h3>降级逻辑</h3>
      <pre><code>func probeWithICMP(hosts []string, ch chan string) {
    // 1. 尝试监听ICMP
    conn, err := icmp.ListenPacket("ip4:icmp", "0.0.0.0")
    if err == nil {
        RunIcmp1(hosts, conn, ch)  // 最优方案
        return
    }

    // 2. 尝试无监听ICMP
    conn2, err := net.DialTimeout("ip4:icmp", "127.0.0.1", 3*time.Second)
    if err == nil {
        RunIcmp2(hosts, ch)  // 降级方案
        return
    }

    // 3. 降级到系统ping
    RunPing(hosts, ch)  // 最终方案
}</code></pre>
      <p><strong>设计理念</strong>：尽力使用高性能ICMP，实在不行就用ping兜底</p>

      <h2>方式1：监听模式ICMP（最优）</h2>

      <h3>核心优势</h3>
      <p>单一接收器 + 批量发送器，性能最佳：</p>
      <ul>
        <li>一次监听所有响应，避免重复创建连接</li>
        <li>批量发送ICMP，无等待</li>
        <li>256个IP仅需3秒（包含超时等待）</li>
      </ul>

      <h3>架构设计（<code>core/icmp.go:169</code>）</h3>
      <pre><code>func RunIcmp1(hosts []string, conn *icmp.PacketConn, ch chan string) {
    // 启动单一接收器协程
    go func() {
        for {
            msg := make([]byte, 100)
            _, sourceIP, _ := conn.ReadFrom(msg)  // 阻塞等待
            ch <- sourceIP.String()  // 发送到结果channel
        }
    }()

    // 批量发送ICMP Echo Request
    for _, host := range hosts {
        dst, _ := net.ResolveIPAddr("ip", host)
        icmpPacket := makeICMPEchoRequest(host)
        conn.WriteTo(icmpPacket, dst)  // 立即发送，不等待响应
    }

    // 等待3-6秒收集响应
    time.Sleep(wait)
}</code></pre>

      <h3>超时设置（智能）</h3>
      <p>根据主机数量动态调整（<code>core/icmp.go:236</code>）：</p>
      <ul>
        <li>≤ 256 主机：3秒超时</li>
        <li>> 256 主机：6秒超时</li>
      </ul>

      <h2>方式2：无监听ICMP（降级）</h2>

      <h3>使用场景</h3>
      <p>无法监听ICMP套接字，但可以发送ICMP包：</p>
      <ul>
        <li>Linux非root用户（无CAP_NET_RAW）</li>
        <li>容器环境受限</li>
      </ul>

      <h3>实现方式（<code>core/icmp.go:254</code>）</h3>
      <pre><code>func RunIcmp2(hosts []string, ch chan string) {
    limiter := make(chan struct{}, 1000)  // 并发限制

    for _, host := range hosts {
        go func(h string) {
            limiter <- struct{}{}
            defer func() { <-limiter }()

            // 每个主机单独连接
            conn, err := net.DialTimeout("ip4:icmp", h, 3*time.Second)
            if err == nil {
                ch <- h  // 连接成功即为存活
                conn.Close()
            }
        }(host)
    }
}</code></pre>
      <p><strong>权衡</strong>：为每个主机创建连接，比RunIcmp1慢，但比ping快</p>

      <h2>方式3：系统ping命令（兜底）</h2>

      <h3>使用场景</h3>
      <p>前两种方式都失败时的最后选择：</p>
      <ul>
        <li>Windows非管理员用户</li>
        <li>严格的SELinux/AppArmor策略</li>
      </ul>

      <h3>跨平台实现（<code>core/icmp.go:322</code>）</h3>
      <pre><code>func RunPing(hosts []string, ch chan string) {
    var pingCmd string
    if runtime.GOOS == "windows" {
        pingCmd = "ping -n 1 -w 1000 %s"
    } else {
        pingCmd = "ping -c 1 -W 1 %s"
    }

    for _, host := range hosts {
        go func(h string) {
            cmd := exec.Command("sh", "-c", fmt.Sprintf(pingCmd, h))
            err := cmd.Run()
            if err == nil {
                ch <- h
            }
        }(host)
    }
}</code></pre>
      <p><strong>劣势</strong>：依赖外部命令，无法提取RTT/TTL信息</p>

      <h2>ICMP包构造</h2>

      <h3>使用golang.org/x/net/icmp</h3>
      <p>不直接用syscall，而是用官方扩展库：</p>
      <pre><code>import "golang.org/x/net/icmp"

func makeICMPEchoRequest(host string) []byte {
    msg := icmp.Message{
        Type: ipv4.ICMPTypeEcho,  // Echo Request
        Code: 0,
        Body: &icmp.Echo{
            ID:   os.Getpid() & 0xffff,
            Seq:  1,
            Data: []byte("FSCAN"),
        },
    }
    msgBytes, _ := msg.Marshal(nil)
    return msgBytes
}</code></pre>

      <h2>并发与去重</h2>

      <h3>结果收集器（<code>core/icmp.go:65</code>）</h3>
      <p>单一协程处理所有存活主机：</p>
      <pre><code>func handleAliveHosts(ch chan string, hosts []string, aliveHosts *[]string) {
    existHosts := make(map[string]struct{})  // 去重

    for ip := range ch {
        if _, ok := existHosts[ip]; !ok && IsContain(hosts, ip) {
            existHosts[ip] = struct{}{}
            *aliveHosts = append(*aliveHosts, ip)

            // 输出到控制台和文件
            if !Silent {
                LogInfo("%s 存活", ip)
            }
        }
    }
}</code></pre>

      <h3>用map去重的原因</h3>
      <ul>
        <li>ICMP响应可能重复（网络重传）</li>
        <li>防止同一IP被多次添加到结果列表</li>
      </ul>

      <h2>统计与输出</h2>

      <h3>AliveScanStrategy统计（<code>core/alive_scanner.go:28</code>）</h3>
      <p>存活探测策略提供详细统计：</p>
      <pre><code>type AliveStats struct {
    TotalHosts    int           // 总主机数
    AliveHosts    int           // 存活数
    DeadHosts     int           // 死亡数
    ScanDuration  time.Duration // 耗时
    SuccessRate   float64       // 成功率
    AliveHostList []string      // 存活列表
}</code></pre>

      <h3>输出示例</h3>
      <pre><code>=============================================================
存活探测结果摘要
总主机数: 256
存活主机: 42
死亡主机: 214
成功率: 16.41%
扫描耗时: 3.2s

存活主机列表:
  [1] 192.168.1.1
  [2] 192.168.1.10
  ...
=============================================================</code></pre>

      <h2>设计权衡</h2>

      <h3>不直接用ping命令的原因</h3>
      <ul>
        <li>✅ 自实现ICMP比调用ping快5-10倍</li>
        <li>✅ 精确控制超时和并发数</li>
        <li>✅ 跨平台一致性（ping参数各异）</li>
        <li>❌ 缺点：需要处理权限降级逻辑</li>
      </ul>

      <h3>没有TCP Ping的原因</h3>
      <ul>
        <li>❌ TCP三次握手比ICMP慢10倍+</li>
        <li>❌ 增加代码复杂度</li>
        <li>✅ 存活探测失败时，后续端口扫描会自然发现存活主机</li>
      </ul>

      <h3>默认启用存活探测的原因</h3>
      <ul>
        <li>✅ 过滤80%+不可达主机，节省大量时间</li>
        <li>✅ /16网段（65536 IP）无存活探测几乎不可用</li>
        <li>❌ 缺点：漏掉ICMP被过滤的主机</li>
        <li>✅ 提供<code>-noping</code>禁用，适配特殊场景</li>
      </ul>