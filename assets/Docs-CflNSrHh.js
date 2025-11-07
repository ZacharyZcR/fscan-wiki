import{_,p as C,c as T,a,e as n,b as t,w as r,u as o,k as p,o as h,d as P,f as b,g,h as u,F as S,r as y,n as v,I as x,t as d,s as I,A as M}from"./index-C6HQbrr5.js";const w=`<h2>设计目标</h2>
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
      </ul>`,R=`<h2>核心设计：全局变量</h2>
      <p>fscan使用最简单的配置方式：直接的全局变量（<code>common/globals.go</code>）：</p>
      <ul>
        <li><strong>无Config结构体</strong>：没有统一的配置对象</li>
        <li><strong>直接全局变量</strong>：每个配置项独立的var声明</li>
        <li><strong>flag包解析</strong>：使用Go标准库flag解析命令行</li>
        <li><strong>无配置文件</strong>：不支持YAML/JSON配置文件</li>
      </ul>

      <h2>配置变量分组（<code>common/globals.go</code>）</h2>

      <h3>核心扫描配置</h3>
      <pre><code>var (
    ScanMode        string = "all"     // 扫描模式
    ThreadNum       int    = 600       // 主线程数
    ModuleThreadNum int    = 10        // 模块线程数
    Timeout         int64  = 3         // 超时时间
    DisablePing     bool   = false     // 禁用ping
    LocalMode       bool   = false     // 本地模式
    LocalPlugin     string             // 本地插件选择
    AliveOnly       bool               // 仅存活检测
    DisableBrute    bool               // 禁用暴力破解
    MaxRetries      int    = 3         // 最大重试次数
)</code></pre>

      <h3>认证相关配置</h3>
      <pre><code>var (
    Username      string                  // 用户名
    Password      string                  // 密码
    Domain        string                  // 域
    Userdict      map[string][]string     // 用户字典
    Passwords     []string                // 密码列表
    UserPassPairs []config.CredentialPair // 用户密码对
)</code></pre>

      <h3>网络配置</h3>
      <pre><code>var (
    HttpProxy       string      // HTTP代理
    Socks5Proxy     string      // SOCKS5代理
    WebTimeout      int64  = 5  // Web超时时间
    MaxRedirects    int    = 10 // HTTP最大重定向次数
)</code></pre>

      <h2>命令行解析（<code>common/flag.go</code>）</h2>

      <h3>使用Go标准库flag</h3>
      <pre><code>func Flag(Info *HostInfo) {
    // 目标配置
    flag.StringVar(&Info.Host, "h", "", "目标IP")
    flag.StringVar(&HostsFile, "hf", "", "主机文件")

    // 扫描配置
    flag.IntVar(&ThreadNum, "t", 600, "线程数")
    flag.Int64Var(&Timeout, "timeout", 3, "超时时间")

    // 认证配置
    flag.StringVar(&Username, "user", "", "用户名")
    flag.StringVar(&Password, "pwd", "", "密码")

    flag.Parse()
}</code></pre>

      <h3>用flag而不是cobra的原因</h3>
      <ul>
        <li>✅ Go标准库，零依赖</li>
        <li>✅ 足够简单，满足需求</li>
        <li>✅ 减小二进制体积</li>
        <li>❌ 缺点：不支持子命令</li>
      </ul>

      <h2>默认值常量</h2>

      <h3>编译期常量（<code>common/globals.go:36</code>）</h3>
      <pre><code>const (
    DefaultThreadNum = 600    // 默认线程数
    DefaultTimeout   = 3      // 默认超时时间(秒)
    DefaultScanMode  = "all"  // 默认扫描模式
    DefaultLanguage  = "zh"   // 默认语言
    DefaultLogLevel  = "base" // 默认日志级别
)</code></pre>

      <h3>变量初始化</h3>
      <pre><code>var (
    ThreadNum int = DefaultThreadNum
    Timeout   int64 = DefaultTimeout
    ScanMode  string = DefaultScanMode
)</code></pre>

      <h2>设计权衡</h2>

      <h3>不用Config结构体的原因</h3>
      <ul>
        <li>✅ 更简单：直接访问全局变量 <code>common.ThreadNum</code></li>
        <li>✅ 无需传递：避免到处传Config指针</li>
        <li>✅ 更直接：flag直接绑定到变量</li>
        <li>❌ 缺点：难以单元测试（全局状态）</li>
        <li>❌ 缺点：无法运行时切换配置</li>
      </ul>

      <h3>不支持配置文件的原因</h3>
      <ul>
        <li>fscan是单次扫描工具，不是守护进程</li>
        <li>命令行参数已经足够灵活</li>
        <li>减少依赖（不需要yaml/toml解析库）</li>
        <li>如果需要保存配置，用shell alias或脚本</li>
      </ul>`,O=`<h2>编译相关</h2>
<h3>Q: 如何减小可执行文件体积？</h3>
<p>A: 使用选择性编译，只包含需要的插件：</p>
<pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql" -ldflags "-s -w"</code></pre>

<h3>Q: 编译时出现 "undefined" 错误？</h3>
<p>A: 检查是否使用了 <code>plugin_selective</code> 但没有指定需要的插件标签。</p>

<h2>使用相关</h2>
<h3>Q: 扫描速度慢怎么办？</h3>
<p>A: 可以通过以下方式优化：</p>
<ul>
  <li>增加线程数: <code>-t 200</code></li>
  <li>减少超时时间: <code>-time 2</code></li>
  <li>跳过不需要的扫描: <code>-nopoc</code></li>
</ul>

<h3>Q: 如何只扫描特定服务？</h3>
<p>A: 使用 <code>-m</code> 参数指定模块：</p>
<pre><code>fscan -h 192.168.1.0/24 -m ssh,mysql,redis</code></pre>

<h3>Q: 如何避免被防火墙拦截？</h3>
<p>A: 可以：</p>
<ul>
  <li>降低扫描速度: <code>-t 10</code></li>
  <li>增加延迟: <code>-time 5</code></li>
  <li>使用代理: <code>-proxy socks5://127.0.0.1:1080</code></li>
</ul>

<h2>插件开发</h2>
<h3>Q: 如何添加自定义插件？</h3>
<p>A: 参考<strong>插件系统</strong>文档，按照标准结构创建插件文件。</p>

<h3>Q: 插件如何获取上下文信息？</h3>
<p>A: 通过 <code>common.HostInfo</code> 结构体传递目标信息。</p>

<h2>更多问题？</h2>
<p>访问 <a href="https://github.com/shadow1ng/fscan/issues" target="_blank">GitHub Issues</a> 提交问题或查看已有讨论。</p>
`,k=`<h2>核心实现：正则+MD5</h2>
      <p>Web指纹识别（<code>webscan/fingerprint_scanner.go</code>），使用简单直接的规则匹配：</p>
      <ul>
        <li><strong>正则匹配</strong> - 匹配Header和Body内容</li>
        <li><strong>MD5指纹</strong> - 匹配响应体MD5哈希</li>
      </ul>

      <h2>InfoCheck函数（<code>fingerprint_scanner.go:19</code>）</h2>

      <pre><code>func InfoCheck(Url string, CheckData *[]CheckDatas) []string {
    var matchedInfos []string

    for _, data := range *CheckData {
        // 正则规则匹配
        matchedInfos = append(matchedInfos, matchByRegex(data)...)

        // MD5指纹匹配
        if md5Name := matchByMd5(data.Body); md5Name != "" {
            matchedInfos = append(matchedInfos, md5Name)
        }
    }

    // 去重
    matchedInfos = removeDuplicateElement(matchedInfos)

    return matchedInfos
}</code></pre>

      <h2>正则匹配（<code>fingerprint_scanner.go:46</code>）</h2>

      <h3>指纹规则结构</h3>
      <pre><code>type RuleData struct {
    Name  string  // 指纹名称
    Type  string  // "code"（Body）或 "header"
    Rule  string  // 正则表达式
}

// 示例指纹规则
{
    Name: "WordPress",
    Type: "code",
    Rule: "wp-content"
}</code></pre>

      <h3>匹配逻辑</h3>
      <pre><code>func matchByRegex(data CheckDatas) []string {
    var matched []string

    for _, rule := range fingerprint.RuleDatas {
        var isMatch bool
        switch rule.Type {
        case "code":
            isMatch, _ = regexp.MatchString(rule.Rule, string(data.Body))
        default:
            isMatch, _ = regexp.MatchString(rule.Rule, data.Headers)
        }

        if isMatch {
            matched = append(matched, rule.Name)
        }
    }
    return matched
}</code></pre>

      <h2>MD5指纹（<code>fingerprint_scanner.go:75</code>）</h2>

      <h3>用MD5的原因</h3>
      <pre><code>func matchByMd5(body []byte) string {
    contentMd5 := fmt.Sprintf("%x", md5.Sum(body))

    for _, md5Info := range fingerprint.Md5Datas {
        if contentMd5 == md5Info.Md5Str {
            return md5Info.Name
        }
    }
    return ""
}</code></pre>

      <ul>
        <li>✅ 快速匹配（哈希查表）</li>
        <li>✅ 唯一性高（整个Body的哈希）</li>
        <li>✅ 常用于静态资源指纹（如favicon）</li>
        <li>⚠️ MD5仅用于指纹识别，非加密用途</li>
      </ul>

      <h2>指纹库（<code>webscan/fingerprint/</code>）</h2>

      <pre><code>// RuleDatas - 正则规则数据库
var RuleDatas = []RuleData{
    {Name: "WordPress", Type: "code", Rule: "wp-content"},
    {Name: "Joomla", Type: "code", Rule: "/components/com_"},
    {Name: "Drupal", Type: "header", Rule: "X-Drupal-Cache"},
    // ...
}

// Md5Datas - MD5指纹数据库
var Md5Datas = []Md5Data{
    {Name: "Apache Tomcat", Md5Str: "4644f2d45601037b8423d45e13194c93"},
    // ...
}</code></pre>

      <h2>设计权衡</h2>

      <h3>不用加权匹配的原因</h3>
      <ul>
        <li>简单的规则匹配已经足够准确</li>
        <li>加权匹配增加复杂性但收益有限</li>
        <li>去重处理避免重复指纹</li>
      </ul>

      <h3>不用MurmurHash的原因</h3>
      <ul>
        <li>MD5已经满足指纹识别需求</li>
        <li>Go标准库自带MD5（crypto/md5）</li>
        <li>指纹库使用MD5，保持兼容</li>
      </ul>`,D=`<h2>核心设计：Manager单例</h2>
      <p>独立的i18n包（<code>common/i18n/</code>），提供运行时语言切换：</p>
      <ul>
        <li><strong>manager.go</strong> - 国际化管理器</li>
        <li><strong>init.go</strong> - 初始化和语言数据</li>
      </ul>

      <h2>Manager结构（<code>i18n/manager.go:36</code>）</h2>

      <pre><code>type Manager struct {
    mu               sync.RWMutex
    currentLanguage  string
    fallbackLanguage string
    messages         map[string]map[string]string  // lang -> key -> text
    enabled          bool
}

var globalManager = NewManager()

func GetText(key string) string {
    return globalManager.GetText(key)
}

func GetTextF(key string, args ...interface{}) string {
    text := globalManager.GetText(key)
    return fmt.Sprintf(text, args...)
}</code></pre>

      <h2>语言数据：Go代码硬编码</h2>

      <h3>不用JSON文件的原因</h3>
      <pre><code>// init.go 中直接定义
func init() {
    globalManager.RegisterMessages("zh", map[string]string{
        "scan_start": "开始扫描",
        "scan_complete": "扫描完成 %d/%d",
        "error_network": "网络错误: %v",
    })

    globalManager.RegisterMessages("en", map[string]string{
        "scan_start": "Start scanning",
        "scan_complete": "Scan complete %d/%d",
        "error_network": "Network error: %v",
    })
}</code></pre>

      <h3>优势</h3>
      <ul>
        <li>✅ 无需运行时读取文件</li>
        <li>✅ 编译期检查翻译键</li>
        <li>✅ 无embed开销</li>
        <li>✅ 单文件部署</li>
      </ul>

      <h2>语言切换（<code>i18n/manager.go:62</code>）</h2>

      <pre><code>func SetLanguage(lang string) {
    globalManager.SetLanguage(lang)
}

// 从命令行参数
if common.Language == "zh" {
    i18n.SetLanguage("zh")
} else {
    i18n.SetLanguage("en")
}</code></pre>

      <h3>回退机制</h3>
      <pre><code>func (m *Manager) GetText(key string) string {
    // 1. 尝试当前语言
    if text, ok := m.messages[m.currentLanguage][key]; ok {
        return text
    }

    // 2. 回退到fallback语言（英文）
    if text, ok := m.messages[m.fallbackLanguage][key]; ok {
        return text
    }

    // 3. 返回key本身
    return key
}</code></pre>

      <h2>使用示例</h2>

      <pre><code>// 简单文本
common.LogBase(i18n.GetText("scan_start"))

// 带参数的文本
common.LogInfo(i18n.GetTextF("scan_complete", completed, total))

// 错误信息
common.LogError(i18n.GetTextF("error_network", err))</code></pre>

      <h2>设计权衡</h2>

      <h3>默认中文的原因</h3>
      <pre><code>const (
    DefaultLanguage  = "zh"  // 默认中文
    FallbackLanguage = "en"  // 回退英文
)</code></pre>
      <ul>
        <li>fscan主要面向中文用户</li>
        <li>减少中文用户的配置成本</li>
        <li>英文用户可以通过<code>-lang en</code>切换</li>
      </ul>

      <h3>不支持复数和时间格式化的原因</h3>
      <ul>
        <li>fscan的文本很简单，不需要复杂的i18n特性</li>
        <li>fmt.Sprintf已经足够</li>
        <li>保持简单，避免引入复杂库</li>
      </ul>`,L=`<h2>核心设计</h2>
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

      <h3>必须显式指定插件的原因</h3>
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
    output.WriteString(fmt.Sprintf("操作系统: %s\\
", runtime.GOOS))
    output.WriteString(fmt.Sprintf("架构: %s\\
", runtime.GOARCH))
    output.WriteString(fmt.Sprintf("CPU核心数: %d\\
", runtime.NumCPU()))

    // 主机名
    if hostname, err := os.Hostname(); err == nil {
        output.WriteString(fmt.Sprintf("主机名: %s\\
", hostname))
    }

    // 当前用户
    if currentUser, err := user.Current(); err == nil {
        output.WriteString(fmt.Sprintf("当前用户: %s\\
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
    Processes []string \`json:"processes"\`  // 特征进程列表
    URL       string   \`json:"url"\`        // 产品URL
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

      <h3>本地插件默认不编译的原因</h3>
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

      <h3>不自动执行所有本地插件的原因</h3>
      <ul>
        <li>❌ 安全风险：keylogger等插件需要明确授权</li>
        <li>❌ 合规问题：自动执行攻击性功能违反安全测试规范</li>
        <li>❌ 实用主义：大多数场景只需要特定功能</li>
      </ul>

      <h3>用独立插件而不是单个大插件的原因</h3>
      <ul>
        <li>✅ 灵活性：用户选择需要的功能</li>
        <li>✅ 安全性：减少意外执行攻击性功能的风险</li>
        <li>✅ 可维护性：每个插件代码独立，易于测试</li>
      </ul>`,H=`<h2>核心设计：独立parsers包</h2>
      <p>完整的解析系统（<code>common/parsers/</code>），负责所有输入解析和验证：</p>
      <ul>
        <li><strong>target.go</strong> - 目标解析（IP/CIDR/域名）</li>
        <li><strong>network.go</strong> - 端口解析</li>
        <li><strong>credential.go</strong> - 凭据解析</li>
        <li><strong>file.go</strong> - 文件读取</li>
        <li><strong>validation.go</strong> - 输入验证</li>
      </ul>

      <h2>目标解析（<code>parsers/target.go</code>）</h2>

      <h3>TargetParser结构</h3>
      <pre><code>type TargetParser struct {
    fileReader *FileReader
    ipRegex    *regexp.Regexp
    portRegex  *regexp.Regexp
    urlRegex   *regexp.Regexp
    options    *TargetParserOptions
}

type TargetParserOptions struct {
    MaxTargets      int  // 最大目标数
    MaxPortRange    int  // 最大端口范围
    AllowPrivateIPs bool // 允许私网IP
    AllowLoopback   bool // 允许回环地址
    ValidateURLs    bool // 验证URL格式
    ResolveDomains  bool // 是否解析域名
}</code></pre>

      <h3>支持的输入格式</h3>
      <table>
        <tr><th>格式</th><th>示例</th><th>说明</th></tr>
        <tr><td>单个IP</td><td>192.168.1.1</td><td>单个IPv4地址</td></tr>
        <tr><td>CIDR</td><td>192.168.1.0/24</td><td>自动展开为IP列表</td></tr>
        <tr><td>IP范围</td><td>192.168.1.1-254</td><td>简写范围</td></tr>
        <tr><td>域名</td><td>example.com</td><td>DNS解析A记录</td></tr>
        <tr><td>文件</td><td>-hf targets.txt</td><td>每行一个目标</td></tr>
      </table>

      <h3>CIDR展开逻辑</h3>
      <pre><code>func (tp *TargetParser) expandCIDR(cidr string) ([]string, error) {
    ip, ipnet, err := net.ParseCIDR(cidr)
    if err != nil {
        return nil, err
    }

    var ips []string
    for ip := ip.Mask(ipnet.Mask); ipnet.Contains(ip); inc(ip) {
        ips = append(ips, ip.String())
    }

    // 排除网络地址和广播地址
    return ips[1:len(ips)-1], nil
}</code></pre>

      <h2>端口解析（<code>parsers/network.go</code>）</h2>

      <h3>ParsePort函数</h3>
      <pre><code>func ParsePort(ports string) []int {
    var portList []int

    for _, part := range strings.Split(ports, ",") {
        if strings.Contains(part, "-") {
            // 端口范围：8080-8090
            portList = append(portList, expandRange(part)...)
        } else {
            // 单个端口：80
            port, _ := strconv.Atoi(strings.TrimSpace(part))
            portList = append(portList, port)
        }
    }

    // 去重并排序
    return dedupAndSort(portList)
}</code></pre>

      <h3>端口范围限制</h3>
      <ul>
        <li>单个端口：1-65535</li>
        <li>范围展开：最多10000个端口（防止OOM）</li>
        <li>特殊值：<code>-</code>或<code>all</code>表示全端口扫描</li>
      </ul>

      <h2>凭据解析（<code>parsers/credential.go</code>）</h2>

      <h3>CredentialPair结构</h3>
      <pre><code>type CredentialPair struct {
    Username string
    Password string
}

func ParseCredentials(userFile, passFile, comboFile string) ([]CredentialPair, error) {
    if comboFile != "" {
        // 组合文件：user:pass格式
        return parseComboFile(comboFile)
    }

    // 笛卡尔积：users × passwords
    users := readLines(userFile)
    passwords := readLines(passFile)

    var pairs []CredentialPair
    for _, user := range users {
        for _, pass := range passwords {
            pairs = append(pairs, CredentialPair{user, pass})
        }
    }
    return pairs, nil
}</code></pre>

      <h3>分离精确对和笛卡尔积的原因</h3>
      <ul>
        <li>精确对（-upf）：用于已知凭据，避免无效尝试</li>
        <li>笛卡尔积（-userf + -pwdf）：用于暴力破解</li>
        <li>性能差异巨大：10用户×10密码 = 100次 vs 10次</li>
      </ul>

      <h2>文件解析（<code>parsers/file.go</code>）</h2>

      <h3>FileReader实现</h3>
      <pre><code>type FileReader struct {
    mu sync.RWMutex
}

func (fr *FileReader) ReadLines(path string) ([]string, error) {
    file, err := os.Open(path)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    var lines []string
    scanner := bufio.NewScanner(file)

    for scanner.Scan() {
        line := strings.TrimSpace(scanner.Text())

        // 跳过空行和注释
        if line == "" || strings.HasPrefix(line, "#") {
            continue
        }

        lines = append(lines, line)
    }

    return lines, scanner.Err()
}</code></pre>

      <h3>流式读取的优势</h3>
      <ul>
        <li>内存占用固定（bufio.Scanner默认64KB缓冲）</li>
        <li>支持超大文件（百万行目标文件）</li>
        <li>逐行处理，边读边解析</li>
      </ul>

      <h2>输入验证（<code>parsers/validation.go</code>）</h2>

      <h3>ValidateIP函数</h3>
      <pre><code>func ValidateIP(ipStr string) error {
    ip := net.ParseIP(ipStr)
    if ip == nil {
        return errors.New("invalid IP format")
    }

    // 排除保留地址
    if ip.IsUnspecified() || ip.IsMulticast() {
        return errors.New("reserved IP address")
    }

    // 可选：排除私网IP
    if !AllowPrivateIPs && ip.IsPrivate() {
        return errors.New("private IP not allowed")
    }

    return nil
}</code></pre>

      <h2>设计权衡</h2>

      <h3>单独的parsers包的原因</h3>
      <ul>
        <li>✅ 解析逻辑复杂，独立包便于测试</li>
        <li>✅ 可被其他模块复用（如Web界面）</li>
        <li>✅ 便于添加新格式支持</li>
      </ul>

      <h3>用预编译正则的原因</h3>
      <pre><code>var (
    CompiledIPv4Regex = regexp.MustCompile(\`^(\\d{1,3}\\.){3}\\d{1,3}$\`)
    CompiledPortRegex = regexp.MustCompile(\`^\\d+(-\\d+)?$\`)
    CompiledURLRegex  = regexp.MustCompile(\`^https?://\`)
)
</code></pre>
      <ul>
        <li>避免每次调用重新编译（性能提升10倍以上）</li>
        <li>编译失败在启动时发现（不在运行时）</li>
      </ul>`,N=`<h2>POC系统已在Web扫描中实现</h2>
      <p>POC检测功能是Web扫描模块的一部分（<code>webscan/</code>），详见"Web扫描"文档：</p>
      <ul>
        <li><strong>POC嵌入</strong>：embed.FS编译期嵌入YAML POC</li>
        <li><strong>指纹触发</strong>：基于服务指纹自动选择POC</li>
        <li><strong>并发执行</strong>：common.PocNum控制并发数</li>
      </ul>

      <h2>核心流程（<code>webscan/web_scan.go:74</code>）</h2>

      <pre><code>func WebScan(info *common.HostInfo) {
    // 初始化POC
    once.Do(initPocs)

    // 构建目标URL
    target, _ := buildTargetURL(info)

    // 根据扫描策略执行POC
    if len(info.Info) > 0 {
        // 基于指纹信息执行POC
        scanByFingerprints(ctx, target, info.Info)
    } else if common.Pocinfo.PocName != "" {
        // 基于指定POC名称执行
        executePOCs(ctx, config.PocInfo{Target: target, PocName: "shiro"})
    } else {
        // 执行所有POC
        executePOCs(ctx, config.PocInfo{Target: target})
    }
}</code></pre>

      <h2>POC加载（<code>webscan/web_scan.go:182</code>）</h2>

      <pre><code>//go:embed pocs
var pocsFS embed.FS

func initPocs() {
    allPocs = make([]*lib.Poc, 0, 256)

    if common.PocPath == "" {
        loadEmbeddedPocs()  // 内置POC
    } else {
        loadExternalPocs(common.PocPath)  // 外部POC目录
    }
}</code></pre>

      <h2>YAML POC格式</h2>

      <pre><code>name: Apache Shiro反序列化
rules:
  - method: GET
    path: /
    headers:
      Cookie: rememberMe=\\\${jndi:ldap://...}
    expression: response.status == 200</code></pre>

      <h2>POC执行（<code>webscan/web_scan.go:160</code>）</h2>

      <pre><code>func executePOCs(ctx context.Context, pocInfo config.PocInfo) {
    // 创建HTTP请求
    req, _ := createBaseRequest(ctx, pocInfo.Target)

    // 筛选POC
    matchedPocs := filterPocs(pocInfo.PocName)

    // 并发执行POC检测
    lib.CheckMultiPoc(req, matchedPocs, common.PocNum)
}</code></pre>

      <h2>设计权衡</h2>

      <h3>POC不是独立模块的原因</h3>
      <ul>
        <li>POC检测依赖HTTP客户端和指纹识别</li>
        <li>集成到Web扫描模块更自然</li>
        <li>避免模块间复杂依赖</li>
      </ul>

      <h3>用YAML不用Go代码的原因</h3>
      <ul>
        <li>✅ 非开发人员也能编写POC</li>
        <li>✅ 无需重新编译即可添加POC</li>
        <li>✅ 支持外部POC目录（-pocpath）</li>
        <li>✅ 社区共享POC更方便</li>
      </ul>`,W=`<h2>设计目标</h2>
      <p>端口扫描在速度和稳定性之间取得平衡：</p>
      <ul>
        <li><strong>稳定性优先</strong>：使用标准TCP连接，兼容性最好</li>
        <li><strong>资源感知</strong>：智能处理连接耗尽问题</li>
        <li><strong>集成服务识别</strong>：扫描即识别，无需二次连接</li>
        <li><strong>零特权</strong>：普通用户即可运行</li>
      </ul>

      <h2>扫描方法：TCP Connect</h2>

      <h3>只用Connect扫描的原因</h3>
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

      <h3>用semaphore而非channel的原因</h3>
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

      <h3>集成的原因</h3>
      <ul>
        <li>✅ 减少50%网络请求（不需要二次连接）</li>
        <li>✅ 降低被检测概率</li>
        <li>✅ 加快扫描速度</li>
      </ul>

      <h2>结果存储：sync.Map</h2>

      <h3>用sync.Map的原因</h3>
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

      <h3>不用SYN扫描的原因</h3>
      <ul>
        <li>✅ Connect扫描无需权限，开箱即用</li>
        <li>✅ 连接已建立，服务识别无需二次连接</li>
        <li>✅ 代码简单，跨平台一致</li>
        <li>❌ 缺点：速度比SYN慢（但集成服务识别后总体更快）</li>
        <li>❌ 缺点：会在目标日志留下记录</li>
      </ul>

      <h3>用semaphore而非channel的原因</h3>
      <ul>
        <li>✅ 与errgroup天然集成</li>
        <li>✅ 支持context取消</li>
        <li>✅ 代码更清晰</li>
        <li>❌ 缺点：需要额外依赖golang.org/x/sync</li>
      </ul>

      <h3>智能重试而非降低并发的原因</h3>
      <ul>
        <li>✅ 大部分端口不会耗尽资源，降低并发浪费性能</li>
        <li>✅ 仅对真正失败的连接重试，精准应对</li>
        <li>✅ 指数退避避免反复失败</li>
        <li>❌ 缺点：增加少量代码复杂度</li>
      </ul>`,A=`<h2>核心设计：ProxyManager</h2>
      <p>独立的代理管理包（<code>common/proxy/</code>），提供统一的代理抽象：</p>
      <ul>
        <li><strong>manager.go</strong> - 代理管理器</li>
        <li><strong>httpdialer.go</strong> - HTTP代理拨号器</li>
        <li><strong>tlsdialer.go</strong> - TLS代理拨号器</li>
        <li><strong>types.go</strong> - 类型定义</li>
      </ul>

      <h2>ProxyManager接口（<code>proxy/manager.go:28</code>）</h2>

      <pre><code>type ProxyManager interface {
    GetDialer() (Dialer, error)
    GetTLSDialer() (TLSDialer, error)
    UpdateConfig(config *ProxyConfig) error
    Close() error
}

func NewProxyManager(config *ProxyConfig) ProxyManager {
    return &manager{
        config: config,
        dialerCache: make(map[string]Dialer),
    }
}</code></pre>

      <h2>支持的代理类型</h2>

      <table>
        <tr><th>类型</th><th>用途</th><th>实现</th></tr>
        <tr><td>None</td><td>直连</td><td>net.Dialer</td></tr>
        <tr><td>HTTP/HTTPS</td><td>Web扫描</td><td>HTTP CONNECT</td></tr>
        <tr><td>SOCKS5</td><td>TCP代理</td><td>golang.org/x/net/proxy</td></tr>
      </table>

      <h3>使用golang.org/x/net/proxy的原因</h3>
      <ul>
        <li>✅ Go官方维护的SOCKS5实现</li>
        <li>✅ 无需自己实现SOCKS5协议</li>
        <li>✅ 支持认证和代理链</li>
      </ul>

      <h2>代理配置（<code>proxy/types.go</code>）</h2>

      <pre><code>type ProxyConfig struct {
    Type    ProxyType  // None, HTTP, HTTPS, SOCKS5
    Address string     // proxy:port
    Auth    *ProxyAuth // 可选认证
}

type ProxyAuth struct {
    Username string
    Password string
}</code></pre>

      <h3>从命令行到配置</h3>
      <pre><code>// -proxy http://user:pass@proxy:8080
config := &ProxyConfig{
    Type: ProxyTypeHTTP,
    Address: "proxy:8080",
    Auth: &ProxyAuth{
        Username: "user",
        Password: "pass",
    },
}</code></pre>

      <h2>HTTP代理实现（<code>proxy/httpdialer.go</code>）</h2>

      <pre><code>func (m *manager) createHTTPDialer() (Dialer, error) {
    proxyURL, _ := url.Parse("http://" + m.config.Address)

    if m.config.Auth != nil {
        proxyURL.User = url.UserPassword(
            m.config.Auth.Username,
            m.config.Auth.Password,
        )
    }

    return &httpDialerWrapper{
        transport: &http.Transport{
            Proxy: http.ProxyURL(proxyURL),
        },
    }, nil
}</code></pre>

      <h2>SOCKS5代理实现</h2>

      <pre><code>func (m *manager) createSOCKS5Dialer() (Dialer, error) {
    var auth *proxy.Auth
    if m.config.Auth != nil {
        auth = &proxy.Auth{
            User:     m.config.Auth.Username,
            Password: m.config.Auth.Password,
        }
    }

    // 使用golang.org/x/net/proxy的SOCKS5实现
    dialer, err := proxy.SOCKS5("tcp", m.config.Address, auth, proxy.Direct)
    return dialer, err
}</code></pre>

      <h2>设计权衡</h2>

      <h3>不支持代理链的原因</h3>
      <ul>
        <li>fscan是单次扫描工具，不需要复杂的代理链</li>
        <li>如需代理链，用proxychains等专用工具包装fscan</li>
        <li>减少复杂性，保持简单</li>
      </ul>

      <h3>没有代理池的原因</h3>
      <ul>
        <li>单个代理已经满足大多数需求</li>
        <li>代理池需要健康检查、失败重试等复杂逻辑</li>
        <li>增加不必要的复杂性</li>
      </ul>`,B=`<h2>设计目标</h2>
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
      </ul>`,F=`<h2>设计目标</h2>
      <p>服务识别集成在端口扫描中，复用TCP连接减少网络请求：</p>
      <ul>
        <li><strong>准确性</strong>：使用nmap指纹库，识别100+服务</li>
        <li><strong>效率优先</strong>：Banner优先，减少主动探测</li>
        <li><strong>零二次连接</strong>：复用端口扫描的连接</li>
        <li><strong>智能探测</strong>：根据端口选择探测器</li>
      </ul>

      <h2>SmartIdentify：两阶段识别（<code>core/service_probe.go:91</code>）</h2>

      <h3>阶段1：被动Banner读取</h3>
      <p>优先读取服务主动发送的Banner（<code>tryInitialBanner</code>）：</p>
      <pre><code>func (s *SmartPortInfoScanner) SmartIdentify() (*ServiceInfo, error) {
    // 第一阶段：读取初始Banner（大部分服务会主动发送）
    s.tryInitialBanner()
    if s.info.Found {
        return s.buildServiceInfo(), nil
    }

    // 第二阶段：智能探测策略（减少探测器数量）
    s.smartProbeStrategy()

    return s.buildServiceInfo(), nil
}</code></pre>
      <p><strong>优势</strong>：SSH、FTP、SMTP等服务主动发送Banner，无需探测</p>

      <h3>阶段2：智能探测策略</h3>
      <p>仅在Banner识别失败时进行主动探测（<code>smartProbeStrategy</code>）：</p>
      <ul>
        <li>优先使用端口专用探测器（如80端口用HTTP探测器）</li>
        <li>使用nmap指纹库匹配</li>
        <li>减少探测次数，提升速度</li>
      </ul>

      <h2>识别方法</h2>

      <h3>1. Banner 抓取（优先方法）</h3>
      <p><strong>原理</strong>：连接服务并读取 Banner 信息</p>
      <ul>
        <li>建立 TCP 连接</li>
        <li>某些服务主动发送 Banner（SSH、FTP、SMTP）</li>
        <li>某些服务需要发送探测包才响应（HTTP、MySQL）</li>
      </ul>
      <p><strong>示例</strong>：</p>
      <pre><code>SSH-2.0-OpenSSH_7.4
220 FTP Server ready
HTTP/1.1 400 Bad Request</code></pre>

      <h3>2. Probe 探测（辅助方法）</h3>
      <p><strong>原理</strong>：发送特定协议的探测包，分析响应</p>
      <ul>
        <li>HTTP：发送 GET 请求，解析响应头</li>
        <li>MySQL：发送 MySQL 握手包</li>
        <li>Redis：发送 PING 命令</li>
      </ul>

      <h3>3. 行为分析</h3>
      <p><strong>原理</strong>：根据服务的行为特征判断</p>
      <ul>
        <li>立即关闭连接 → 可能是 HTTP 代理</li>
        <li>发送二进制数据 → 可能是数据库</li>
        <li>SSL/TLS 握手 → HTTPS 或加密服务</li>
      </ul>

      <h2>Probe 引擎设计</h2>

      <h3>Probe 定义</h3>
      <p>Probe 是一个探测规则，包含：</p>
      <ul>
        <li><strong>探测数据</strong>：发送给服务的字节序列</li>
        <li><strong>匹配规则</strong>：正则表达式或字符串匹配</li>
        <li><strong>服务名称</strong>：识别成功后的服务名</li>
        <li><strong>版本提取</strong>：从响应中提取版本号</li>
      </ul>

      <h3>Probe 示例</h3>
      <pre><code>Probe HTTP GetRequest {
    send: "GET / HTTP/1.0\\\\r\\
\\\\r\\
"
    match: "HTTP/1\\\\.[01] \\\\d+ "
    service: http
    version: "Apache/([\\\\d.]+)"
}</code></pre>

      <h3>Probe 执行流程</h3>
      <ol>
        <li>连接目标端口</li>
        <li>发送 Probe 数据</li>
        <li>读取响应（超时 3 秒）</li>
        <li>匹配规则，提取信息</li>
        <li>匹配失败则尝试下一个 Probe</li>
      </ol>

      <h2>指纹库设计</h2>

      <h3>指纹来源</h3>
      <p>fscan 的指纹库来自：</p>
      <ul>
        <li>Nmap 的 nmap-service-probes</li>
        <li>自定义的常见服务指纹</li>
        <li>用户贡献的指纹</li>
      </ul>

      <h3>指纹组织方式</h3>
      <p>按服务类型分组：</p>
      <ul>
        <li><strong>通用 Probe</strong>：NULL（只读取 Banner）、HTTP、SSL</li>
        <li><strong>数据库 Probe</strong>：MySQL、PostgreSQL、Redis、MongoDB</li>
        <li><strong>远程访问 Probe</strong>：SSH、RDP、Telnet</li>
      </ul>

      <h3>优先级排序</h3>
      <p>常见服务优先探测：</p>
      <ol>
        <li>HTTP（80% 端口是 Web 服务）</li>
        <li>SSH、FTP（主动 Banner）</li>
        <li>数据库（MySQL、Redis、MongoDB）</li>
        <li>其他服务</li>
      </ol>

      <h2>并发识别设计</h2>

      <h3>问题：顺序识别太慢</h3>
      <p>识别 100 个端口，每个 3 秒 = 300 秒</p>

      <h3>解决方案：并发探测</h3>
      <ul>
        <li>同时对多个端口进行服务识别</li>
        <li>每个端口一个 goroutine</li>
        <li>限制并发数（默认 100）防止资源耗尽</li>
      </ul>

      <h2>超时和重试</h2>

      <h3>超时设置</h3>
      <ul>
        <li><strong>连接超时</strong>：2 秒</li>
        <li><strong>读取超时</strong>：3 秒</li>
        <li><strong>总超时</strong>：5 秒（单个端口）</li>
      </ul>

      <h3>重试策略</h3>
      <ul>
        <li>网络错误重试 1 次</li>
        <li>超时不重试（可能服务真的很慢）</li>
      </ul>

      <h2>SSL/TLS 识别</h2>

      <h3>问题：加密服务无法直接识别</h3>
      <p>HTTPS、SMTPS、IMAPS 等加密服务，Banner 被加密</p>

      <h3>解决方案：先 SSL 握手</h3>
      <ol>
        <li>检测是否为 SSL/TLS 端口（443, 993, 995）</li>
        <li>尝试 SSL 握手</li>
        <li>握手成功后，通过加密通道发送 Probe</li>
        <li>提取证书信息（域名、组织）</li>
      </ol>

      <h3>证书信息提取</h3>
      <pre><code>cert := conn.ConnectionState().PeerCertificates[0]
domain := cert.Subject.CommonName
org := cert.Subject.Organization[0]</code></pre>

      <h2>版本提取</h2>

      <h3>从 Banner 提取版本</h3>
      <p>使用正则表达式：</p>
      <pre><code>// SSH-2.0-OpenSSH_7.4
pattern := "OpenSSH_([\\\\d.]+)"
match := regexp.FindStringSubmatch(banner, pattern)
version := match[1]  // "7.4"</code></pre>

      <h3>版本规范化</h3>
      <ul>
        <li><code>Apache/2.4.41 (Ubuntu)</code> → <code>Apache 2.4.41</code></li>
        <li><code>nginx/1.18.0</code> → <code>nginx 1.18.0</code></li>
      </ul>

      <h2>异常处理</h2>

      <h3>常见异常</h3>
      <ul>
        <li><strong>连接立即关闭</strong>：可能是防火墙或负载均衡</li>
        <li><strong>乱码响应</strong>：可能是二进制协议</li>
        <li><strong>超时无响应</strong>：可能需要特殊握手</li>
      </ul>

      <h3>容错处理</h3>
      <ul>
        <li>解析错误不崩溃，返回 "unknown"</li>
        <li>记录原始响应，便于人工分析</li>
        <li>部分匹配也返回服务名</li>
      </ul>

      <h2>性能优化</h2>

      <h3>1. Probe 缓存</h3>
      <p>相同端口的 Probe 结果缓存：</p>
      <ul>
        <li>Key: <code>host:port</code></li>
        <li>Value: 识别结果</li>
        <li>TTL: 扫描会话期间</li>
      </ul>

      <h3>2. 连接复用</h3>
      <p>某些服务支持多次请求：</p>
      <ul>
        <li>HTTP Keep-Alive</li>
        <li>复用连接发送多个 Probe</li>
        <li>减少 TCP 握手开销</li>
      </ul>

      <h3>3. 快速失败</h3>
      <ul>
        <li>连接失败立即返回</li>
        <li>不等待完整超时</li>
        <li>避免阻塞其他端口识别</li>
      </ul>

      <h2>输出格式</h2>

      <h3>结构化输出</h3>
      <pre><code>{
    "host": "192.168.1.1",
    "port": 22,
    "service": "ssh",
    "product": "OpenSSH",
    "version": "7.4",
    "os": "Ubuntu",
    "banner": "SSH-2.0-OpenSSH_7.4"
}</code></pre>

      <h2>设计权衡</h2>

      <h3>不使用 Nmap 服务识别的原因</h3>
      <ul>
        <li>✅ 内置识别更快，不需要调用外部工具</li>
        <li>✅ 可以自定义 Probe 和指纹库</li>
        <li>✅ 更好的错误处理和日志</li>
        <li>❌ 缺点：指纹库不如 Nmap 完整</li>
      </ul>

      <h3>不所有端口都做深度识别的原因</h3>
      <ul>
        <li>✅ 深度识别耗时长（每个端口 5+ 秒）</li>
        <li>✅ 大多数场景只需要基本信息</li>
        <li>✅ 提供 <code>-service-scan-mode=deep</code> 启用深度识别</li>
        <li>❌ 缺点：快速模式可能漏掉非标准服务</li>
      </ul>`,U=`<h2>核心功能</h2>
      <p>Web扫描模块专注于HTTP/HTTPS服务的漏洞检测（<code>core/web_scanner.go</code> + <code>webscan/</code>）：</p>
      <ul>
        <li><strong>协议检测</strong>：智能识别HTTP/HTTPS服务</li>
        <li><strong>指纹匹配</strong>：基于服务识别结果触发POC</li>
        <li><strong>POC检测</strong>：内置YAML POC库（embed.FS嵌入）</li>
      </ul>

      <h2>协议检测：TLS握手优先</h2>

      <h3>问题：如何快速判断端口是HTTP还是HTTPS？</h3>
      <p>不能依赖端口号（80/443），很多服务运行在非标准端口。</p>

      <h3>解决方案：TLS握手 + HTTP回退（<code>core/web_scanner.go:32</code>）</h3>
      <pre><code>func DetectHTTPScheme(host string, port int) string {
    // 第一步：尝试TLS握手（优先检测HTTPS）
    tlsConn, err := tls.DialWithDialer(...)
    if err == nil {
        return "https"  // TLS握手成功
    }

    // 第二步：尝试HTTP请求（回退检测HTTP）
    resp, err := client.Head(httpURL)
    if err == nil {
        return "http"  // HTTP请求成功
    }

    return ""  // 都失败，不是Web服务
}</code></pre>

      <h3>TLS握手优先的原因</h3>
      <ul>
        <li>✅ 握手失败代价小（不需要发送完整HTTP请求）</li>
        <li>✅ 速度快（HTTPS服务立即识别）</li>
        <li>✅ 准确性高（TLS握手成功必定是HTTPS）</li>
      </ul>

      <h2>Web服务判断：关键词过滤</h2>

      <h3>基于服务指纹的简单规则（<code>core/web_scanner.go:196</code>）</h3>
      <pre><code>var (
    nonWebKeywords = []string{
        "oracle", "mysql", "postgresql", "redis", "mongodb", "ssh",
        "telnet", "ftp", "smtp", "pop3", "imap", "ldap", "snmp", "vnc", "rdp", "smb",
    }
    webKeywords = []string{
        "http", "https", "ssl", "tls", "nginx", "apache", "iis", "tomcat",
        "jetty", "nodejs", "php", "asp", "jsp",
    }
)

func IsWebServiceByFingerprint(serviceInfo *ServiceInfo) bool {
    // 非Web服务优先检查（短路）
    for _, keyword := range nonWebKeywords {
        if strings.Contains(serviceName, keyword) {
            return false
        }
    }
    // Web服务名检查
    for _, keyword := range webKeywords {
        if strings.Contains(serviceName, keyword) {
            return true
        }
    }
    return false
}</code></pre>

      <h3>不用复杂的指纹库的原因</h3>
      <ul>
        <li>简单关键词匹配已经解决90%的识别需求</li>
        <li>服务识别阶段已经获取了Banner，直接复用</li>
        <li>误判成本低：最多多发几个HTTP请求</li>
      </ul>

      <h2>POC系统：embed.FS嵌入</h2>

      <h3>问题：POC文件如何分发？</h3>
      <p>早期fscan需要单独携带POC目录，部署不便。</p>

      <h3>解决方案：编译期嵌入（<code>webscan/web_scan.go:39</code>）</h3>
      <pre><code>//go:embed pocs
var pocsFS embed.FS

func initPocs() {
    entries, err := pocsFS.ReadDir("pocs")
    // 遍历加载所有YAML POC
}</code></pre>

      <h3>优势</h3>
      <ul>
        <li>✅ 单文件部署：POC直接编译进二进制</li>
        <li>✅ 无需外部依赖：不用担心POC文件丢失</li>
        <li>✅ 可选外部POC：<code>-pocpath</code>支持加载外部POC目录</li>
      </ul>

      <h2>基于指纹的POC匹配</h2>

      <h3>执行流程（<code>webscan/web_scan.go:74</code>）</h3>
      <pre><code>func WebScan(info *common.HostInfo) {
    if len(info.Info) > 0 {
        // 基于指纹信息执行POC
        scanByFingerprints(ctx, target, info.Info)
    } else if common.Pocinfo.PocName != "" {
        // 基于指定POC名称执行
        executePOCs(ctx, config.PocInfo{Target: target, PocName: "shiro"})
    } else {
        // 执行所有POC（全量扫描）
        executePOCs(ctx, config.PocInfo{Target: target})
    }
}</code></pre>

      <h3>指纹到POC的映射</h3>
      <p>服务识别阶段识别出的指纹（如"Apache Shiro"）会触发对应的POC：</p>
      <pre><code>func scanByFingerprints(ctx context.Context, target string, fingerprints []string) {
    for _, fingerprint := range fingerprints {
        pocName := lib.CheckInfoPoc(fingerprint)  // "shiro" → "shiro"
        if pocName != "" {
            executePOCs(ctx, config.PocInfo{Target: target, PocName: pocName})
        }
    }
}</code></pre>

      <h2>HTTP客户端：统一配置</h2>

      <h3>createHTTPClient（<code>core/web_scanner.go:85</code>）</h3>
      <pre><code>func createHTTPClient() *http.Client {
    transport := &http.Transport{
        TLSClientConfig:   &tls.Config{InsecureSkipVerify: true},
        DisableKeepAlives: true,
    }

    // 配置代理
    if common.HttpProxy != "" {
        transport.Proxy = http.ProxyURL(proxyURL)
    }

    return &http.Client{
        Timeout:   timeout,
        Transport: transport,
        CheckRedirect: func(req *http.Request, via []*http.Request) error {
            return http.ErrUseLastResponse  // 不跟随重定向
        },
    }
}</code></pre>

      <h3>配置项</h3>
      <ul>
        <li><code>InsecureSkipVerify: true</code> - 跳过证书验证（内网自签名证书）</li>
        <li><code>DisableKeepAlives: true</code> - 避免连接池耗尽</li>
        <li><code>CheckRedirect</code> - 不自动跟随重定向（避免误导）</li>
        <li>代理支持：<code>-proxy http://proxy:8080</code></li>
      </ul>

      <h2>并发控制</h2>

      <h3>POC并发执行（<code>webscan/web_scan.go:160</code>）</h3>
      <pre><code>// 执行POC检测
lib.CheckMultiPoc(req, matchedPocs, common.PocNum)</code></pre>

      <p><code>common.PocNum</code>控制并发数量（默认20）：</p>
      <ul>
        <li>过小：扫描速度慢</li>
        <li>过大：触发WAF或消耗资源</li>
        <li>通过<code>-num</code>参数调整</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>单独分离Web扫描的原因</h3>
      <ul>
        <li>✅ POC库体积大（embed.FS嵌入后增加数MB）</li>
        <li>✅ 可选编译：不需要Web扫描时可以减少二进制体积</li>
        <li>✅ 独立维护：POC更新不影响核心扫描逻辑</li>
      </ul>

      <h3>不实现目录爆破的原因</h3>
      <p>专注于POC检测，目录爆破有专门工具（dirsearch、gobuster）更合适。</p>`,G={class:"flex gap-6"},E={class:"hidden w-64 shrink-0 lg:block"},V={class:"sticky top-20"},q={class:"space-y-1"},K=["onClick"],Q={class:"mb-4 w-full lg:hidden"},j=["value"],z={class:"min-w-0 flex-1"},J={class:"flex items-start justify-between"},Y={class:"text-sm text-muted-foreground"},$={class:"flex items-center gap-2"},X={class:"prose prose-slate max-w-none dark:prose-invert"},Z=["innerHTML"],nn={__name:"Docs",setup(en){const e=Object.assign({"../docs/alive-detection.md":w,"../docs/config-system.md":R,"../docs/faq.md":O,"../docs/fingerprint-system.md":k,"../docs/i18n-system.md":D,"../docs/local-scan.md":L,"../docs/parser-system.md":H,"../docs/poc-system.md":N,"../docs/port-scan.md":W,"../docs/proxy-system.md":A,"../docs/scan-engine.md":B,"../docs/service-identification.md":F,"../docs/web-scan.md":U}),l=C("getting-started"),m=[{id:"getting-started",title:"快速开始",icon:"mdi:rocket-launch",description:"快速了解 fscan 的基本使用方法"},{id:"build-constraints",title:"构建约束",icon:"mdi:hammer-wrench",description:"了解如何使用构建约束定制编译"},{id:"plugins",title:"插件系统",icon:"mdi:puzzle",description:"插件架构和开发指南"},{id:"logging",title:"日志系统",icon:"mdi:text-box-outline",description:"日志架构和设计理念"},{id:"output",title:"输出系统",icon:"mdi:export",description:"输出格式和存储设计"},{id:"scan-engine",title:"扫描引擎",icon:"mdi:engine",description:"扫描调度和流程控制"},{id:"alive-detection",title:"存活探测",icon:"mdi:pulse",description:"主机存活探测机制"},{id:"port-scan",title:"端口扫描",icon:"mdi:lan-connect",description:"端口扫描策略和优化"},{id:"service-identification",title:"服务识别",icon:"mdi:application-cog",description:"服务指纹识别系统"},{id:"web-scan",title:"Web 扫描",icon:"mdi:web",description:"Web 应用扫描架构"},{id:"local-scan",title:"本地扫描",icon:"mdi:desktop-tower",description:"本地权限和后渗透"},{id:"config-system",title:"配置系统",icon:"mdi:cog-outline",description:"全局配置管理"},{id:"parser-system",title:"解析系统",icon:"mdi:code-braces",description:"输入解析和验证"},{id:"proxy-system",title:"代理系统",icon:"mdi:swap-horizontal",description:"代理支持和流量转发"},{id:"i18n-system",title:"国际化系统",icon:"mdi:translate",description:"多语言支持"},{id:"fingerprint-system",title:"指纹识别",icon:"mdi:fingerprint",description:"Web 和端口指纹识别"},{id:"poc-system",title:"POC 检测",icon:"mdi:bug-check",description:"POC 漏洞检测引擎"},{id:"faq",title:"常见问题",icon:"mdi:help-circle",description:"常见问题解答"}],f={"getting-started":{title:"快速开始",description:"快速了解 fscan 的基本使用方法",icon:"mdi:rocket-launch",content:`
      <h2>简介</h2>
      <p>fscan 是一款功能强大的内网综合扫描工具，支持主机存活探测、端口扫描、服务识别、Web指纹识别、漏洞扫描、密码爆破等功能。</p>

      <h2>安装</h2>
      <h3>下载预编译版本</h3>
      <p>访问 <a href="https://github.com/shadow1ng/fscan/releases" target="_blank">GitHub Releases</a> 下载最新版本。</p>

      <h3>从源码编译</h3>
      <pre><code>git clone https://github.com/shadow1ng/fscan.git
cd fscan
go build</code></pre>

      <h2>基本使用</h2>
      <h3>扫描单个主机</h3>
      <pre><code>fscan -h 192.168.1.1</code></pre>

      <h3>扫描网段</h3>
      <pre><code>fscan -h 192.168.1.0/24</code></pre>

      <h3>指定端口</h3>
      <pre><code>fscan -h 192.168.1.1 -p 80,443,8080-8090</code></pre>

      <h3>完整扫描</h3>
      <pre><code>fscan -h 192.168.1.0/24 -np -no -nopoc</code></pre>

      <h2>输出选项</h2>
      <pre><code># 保存到文件
fscan -h 192.168.1.0/24 -o result.txt

# JSON 格式输出
fscan -h 192.168.1.0/24 -json output.json</code></pre>

      <h2>下一步</h2>
      <p>查看 <strong>配置说明</strong> 了解更多参数选项，或查看 <strong>插件系统</strong> 了解如何扩展功能。</p>
    `},"build-constraints":{title:"构建约束",description:"了解如何使用构建约束定制编译",icon:"mdi:hammer-wrench",content:`
      <h2>设计背景：构建约束的必要性</h2>

      <h3>问题一：二进制体积失控</h3>
      <p>fscan 包含 50+ 插件，完整编译的二进制文件达到 15-30 MB。在渗透测试场景中：</p>
      <ul>
        <li><strong>上传限制</strong>：某些漏洞利用链对文件大小有严格限制（如 10MB 以下）</li>
        <li><strong>带宽约束</strong>：通过慢速连接（如代理链）传输大文件耗时过长</li>
        <li><strong>隐蔽性需求</strong>：小文件更容易绕过流量检测和文件监控</li>
      </ul>

      <h3>问题二：功能需求差异化</h3>
      <p>不同渗透阶段对工具的需求完全不同：</p>
      <ul>
        <li><strong>信息收集阶段</strong>：只需要端口扫描和服务识别，不需要后渗透模块</li>
        <li><strong>横向移动阶段</strong>：只需要凭据爆破插件，不需要 Web 漏洞扫描</li>
        <li><strong>权限维持阶段</strong>：只需要后门和持久化插件，不需要网络扫描</li>
      </ul>
      <p>携带 50 个插件去只用 5 个功能是巨大的资源浪费。</p>

      <h3>问题三：安全与合规</h3>
      <ul>
        <li><strong>后渗透工具的敏感性</strong>：keylogger、reverseshell 等模块容易被安全软件标记</li>
        <li><strong>授权范围限制</strong>：某些渗透测试合同明确禁止使用某些攻击技术</li>
        <li><strong>最小权限原则</strong>：只编译授权使用的功能，避免法律风险</li>
      </ul>

      <h2>设计理念</h2>

      <h3>核心机制</h3>
      <p>fscan 使用 Go 的构建标签（build tags）实现编译时插件选择。每个插件文件都包含一个简单的标签：</p>
      <pre><code>//go:build plugin_xxx || !plugin_selective</code></pre>

      <p><strong>工作原理</strong>：</p>
      <ul>
        <li><strong>默认编译</strong>：不指定任何标签时，<code>!plugin_selective</code> 为真，所有插件都被包含</li>
        <li><strong>选择编译</strong>：指定 <code>-tags "plugin_selective,plugin_ssh"</code> 时，只有 SSH 插件被包含</li>
      </ul>

      <h3>默认全包含的原因</h3>
      <ul>
        <li>新用户直接 <code>go build</code> 即可获得完整功能</li>
        <li>无需学习任何构建选项</li>
        <li>兼容现有的构建脚本和 CI/CD 流程</li>
      </ul>

      <h3>设计优势</h3>
      <ul>
        <li>无需配置文件，标签直接写在代码中</li>
        <li>插件之间零依赖，可以任意组合</li>
        <li>编译时决策，零运行时开销</li>
      </ul>

      <h2>插件分类</h2>

      <h3>1. 服务类插件（plugins/services）</h3>
      <p>用于网络服务扫描和凭据爆破：</p>
      <ul>
        <li><strong>体积</strong>：每个 0.1-0.5 MB</li>
        <li><strong>代表插件</strong>：SSH, MySQL, Redis, SMB, FTP, RDP, MongoDB 等</li>
        <li><strong>特点</strong>：插件之间零依赖，可任意组合</li>
      </ul>

      <h3>2. Web 插件（plugins/web）</h3>
      <p>Web 应用安全扫描模块：</p>
      <ul>
        <li><strong>webtitle</strong>：Web 指纹识别（体积增加 ~0 MB）</li>
        <li><strong>webpoc</strong>：Web 漏洞扫描（体积增加 ~6 MB，包含 POC 数据库）</li>
      </ul>
      <p>两个插件独立，可根据需求单独选择。</p>

      <h3>3. 本地插件（plugins/local）</h3>
      <p>后渗透和权限维持功能：</p>
      <ul>
        <li><strong>典型插件</strong>：systeminfo, keylogger, reverseshell, persistence</li>
        <li><strong>注意</strong>：这些功能较为敏感，建议根据授权范围选择性编译</li>
      </ul>

      <h2>使用场景</h2>

      <h3>场景一：最小化部署</h3>
      <p>适用于文件大小受限的环境（如通过漏洞上传）：</p>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql,plugin_redis,plugin_smb"</code></pre>
      <p>二进制体积 < 5MB，包含基础服务扫描。</p>

      <h3>场景二：Web 渗透测试</h3>
      <p>只需要 Web 应用扫描功能：</p>
      <pre><code>go build -tags "plugin_selective,plugin_webtitle,plugin_webpoc"</code></pre>
      <p>二进制体积 ~10MB。</p>

      <h3>场景三：合规性要求</h3>
      <p>排除敏感的后渗透功能：</p>
      <pre><code>go build -tags "plugin_selective,plugin_ssh,plugin_mysql,plugin_webtitle"</code></pre>
      <p>不包含 keylogger、reverseshell 等敏感模块。</p>

      <h3>场景四：完整功能</h3>
      <p>本地测试或完整授权的项目：</p>
      <pre><code>go build</code></pre>
      <p>包含所有插件，二进制 15-30 MB。</p>

      <h2>体积对比</h2>

      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background: #f5f5f5;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">编译配置</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">包含插件</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">体积</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">完整编译</td>
            <td style="padding: 10px; border: 1px solid #ddd;">全部 50+ 插件</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>15-30 MB</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">基础服务扫描</td>
            <td style="padding: 10px; border: 1px solid #ddd;">SSH + MySQL + Redis + SMB</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>~5 MB</strong> (-67%)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">Web 专用</td>
            <td style="padding: 10px; border: 1px solid #ddd;">webtitle + webpoc</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>~10 MB</strong> (-50%)</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">极简版</td>
            <td style="padding: 10px; border: 1px solid #ddd;">仅 SSH</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>< 3 MB</strong> (-90%)</td>
          </tr>
        </tbody>
      </table>

      <h2>快速开始</h2>
      <p>访问 <strong>构建配置器</strong> 页面，通过可视化界面选择所需插件，自动生成编译命令。无需记忆任何标签名称。</p>
    `},plugins:{title:"插件系统",description:"插件架构和开发指南",icon:"mdi:puzzle",content:`
      <h2>设计目标</h2>
      <p>fscan 的插件系统旨在实现：</p>
      <ul>
        <li><strong>零依赖</strong>：插件之间完全解耦，可以任意组合</li>
        <li><strong>易扩展</strong>：添加新插件不需要修改核心代码</li>
        <li><strong>可裁剪</strong>：通过构建标签实现编译时选择</li>
        <li><strong>统一接口</strong>：所有插件遵循相同的调用规范</li>
      </ul>

      <h2>架构设计</h2>

      <h3>分层结构</h3>
      <p>fscan 采用三层插件架构：</p>
      <ul>
        <li><strong>核心层</strong>：插件注册表和调度器</li>
        <li><strong>接口层</strong>：统一的插件接口定义</li>
        <li><strong>实现层</strong>：具体的插件实现</li>
      </ul>

      <h3>注册机制</h3>
      <p>插件采用<strong>自注册模式</strong>：</p>
      <ul>
        <li>每个插件在 <code>init()</code> 函数中向注册表注册自己</li>
        <li>核心层维护一个全局插件注册表</li>
        <li>运行时根据注册表动态调用插件</li>
      </ul>
      <p><strong>优势</strong>：核心代码不需要知道有哪些插件存在，添加新插件时零侵入。</p>

      <h3>接口设计</h3>
      <p>所有插件实现统一的接口：</p>
      <ul>
        <li><code>Scan(ctx, hostInfo)</code>：执行扫描逻辑</li>
        <li><code>Name()</code>：返回插件名称</li>
        <li><code>Priority()</code>：返回执行优先级</li>
      </ul>
      <p><strong>好处</strong>：调度器可以用相同的方式调用所有插件，不需要特殊处理。</p>

      <h2>插件分类</h2>

      <h3>1. 服务类插件（plugins/services）</h3>
      <p><strong>设计特点</strong>：网络协议扫描，体积小，无依赖</p>
      <ul>
        <li><strong>数据库</strong>：MySQL, Redis, MongoDB, PostgreSQL, Oracle, MSSQL</li>
        <li><strong>远程访问</strong>：SSH, RDP, VNC, Telnet</li>
        <li><strong>文件共享</strong>：SMB, FTP, Rsync</li>
        <li><strong>消息队列</strong>：RabbitMQ, Kafka, ActiveMQ</li>
        <li><strong>其他</strong>：LDAP, SMTP, Elasticsearch, Neo4j, Cassandra</li>
      </ul>

      <h3>2. Web 插件（plugins/web）</h3>
      <p><strong>设计特点</strong>：HTTP 协议专用，支持复杂的 Web 场景</p>
      <ul>
        <li><strong>webtitle</strong>：轻量级指纹识别</li>
        <li><strong>webpoc</strong>：重量级漏洞扫描（包含 POC 数据库）</li>
      </ul>

      <h3>3. 本地插件（plugins/local）</h3>
      <p><strong>设计特点</strong>：系统级操作，需要高权限</p>
      <ul>
        <li><strong>信息收集</strong>：systeminfo, envinfo, fileinfo, avdetect</li>
        <li><strong>远程控制</strong>：reverseshell, forwardshell, socks5proxy</li>
        <li><strong>权限维持</strong>：crontask, systemdservice, winservice, winstartup</li>
        <li><strong>凭证获取</strong>：minidump, keylogger</li>
        <li><strong>工具</strong>：downloader, cleaner</li>
      </ul>

      <h2>解耦设计</h2>

      <h3>编译时解耦</h3>
      <p>通过构建标签实现：</p>
      <ul>
        <li>每个插件独立声明构建条件</li>
        <li>不参与编译的插件代码完全不会被包含</li>
        <li>核心层无需知道哪些插件被编译</li>
      </ul>

      <h3>运行时解耦</h3>
      <p>通过注册表和接口实现：</p>
      <ul>
        <li>调度器只知道接口，不知道具体实现</li>
        <li>插件之间不相互引用</li>
        <li>可以动态增减插件而不影响其他模块</li>
      </ul>

      <h2>扩展性设计</h2>

      <h3>添加新插件的步骤</h3>
      <ol>
        <li>创建新的插件文件（如 <code>newservice.go</code>）</li>
        <li>添加构建标签 <code>//go:build plugin_newservice || !plugin_selective</code></li>
        <li>实现插件接口（继承 BasePlugin，实现 Scan 方法）</li>
        <li>在 <code>init()</code> 中注册插件</li>
      </ol>
      <p><strong>关键</strong>：无需修改任何现有代码，核心层会自动发现和调用新插件。</p>

      <h3>插件优先级控制</h3>
      <p>某些插件需要优先执行（如端口扫描），某些需要延后执行（如漏洞检测）。插件通过 <code>Priority()</code> 方法声明优先级，调度器按优先级排序后执行。</p>

      <h2>最小接口原则</h2>
      <p>插件接口只定义必需的方法：</p>
      <ul>
        <li><code>Scan()</code>：执行扫描（必须）</li>
        <li><code>Name()</code>：标识插件（必须）</li>
        <li><code>Priority()</code>：控制顺序（可选，默认值）</li>
      </ul>
      <p>不需要的功能（如配置验证、依赖声明）都不在接口中，保持接口简洁。</p>

      <h2>Context 机制</h2>
      <p>所有插件的 <code>Scan()</code> 方法接收 <code>context.Context</code> 参数：</p>
      <ul>
        <li><strong>超时控制</strong>：调度器可以设置全局超时</li>
        <li><strong>取消机制</strong>：用户中断时可以立即停止所有插件</li>
        <li><strong>资源清理</strong>：插件可以监听 Context 并优雅关闭</li>
      </ul>
      <p>这是 Go 标准的并发控制模式，无需自己实现信号机制。</p>

      <h2>设计权衡</h2>

      <h3>使用自注册而非配置文件的原因</h3>
      <ul>
        <li>✅ 配置和代码在一起，不会出现不同步</li>
        <li>✅ 编译时检查，配置错误会导致编译失败</li>
        <li>✅ 无需解析配置文件，减少启动时间</li>
        <li>❌ 缺点：运行时无法动态加载插件</li>
      </ul>
      <p>fscan 是安全工具，稳定性优先于灵活性。</p>

      <h3>禁止插件相互调用的原因</h3>
      <ul>
        <li>避免循环依赖</li>
        <li>便于选择性编译（不需要依赖解析）</li>
        <li>插件失败不会影响其他插件</li>
      </ul>
      <p>如果多个插件需要共享功能，应该提取到 <code>common</code> 包中。</p>
    `},logging:{title:"日志系统",description:"日志架构和设计理念",icon:"mdi:text-box-outline",content:`
      <h2>设计目标</h2>
      <p>fscan 的日志系统设计围绕渗透测试的实际需求：</p>
      <ul>
        <li><strong>实时反馈</strong>：扫描过程中即时显示发现的漏洞和凭据</li>
        <li><strong>分级输出</strong>：根据信息重要性分级，支持过滤</li>
        <li><strong>并发安全</strong>：多线程环境下不会出现日志混乱</li>
        <li><strong>最小噪音</strong>：默认只显示关键信息，避免刷屏</li>
      </ul>

      <h2>日志分级</h2>

      <h3>DEBUG（调试级别）</h3>
      <p><strong>用途</strong>：开发调试和问题诊断</p>
      <ul>
        <li>网络连接详细信息</li>
        <li>协议交互的原始数据</li>
        <li>插件执行的内部状态</li>
      </ul>
      <p><strong>特点</strong>：信息量极大，通常只在调试时启用</p>

      <h3>INFO（信息级别，默认）</h3>
      <p><strong>用途</strong>：正常扫描过程的关键事件</p>
      <ul>
        <li>发现的开放端口</li>
        <li>识别的服务版本</li>
        <li>扫描进度提示</li>
      </ul>
      <p><strong>特点</strong>：平衡信息量和可读性，适合大多数场景</p>

      <h3>SUCCESS（成功级别）</h3>
      <p><strong>用途</strong>：标记扫描成功的关键发现</p>
      <ul>
        <li>爆破成功的凭据</li>
        <li>发现的漏洞</li>
        <li>可利用的弱点</li>
      </ul>
      <p><strong>特点</strong>：绿色高亮显示，最关注的信息</p>

      <h3>ERROR（错误级别）</h3>
      <p><strong>用途</strong>：扫描过程中的异常</p>
      <ul>
        <li>网络连接失败</li>
        <li>插件执行错误</li>
        <li>配置参数问题</li>
      </ul>
      <p><strong>特点</strong>：红色显示，需要人工介入</p>

      <h2>并发日志设计</h2>

      <h3>问题：多线程日志混乱</h3>
      <p>fscan 使用多线程并发扫描，如果直接 <code>fmt.Println()</code>，会出现：</p>
      <ul>
        <li>多个线程的输出交错混杂</li>
        <li>一行日志被另一个线程的输出打断</li>
        <li>无法保证日志的完整性</li>
      </ul>

      <h3>解决方案：日志队列</h3>
      <p>fscan 使用带缓冲的 channel 作为日志队列：</p>
      <ul>
        <li>所有插件将日志消息发送到 channel</li>
        <li>单独的日志线程从 channel 读取并输出</li>
        <li>保证每条日志原子性输出，不会被打断</li>
      </ul>
      <p><strong>关键设计</strong>：生产者-消费者模式，channel 是天然的线程安全队列</p>

      <h3>缓冲区大小权衡</h3>
      <ul>
        <li><strong>缓冲区太小</strong>：插件发送日志时会阻塞，影响扫描性能</li>
        <li><strong>缓冲区太大</strong>：内存占用高，日志延迟显示</li>
      </ul>
      <p>fscan 默认使用 1000 容量的缓冲 channel，在性能和实时性之间取得平衡</p>

      <h2>日志格式设计</h2>

      <h3>简洁优先</h3>
      <p>渗透测试场景下，用户关注的是<strong>结果</strong>而不是过程：</p>
      <ul>
        <li>✅ <code>[+] 192.168.1.1:22 ssh root:password</code>（直接显示结果）</li>
        <li>❌ <code>[2025-01-07 10:23:45] [INFO] SSH Plugin: Authentication succeeded for host 192.168.1.1:22 with username root and password password</code>（冗长）</li>
      </ul>

      <h3>颜色编码</h3>
      <p>不同级别的日志使用不同颜色：</p>
      <ul>
        <li><strong style="color: green;">[+] SUCCESS</strong>：绿色，成功的关键发现</li>
        <li><strong style="color: blue;">[*] INFO</strong>：蓝色，一般信息</li>
        <li><strong style="color: red;">[-] ERROR</strong>：红色，错误信息</li>
        <li><strong style="color: gray;">[DEBUG]</strong>：灰色，调试信息</li>
      </ul>
      <p><strong>注意</strong>：支持 <code>-no-color</code> 参数禁用颜色，适配不支持 ANSI 颜色的终端</p>

      <h3>时间戳可选</h3>
      <ul>
        <li>默认不显示时间戳，保持输出简洁</li>
        <li>提供 <code>-timestamp</code> 参数启用时间戳（用于审计和回溯）</li>
      </ul>

      <h2>日志去重</h2>

      <h3>问题：重复信息刷屏</h3>
      <p>扫描大量主机时，某些信息会重复出现：</p>
      <ul>
        <li>"端口 22 开放" 可能出现数百次</li>
        <li>"SSH 服务" 识别结果重复</li>
      </ul>

      <h3>解决方案：智能去重</h3>
      <ul>
        <li><strong>成功信息</strong>：永不去重（每个漏洞都重要）</li>
        <li><strong>一般信息</strong>：同类信息只显示首次（如 "开放端口"）</li>
        <li><strong>错误信息</strong>：同类错误只显示前 N 次</li>
      </ul>
      <p><strong>实现</strong>：使用 <code>map[string]bool</code> 记录已显示的消息指纹</p>

      <h2>日志性能优化</h2>

      <h3>避免字符串拼接</h3>
      <p>日志消息的构造会影响性能：</p>
      <ul>
        <li>❌ <code>log.Info("Host: " + host + " Port: " + port)</code>（多次内存分配）</li>
        <li>✅ <code>log.Infof("Host: %s Port: %d", host, port)</code>（单次格式化）</li>
      </ul>

      <h3>懒惰求值</h3>
      <p>DEBUG 级别的日志不应该在关闭时仍然消耗资源：</p>
      <ul>
        <li>❌ <code>log.Debug("Data: " + expensiveOperation())</code>（总是执行）</li>
        <li>✅ <code>if log.IsDebug() { log.Debug(...) }</code>（条件执行）</li>
      </ul>

      <h2>日志与输出的分离</h2>

      <h3>设计原则</h3>
      <p>日志和输出是两个独立的概念：</p>
      <ul>
        <li><strong>日志</strong>：给人看的，显示扫描过程和状态</li>
        <li><strong>输出</strong>：给程序看的，保存扫描结果供后续处理</li>
      </ul>

      <h3>独立控制</h3>
      <ul>
        <li>日志级别：控制显示什么日志（<code>-log-level</code>）</li>
        <li>输出格式：控制结果存储格式（<code>-o</code>、<code>-json</code>）</li>
        <li>两者互不影响：可以关闭日志但仍然保存输出</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>不使用 logrus/zap 等日志库的原因</h3>
      <ul>
        <li>✅ 减少依赖，降低编译体积</li>
        <li>✅ 自定义格式更灵活，符合渗透测试习惯</li>
        <li>✅ 避免引入不需要的功能（如日志轮转、远程发送）</li>
        <li>❌ 缺点：需要自己实现并发安全和分级控制</li>
      </ul>
      <p>fscan 的日志需求简单明确，自己实现 200 行代码即可满足，引入第三方库反而增加复杂度。</p>
    `},output:{title:"输出系统",description:"输出格式和存储设计",icon:"mdi:export",content:`
      <h2>设计目标</h2>
      <p>输出系统设计要满足不同场景的需求：</p>
      <ul>
        <li><strong>人类可读</strong>：文本格式，直接查看扫描结果</li>
        <li><strong>机器可解析</strong>：JSON 格式，供其他工具处理</li>
        <li><strong>结构化存储</strong>：分类存储不同类型的结果</li>
        <li><strong>增量写入</strong>：边扫描边保存，避免数据丢失</li>
      </ul>

      <h2>输出格式</h2>

      <h3>文本格式（默认）</h3>
      <p><strong>特点</strong>：面向人类，方便快速查看</p>
      <ul>
        <li>每行一个结果</li>
        <li>使用固定格式便于 grep 过滤</li>
        <li>包含关键信息：IP、端口、服务、凭据、漏洞</li>
      </ul>
      <p><strong>示例</strong>：</p>
      <pre><code>[+] 192.168.1.1:22 ssh root:password
[+] 192.168.1.2:3306 mysql admin:123456
[+] 192.168.1.3:80 WebTitle: Apache Tomcat 8.5.0
[+] 192.168.1.4:8080 [CVE-2021-44228] Log4j RCE</code></pre>

      <h3>JSON 格式</h3>
      <p><strong>特点</strong>：面向机器，便于自动化处理</p>
      <ul>
        <li>完整的结构化数据</li>
        <li>包含时间戳、插件名称、原始响应等元信息</li>
        <li>支持多层嵌套，表达复杂结果</li>
      </ul>
      <p><strong>结构设计</strong>：</p>
      <pre><code>{
  "host": "192.168.1.1",
  "port": 22,
  "protocol": "ssh",
  "timestamp": "2025-01-07T10:23:45Z",
  "result": {
    "type": "credential",
    "username": "root",
    "password": "password",
    "success": true
  },
  "plugin": "ssh",
  "raw_banner": "SSH-2.0-OpenSSH_7.4"
}</code></pre>

      <h2>分类存储设计</h2>

      <h3>问题：混合存储难以处理</h3>
      <p>如果所有结果都混在一个文件：</p>
      <ul>
        <li>提取所有凭据需要复杂的正则表达式</li>
        <li>统计漏洞数量需要遍历全文</li>
        <li>无法快速定位特定类型的结果</li>
      </ul>

      <h3>解决方案：分类输出</h3>
      <p>fscan 根据结果类型自动创建不同文件：</p>
      <ul>
        <li><code>result.txt</code>：所有结果的汇总</li>
        <li><code>credentials.txt</code>：爆破成功的凭据</li>
        <li><code>vulnerabilities.txt</code>：发现的漏洞</li>
        <li><code>webinfo.txt</code>：Web 指纹和标题</li>
      </ul>
      <p><strong>优势</strong>：需要凭据时直接打开 <code>credentials.txt</code>，无需处理其他信息</p>

      <h2>增量写入机制</h2>

      <h3>问题：批量写入的风险</h3>
      <p>如果将所有结果缓存在内存，最后一次性写入：</p>
      <ul>
        <li>程序崩溃会丢失所有数据</li>
        <li>大规模扫描时内存占用过高</li>
        <li>无法实时查看中间结果</li>
      </ul>

      <h3>解决方案：实时追加写入</h3>
      <p>每发现一个结果立即写入文件：</p>
      <ul>
        <li>使用 <code>os.O_APPEND</code> 模式打开文件</li>
        <li>每次写入后立即 <code>Flush()</code> 刷盘</li>
        <li>程序中断时已写入的数据不会丢失</li>
      </ul>

      <h3>并发写入安全</h3>
      <p>多个插件同时写入同一个文件会导致数据混乱，解决方案：</p>
      <ul>
        <li>使用 <code>sync.Mutex</code> 保护文件句柄</li>
        <li>写入操作原子化：获取锁 → 写入 → 刷盘 → 释放锁</li>
      </ul>

      <h2>输出去重</h2>

      <h3>问题：重复结果</h3>
      <p>某些情况下同一个结果可能被多次发现：</p>
      <ul>
        <li>端口扫描和服务识别都会记录开放端口</li>
        <li>多个插件可能报告同一个漏洞</li>
      </ul>

      <h3>解决方案：内存去重表</h3>
      <p>维护一个 <code>map[string]bool</code> 记录已输出的结果：</p>
      <ul>
        <li>结果指纹：<code>host:port:type:key</code></li>
        <li>写入前检查指纹是否存在</li>
        <li>存在则跳过，不存在则写入并记录指纹</li>
      </ul>
      <p><strong>权衡</strong>：内存占用 vs 重复数据，fscan 选择消耗内存来保证输出清洁</p>

      <h2>输出缓冲设计</h2>

      <h3>问题：频繁磁盘 I/O</h3>
      <p>每发现一个结果就写入磁盘会导致：</p>
      <ul>
        <li>大量系统调用，性能开销高</li>
        <li>SSD 写入放大，影响硬盘寿命</li>
      </ul>

      <h3>解决方案：批量缓冲写入</h3>
      <p>使用 <code>bufio.Writer</code> 缓冲：</p>
      <ul>
        <li>结果先写入内存缓冲区</li>
        <li>缓冲区满或定时（如 1 秒）时统一刷盘</li>
        <li>程序结束时强制 Flush 保证数据完整</li>
      </ul>
      <p><strong>平衡</strong>：实时性 vs 性能，fscan 选择 1 秒延迟换取 10 倍性能提升</p>

      <h2>文件命名策略</h2>

      <h3>时间戳命名</h3>
      <p>默认输出文件名包含时间戳，避免覆盖：</p>
      <ul>
        <li><code>fscan_20250107_102345.txt</code></li>
        <li>多次扫描的结果自动隔离</li>
        <li>便于追溯历史扫描记录</li>
      </ul>

      <h3>自定义命名</h3>
      <ul>
        <li><code>-o result.txt</code>：指定文件名，覆盖模式</li>
        <li><code>-o-append result.txt</code>：追加模式，不覆盖</li>
      </ul>

      <h2>数据完整性保证</h2>

      <h3>信号处理</h3>
      <p>用户中断（Ctrl+C）时：</p>
      <ul>
        <li>捕获 <code>SIGINT</code> 信号</li>
        <li>停止所有扫描线程</li>
        <li>Flush 所有缓冲区</li>
        <li>关闭文件句柄</li>
      </ul>
      <p><strong>关键</strong>：确保优雅关闭，不丢失已扫描的数据</p>

      <h3>错误处理</h3>
      <p>磁盘空间不足或权限不足时：</p>
      <ul>
        <li>立即停止写入，避免部分数据损坏</li>
        <li>显示明确的错误信息</li>
        <li>保留已成功写入的数据</li>
      </ul>

      <h2>输出格式扩展性</h2>

      <h3>接口抽象</h3>
      <p>输出系统使用接口设计：</p>
      <pre><code>type OutputWriter interface {
    Write(result *ScanResult) error
    Flush() error
    Close() error
}</code></pre>
      <p>不同格式实现相同接口：</p>
      <ul>
        <li><code>TextWriter</code>：文本格式</li>
        <li><code>JSONWriter</code>：JSON 格式</li>
        <li><code>CSVWriter</code>：CSV 格式（未来扩展）</li>
      </ul>

      <h3>多输出支持</h3>
      <p>同时输出到多个格式：</p>
      <ul>
        <li><code>-o result.txt -json result.json</code></li>
        <li>使用 <code>MultiWriter</code> 包装多个 Writer</li>
        <li>一次扫描，多种格式，无需重复扫描</li>
      </ul>

      <h2>设计权衡</h2>

      <h3>不使用数据库存储的原因</h3>
      <ul>
        <li>✅ 文件更简单，无需依赖 SQLite 等库</li>
        <li>✅ 便于传输和备份（直接复制文件）</li>
        <li>✅ 减少编译体积</li>
        <li>❌ 缺点：复杂查询需要手动处理</li>
      </ul>
      <p>fscan 是一次性扫描工具，不需要持久化存储和复杂查询，文件存储足够。</p>

      <h3>默认不输出所有信息的原因</h3>
      <ul>
        <li>大规模扫描时文件会变得巨大（GB 级别）</li>
        <li>大多数信息是无用的（如关闭的端口）</li>
        <li>用户只关心成功的发现</li>
      </ul>
      <p>提供 <code>-verbose</code> 参数输出完整信息，但默认保持精简。</p>
    `},"scan-engine":{title:"扫描引擎",description:"扫描调度和流程控制",icon:"mdi:engine",content:e["../docs/scan-engine.md"]},"alive-detection":{title:"存活探测",description:"主机存活探测机制",icon:"mdi:pulse",content:e["../docs/alive-detection.md"]},"port-scan":{title:"端口扫描",description:"端口扫描策略和优化",icon:"mdi:lan-connect",content:e["../docs/port-scan.md"]},"service-identification":{title:"服务识别",description:"服务指纹识别系统",icon:"mdi:application-cog",content:e["../docs/service-identification.md"]},"web-scan":{title:"Web 扫描",description:"Web 应用扫描架构",icon:"mdi:web",content:e["../docs/web-scan.md"]},"local-scan":{title:"本地扫描",description:"本地权限和后渗透",icon:"mdi:desktop-tower",content:e["../docs/local-scan.md"]},"config-system":{title:"配置系统",description:"全局配置管理",icon:"mdi:cog-outline",content:e["../docs/config-system.md"]},"parser-system":{title:"解析系统",description:"输入解析和验证",icon:"mdi:code-braces",content:e["../docs/parser-system.md"]},"proxy-system":{title:"代理系统",description:"代理支持和流量转发",icon:"mdi:swap-horizontal",content:e["../docs/proxy-system.md"]},"i18n-system":{title:"国际化系统",description:"多语言支持",icon:"mdi:translate",content:e["../docs/i18n-system.md"]},"fingerprint-system":{title:"指纹识别",description:"Web 和端口指纹识别",icon:"mdi:fingerprint",content:e["../docs/fingerprint-system.md"]},"poc-system":{title:"POC 检测",description:"POC 漏洞检测引擎",icon:"mdi:bug-check",content:e["../docs/poc-system.md"]},faq:{title:"常见问题",description:"常见问题解答",icon:"mdi:help-circle",content:e["../docs/faq.md"]}},s=T(()=>f[l.value]||f["getting-started"]);return(tn,c)=>(h(),a("div",G,[n("aside",E,[n("div",V,[t(o(p),null,{default:r(()=>[t(o(P),null,{default:r(()=>[t(o(b),{class:"text-base"},{default:r(()=>c[1]||(c[1]=[g("文档导航")])),_:1})]),_:1}),t(o(u),{class:"p-0"},{default:r(()=>[n("nav",q,[(h(),a(S,null,y(m,i=>n("button",{key:i.id,class:v(["flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left text-sm transition-colors",l.value===i.id?"bg-primary/10 font-medium text-primary":"text-muted-foreground hover:bg-accent hover:text-accent-foreground"]),onClick:on=>l.value=i.id},[t(o(x),{icon:i.icon,class:"text-lg"},null,8,["icon"]),g(" "+d(i.title),1)],10,K)),64))])]),_:1})]),_:1})])]),n("div",Q,[t(o(p),null,{default:r(()=>[t(o(u),{class:"p-4"},{default:r(()=>[I(n("select",{"onUpdate:modelValue":c[0]||(c[0]=i=>l.value=i),class:"w-full rounded-lg border border-input bg-background px-3 py-2"},[(h(),a(S,null,y(m,i=>n("option",{key:i.id,value:i.id},d(i.title),9,j)),64))],512),[[M,l.value]])]),_:1})]),_:1})]),n("main",z,[t(o(p),null,{default:r(()=>[t(o(P),null,{default:r(()=>[n("div",J,[n("div",null,[t(o(b),{class:"mb-2 text-2xl"},{default:r(()=>[g(d(s.value.title),1)]),_:1}),n("p",Y,d(s.value.description),1)]),n("div",$,[t(o(x),{icon:s.value.icon,class:"text-3xl text-primary"},null,8,["icon"])])])]),_:1}),t(o(u),null,{default:r(()=>[n("article",X,[n("div",{innerHTML:s.value.content},null,8,Z)])]),_:1})]),_:1})])]))}},ln=_(nn,[["__scopeId","data-v-b774132d"]]);export{ln as default};
