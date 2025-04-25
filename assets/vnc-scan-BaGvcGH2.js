import{_ as f,i as p,r as v,a as c,q as b,b as t,n,d as e,e as a,I as l,F as u,g,t as d,f as s}from"./index-DnnHOreL.js";const C={class:"flex items-center mb-6"},h={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},V=["href"],_={class:"flex"},N={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},S={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},D={class:"flex items-center mb-2"},P={class:"flex items-center mb-2"},T={class:"overflow-x-auto mb-6"},E={class:"mb-4"},R={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"flex"},I={class:"mb-4"},M={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},A={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},L={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"flex"},K={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"flex"},ot={__name:"vnc-scan",setup(st){const r=p("isDark",v(!1)),x=["VNC 扫描简介","扫描原理与流程","配置参数与选项","VNC 认证过程","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m vnc",description:"启用 VNC 扫描模块",example:"-m vnc"},{name:"-p 5900",description:"指定 VNC 端口，默认为 5900",example:"-p 5900-5910"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd 123456,password,vnc"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o vnc_results.txt"}];return(at,o)=>(b(),c("div",null,[t("div",C,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:remote-desktop",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," VNC 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",h,[a(e(l),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(b(),c(u,null,g(x,(i,m)=>t("li",{key:m,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${m}`,class:"hover:underline"},d(i),9,V)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"VNC 扫描是 Fscan 的重要功能之一，用于发现网络中的 VNC（Virtual Network Computing）服务，并通过密码爆破尝试进行远程访问。本指南详细介绍 VNC 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," VNC 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"VNC（Virtual Network Computing）是一种图形桌面共享系统，允许用户远程连接到其他计算机，查看和操作其桌面。Fscan 的 VNC 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 VNC 服务（默认端口 5900、5901-5910）"),t("li",null,"自动进行 VNC 认证密码爆破"),t("li",null,"使用并发模式提高扫描效率"),t("li",null,"支持重试和超时控制，适应不同网络环境")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",_,[a(e(l),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," VNC 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"VNC 扫描模块采用多阶段扫描策略，高效识别并尝试访问目标系统：",-1)),t("div",N,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 VNC 服务（默认端口 5900、5901-5910）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码列表构建",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 基于配置和内置字典构建尝试密码列表，VNC只需验证密码，无需用户名 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",D,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"并发认证尝试",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术同时测试多个密码，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",P,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的认证密码，生成详细报告，包括服务信息和访问凭据 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"内部实现采用高效的协程池管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"VNC 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",T,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(b(),c(u,null,g(y,i=>t("tr",{key:i.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," VNC 认证过程 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},[s("VNC 使用基于 VNC 协议的认证机制。Fscan 使用 "),t("code",null,"go-vnc"),s(" 库实现与 VNC 服务器的通信和认证：")],-1)),t("div",E,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",R,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// VncConn 尝试建立VNC连接
func VncConn(ctx context.Context, info *Common.HostInfo, pass string) (bool, error) {
    Host, Port := info.Host, info.Ports
    timeout := time.Duration(Common.Timeout) * time.Second

    // 使用带上下文的TCP连接
    var d net.Dialer
    conn, err := d.DialContext(ctx, "tcp", fmt.Sprintf("%s:%s", Host, Port))
    if err != nil {
        return false, err
    }
    defer conn.Close()

    // 设置读写超时
    if err := conn.SetDeadline(time.Now().Add(timeout)); err != nil {
        return false, err
    }

    // 配置VNC客户端
    config := &vnc.ClientConfig{
        Auth: []vnc.ClientAuth{
            &vnc.PasswordAuth{
                Password: pass,
            },
        },
    }

    // 尝试VNC认证
    client, err := vnc.Client(conn, config)
    if err != nil {
        return false, err
    }

    // 认证成功
    defer client.Close()
    return true, nil
}`,2)])],2)]),o[7]||(o[7]=t("p",{class:"mb-4"},"认证过程的主要步骤包括：",-1)),o[8]||(o[8]=t("ol",{class:"pl-5 list-decimal space-y-2 mb-6"},[t("li",null,"建立到 VNC 服务器的 TCP 连接"),t("li",null,"配置 VNC 客户端，使用提供的密码创建 PasswordAuth 认证方式"),t("li",null,"尝试连接到 VNC 服务器并进行认证"),t("li",null,"分析认证结果，确定密码是否正确")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",H,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"认证提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 与其他服务不同，VNC 认证通常只需要密码，不需要提供用户名。这使得 VNC 密码爆破相对简单，但也意味着 VNC 服务器应该使用更强的密码保护。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[9]||(o[9]=t("p",{class:"mb-4"},"VNC 扫描的密码爆破流程使用并发工作池实现高效测试：",-1)),t("div",I,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",M,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建密码列表
var credentials []VncCredential
for _, pass := range Common.Passwords {
    credentials = append(credentials, VncCredential{Password: pass})
}

Common.LogDebug(fmt.Sprintf("开始尝试密码组合 (总密码数: %d)", len(credentials)))

// 使用工作池并发扫描
result := concurrentVncScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
if result != nil {
    // 记录成功结果
    saveVncResult(info, target, result.Credential)
    return nil
}`,2)])],2)]),o[10]||(o[10]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",A,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentVncScan 并发扫描VNC服务
func concurrentVncScan(ctx context.Context, info *Common.HostInfo, credentials []VncCredential,
                       timeoutSeconds int64, maxRetries int) *VncScanResult {
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
    resultChan := make(chan *VncScanResult, 1)
    workChan := make(chan VncCredential, maxConcurrent)
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
                    result := tryVncCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"单个凭据尝试支持多次重试，自动处理临时网络错误：",-1)),t("div",F,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryVncCredential 尝试单个VNC凭据
func tryVncCredential(ctx context.Context, info *Common.HostInfo, credential VncCredential,
                      timeoutSeconds int64, maxRetries int) *VncScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &VncScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试密码: %s", retry+1, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := VncConn(connCtx, info, credential.Password)
            cancel()

            if success {
                return &VncScanResult{Success: true, Credential: credential}
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

    return &VncScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[12]||(o[12]=t("p",{class:"mb-4"},[s("VNC 扫描模块使用 "),t("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),s(" 参数设置：")],-1)),t("div",B,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5900 -m vnc -t 50",2)])],2)]),o[13]||(o[13]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",L,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[14]||(o[14]=t("p",{class:"mb-4"},"VNC 扫描支持两层超时控制：",-1)),o[15]||(o[15]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 VNC 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
success, err := VncConn(connCtx, info, credential.Password)
cancel()`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",J,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," VNC 连接可能比其他服务需要更长的响应时间，特别是在网络延迟较高的环境。推荐设置稍长的连接超时时间（3-5 秒）以减少误报。 ",2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[16]||(o[16]=t("p",{class:"mb-4"},[s("VNC 扫描支持自动重试连接，通过 "),t("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),t("div",K,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 5900 -m vnc -retries 3",2)])],2)]),o[17]||(o[17]=t("p",{class:"mb-4"},"重试机制会自动区分临时网络错误和认证失败错误，只对可能成功的情况进行重试：",-1)),t("div",Q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`if err != nil {
    // 检查是否需要重试
    if retryErr := Common.CheckErrs(err); retryErr == nil {
        break // 不需要重试的错误
    }
}`,2)])],2)]),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",X,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5900-5910 -m vnc",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义密码列表 ",2),t("div",Z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 5900 -m vnc -pwd 123456,password,admin,vnc",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",et,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5900-5910 -m vnc -t 100 -time 5 -retries 2 -o vnc_results.txt",2)])],2)]),o[18]||(o[18]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",nt,[a(e(l),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])},' VNC 服务器常见的弱密码包括空密码、默认密码（如 "password"、"vnc"）以及简单的数字组合（如 "123456"、"12345678"）。确保在扫描时包含这些常见密码。 ',2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),o[19]||(o[19]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},it=f(ot,[["__scopeId","data-v-cc159c0a"]]);export{it as default};
