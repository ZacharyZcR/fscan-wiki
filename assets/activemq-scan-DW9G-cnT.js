import{_ as y,i as v,r as p,a as c,q as m,b as e,n,d as t,e as a,I as i,F as b,g as x,t as d,f as s}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},M=["href"],A={class:"flex"},Q={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},_={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},R={class:"flex items-center mb-2"},k={class:"overflow-x-auto mb-6"},D={class:"mb-4"},E={class:"p-3 text-sm font-mono overflow-x-auto"},N={class:"mb-4"},P={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"flex"},q={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},L={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},$={class:"flex"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},ee={class:"p-3 text-sm font-mono overflow-x-auto"},te={class:"mb-4"},re={class:"p-3 text-sm font-mono overflow-x-auto"},ne={class:"flex"},oe={__name:"activemq-scan",setup(se){const r=v("isDark",p(!1)),u=["ActiveMQ 扫描简介","扫描原理与流程","配置参数与选项","凭据验证流程","密码爆破流程","高级设置","应用场景与示例"],f=[{name:"-m activemq",description:"启用 ActiveMQ 扫描模块",example:"-m activemq"},{name:"-p 61616,8161",description:"ActiveMQ 常用端口，多个用逗号分隔",example:"-p 61616,8161"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,activemq"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd admin,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(ae,o)=>(m(),c("div",null,[e("div",h,[e("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",t(r)?"bg-green-900/30":"bg-green-100"])},[a(t(i),{icon:"mdi:server-network",class:n(["text-xl",t(r)?"text-green-400":"text-green-600"])},null,8,["class"])],2),e("h1",{class:n(["text-2xl font-bold transition-colors duration-300",t(r)?"text-white":"text-gray-900"])}," ActiveMQ 扫描指南 ",2)]),e("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",t(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[e("div",C,[a(t(i),{icon:"mdi:format-list-bulleted",class:n(["mr-2",t(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),e("h3",{class:n(["font-medium text-sm transition-colors duration-300",t(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),e("ul",w,[(m(),c(b,null,x(u,(l,g)=>e("li",{key:g,class:n(["transition-colors duration-200 text-sm font-normal",t(r)?"text-gray-400 hover:text-green-400":"text-gray-600 hover:text-green-600"])},[e("a",{href:`#section-${g}`,class:"hover:underline"},d(l),9,M)],2)),64))])],2),e("div",{class:n(["doc-content transition-colors duration-300",t(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=e("p",{class:"mb-4"},"ActiveMQ 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Apache ActiveMQ 消息中间件服务，并尝试通过弱密码进行身份验证。本指南详细介绍 ActiveMQ 扫描的工作原理、配置选项和最佳实践。",-1)),e("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," ActiveMQ 扫描简介 ",2),o[1]||(o[1]=e("p",{class:"mb-4"},"Apache ActiveMQ 是一个流行的开源消息中间件，广泛应用于企业消息系统、微服务架构和分布式应用。Fscan 的 ActiveMQ 扫描模块可以：",-1)),o[2]||(o[2]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,"发现内网中开放的 ActiveMQ 服务（默认端口 61616、8161）"),e("li",null,"使用 STOMP 协议进行弱密码检测"),e("li",null,"识别默认的管理员账户（admin/admin）"),e("li",null,"支持自定义用户名和密码字典")],-1)),e("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",t(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[e("div",A,[a(t(i),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",t(r)?"text-green-400":"text-green-600"])},null,8,["class"]),e("div",null,[e("p",{class:n(["font-medium",t(r)?"text-green-300":"text-green-700"])},"安全提示",2),e("p",{class:n(["mt-1",t(r)?"text-green-200":"text-green-800"])}," ActiveMQ 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),e("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=e("p",{class:"mb-4"},"ActiveMQ 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),e("div",Q,[e("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",t(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",_,[e("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(r)?"bg-green-900/20":"bg-green-100"])},[e("span",{class:n(["text-xs font-bold",t(r)?"text-green-400":"text-green-600"])},"1",2)],2),e("h3",{class:n(["font-medium",t(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),e("p",{class:n(["text-sm",t(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 ActiveMQ 服务（默认端口 61616、8161）的主机 ",2)],2),e("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",t(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",S,[e("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(r)?"bg-green-900/20":"bg-green-100"])},[e("span",{class:n(["text-xs font-bold",t(r)?"text-green-400":"text-green-600"])},"2",2)],2),e("h3",{class:n(["font-medium",t(r)?"text-gray-200":"text-gray-800"])},"默认凭据检测",2)]),e("p",{class:n(["text-sm",t(r)?"text-gray-400":"text-gray-600"])}," 首先尝试默认的 admin/admin 凭据进行连接，这是最常见的管理员账户 ",2)],2),e("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",t(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",T,[e("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(r)?"bg-green-900/20":"bg-green-100"])},[e("span",{class:n(["text-xs font-bold",t(r)?"text-green-400":"text-green-600"])},"3",2)],2),e("h3",{class:n(["font-medium",t(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),e("p",{class:n(["text-sm",t(r)?"text-gray-400":"text-gray-600"])}," 如果默认凭据失败，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),e("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",t(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",R,[e("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(r)?"bg-green-900/20":"bg-green-100"])},[e("span",{class:n(["text-xs font-bold",t(r)?"text-green-400":"text-green-600"])},"4",2)],2),e("h3",{class:n(["font-medium",t(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),e("p",{class:n(["text-sm",t(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析 ",2)],2)]),o[4]||(o[4]=e("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),e("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=e("p",{class:"mb-4"},"ActiveMQ 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),e("div",k,[e("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",t(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("thead",{class:n(t(r)?"bg-gray-850":"bg-gray-50")},[e("tr",null,[e("th",{class:n(["py-3 px-4 text-left font-medium border-b",t(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),e("th",{class:n(["py-3 px-4 text-left font-medium border-b",t(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),e("th",{class:n(["py-3 px-4 text-left font-medium border-b",t(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),e("tbody",{class:n(["divide-y",t(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(b,null,x(f,l=>e("tr",{key:l.name,class:n(t(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[e("td",{class:n(["py-2 px-4 font-mono",t(r)?"text-green-400":"text-green-600"])},d(l.name),3),e("td",{class:n(["py-2 px-4",t(r)?"text-gray-300":"text-gray-700"])},d(l.description),3),e("td",{class:n(["py-2 px-4 font-mono",t(r)?"text-gray-400":"text-gray-500"])},d(l.example),3)],2)),64))],2)],2)]),e("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据验证流程 ",2),o[6]||(o[6]=e("p",{class:"mb-4"},"ActiveMQ 扫描模块使用 STOMP 协议来验证凭据。STOMP（Simple Text Oriented Messaging Protocol）是一种简单的基于文本的消息传递协议，被 ActiveMQ 等消息中间件广泛支持。",-1)),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 默认凭据检测 ",2),o[7]||(o[7]=e("p",{class:"mb-4"},"扫描首先会尝试使用默认凭据（admin/admin）进行连接：",-1)),e("div",D,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",E,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// 先尝试默认账户
Common.LogDebug("尝试默认账户 admin:admin")

defaultCredential := ActiveMQCredential{Username: "admin", Password: "admin"}
defaultResult := tryActiveCredential(ctx, info, defaultCredential, Common.Timeout, Common.MaxRetries)

if defaultResult.Success {
    saveActiveMQSuccess(info, target, defaultResult.Credential)
    return nil
}`,2)])],2)]),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," STOMP 连接过程 ",2),o[8]||(o[8]=e("p",{class:"mb-4"},"ActiveMQ 验证使用 STOMP 协议发送 CONNECT 命令并解析响应：",-1)),e("div",N,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",P,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// ActiveMQConn 尝试ActiveMQ连接
func ActiveMQConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error) {
    addr := fmt.Sprintf("%s:%v", info.Host, info.Ports)

    // 使用上下文创建带超时的连接
    dialer := &net.Dialer{Timeout: time.Duration(Common.Timeout) * time.Second}
    conn, err := dialer.DialContext(ctx, "tcp", addr)
    if err != nil {
        return false, err
    }
    defer conn.Close()

    // STOMP协议的CONNECT命令
    stompConnect := fmt.Sprintf("CONNECT\\naccept-version:1.0,1.1,1.2\\nhost:/\\nlogin:%s\\npasscode:%s\\n\\n\\x00", user, pass)

    // 发送认证请求
    conn.SetWriteDeadline(time.Now().Add(time.Duration(Common.Timeout) * time.Second))
    if _, err := conn.Write([]byte(stompConnect)); err != nil {
        return false, err
    }

    // 读取响应
    conn.SetReadDeadline(time.Now().Add(time.Duration(Common.Timeout) * time.Second))
    respBuf := make([]byte, 1024)
    n, err := conn.Read(respBuf)
    if err != nil {
        return false, err
    }

    // 检查认证结果
    response := string(respBuf[:n])

    if strings.Contains(response, "CONNECTED") {
        return true, nil
    } else if strings.Contains(response, "Authentication failed") || strings.Contains(response, "ERROR") {
        return false, fmt.Errorf("认证失败")
    } else {
        return false, fmt.Errorf("未知响应: %s", response)
    }
}`,2)])],2)]),o[9]||(o[9]=e("p",{class:"mb-4"},"STOMP CONNECT 命令包含以下关键信息：",-1)),o[10]||(o[10]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,[e("code",null,"accept-version"),s("：支持的 STOMP 协议版本")]),e("li",null,[e("code",null,"host"),s('：目标主机（通常为 "/"）')]),e("li",null,[e("code",null,"login"),s("：用户名")]),e("li",null,[e("code",null,"passcore"),s("：密码")])],-1)),e("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",t(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",O,[a(t(i),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",t(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:n(["font-medium",t(r)?"text-amber-300":"text-amber-700"])},"认证提示",2),e("p",{class:n(["mt-1",t(r)?"text-amber-200":"text-amber-800"])},' 成功认证时，ActiveMQ 服务器会返回包含 "CONNECTED" 的响应；认证失败时，会返回包含 "Authentication failed" 或 "ERROR" 的响应。 ',2)])])],2),e("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[11]||(o[11]=e("p",{class:"mb-4"},"如果默认凭据检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),e("div",q,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",B,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// 生成所有凭据组合
credentials := generateActiveMQCredentials(Common.Userdict["activemq"], Common.Passwords)
Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["activemq"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentActiveMQScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
if result != nil {
    // 记录成功结果
    saveActiveMQSuccess(info, target, result.Credential)
    return nil
}`,2)])],2)]),o[12]||(o[12]=e("p",{class:"mb-4"},"凭据生成会对每个用户名和密码组合进行处理，支持变量替换：",-1)),e("div",I,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",j,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// generateActiveMQCredentials 生成ActiveMQ的用户名密码组合
func generateActiveMQCredentials(users, passwords []string) []ActiveMQCredential {
    var credentials []ActiveMQCredential
    for _, user := range users {
        for _, pass := range passwords {
            actualPass := strings.Replace(pass, "{user}", user, -1)
            credentials = append(credentials, ActiveMQCredential{
                Username: user,
                Password: actualPass,
            })
        }
    }
    return credentials
}`,2)])],2)]),o[13]||(o[13]=e("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),e("div",F,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",U,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// concurrentActiveMQScan 并发扫描ActiveMQ服务
func concurrentActiveMQScan(ctx context.Context, info *Common.HostInfo, credentials []ActiveMQCredential,
                            timeoutSeconds int64, maxRetries int) *ActiveMQScanResult {
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
    resultChan := make(chan *ActiveMQScanResult, 1)
    workChan := make(chan ActiveMQCredential, maxConcurrent)
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
                    result := tryActiveCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),e("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[14]||(o[14]=e("p",{class:"mb-4"},[s("ActiveMQ 扫描模块使用 "),e("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),e("code",null,"-t"),s(" 参数设置：")],-1)),e("div",H,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",W,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 61616 -m activemq -t 100",2)])],2)]),o[15]||(o[15]=e("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),e("div",L,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",G,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[16]||(o[16]=e("p",{class:"mb-4"},"ActiveMQ 扫描支持两层超时控制：",-1)),o[17]||(o[17]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,[e("strong",null,"单个连接超时"),s("：通过 "),e("code",null,"-time"),s(" 参数设置每个 ActiveMQ 连接尝试的最大时间（秒）")]),e("li",null,[e("strong",null,"全局超时"),s("：通过 "),e("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),e("div",V,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",z,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
dialer := &net.Dialer{Timeout: time.Duration(Common.Timeout) * time.Second}
conn, err := dialer.DialContext(ctx, "tcp", addr)`,2)])],2)]),e("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",t(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",$,[a(t(i),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",t(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:n(["font-medium",t(r)?"text-amber-300":"text-amber-700"])},"提示",2),e("p",{class:n(["mt-1",t(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。 ",2)])])],2),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[18]||(o[18]=e("p",{class:"mb-4"},[s("Fscan 的 ActiveMQ 扫描模块支持自动重试连接，通过 "),e("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),e("div",J,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",K,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},`// tryActiveCredential 尝试单个ActiveMQ凭据
func tryActiveCredential(ctx context.Context, info *Common.HostInfo, credential ActiveMQCredential,
                         timeoutSeconds int64, maxRetries int) *ActiveMQScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &ActiveMQScanResult{
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
            success, err := ActiveMQConn(ctx, info, credential.Username, credential.Password)

            if success {
                return &ActiveMQScanResult{Success: true, Credential: credential}
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

    return &ActiveMQScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),e("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),e("div",X,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",Y,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 61616,8161 -m activemq",2)])],2)]),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),e("div",Z,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",ee,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 61616 -m activemq -user admin,activemq,system -pwd admin123,activemq,{user}@123",2)])],2)]),e("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),e("div",te,[e("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",t(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",re,[e("code",{class:n(["transition-colors duration-300",t(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 61616,8161 -m activemq -t 100 -time 3 -retries 2 -o activemq_results.txt",2)])],2)]),o[19]||(o[19]=e("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),e("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",t(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[e("div",ne,[a(t(i),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",t(r)?"text-green-400":"text-green-600"])},null,8,["class"]),e("div",null,[e("p",{class:n(["font-medium",t(r)?"text-green-300":"text-green-700"])},"最佳实践",2),e("p",{class:n(["mt-1",t(r)?"text-green-200":"text-green-800"])}," 通常情况下，ActiveMQ 服务管理员会修改默认的用户名和密码。在扫描中添加目标环境常用的用户名和密码，可以提高扫描成功率。 ",2)])])],2)],2),e("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",t(r)?"border-gray-700":"border-gray-200"])},[e("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",t(r)?"text-green-400 hover:text-green-300":"text-green-600 hover:text-green-700"])},[a(t(i),{icon:"mdi:github",class:"mr-1.5"}),o[20]||(o[20]=e("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},le=y(oe,[["__scopeId","data-v-61fb368f"]]);export{le as default};
