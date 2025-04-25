import{_ as y,i as p,r as S,a as b,q as c,b as t,n as s,d as r,e as n,I as a,F as g,g as u,t as i,h as v,f as d}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},_={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},C=["href"],M={class:"flex"},E={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},T={class:"flex items-center mb-2"},B={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},U={class:"flex items-center mb-2"},D={class:"overflow-x-auto mb-6"},A={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},N={class:"flex"},I={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},P={class:"flex"},R={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"flex"},Q={__name:"smb-scan",setup(Y){const e=p("isDark",S(!1)),x=["SMB 扫描简介","扫描原理与流程","配置参数与选项","账户锁定防护","SMB 认证过程","并发扫描实现","域环境支持","应用场景与示例"],f=[{name:"-m smb",description:"启用 SMB 扫描模块",example:"-m smb"},{name:"-p 445",description:"指定 SMB 端口（默认为 445）",example:"-p 445"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user administrator,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd admin123,{user}@2023"},{name:"-domain",description:"指定域名（用于域环境）",example:"-domain CONTOSO"},{name:"-t",description:"设置并发线程数",example:"-t 10"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(Z,o)=>(c(),b("div",null,[t("div",h,[t("div",{class:s(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",r(e)?"bg-blue-900/30":"bg-blue-100"])},[n(r(a),{icon:"mdi:microsoft-windows",class:s(["text-xl",r(e)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:s(["text-2xl font-bold transition-colors duration-300",r(e)?"text-white":"text-gray-900"])}," SMB 扫描指南 ",2)]),t("div",{class:s(["mb-6 rounded-lg p-3 transition-colors duration-300",r(e)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",_,[n(r(a),{icon:"mdi:format-list-bulleted",class:s(["mr-2",r(e)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:s(["font-medium text-sm transition-colors duration-300",r(e)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(c(),b(g,null,u(x,(l,m)=>t("li",{key:m,class:s(["transition-colors duration-200 text-sm font-normal",r(e)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${m}`,class:"hover:underline"},i(l),9,C)],2)),64))])],2),t("div",{class:s(["doc-content transition-colors duration-300",r(e)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"SMB (Server Message Block) 扫描是 Fscan 的重要功能之一，用于发现网络中的 Windows 文件共享服务，并尝试通过弱密码进行身份验证。本指南详细介绍 SMB 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," SMB 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"SMB 协议是 Windows 网络环境中常用的文件共享协议，广泛应用于局域网内的文件访问、打印共享和域认证。Fscan 的 SMB 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 SMB 服务（默认端口 445）"),t("li",null,"尝试使用不同的用户名和密码组合进行身份验证"),t("li",null,"支持域环境（Domain）认证"),t("li",null,"检测用户账户锁定，避免造成拒绝服务"),t("li",null,"识别各类登录失败原因（密码错误、账户禁用、密码过期等）")],-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",M,[n(r(a),{icon:"mdi:shield-alert",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",r(e)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:s(["mt-1",r(e)?"text-blue-200":"text-blue-800"])}," SMB 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规，并可能触发账户锁定策略。 ",2)])])],2),t("h2",{id:"section-1",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"SMB 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",E,[t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",r(e)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:s(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:s(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 SMB 服务（默认端口 445）的主机 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",B,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",r(e)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:s(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"凭据生成",2)]),t("p",{class:s(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 根据用户字典和密码字典生成凭据组合，支持{user}变量替换 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",r(e)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:s(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"并发认证",2)]),t("p",{class:s(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 使用多线程技术同时测试多个凭据，支持用户锁定检测，避免对同一用户的重复尝试 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",U,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",r(e)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:s(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:s(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 详细解析 SMB 认证错误，区分密码错误、账号锁定、账号禁用等状态 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"SMB 扫描的实现考虑了网络环境的安全性，通过错误检测和账户锁定检测，降低对目标系统的影响。同时通过并发扫描和超时控制，提高了扫描效率。",-1)),t("h2",{id:"section-2",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"SMB 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",D,[t("table",{class:s(["min-w-full rounded-lg overflow-hidden text-sm font-normal",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:s(r(e)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:s(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:s(["divide-y",r(e)?"divide-gray-700":"divide-gray-200"])},[(c(),b(g,null,u(f,l=>t("tr",{key:l.name,class:s(r(e)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:s(["py-2 px-4 font-mono",r(e)?"text-blue-400":"text-blue-600"])},i(l.name),3),t("td",{class:s(["py-2 px-4",r(e)?"text-gray-300":"text-gray-700"])},i(l.description),3),t("td",{class:s(["py-2 px-4 font-mono",r(e)?"text-gray-400":"text-gray-500"])},i(l.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 账户锁定防护 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"SMB 服务通常配置有账户锁定策略，多次错误密码尝试会导致账户被锁定。Fscan 的 SMB 扫描模块通过智能识别账户锁定状态，避免继续尝试已锁定的账户：",-1)),t("div",A,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 记录用户锁定状态，避免继续尝试已锁定的用户
lockedUsers := make(map[string]bool)
var lockedMutex sync.Mutex

// 在工作协程中检查用户是否已锁定
lockedMutex.Lock()
locked := lockedUsers[credential.Username]
lockedMutex.Unlock()
if locked {
    Common.LogDebug(fmt.Sprintf("跳过已锁定用户: %s", credential.Username))
    continue
}

// 检查账号锁定错误
if result.Error != nil && strings.Contains(result.Error.Error(), "账号锁定") {
    lockedMutex.Lock()
    lockedUsers[credential.Username] = true
    lockedMutex.Unlock()
    Common.LogError(fmt.Sprintf("用户 %s 已被锁定", credential.Username))
}`,2)])],2)]),o[7]||(o[7]=t("p",{class:"mb-4"},"该机制通过维护一个锁定用户列表，在扫描过程中动态识别和记录被锁定的账户，避免无效尝试，降低对目标系统的影响。",-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",N,[n(r(a),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",r(e)?"text-amber-300":"text-amber-700"])},"最佳实践",2),t("p",{class:s(["mt-1",r(e)?"text-amber-200":"text-amber-800"])}," 在扫描生产环境时，建议使用较小的密码列表，并降低线程数（如 -t 5），减少触发账户锁定策略的风险。 ",2)])])],2),t("h2",{id:"section-4",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," SMB 认证过程 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"SMB 认证使用 NTLM 或 Kerberos 协议进行身份验证，Fscan 通过调用底层 SMB 库实现连接和认证：",-1)),t("div",I,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",L,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// SmblConn 尝试建立SMB连接并认证
func SmblConn(info *Common.HostInfo, user string, pass string, signal chan struct{}) (flag bool, err error) {
    options := smb.Options{
        Host:        info.Host,
        Port:        445,
        User:        user,
        Password:    pass,
        Domain:      Common.Domain,
        Workstation: "",
    }

    session, err := smb.NewSession(options, false)
    if err == nil {
        defer session.Close()
        if session.IsAuthenticated {
            return true, nil
        }
        return false, fmt.Errorf("认证失败")
    }

    // 清理错误信息中的换行符和多余空格
    errMsg := strings.TrimSpace(strings.ReplaceAll(err.Error(), "\\n", " "))
    if strings.Contains(errMsg, "NT Status Error") {
        switch {
        case strings.Contains(errMsg, "STATUS_LOGON_FAILURE"):
            err = fmt.Errorf("密码错误")
        case strings.Contains(errMsg, "STATUS_ACCOUNT_LOCKED_OUT"):
            err = fmt.Errorf("账号锁定")
        case strings.Contains(errMsg, "STATUS_ACCESS_DENIED"):
            err = fmt.Errorf("拒绝访问")
        case strings.Contains(errMsg, "STATUS_ACCOUNT_DISABLED"):
            err = fmt.Errorf("账号禁用")
        case strings.Contains(errMsg, "STATUS_PASSWORD_EXPIRED"):
            err = fmt.Errorf("密码过期")
        case strings.Contains(errMsg, "STATUS_USER_SESSION_DELETED"):
            return false, fmt.Errorf("会话断开")
        default:
            err = fmt.Errorf("认证失败")
        }
    }

    signal <- struct{}{}
    return false, err
}`,2)])],2)]),o[9]||(o[9]=v('<p class="mb-4" data-v-0a1109b1>Fscan 对 SMB 认证错误进行了详细解析，可以区分以下常见状态：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-0a1109b1><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_LOGON_FAILURE</strong>：提供的用户名或密码不正确</li><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_ACCOUNT_LOCKED_OUT</strong>：账户因多次密码错误而被锁定</li><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_ACCESS_DENIED</strong>：认证成功但用户无权访问</li><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_ACCOUNT_DISABLED</strong>：账户被管理员禁用</li><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_PASSWORD_EXPIRED</strong>：密码已过期需要重置</li><li data-v-0a1109b1><strong data-v-0a1109b1>STATUS_USER_SESSION_DELETED</strong>：用户会话被删除或断开</li></ul>',2)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",P,[n(r(a),{icon:"mdi:information",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",r(e)?"text-blue-300":"text-blue-700"])},"信息",2),t("p",{class:s(["mt-1",r(e)?"text-blue-200":"text-blue-800"])}," SMB认证使用会话安全协议，支持NTLM和Kerberos认证机制。在域环境中，通过设置 -domain 参数进行域身份验证。 ",2)])])],2),t("h2",{id:"section-5",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 并发扫描实现 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"SMB 扫描使用工作池模式进行并发扫描，提高扫描效率的同时避免对目标系统造成过大压力：",-1)),t("div",R,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// concurrentSmbScan 并发扫描SMB服务
func concurrentSmbScan(ctx context.Context, info *Common.HostInfo, credentials []SmbCredential, timeoutSeconds int64) *SmbScanResult {
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
    resultChan := make(chan *SmbScanResult, 1)
    workChan := make(chan SmbCredential, maxConcurrent)
    scanCtx, scanCancel := context.WithCancel(ctx)
    defer scanCancel()

    // 启动工作协程
    for i := 0; i < maxConcurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for credential := range workChan {
                // ...工作协程代码...

                result := trySmbCredential(scanCtx, info, credential, timeoutSeconds)
                if result.Success {
                    select {
                    case resultChan <- result:
                        scanCancel() // 找到有效凭据，取消其他工作
                    default:
                    }
                    return
                }
            }
        }()
    }

    // ...省略其他代码...
}`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"并发扫描的关键特性包括：",-1)),o[12]||(o[12]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"自动调整工作池大小，确保资源利用最优化"),t("li",null,"使用 context 进行超时控制和任务取消"),t("li",null,"一旦找到有效凭据，立即取消所有未完成工作，减少对目标系统的影响"),t("li",null,"支持全局超时控制，避免扫描任务长时间运行")],-1)),t("h2",{id:"section-6",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 域环境支持 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},"SMB 扫描支持域环境认证，通过指定域名进行域账户的验证：",-1)),t("div",W,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",j,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 域认证配置
options := smb.Options{
    Host:        info.Host,
    Port:        445,
    User:        user,
    Password:    pass,
    Domain:      Common.Domain,  // 域名
    Workstation: "",
}

// 结果保存逻辑也支持域环境
if Common.Domain != "" {
    successMsg = fmt.Sprintf("SMB认证成功 %s %s\\\\%s:%s", target, Common.Domain, credential.Username, credential.Password)
    details["domain"] = Common.Domain
} else {
    successMsg = fmt.Sprintf("SMB认证成功 %s %s:%s", target, credential.Username, credential.Password)
}`,2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},[d("在域环境中，通过 "),t("code",null,"-domain"),d(" 参数指定域名，格式为 "),t("code",null,"DOMAIN\\\\username"),d(" 或 "),t("code",null,"username@DOMAIN"),d("。")],-1)),t("h2",{id:"section-7",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 基本 SMB 扫描 ",2),t("div",H,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 445 -m smb",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 指定用户和密码 ",2),t("div",K,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 445 -m smb -user administrator,admin -pwd Password123!,{user}123",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 域环境扫描 ",2),t("div",X,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 445 -m smb -domain CONTOSO -user administrator,john.doe -pwd Password123!",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 低并发扫描（减少账户锁定风险） ",2),t("div",z,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:s(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 445 -m smb -t 3 -time 5 -o smb_results.txt",2)])],2)]),o[15]||(o[15]=t("p",{class:"mb-4"},"该命令使用低并发（3线程）、较长超时（5秒）进行扫描，减少对目标系统的影响，并将结果保存到文件。",-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",J,[n(r(a),{icon:"mdi:check-circle",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",r(e)?"text-green-300":"text-green-700"])},"最佳实践",2),t("p",{class:s(["mt-1",r(e)?"text-green-200":"text-green-800"])}," 由于 Windows 环境通常具有账户锁定策略，建议在扫描前了解目标环境的安全策略，使用精简的密码列表，避免触发大量账户锁定。 ",2)])])],2)],2),t("div",{class:s(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",r(e)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:s(["inline-flex items-center transition-colors duration-200",r(e)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[n(r(a),{icon:"mdi:github",class:"mr-1.5"}),o[16]||(o[16]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},rt=y(Q,[["__scopeId","data-v-0a1109b1"]]);export{rt as default};
