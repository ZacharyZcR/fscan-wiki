import{_ as p,i as f,r as v,a as m,q as c,b as t,n,d as e,e as a,I as l,F as u,g,t as d,f as o}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},S={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},C=["href"],P={class:"flex"},M={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},T={class:"flex items-center mb-2"},_={class:"flex items-center mb-2"},R={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},D={class:"overflow-x-auto mb-6"},I={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"flex"},E={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},U={class:"flex"},H={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"flex"},O={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"mb-4"},nt={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"flex"},ot={__name:"smtp-scan",setup(at){const r=f("isDark",v(!1)),x=["SMTP 扫描简介","扫描原理与流程","配置参数与选项","匿名访问检测","认证与连接过程","密码爆破流程","高级设置","结果处理","应用场景与示例"],y=[{name:"-m smtp",description:"启用 SMTP 扫描模块",example:"-m smtp"},{name:"-p 25,465,587",description:"SMTP 常用端口，多个用逗号分隔",example:"-p 25,465,587"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,mail,postmaster"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd 123456,{user}123,admin"},{name:"-t",description:"设置并发线程数",example:"-t 20"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o smtp_result.txt"}];return(lt,s)=>(c(),m("div",null,[t("div",h,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:email",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," SMTP 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",S,[a(e(l),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(c(),m(u,null,g(x,(i,b)=>t("li",{key:b,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},d(i),9,C)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[s[0]||(s[0]=t("p",{class:"mb-4"},"SMTP 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的邮件服务器，并尝试检测匿名访问或通过弱密码进行身份验证。本指南详细介绍 SMTP 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," SMTP 扫描简介 ",2),s[1]||(s[1]=t("p",{class:"mb-4"},"SMTP（Simple Mail Transfer Protocol）是用于发送电子邮件的标准协议，广泛应用于互联网和企业邮件系统。Fscan 的 SMTP 扫描模块可以：",-1)),s[2]||(s[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 SMTP 服务（默认端口 25、465、587）"),t("li",null,"检测是否允许匿名访问"),t("li",null,"执行弱密码检测，破解邮件服务器认证"),t("li",null,"验证发送邮件的权限")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",P,[a(e(l),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," SMTP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规，也可能触发邮件服务器的安全防护机制。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),s[3]||(s[3]=t("p",{class:"mb-4"},"SMTP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",M,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 SMTP 服务（端口 25、465、587 等）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",_,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"匿名访问检测",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试不提供用户名和密码进行连接，检测是否允许匿名访问 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",R,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果不允许匿名访问，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"权限验证",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 通过尝试发起邮件发送操作，验证认证是否成功并测试权限范围 ",2)],2)]),s[4]||(s[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),s[5]||(s[5]=t("p",{class:"mb-4"},"SMTP 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",D,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(c(),m(u,null,g(y,i=>t("tr",{key:i.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 匿名访问检测 ",2),s[6]||(s[6]=t("p",{class:"mb-4"},"SMTP 扫描首先会尝试检测服务器是否允许匿名访问，这是一个常见的安全风险：",-1)),t("div",I,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 先测试匿名访问
Common.LogDebug("尝试匿名访问...")
anonymousResult := trySmtpCredential(ctx, info, SmtpCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if anonymousResult.Success {
    // 匿名访问成功
    saveSmtpResult(info, target, anonymousResult)
    return nil
}`,2)])],2)]),s[7]||(s[7]=t("p",{class:"mb-4"},"匿名访问检测会尝试不提供用户名和密码进行连接，如果服务器允许这种操作并且能够发送邮件，则表示存在安全风险。这通常是由于邮件服务器配置不当导致的。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",A,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"安全隐患",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 允许匿名访问的 SMTP 服务器可能被用于垃圾邮件发送或电子邮件欺骗攻击。在生产环境中，应确保 SMTP 服务器始终需要身份验证。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 认证与连接过程 ",2),s[8]||(s[8]=t("p",{class:"mb-4"},[o("SMTP 认证采用标准的 SMTP 协议流程，通过 Go 语言的 "),t("code",null,"net/smtp"),o(" 包实现：")],-1)),t("div",E,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",L,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// SmtpConn 尝试 SMTP 连接
func SmtpConn(info *Common.HostInfo, user string, pass string, timeoutSeconds int64) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(timeoutSeconds) * time.Second
    addr := fmt.Sprintf("%s:%s", host, port)

    // 设置连接超时
    dialer := &net.Dialer{
        Timeout: timeout,
    }

    conn, err := dialer.Dial("tcp", addr)
    if err != nil {
        return false, err
    }
    defer conn.Close()

    // 设置读写超时
    conn.SetDeadline(time.Now().Add(timeout))

    client, err := smtp.NewClient(conn, host)
    if err != nil {
        return false, err
    }
    defer client.Close()

    // 尝试认证
    if user != "" {
        auth := smtp.PlainAuth("", user, pass, host)
        err = client.Auth(auth)
        if err != nil {
            return false, err
        }
    }

    // 尝试发送邮件（测试权限）
    err = client.Mail("test@test.com")
    if err != nil {
        return false, err
    }

    return true, nil
}`,2)])],2)]),s[9]||(s[9]=t("p",{class:"mb-4"},"SMTP 连接和认证过程包括以下关键步骤：",-1)),s[10]||(s[10]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"建立 TCP 连接到目标 SMTP 服务器"),t("li",null,"创建 SMTP 客户端"),t("li",null,"如果提供了用户名和密码，则使用 PLAIN 认证方式进行身份验证"),t("li",null,[o("尝试发起邮件发送操作（"),t("code",null,"client.Mail()"),o("）以验证权限")])],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",U,[a(e(l),{icon:"mdi:information-outline",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"认证流程说明",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," SMTP PLAIN 认证是一种基础认证方式，将凭据以 Base64 编码形式发送。现代 SMTP 服务器通常支持多种认证方式，如 LOGIN、CRAM-MD5 等，但 PLAIN 认证兼容性最好，被大多数服务器支持。 ",2)])])],2),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),s[11]||(s[11]=t("p",{class:"mb-4"},"如果匿名访问检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),t("div",H,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",j,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []SmtpCredential
for _, user := range Common.Userdict["smtp"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, SmtpCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["smtp"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentSmtpScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),s[12]||(s[12]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",B,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentSmtpScan 并发扫描SMTP服务
func concurrentSmtpScan(ctx context.Context, info *Common.HostInfo, credentials []SmtpCredential,
                         timeoutSeconds int64, maxRetries int) *SmtpScanResult {
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
    resultChan := make(chan *SmtpScanResult, 1)
    workChan := make(chan SmtpCredential, maxConcurrent)
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
                    result := trySmtpCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略后续代码...
}`,2)])],2)]),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),s[13]||(s[13]=t("p",{class:"mb-4"},[o("SMTP 扫描模块使用 "),t("code",null,"ModuleThreadNum"),o(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),o(" 参数设置：")],-1)),t("div",G,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 25 -m smtp -t 50",2)])],2)]),s[14]||(s[14]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),s[15]||(s[15]=t("p",{class:"mb-4"},"SMTP 扫描支持两层超时控制：",-1)),s[16]||(s[16]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),o("：通过 "),t("code",null,"-time"),o(" 参数设置每个 SMTP 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),o("：通过 "),t("code",null,"-timeout"),o(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",W,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 设置单个连接超时
timeout := time.Duration(timeoutSeconds) * time.Second
dialer := &net.Dialer{
    Timeout: timeout,
}
conn, err := dialer.Dial("tcp", addr)
// ...
conn.SetDeadline(time.Now().Add(timeout))`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",z,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," SMTP 服务器可能会限制短时间内的连接尝试次数，防止暴力破解攻击。设置适当的超时和线程数可以避免触发服务器的防护机制。 ",2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),s[17]||(s[17]=t("p",{class:"mb-4"},[o("SMTP 扫描模块支持自动重试连接，通过 "),t("code",null,"-retries"),o(" 参数设置最大重试次数：")],-1)),t("div",O,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// trySmtpCredential 尝试单个SMTP凭据
func trySmtpCredential(ctx context.Context, info *Common.HostInfo, credential SmtpCredential,
                        timeoutSeconds int64, maxRetries int) *SmtpScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &SmtpScanResult{
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
            // ...省略详细实现...

            if success {
                isAnonymous := credential.Username == "" && credential.Password == ""
                return &SmtpScanResult{
                    Success:     true,
                    Credential:  credential,
                    IsAnonymous: isAnonymous,
                }
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

    return &SmtpScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),s[18]||(s[18]=t("p",{class:"mb-4"},"重试机制会跳过一些不需要重试的错误（如身份验证错误），只对网络波动等临时性问题进行重试，提高扫描效率。",-1)),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 结果处理 ",2),s[19]||(s[19]=t("p",{class:"mb-4"},"SMTP 扫描会根据扫描结果生成详细的报告，并记录安全风险：",-1)),t("div",J,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// saveSmtpResult 保存SMTP扫描结果
func saveSmtpResult(info *Common.HostInfo, target string, result *SmtpScanResult) {
    var successMsg string
    var details map[string]interface{}

    if result.IsAnonymous {
        successMsg = fmt.Sprintf("SMTP服务 %s 允许匿名访问", target)
        details = map[string]interface{}{
            "port":      info.Ports,
            "service":   "smtp",
            "type":      "anonymous-access",
            "anonymous": true,
        }
    } else {
        successMsg = fmt.Sprintf("SMTP服务 %s 爆破成功 用户名: %v 密码: %v",
            target, result.Credential.Username, result.Credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "smtp",
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
}`,2)])],2)]),s[20]||(s[20]=t("p",{class:"mb-4"},"结果处理会区分两种安全风险：",-1)),s[21]||(s[21]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"匿名访问"),o('：标记为 "anonymous-access" 类型的漏洞，允许未经身份验证的用户访问')]),t("li",null,[t("strong",null,"弱密码"),o('：标记为 "weak-password" 类型的漏洞，记录成功破解的用户名和密码')])],-1)),t("h2",{id:"section-8",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 扫描邮件服务器 ",2),t("div",Q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 25 -m smtp",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 检测多个端口 ",2),t("div",Y,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 25,465,587 -m smtp",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",tt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 25 -m smtp -user admin,mail,user -pwd admin123,{user}@123,password",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",rt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",nt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 25,465,587 -m smtp -t 30 -time 5 -retries 2 -o smtp_results.txt",2)])],2)]),s[22]||(s[22]=t("p",{class:"mb-4"},"这个配置使用 30 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",st,[a(e(l),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-green-300":"text-green-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-green-200":"text-green-800"])}," 对 SMTP 服务进行扫描时，请控制好扫描速度和总请求量，避免触发目标服务器的安全防护机制。邮件服务器通常会限制来自同一 IP 的连接数和认证尝试次数。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),s[23]||(s[23]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},dt=p(ot,[["__scopeId","data-v-2d7656cf"]]);export{dt as default};
