import{_ as f,i as p,r as v,a as c,q as m,b as t,n,d as e,e as s,I as a,F as u,g as b,t as d,f as i}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},j={class:"flex items-center mb-2"},C={class:"pl-4 space-y-1"},w=["href"],N={class:"flex"},_={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},S={class:"flex items-center mb-2"},R={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},D={class:"overflow-x-auto mb-6"},P={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},U={class:"flex"},M={class:"mb-4"},A={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},E={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4"},G={class:"flex items-center mb-2"},W={class:"flex items-center mb-2"},z={class:"flex items-center mb-2"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"flex"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"mb-4"},ot={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"mb-4"},at={class:"p-3 text-sm font-mono overflow-x-auto"},it={class:"flex"},lt={__name:"neo4j-scan",setup(dt){const r=p("isDark",v(!1)),x=["Neo4j 扫描简介","扫描原理与流程","配置参数与选项","认证和安全检测","密码爆破流程","结果分析与报告","高级设置","应用场景与示例"],y=[{name:"-m neo4j",description:"启用 Neo4j 扫描模块",example:"-m neo4j"},{name:"-p 7687,7474",description:"Neo4j 常用端口，多个用逗号分隔",example:"-p 7687,7474"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user neo4j,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd neo4j,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(ct,o)=>(m(),c("div",null,[t("div",h,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-cyan-900/30":"bg-cyan-100"])},[s(e(a),{icon:"mdi:database-search",class:n(["text-xl",e(r)?"text-cyan-400":"text-cyan-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," Neo4j 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",j,[s(e(a),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",C,[(m(),c(u,null,b(x,(l,g)=>t("li",{key:g,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-cyan-400":"text-gray-600 hover:text-cyan-600"])},[t("a",{href:`#section-${g}`,class:"hover:underline"},d(l),9,w)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"Neo4j 扫描是 Fscan 的一个专业功能模块，用于发现网络中运行的 Neo4j 图数据库服务，并检测无认证访问、默认凭据和弱密码等安全问题。本指南详细介绍 Neo4j 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Neo4j 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"Neo4j 是领先的图数据库平台，被广泛应用于数据关系分析、推荐系统、网络和 IT 运维等领域。Fscan 的 Neo4j 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 Neo4j 服务（默认端口 7687、7474）"),t("li",null,"检测 Neo4j 是否允许无认证访问"),t("li",null,"识别使用默认凭据（neo4j/neo4j）的实例"),t("li",null,"进行凭据爆破，发现弱密码问题"),t("li",null,"支持使用 Bolt 协议进行高效连接测试")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-cyan-900/10 border border-cyan-900/20":"bg-cyan-50 border border-cyan-100"])},[t("div",N,[s(e(a),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-cyan-400":"text-cyan-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-cyan-300":"text-cyan-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-cyan-200":"text-cyan-800"])}," Neo4j 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"Neo4j 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",_,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-cyan-900/20":"bg-cyan-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-cyan-400":"text-cyan-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Neo4j Bolt 服务（默认端口 7687）和 HTTP 服务（7474）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",R,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-cyan-900/20":"bg-cyan-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-cyan-400":"text-cyan-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"基本安全检测",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试无认证连接和默认凭据（neo4j/neo4j），这是最常见的安全问题 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-cyan-900/20":"bg-cyan-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-cyan-400":"text-cyan-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果基本检测失败，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-cyan-900/20":"bg-cyan-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-cyan-400":"text-cyan-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"权限验证",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 连接成功后，执行简单查询以验证访问权限，并生成详细的安全报告 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"Neo4j 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",D,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(u,null,b(y,l=>t("tr",{key:l.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-cyan-400":"text-cyan-600"])},d(l.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(l.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(l.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 认证和安全检测 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"Neo4j 扫描模块首先尝试两种基本安全检测：无认证访问和默认凭据检测。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 初始安全检测 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},"扫描首先会尝试无需认证和默认凭据进行连接：",-1)),t("div",P,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 初始检查列表 - 无认证和默认凭证
initialCredentials := []Neo4jCredential{
    {"", ""},           // 无认证
    {"neo4j", "neo4j"}, // 默认凭证
}

// 先检查无认证和默认凭证
Common.LogDebug("尝试默认凭证...")
for _, credential := range initialCredentials {
    Common.LogDebug(fmt.Sprintf("尝试: %s:%s", credential.Username, credential.Password))

    result := tryNeo4jCredential(ctx, info, credential, Common.Timeout, 1)
    if result.Success {
        // 标记结果类型
        if credential.Username == "" && credential.Password == "" {
            result.IsUnauth = true
        } else {
            result.IsDefaultCreds = true
        }

        // 保存结果
        saveNeo4jResult(info, target, result)
        return nil
    }
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",U,[s(e(a),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},' Neo4j 的默认安装通常需要认证，但配置不当可能导致无认证访问。默认用户名和密码都是 "neo4j"，首次登录后会要求修改密码，但很多测试或开发环境可能没有变更默认凭据。 ',2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," Bolt 协议连接验证 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"Neo4j 扫描使用 Bolt 协议进行连接和验证。Bolt 是 Neo4j 的二进制协议，提供更高效的数据库通信：",-1)),t("div",M,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",A,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// Neo4jConn 尝试Neo4j连接
func Neo4jConn(info *Common.HostInfo, user string, pass string) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(Common.Timeout) * time.Second

    // 构造Neo4j URL
    uri := fmt.Sprintf("bolt://%s:%s", host, port)

    // 配置驱动选项
    config := func(c *neo4j.Config) {
        c.SocketConnectTimeout = timeout
        c.ConnectionAcquisitionTimeout = timeout
    }

    var driver neo4j.Driver
    var err error

    // 尝试建立连接
    if user != "" || pass != "" {
        // 有认证信息时使用认证
        driver, err = neo4j.NewDriver(uri, neo4j.BasicAuth(user, pass, ""), config)
    } else {
        // 无认证时使用NoAuth
        driver, err = neo4j.NewDriver(uri, neo4j.NoAuth(), config)
    }

    if err != nil {
        return false, err
    }
    defer driver.Close()

    // 测试连接有效性
    err = driver.VerifyConnectivity()
    if err != nil {
        return false, err
    }

    // 尝试执行简单查询以确认权限
    session := driver.NewSession(neo4j.SessionConfig{AccessMode: neo4j.AccessModeRead})
    defer session.Close()

    _, err = session.Run("MATCH (n) RETURN count(n) LIMIT 1", nil)
    if err != nil {
        return false, err
    }

    return true, nil
}`,2)])],2)]),o[9]||(o[9]=t("p",{class:"mb-4"},"连接验证过程包含以下关键步骤：",-1)),o[10]||(o[10]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"构造 Bolt 协议 URI（bolt://host:port）"),t("li",null,"根据是否提供用户名密码选择认证方式（BasicAuth 或 NoAuth）"),t("li",null,"验证连接的可用性（VerifyConnectivity）"),t("li",null,"执行简单的 Cypher 查询以确认权限（MATCH (n) RETURN count(n) LIMIT 1）")],-1)),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[11]||(o[11]=t("p",{class:"mb-4"},"如果基本安全检测失败，Fscan 将使用用户字典和密码字典进行凭据爆破：",-1)),t("div",B,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",E,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []Neo4jCredential
for _, user := range Common.Userdict["neo4j"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, Neo4jCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["neo4j"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentNeo4jScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出机制：",-1)),t("div",H,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",L,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentNeo4jScan 并发扫描Neo4j服务
func concurrentNeo4jScan(ctx context.Context, info *Common.HostInfo, credentials []Neo4jCredential,
                         timeoutSeconds int64, maxRetries int) *Neo4jScanResult {
    // 使用ModuleThreadNum控制并发数
    maxConcurrent := Common.ModuleThreadNum
    if maxConcurrent <= 0 {
        maxConcurrent = 10 // 默认值
    }
    if maxConcurrent > len(credentials) {
        maxConcurrent = len(credentials)
    }

    // 创建工作池
    var wg sync.WaitGroup
    resultChan := make(chan *Neo4jScanResult, 1)
    workChan := make(chan Neo4jCredential, maxConcurrent)
    scanCtx, scanCancel := context.WithCancel(ctx)
    defer scanCancel()

    // 启动工作协程
    for i := 0; i < maxConcurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for credential := range workChan {
                select {
                case <-scanCtx.Done():
                    return
                default:
                    result := tryNeo4jCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
                    if result.Success {
                        select {
                        case resultChan <- result:
                            scanCancel() // 找到有效凭据，取消其他工作
                        default:
                        }
                        return
                    }
                }
            }
        }()
    }

    // ...省略其他实现...
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 结果分析与报告 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},"Neo4j 扫描结果会根据不同情况进行分类和报告：",-1)),t("div",F,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// saveNeo4jResult 保存Neo4j扫描结果
func saveNeo4jResult(info *Common.HostInfo, target string, result *Neo4jScanResult) {
    var successMsg string
    var details map[string]interface{}

    if result.IsUnauth {
        // 无认证访问
        successMsg = fmt.Sprintf("Neo4j服务 %s 无需认证即可访问", target)
        details = map[string]interface{}{
            "port":    info.Ports,
            "service": "neo4j",
            "type":    "unauthorized-access",
        }
    } else if result.IsDefaultCreds {
        // 默认凭证
        successMsg = fmt.Sprintf("Neo4j服务 %s 默认凭证可用 用户名: %s 密码: %s",
            target, result.Credential.Username, result.Credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "neo4j",
            "type":     "default-credentials",
            "username": result.Credential.Username,
            "password": result.Credential.Password,
        }
    } else {
        // 弱密码
        successMsg = fmt.Sprintf("Neo4j服务 %s 爆破成功 用户名: %s 密码: %s",
            target, result.Credential.Username, result.Credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "neo4j",
            "type":     "weak-password",
            "username": result.Credential.Username,
            "password": result.Credential.Password,
        }
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    vulnResult := &Common.ScanResult{
        Time:    time.Now(),
        Type:    Common.VULN,
        Target:  info.Host,
        Status:  "vulnerable",
        Details: details,
    }
    Common.SaveResult(vulnResult)
}`,2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"扫描结果会根据以下三种类型进行分类：",-1)),t("div",q,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-red-800/30":"bg-white border-red-300"])},[t("div",G,[s(e(a),{icon:"mdi:shield-off",class:n(["mr-2 text-lg",e(r)?"text-red-400":"text-red-600"])},null,8,["class"]),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"无认证访问",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," Neo4j 服务配置为无需认证即可访问，存在严重安全风险，任何人都可以读取或修改数据 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-amber-800/30":"bg-white border-amber-300"])},[t("div",W,[s(e(a),{icon:"mdi:key-alert",class:n(["mr-2 text-lg",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"默认凭据",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," Neo4j 服务使用默认的用户名和密码（neo4j/neo4j），建议立即更改以提高安全性 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-orange-800/30":"bg-white border-orange-300"])},[t("div",z,[s(e(a),{icon:"mdi:key-link",class:n(["mr-2 text-lg",e(r)?"text-orange-400":"text-orange-600"])},null,8,["class"]),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"弱密码",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," Neo4j 服务使用了易于猜测的弱密码，增加了被未授权访问的风险 ",2)],2)]),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[15]||(o[15]=t("p",{class:"mb-4"},[i("Neo4j 扫描模块使用 "),t("code",null,"ModuleThreadNum"),i(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),i(" 参数设置：")],-1)),t("div",$,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 7687 -m neo4j -t 100",2)])],2)]),o[16]||(o[16]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[17]||(o[17]=t("p",{class:"mb-4"},"Neo4j 扫描支持两层超时控制：",-1)),o[18]||(o[18]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),i("：通过 "),t("code",null,"-time"),i(" 参数设置每个 Neo4j 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),i("：通过 "),t("code",null,"-timeout"),i(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",K,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
timeout := time.Duration(Common.Timeout) * time.Second
config := func(c *neo4j.Config) {
    c.SocketConnectTimeout = timeout
    c.ConnectionAcquisitionTimeout = timeout
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",Q,[s(e(a),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," Neo4j 数据库在处理复杂查询时可能需要较长时间，建议根据网络环境和数据库规模设置合理的超时时间，避免因超时过短而导致漏报。 ",2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[19]||(o[19]=t("p",{class:"mb-4"},[i("Fscan 的 Neo4j 扫描模块支持自动重试连接，通过 "),t("code",null,"-retries"),i(" 参数设置最大重试次数：")],-1)),t("div",X,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryNeo4jCredential 尝试单个Neo4j凭据
func tryNeo4jCredential(ctx context.Context, info *Common.HostInfo, credential Neo4jCredential,
                        timeoutSeconds int64, maxRetries int) *Neo4jScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &Neo4jScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 尝试连接
            // ...连接逻辑...

            // 根据结果决定是否重试
            if success {
                return &Neo4jScanResult{Success: true, Credential: credential}
            }

            lastErr = err
            if err != nil {
                // 检查是否需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &Neo4jScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 7687,7474 -m neo4j",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",et,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 7687 -m neo4j -user neo4j,admin -pwd neo4j,admin123,{user}@123",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 自定义重试和超时 ",2),t("div",nt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ot,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 7687 -m neo4j -time 5 -retries 2",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",st,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",at,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 7687,7474 -m neo4j -t 100 -time 3 -retries 2 -o neo4j_results.txt",2)])],2)]),o[20]||(o[20]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-cyan-900/10 border border-cyan-900/20":"bg-cyan-50 border border-cyan-100"])},[t("div",it,[s(e(a),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-cyan-400":"text-cyan-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-cyan-300":"text-cyan-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-cyan-200":"text-cyan-800"])}," Neo4j 通常用于存储和处理敏感数据关系，应确保其安全配置。建议始终启用认证、使用强密码、限制网络访问，并定期更新到最新版本以获取安全补丁。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-cyan-400 hover:text-cyan-300":"text-cyan-600 hover:text-cyan-700"])},[s(e(a),{icon:"mdi:github",class:"mr-1.5"}),o[21]||(o[21]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},gt=f(lt,[["__scopeId","data-v-d9a23766"]]);export{gt as default};
