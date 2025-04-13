import{_ as f,i as p,r as h,a as c,q as m,b as t,n as s,d as e,e as a,I as l,F as b,g as x,t as d,h as w,f as n}from"./index-DADAu9_P.js";const v={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},E={class:"pl-4 space-y-1"},_=["href"],S={class:"flex"},T={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},P={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},R={class:"flex items-center mb-2"},H={class:"flex items-center mb-2"},D={class:"overflow-x-auto mb-6"},B={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},L={class:"flex"},U={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},M={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"flex"},V={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"flex"},Q={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"mb-4"},ot={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"flex"},at={__name:"elasticsearch-scan",setup(lt){const r=p("isDark",h(!1)),u=["Elasticsearch 扫描简介","扫描原理与流程","配置参数与选项","认证机制","未授权访问检测","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m elastic",description:"启用 Elasticsearch 扫描模块",example:"-m elastic"},{name:"-p 9200",description:"指定 Elasticsearch 端口（默认为 9200）",example:"-p 9200,9300"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user elastic,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd changeme,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(it,o)=>(m(),c("div",null,[t("div",v,[t("div",{class:s(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-yellow-900/30":"bg-yellow-100"])},[a(e(l),{icon:"mdi:database-search",class:s(["text-xl",e(r)?"text-yellow-400":"text-yellow-600"])},null,8,["class"])],2),t("h1",{class:s(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," Elasticsearch 扫描指南 ",2)]),t("div",{class:s(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",C,[a(e(l),{icon:"mdi:format-list-bulleted",class:s(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:s(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",E,[(m(),c(b,null,x(u,(i,g)=>t("li",{key:g,class:s(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-yellow-400":"text-gray-600 hover:text-yellow-600"])},[t("a",{href:`#section-${g}`,class:"hover:underline"},d(i),9,_)],2)),64))])],2),t("div",{class:s(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"Elasticsearch 扫描是 Fscan 的核心功能之一，用于发现网络中的 Elasticsearch 服务并检测可能的未授权访问和弱口令漏洞。本指南详细介绍 Elasticsearch 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Elasticsearch 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"Elasticsearch 是一个分布式、RESTful 风格的搜索和分析引擎，广泛应用于全文搜索、日志分析和实时数据分析。Fscan 的 Elasticsearch 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 Elasticsearch 服务（默认端口 9200）"),t("li",null,"检测 Elasticsearch 未授权访问漏洞"),t("li",null,"进行用户名密码组合的爆破测试"),t("li",null,"支持 HTTP Basic 认证验证"),t("li",null,"生成详细的安全风险报告")],-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-yellow-900/10 border border-yellow-900/20":"bg-yellow-50 border border-yellow-100"])},[t("div",S,[a(e(l),{icon:"mdi:shield-alert",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-yellow-400":"text-yellow-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-yellow-300":"text-yellow-700"])},"安全提示",2),t("p",{class:s(["mt-1",e(r)?"text-yellow-200":"text-yellow-800"])}," Elasticsearch 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未授权访问的 Elasticsearch 服务可能包含敏感信息，未经许可的访问可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"Elasticsearch 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",T,[t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",P,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-yellow-900/20":"bg-yellow-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-yellow-400":"text-yellow-600"])},"1",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Elasticsearch 服务端口（默认 9200）的主机 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-yellow-900/20":"bg-yellow-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-yellow-400":"text-yellow-600"])},"2",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"未授权访问检测",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 尝试无认证连接，检查是否能直接访问敏感 API 端点 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",R,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-yellow-900/20":"bg-yellow-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-yellow-400":"text-yellow-600"])},"3",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"身份验证爆破",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果需要认证，使用多线程技术尝试用户名密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",H,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-yellow-900/20":"bg-yellow-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-yellow-400":"text-yellow-600"])},"4",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证或未授权访问，生成详细报告 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"Elasticsearch 扫描实现基于 HTTP 请求而非 TCP 连接，使用 Elasticsearch 的 REST API 进行验证。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"Elasticsearch 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",D,[t("table",{class:s(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:s(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:s(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(b,null,x(y,i=>t("tr",{key:i.name,class:s(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-yellow-400":"text-yellow-600"])},d(i.name),3),t("td",{class:s(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 认证机制 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"Elasticsearch 支持多种认证方式，Fscan 主要使用 HTTP Basic 认证进行身份验证：",-1)),t("div",B,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// ElasticConn 尝试Elasticsearch连接
func ElasticConn(ctx context.Context, info *Common.HostInfo, user string, pass string, timeoutSeconds int64) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(timeoutSeconds) * time.Second

    // 创建带有超时的HTTP客户端
    client := &http.Client{
        Timeout: timeout,
        Transport: &http.Transport{
            TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
        },
    }

    baseURL := fmt.Sprintf("http://%s:%s", host, port)

    // 使用上下文创建请求
    req, err := http.NewRequestWithContext(ctx, "GET", baseURL+"/_cat/indices", nil)
    if err != nil {
        return false, err
    }

    if user != "" || pass != "" {
        auth := base64.StdEncoding.EncodeToString([]byte(user + ":" + pass))
        req.Header.Add("Authorization", "Basic "+auth)
    }

    // 执行HTTP请求
    resp, err := client.Do(req)
    if err != nil {
        return false, err
    }
    defer resp.Body.Close()

    // 返回认证结果
    return resp.StatusCode == 200, nil
}`,2)])],2)]),o[7]||(o[7]=w('<p class="mb-4" data-v-d3358174>HTTP Basic 认证流程如下：</p><ol class="pl-5 list-decimal space-y-2 mb-6" data-v-d3358174><li data-v-d3358174>将用户名和密码组合为 <code data-v-d3358174>用户名:密码</code> 格式</li><li data-v-d3358174>对组合进行 Base64 编码</li><li data-v-d3358174>添加 <code data-v-d3358174>Authorization: Basic [Base64编码结果]</code> 头部</li><li data-v-d3358174>发送 HTTP 请求并检查响应状态码</li></ol><p class="mb-4" data-v-d3358174>Fscan 的扫描模块检测 <code data-v-d3358174>_cat/indices</code> API 是否返回 200 状态码来判断身份验证是否成功。</p>',3)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",L,[a(e(l),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"认证提示",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," Elasticsearch 6.0 及更高版本默认启用了 X-Pack 安全功能，而早期版本可能未默认启用认证。Fscan 支持检测这两种情况。 ",2)])])],2),t("h2",{id:"section-4",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 未授权访问检测 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"未授权访问是 Elasticsearch 常见的安全问题。Fscan 首先会尝试无认证访问来检测是否存在这一漏洞：",-1)),t("div",U,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 首先测试无认证访问
Common.LogDebug("尝试无认证访问...")
unauthResult := tryElasticCredential(ctx, info, ElasticCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if unauthResult.Success {
    // 无需认证情况
    saveElasticResult(info, target, unauthResult.Credential, true)
    return nil
}`,2)])],2)]),o[9]||(o[9]=t("p",{class:"mb-4"},"未授权访问检测中，Fscan 会特别标记结果，以区分是弱密码还是无需认证的情况：",-1)),t("div",M,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// saveElasticResult 保存Elasticsearch扫描结果
func saveElasticResult(info *Common.HostInfo, target string, credential ElasticCredential, isUnauth bool) {
    var successMsg string
    var details map[string]interface{}

    if isUnauth {
        successMsg = fmt.Sprintf("Elasticsearch服务 %s 无需认证", target)
        details = map[string]interface{}{
            "port":    info.Ports,
            "service": "elasticsearch",
            "type":    "unauthorized-access",
        }
    } else {
        successMsg = fmt.Sprintf("Elasticsearch服务 %s 爆破成功 用户名: %v 密码: %v",
            target, credential.Username, credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "elasticsearch",
            "username": credential.Username,
            "password": credential.Password,
            "type":     "weak-password",
        }
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    result := &Common.ScanResult{
        Time:    time.Now(),
        Type:    Common.VULN,
        Target:  info.Host,
        Status:  "vulnerable",
        Details: details,
    }
    Common.SaveResult(result)
}`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-yellow-900/10 border border-yellow-900/20":"bg-yellow-50 border border-yellow-100"])},[t("div",A,[a(e(l),{icon:"mdi:shield-alert",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-yellow-400":"text-yellow-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-yellow-300":"text-yellow-700"])},"安全风险",2),t("p",{class:s(["mt-1",e(r)?"text-yellow-200":"text-yellow-800"])}," 未授权访问的 Elasticsearch 可能导致数据泄露、数据篡改甚至远程代码执行风险。建议立即为 Elasticsearch 启用认证和访问控制。 ",2)])])],2),t("h2",{id:"section-5",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"如果未授权访问检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),t("div",V,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",j,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []ElasticCredential
for _, user := range Common.Userdict["elastic"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, ElasticCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["elastic"]), len(Common.Passwords), len(credentials)))

// 并发扫描
result := concurrentElasticScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",q,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentElasticScan 并发扫描Elasticsearch服务
func concurrentElasticScan(ctx context.Context, info *Common.HostInfo, credentials []ElasticCredential,
                          timeoutSeconds int64, maxRetries int) *ElasticScanResult {
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
    resultChan := make(chan *ElasticScanResult, 1)
    workChan := make(chan ElasticCredential, maxConcurrent)
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
                    result := tryElasticCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略剩余实现...
}`,2)])],2)]),t("h2",{id:"section-6",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[12]||(o[12]=t("p",{class:"mb-4"},[n("Elasticsearch 扫描模块使用 "),t("code",null,"ModuleThreadNum"),n(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),n(" 参数设置：")],-1)),t("div",G,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9200 -m elastic -t 100",2)])],2)]),o[13]||(o[13]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",X,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[14]||(o[14]=t("p",{class:"mb-4"},"Elasticsearch 扫描支持两层超时控制：",-1)),o[15]||(o[15]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),n("：通过 "),t("code",null,"-time"),n(" 参数设置每个 HTTP 请求的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),n("：通过 "),t("code",null,"-timeout"),n(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",J,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在HTTP客户端中使用超时
client := &http.Client{
    Timeout: time.Duration(timeoutSeconds) * time.Second,
    Transport: &http.Transport{
        TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
    },
}`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",O,[a(e(l),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。 ",2)])])],2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[16]||(o[16]=t("p",{class:"mb-4"},[n("Fscan 的 Elasticsearch 扫描模块支持自动重试连接，通过 "),t("code",null,"-retries"),n(" 参数设置最大重试次数：")],-1)),t("div",Q,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`for retry := 0; retry < maxRetries; retry++ {
    select {
    case <-ctx.Done():
        return &ElasticScanResult{
            Success:    false,
            Error:      fmt.Errorf("全局超时"),
            Credential: credential,
        }
    default:
        if retry > 0 {
            Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
            time.Sleep(500 * time.Millisecond) // 重试前等待
        }

        success, err := ElasticConn(ctx, info, credential.Username, credential.Password, timeoutSeconds)
        // ...处理结果...
    }
}`,2)])],2)]),t("h2",{id:"section-7",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Z,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9200 -m elastic",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",et,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 9200 -m elastic -user elastic,admin,system -pwd elastic,{user}123,changeme",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",st,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ot,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9200 -m elastic -t 100 -time 3 -retries 2 -o elastic_results.txt",2)])],2)]),o[17]||(o[17]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",nt,[a(e(l),{icon:"mdi:check-circle",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-green-300":"text-green-700"])},"最佳实践",2),t("p",{class:s(["mt-1",e(r)?"text-green-200":"text-green-800"])}," 保护 Elasticsearch 的最佳实践包括：启用 X-Pack 安全功能、配置强密码、使用 TLS/SSL 加密、限制网络访问、定期更新版本，以及使用 Elastic Stack 安全功能监控异常访问。 ",2)])])],2)],2),t("div",{class:s(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:s(["inline-flex items-center transition-colors duration-200",e(r)?"text-yellow-400 hover:text-yellow-300":"text-yellow-600 hover:text-yellow-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),o[18]||(o[18]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},ct=f(at,[["__scopeId","data-v-d3358174"]]);export{ct as default};
