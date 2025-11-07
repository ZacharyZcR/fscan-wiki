<h2>核心设计：ProxyManager</h2>
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

      <h3>为什么使用golang.org/x/net/proxy？</h3>
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

      <h3>为什么不支持代理链？</h3>
      <ul>
        <li>fscan是单次扫描工具，不需要复杂的代理链</li>
        <li>如需代理链，用proxychains等专用工具包装fscan</li>
        <li>减少复杂性，保持简单</li>
      </ul>

      <h3>为什么没有代理池？</h3>
      <ul>
        <li>单个代理已经满足大多数需求</li>
        <li>代理池需要健康检查、失败重试等复杂逻辑</li>
        <li>增加不必要的复杂性</li>
      </ul>