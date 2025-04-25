import{_ as y,i as p,r as h,a as c,q as m,b as t,n,d as e,e as a,I as l,F as u,g,t as d,h as v,f as s}from"./index-DnnHOreL.js";const I={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},A=["href"],P={class:"flex"},M={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},_={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},D={class:"flex items-center mb-2"},E={class:"flex items-center mb-2"},k={class:"overflow-x-auto mb-6"},N={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},T={class:"mb-4"},R={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"flex"},G={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"flex"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"mb-4"},nt={class:"p-3 text-sm font-mono overflow-x-auto"},ot={class:"flex"},st={__name:"imap-scan",setup(at){const r=p("isDark",h(!1)),x=["IMAP 扫描简介","扫描原理与流程","配置参数与选项","认证过程详解","密码爆破流程","高级设置","应用场景与示例"],f=[{name:"-m imap",description:"启用 IMAP 扫描模块",example:"-m imap"},{name:"-p 143,993",description:"IMAP 常用端口，多个用逗号分隔（143为普通IMAP，993为IMAPS）",example:"-p 143,993"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,user1,user2"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd admin123,{user}@123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(lt,o)=>(m(),c("div",null,[t("div",I,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:email",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," IMAP 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",C,[a(e(l),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(m(),c(u,null,g(x,(i,b)=>t("li",{key:b,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},d(i),9,A)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"IMAP 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 IMAP 邮件服务器，并尝试通过弱密码进行身份验证。本指南详细介绍 IMAP 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," IMAP 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"IMAP（Internet Message Access Protocol）是一种用于访问电子邮件的协议，允许用户从远程邮件服务器上访问和管理邮件。Fscan 的 IMAP 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 IMAP 服务（默认端口 143、993）"),t("li",null,"支持普通 IMAP 和基于 TLS 的 IMAPS 连接"),t("li",null,"执行用户名和密码组合的爆破测试"),t("li",null,"识别易受攻击的弱密码账户"),t("li",null,"支持自定义用户名和密码字典")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",P,[a(e(l),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," IMAP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规，邮件服务尤其敏感。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"IMAP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",M,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",_,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 IMAP 服务（默认端口 143、993）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"连接协议识别",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 自动区分普通 IMAP 和加密的 IMAPS 连接，优先尝试普通连接，如失败则尝试 TLS 加密连接 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",D,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"凭据爆破",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",E,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"IMAP 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",k,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(u,null,g(f,i=>t("tr",{key:i.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 认证过程详解 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"IMAP 扫描模块使用标准的 IMAP 协议命令来验证凭据。认证过程支持普通连接和 TLS 加密连接：",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 连接策略 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},"扫描器会先尝试普通的 IMAP 连接，如果失败则会尝试使用 TLS 加密连接：",-1)),t("div",N,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",L,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 先尝试普通连接
dialer := &net.Dialer{Timeout: timeout}
conn, err := dialer.DialContext(ctx, "tcp", addr)
if err == nil {
    flag, authErr := tryIMAPAuth(conn, user, pass, timeout)
    conn.Close()
    if authErr == nil {
        return flag, nil
    }
}

// 如果普通连接失败或认证失败，尝试TLS连接
tlsConfig := &tls.Config{
    InsecureSkipVerify: true,
}
tlsConn, tlsErr := tls.DialWithDialer(dialer, "tcp", addr, tlsConfig)
if tlsErr != nil {
    return false, fmt.Errorf("连接失败: %v", tlsErr)
}
defer tlsConn.Close()

flag, authErr := tryIMAPAuth(tlsConn, user, pass, timeout)`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," IMAP 登录流程 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"认证过程使用 IMAP LOGIN 命令进行凭据验证：",-1)),t("div",T,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",R,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryIMAPAuth 尝试IMAP认证
func tryIMAPAuth(conn net.Conn, user string, pass string, timeout time.Duration) (bool, error) {
    conn.SetDeadline(time.Now().Add(timeout))

    reader := bufio.NewReader(conn)
    // 读取服务器欢迎消息
    _, err := reader.ReadString('\\n')
    if err != nil {
        return false, fmt.Errorf("读取欢迎消息失败: %v", err)
    }

    // 发送 LOGIN 命令
    loginCmd := fmt.Sprintf("a001 LOGIN \\"%s\\" \\"%s\\"\\r\\n", user, pass)
    _, err = conn.Write([]byte(loginCmd))
    if err != nil {
        return false, fmt.Errorf("发送登录命令失败: %v", err)
    }

    // 解析响应
    for {
        conn.SetDeadline(time.Now().Add(timeout))
        response, err := reader.ReadString('\\n')
        if err != nil {
            if err == io.EOF {
                return false, fmt.Errorf("认证失败")
            }
            return false, fmt.Errorf("读取响应失败: %v", err)
        }

        // 检查认证结果
        if strings.Contains(response, "a001 OK") {
            return true, nil
        }

        if strings.Contains(response, "a001 NO") || strings.Contains(response, "a001 BAD") {
            return false, fmt.Errorf("认证失败")
        }
    }
}`,2)])],2)]),o[9]||(o[9]=v('<p class="mb-4" data-v-ab63b9bc>IMAP LOGIN 命令格式和响应判断：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-ab63b9bc><li data-v-ab63b9bc>命令格式: <code data-v-ab63b9bc>a001 LOGIN &quot;username&quot; &quot;password&quot;</code>，其中 a001 是客户端定义的标签</li><li data-v-ab63b9bc>成功响应: <code data-v-ab63b9bc>a001 OK LOGIN completed</code> 或类似包含 &quot;a001 OK&quot; 的响应</li><li data-v-ab63b9bc>失败响应: <code data-v-ab63b9bc>a001 NO LOGIN failed</code> 或 <code data-v-ab63b9bc>a001 BAD syntax error</code></li></ul>',2)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",O,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"认证提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 现代 IMAP 服务器通常会提供多种认证机制，但 Fscan 目前使用最基本的 LOGIN 命令进行认证测试。这种方法适用于大多数服务器，但某些高安全性服务器可能禁用基本认证。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"IMAP 扫描采用并发爆破策略，提高扫描效率：",-1)),t("div",G,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// IMAPScan 主扫描函数
func IMAPScan(info *Common.HostInfo) error {
    if Common.DisableBrute {
        return nil
    }

    target := fmt.Sprintf("%v:%v", info.Host, info.Ports)
    Common.LogDebug(fmt.Sprintf("开始扫描 %s", target))

    // 设置全局超时上下文
    ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
    defer cancel()

    // 构建凭据列表
    var credentials []IMAPCredential
    for _, user := range Common.Userdict["imap"] {
        for _, pass := range Common.Passwords {
            actualPass := strings.Replace(pass, "{user}", user, -1)
            credentials = append(credentials, IMAPCredential{
                Username: user,
                Password: actualPass,
            })
        }
    }

    Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
        len(Common.Userdict["imap"]), len(Common.Passwords), len(credentials)))

    // 并发扫描
    result := concurrentIMAPScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
    if result != nil {
        // 记录成功结果
        saveIMAPResult(info, target, result.Credential)
        return nil
    }

    // ...
}`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentIMAPScan 并发扫描IMAP服务
func concurrentIMAPScan(ctx context.Context, info *Common.HostInfo, credentials []IMAPCredential,
                        timeoutSeconds int64, maxRetries int) *IMAPScanResult {
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
    resultChan := make(chan *IMAPScanResult, 1)
    workChan := make(chan IMAPCredential, maxConcurrent)
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
                    result := tryIMAPCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略发送工作和等待结果部分...
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[12]||(o[12]=t("p",{class:"mb-4"},[s("IMAP 扫描模块使用 "),t("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),s(" 参数设置：")],-1)),t("div",W,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",j,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 143,993 -m imap -t 100",2)])],2)]),o[13]||(o[13]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",H,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[14]||(o[14]=t("p",{class:"mb-4"},"IMAP 扫描支持两层超时控制：",-1)),o[15]||(o[15]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 IMAP 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",V,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
conn.SetDeadline(time.Now().Add(timeout))`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",z,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," IMAP 服务器响应时间可能较长，特别是在高负载的邮件服务器上。建议将单个连接超时设置为至少 5 秒，以避免因超时过短而导致的误报。 ",2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[16]||(o[16]=t("p",{class:"mb-4"},[s("Fscan 的 IMAP 扫描模块支持自动重试连接，通过 "),t("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),t("div",$,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryIMAPCredential 尝试单个IMAP凭据
func tryIMAPCredential(ctx context.Context, info *Common.HostInfo, credential IMAPCredential,
                       timeoutSeconds int64, maxRetries int) *IMAPScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &IMAPScanResult{
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
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := IMAPConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                return &IMAPScanResult{Success: true, Credential: credential}
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

    return &IMAPScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 143,993 -m imap",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",Y,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 143 -m imap -user admin,user1,user2 -pwd admin123,password,{user}@123",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 仅扫描 IMAPS 服务 ",2),t("div",tt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 993 -m imap",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",rt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",nt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 143,993 -m imap -t 50 -time 5 -retries 2 -o imap_results.txt",2)])],2)]),o[17]||(o[17]=t("p",{class:"mb-4"},"这个配置使用 50 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",ot,[a(e(l),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," 邮件服务通常有账户锁定机制，过多的密码尝试可能导致账户被临时锁定。在生产环境中进行测试时应当谨慎，并考虑增加线程之间的时间间隔。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),o[18]||(o[18]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},dt=y(st,[["__scopeId","data-v-ab63b9bc"]]);export{dt as default};
