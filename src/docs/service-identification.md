<h2>设计目标</h2>
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
    send: "GET / HTTP/1.0\\r\
\\r\
"
    match: "HTTP/1\\.[01] \\d+ "
    service: http
    version: "Apache/([\\d.]+)"
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
pattern := "OpenSSH_([\\d.]+)"
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

      <h3>为什么不使用 Nmap 服务识别？</h3>
      <ul>
        <li>✅ 内置识别更快，不需要调用外部工具</li>
        <li>✅ 可以自定义 Probe 和指纹库</li>
        <li>✅ 更好的错误处理和日志</li>
        <li>❌ 缺点：指纹库不如 Nmap 完整</li>
      </ul>

      <h3>为什么不所有端口都做深度识别？</h3>
      <ul>
        <li>✅ 深度识别耗时长（每个端口 5+ 秒）</li>
        <li>✅ 大多数场景只需要基本信息</li>
        <li>✅ 提供 <code>-service-scan-mode=deep</code> 启用深度识别</li>
        <li>❌ 缺点：快速模式可能漏掉非标准服务</li>
      </ul>