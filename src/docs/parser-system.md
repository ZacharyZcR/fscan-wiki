<h2>核心设计：独立parsers包</h2>
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
    CompiledIPv4Regex = regexp.MustCompile(`^(\d{1,3}\.){3}\d{1,3}$`)
    CompiledPortRegex = regexp.MustCompile(`^\d+(-\d+)?$`)
    CompiledURLRegex  = regexp.MustCompile(`^https?://`)
)
</code></pre>
      <ul>
        <li>避免每次调用重新编译（性能提升10倍以上）</li>
        <li>编译失败在启动时发现（不在运行时）</li>
      </ul>