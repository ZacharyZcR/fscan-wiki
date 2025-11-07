<h2>核心设计：全局变量</h2>
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

      <h3>为什么用flag而不是cobra？</h3>
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

      <h3>为什么不用Config结构体？</h3>
      <ul>
        <li>✅ 更简单：直接访问全局变量 <code>common.ThreadNum</code></li>
        <li>✅ 无需传递：避免到处传Config指针</li>
        <li>✅ 更直接：flag直接绑定到变量</li>
        <li>❌ 缺点：难以单元测试（全局状态）</li>
        <li>❌ 缺点：无法运行时切换配置</li>
      </ul>

      <h3>为什么不支持配置文件？</h3>
      <ul>
        <li>fscan是单次扫描工具，不是守护进程</li>
        <li>命令行参数已经足够灵活</li>
        <li>减少依赖（不需要yaml/toml解析库）</li>
        <li>如果需要保存配置，用shell alias或脚本</li>
      </ul>