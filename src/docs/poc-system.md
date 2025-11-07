<h2>POC系统已在Web扫描中实现</h2>
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
      Cookie: rememberMe=\${jndi:ldap://...}
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

      <h3>为什么POC不是独立模块？</h3>
      <ul>
        <li>POC检测依赖HTTP客户端和指纹识别</li>
        <li>集成到Web扫描模块更自然</li>
        <li>避免模块间复杂依赖</li>
      </ul>

      <h3>为什么用YAML不用Go代码？</h3>
      <ul>
        <li>✅ 非开发人员也能编写POC</li>
        <li>✅ 无需重新编译即可添加POC</li>
        <li>✅ 支持外部POC目录（-pocpath）</li>
        <li>✅ 社区共享POC更方便</li>
      </ul>