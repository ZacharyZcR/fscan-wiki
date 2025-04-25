import{_ as p,i as y,r as f,a as i,q as c,b as t,n,d as e,e as s,I as a,F as u,g,t as d}from"./index-DnnHOreL.js";const v={class:"flex items-center mb-6"},h={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},P=["href"],D={class:"flex"},R={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},C={class:"flex items-center mb-2"},_={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},N={class:"overflow-x-auto mb-6"},F={class:"flex flex-col items-stretch"},L={class:"mb-4"},T={class:"p-3 text-sm font-mono overflow-x-auto"},E={class:"flex"},M={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"flex"},j={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"flex"},Y={__name:"rdp-scan",setup(Z){const r=y("isDark",f(!1)),m=["RDP 扫描简介","扫描原理与流程","配置参数与选项","RDP 协议栈实现","并发扫描实现","凭据尝试与连接","结果处理与保存","应用场景与示例"],x=[{name:"-m rdp",description:"启用 RDP 扫描模块",example:"-m rdp"},{name:"-p 3389",description:"指定 RDP 端口（默认为 3389）",example:"-p 3389,3390"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user administrator,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd P@ssw0rd,{user}123"},{name:"-domain",description:"指定域名（用于域账户认证）",example:"-domain CONTOSO"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 600"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o rdp_results.txt"}];return(tt,o)=>(c(),i("div",null,[t("div",v,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[s(e(a),{icon:"mdi:desktop-windows",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," RDP 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",h,[s(e(a),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(c(),i(u,null,g(m,(l,b)=>t("li",{key:b,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},d(l),9,P)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"RDP（Remote Desktop Protocol）扫描是 Fscan 的一个重要功能模块，用于发现网络中的远程桌面服务并尝试进行身份验证。本指南详细介绍 RDP 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," RDP 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"远程桌面协议（RDP）是微软开发的一种网络协议，允许用户连接到远程计算机并与之交互，就像坐在本地计算机前一样。Fscan 的 RDP 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 RDP 服务（默认端口 3389）"),t("li",null,"进行远程桌面身份验证测试（支持密码爆破）"),t("li",null,"支持 NLA（Network Level Authentication）认证"),t("li",null,"检测弱密码账户"),t("li",null,"支持域账户认证")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",D,[s(e(a),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," RDP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行 RDP 扫描可能违反法律法规，并可能被视为入侵行为。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"RDP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",R,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",C,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 RDP 服务（默认端口 3389）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",_,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"凭据生成",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 根据配置生成用户名与密码组合，支持变量替换和域账户格式 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"并发验证",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术同时测试多个凭据组合，支持超时控制和提前终止 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括认证方式和账户信息 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"RDP 扫描使用完整的 RDP 协议栈实现，包括 TPKT、X224、MCS、SEC 和 PDU 多个协议层，能够准确模拟真实 RDP 客户端的行为，提高扫描的准确性。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"RDP 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",N,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(c(),i(u,null,g(x,l=>t("tr",{key:l.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(l.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(l.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(l.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," RDP 协议栈实现 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"Fscan 使用完整的 RDP 协议栈来执行连接和身份验证，包括以下层次：",-1)),t("div",{class:n(["mb-6 relative overflow-hidden rounded-lg transition-colors duration-300 border",e(r)?"border-gray-700":"border-gray-200"])},[t("div",{class:n(["overflow-auto p-4",e(r)?"bg-gray-800":"bg-white"])},[t("div",F,[t("div",{class:n(["p-3 border rounded-t-lg transition-colors duration-300",e(r)?"bg-blue-900/20 border-blue-800/30":"bg-blue-50 border-blue-200"])},[t("div",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"5. PDU 层",2),t("div",{class:n(["mt-1 text-sm",e(r)?"text-blue-200":"text-blue-600"])},"提供远程桌面基本图形接口",2)],2),t("div",{class:n(["p-3 border-l border-r transition-colors duration-300",e(r)?"bg-blue-900/15 border-blue-800/30":"bg-blue-50/80 border-blue-200"])},[t("div",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"4. SEC 层",2),t("div",{class:n(["mt-1 text-sm",e(r)?"text-blue-200":"text-blue-600"])},"处理 RDP 安全加密和身份认证",2)],2),t("div",{class:n(["p-3 border-l border-r transition-colors duration-300",e(r)?"bg-blue-900/10 border-blue-800/30":"bg-blue-50/60 border-blue-200"])},[t("div",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"3. MCS/T.125 层",2),t("div",{class:n(["mt-1 text-sm",e(r)?"text-blue-200":"text-blue-600"])},"处理多通道和数据传输",2)],2),t("div",{class:n(["p-3 border-l border-r transition-colors duration-300",e(r)?"bg-blue-900/5 border-blue-800/30":"bg-blue-50/40 border-blue-200"])},[t("div",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"2. X.224 层",2),t("div",{class:n(["mt-1 text-sm",e(r)?"text-blue-200":"text-blue-600"])},"处理连接初始化和通信控制",2)],2),t("div",{class:n(["p-3 border rounded-b-lg transition-colors duration-300",e(r)?"bg-blue-900/0 border-blue-800/30":"bg-blue-50/20 border-blue-200"])},[t("div",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"1. TPKT 层",2),t("div",{class:n(["mt-1 text-sm",e(r)?"text-blue-200":"text-blue-600"])},"处理基础网络传输和封包",2)],2)])],2)],2),o[7]||(o[7]=t("p",{class:"mb-4"},"这种多层协议实现使 Fscan 能够处理各种 RDP 服务器配置，包括支持 NLA (Network Level Authentication) 的安全配置。",-1)),t("div",L,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",T,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// initProtocolStack 初始化RDP协议栈
func (g *Client) initProtocolStack(conn net.Conn, domain, user, pwd string) {
    // 创建协议层实例
    g.tpkt = tpkt.New(core.NewSocketLayer(conn), nla.NewNTLMv2(domain, user, pwd))
    g.x224 = x224.New(g.tpkt)
    g.mcs = t125.NewMCSClient(g.x224)
    g.sec = sec.NewClient(g.mcs)
    g.pdu = pdu.NewClient(g.sec)

    // 设置认证信息
    g.sec.SetUser(user)
    g.sec.SetPwd(pwd)
    g.sec.SetDomain(domain)

    // 配置协议层关联
    g.tpkt.SetFastPathListener(g.sec)
    g.sec.SetFastPathListener(g.pdu)
    g.pdu.SetFastPathSender(g.tpkt)
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",E,[s(e(a),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"NLA 支持说明",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," Fscan 支持通过 NTLMv2 进行 Network Level Authentication，这是一种更安全的 RDP 认证方式。NLA 要求在建立 RDP 会话之前进行用户认证，提高了安全性。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 并发扫描实现 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"RDP 扫描使用工作池模式进行并发处理，提高扫描效率：",-1)),t("div",M,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentRdpScan 并发扫描RDP服务
func concurrentRdpScan(ctx context.Context, info *Common.HostInfo, credentials []RDPCredential,
                       port int, timeoutSeconds int64) *RDPScanResult {
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
    resultChan := make(chan *RDPScanResult, 1)
    workChan := make(chan RDPCredential, maxConcurrent)
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
                    result := tryRdpCredential(scanCtx, info.Host, credential, port, timeoutSeconds)
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
}`,2)])],2)]),o[9]||(o[9]=t("p",{class:"mb-4"},"核心特性包括：",-1)),o[10]||(o[10]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"工作池大小根据配置的线程数和凭据数量自动调整"),t("li",null,"使用 Go 的 context 包实现超时控制和任务取消"),t("li",null,"成功发现有效凭据后立即取消其他正在进行的任务"),t("li",null,"等待组（WaitGroup）确保所有工作协程正确完成")],-1)),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据尝试与连接 ",2),o[11]||(o[11]=t("p",{class:"mb-4"},"每个 RDP 凭据尝试都在单独的 goroutine 中进行，包含完整的 RDP 协议交互：",-1)),t("div",A,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",H,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// Login 执行RDP登录
func (g *Client) Login(domain, user, pwd string, timeout int64) error {
    // 建立TCP连接
    conn, err := Common.WrapperTcpWithTimeout("tcp", g.Host, time.Duration(timeout)*time.Second)
    if err != nil {
        return fmt.Errorf("[连接错误] %v", err)
    }
    defer conn.Close()

    // 初始化协议栈
    g.initProtocolStack(conn, domain, user, pwd)

    // 建立X224连接
    if err = g.x224.Connect(); err != nil {
        return fmt.Errorf("[X224连接错误] %v", err)
    }

    // 等待连接完成
    wg := &sync.WaitGroup{}
    breakFlag := false
    wg.Add(1)

    // 设置事件处理器
    g.setupEventHandlers(wg, &breakFlag, &err)

    // 添加额外的超时保护
    connectionDone := make(chan struct{})
    go func() {
        wg.Wait()
        close(connectionDone)
    }()

    select {
    case <-connectionDone:
        // 连接过程正常完成
        return err
    case <-time.After(time.Duration(timeout) * time.Second):
        // 超时
        if !breakFlag {
            breakFlag = true
            wg.Done()
        }
        return fmt.Errorf("连接超时")
    }
}`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},"RDP 连接实现了完整的事件处理机制，包括成功、失败、错误和超时等多种情况：",-1)),t("div",I,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// setupEventHandlers 设置PDU事件处理器
func (g *Client) setupEventHandlers(wg *sync.WaitGroup, breakFlag *bool, err *error) {
    // 错误处理
    g.pdu.On("error", func(e error) {
        *err = e
        glog.Error("错误:", e)
        g.pdu.Emit("done")
    })

    // 连接关闭
    g.pdu.On("close", func() {
        *err = errors.New("连接关闭")
        glog.Info("连接已关闭")
        g.pdu.Emit("done")
    })

    // 连接成功
    g.pdu.On("success", func() {
        *err = nil
        glog.Info("连接成功")
        g.pdu.Emit("done")
    })

    // 连接就绪
    g.pdu.On("ready", func() {
        glog.Info("连接就绪")
        g.pdu.Emit("done")
    })

    // 完成处理
    g.pdu.On("done", func() {
        if !*breakFlag {
            *breakFlag = true
            wg.Done()
        }
    })
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",W,[s(e(a),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-green-300":"text-green-700"])},"安全考虑",2),t("p",{class:n(["mt-1",e(r)?"text-green-200":"text-green-800"])}," RDP 连接的异常处理机制确保了即使在网络不稳定或服务器过载的情况下，扫描也能正常结束而不会占用大量资源或导致程序崩溃。 ",2)])])],2),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 结果处理与保存 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},"扫描成功后，将保存结果并记录详细信息：",-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// saveRdpResult 保存RDP扫描结果
func saveRdpResult(info *Common.HostInfo, target string, port int, credential RDPCredential) {
    var successMsg string

    if credential.Domain != "" {
        successMsg = fmt.Sprintf("RDP %v Domain: %v\\\\%v Password: %v",
            target, credential.Domain, credential.Username, credential.Password)
    } else {
        successMsg = fmt.Sprintf("RDP %v Username: %v Password: %v",
            target, credential.Username, credential.Password)
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    details := map[string]interface{}{
        "port":     port,
        "service":  "rdp",
        "username": credential.Username,
        "password": credential.Password,
        "type":     "weak-password",
    }

    if credential.Domain != "" {
        details["domain"] = credential.Domain
    }

    vulnResult := &Common.ScanResult{
        Time:    time.Now(),
        Type:    Common.VULN,
        Target:  info.Host,
        Status:  "vulnerable",
        Details: details,
    }
    Common.SaveResult(vulnResult)
}`,2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"结果包含以下关键信息：",-1)),o[15]||(o[15]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"目标主机和端口"),t("li",null,"成功的用户名和密码"),t("li",null,"域名信息（如适用）"),t("li",null,"漏洞类型（弱密码）"),t("li",null,"发现时间")],-1)),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 基本 RDP 扫描 ",2),t("div",X,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 3389 -m rdp",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",V,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 3389 -m rdp -user administrator,admin -pwd P@ssw0rd,admin123,{user}2023",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 域环境 RDP 扫描 ",2),t("div",q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 3389 -m rdp -domain CONTOSO -user john,david -pwd Welcome123!,P@ssw0rd",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",$,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 3389 -m rdp -t 50 -time 5 -timeout 600 -o rdp_results.txt",2)])],2)]),o[16]||(o[16]=t("p",{class:"mb-4"},"这个配置使用 50 个线程，单个连接超时设置为 5 秒，全局扫描超时为 10 分钟，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",Q,[s(e(a),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," 使用 RDP 扫描时，建议从小范围开始测试并适当限制线程数和超时时间，避免对目标系统造成过大负载。在生产环境中进行扫描前，确保获得相关授权。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[s(e(a),{icon:"mdi:github",class:"mr-1.5"}),o[17]||(o[17]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},rt=p(Y,[["__scopeId","data-v-76a13dc6"]]);export{rt as default};
