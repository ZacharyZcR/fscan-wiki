<h2>核心功能</h2>
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

      <h3>为什么TLS握手优先？</h3>
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

      <h3>为什么不用复杂的指纹库？</h3>
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

      <h3>为什么单独分离Web扫描？</h3>
      <ul>
        <li>✅ POC库体积大（embed.FS嵌入后增加数MB）</li>
        <li>✅ 可选编译：不需要Web扫描时可以减少二进制体积</li>
        <li>✅ 独立维护：POC更新不影响核心扫描逻辑</li>
      </ul>

      <h3>为什么不实现目录爆破？</h3>
      <p>专注于POC检测，目录爆破有专门工具（dirsearch、gobuster）更合适。</p>