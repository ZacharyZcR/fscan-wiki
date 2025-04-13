import{_ as f,i as p,r as v,a as c,q as m,b as t,n as o,d as e,e as a,I as l,F as g,g as u,t as d,h,f as s}from"./index-DADAu9_P.js";const F={class:"flex items-center mb-6"},w={class:"flex items-center mb-2"},T={class:"pl-4 space-y-1"},P=["href"],C={class:"flex"},_={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},S={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},R={class:"flex items-center mb-2"},D={class:"flex items-center mb-2"},L={class:"overflow-x-auto mb-6"},N={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},M={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"flex"},E={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},Q={class:"p-3 text-sm font-mono overflow-x-auto"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"flex"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"mb-4"},ot={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"mb-4"},st={class:"p-3 text-sm font-mono overflow-x-auto"},at={class:"flex"},lt={__name:"ftp-scan",setup(it){const r=p("isDark",v(!1)),x=["FTP 扫描简介","扫描原理与流程","配置参数与选项","匿名访问检测","密码爆破流程","高级设置","应用场景与示例","安全防护建议"],y=[{name:"-m ftp",description:"启用 FTP 扫描模块",example:"-m ftp"},{name:"-p 21",description:"FTP 服务默认端口（21）",example:"-p 21"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,ftp"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd admin,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-usernull",description:"只检测匿名访问，不进行密码爆破",example:"-usernull"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(dt,n)=>(m(),c("div",null,[t("div",F,[t("div",{class:o(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:folder-network",class:o(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:o(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," FTP 扫描指南 ",2)]),t("div",{class:o(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",w,[a(e(l),{icon:"mdi:format-list-bulleted",class:o(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:o(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",T,[(m(),c(g,null,u(x,(i,b)=>t("li",{key:b,class:o(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},d(i),9,P)],2)),64))])],2),t("div",{class:o(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[n[0]||(n[0]=t("p",{class:"mb-4"},"FTP 扫描是 Fscan 的重要功能模块，用于发现网络中运行的文件传输协议（FTP）服务器，检测匿名访问漏洞以及进行密码爆破。本指南详细介绍 FTP 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," FTP 扫描简介 ",2),n[1]||(n[1]=t("p",{class:"mb-4"},"文件传输协议（File Transfer Protocol，FTP）是一种用于在计算机网络上进行文件传输的标准网络协议。Fscan 的 FTP 扫描模块可以：",-1)),n[2]||(n[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 FTP 服务（默认端口 21）"),t("li",null,"检测 FTP 匿名访问漏洞"),t("li",null,"执行密码爆破"),t("li",null,"获取并显示可访问的目录列表"),t("li",null,"识别存在弱密码的 FTP 服务")],-1)),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",C,[a(e(l),{icon:"mdi:shield-alert",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:o(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," FTP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),n[3]||(n[3]=t("p",{class:"mb-4"},"FTP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",_,[t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 FTP 服务（默认端口 21）的主机 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"匿名访问检测",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试使用匿名账户（anonymous）登录，检测 FTP 服务是否允许匿名访问 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",R,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果匿名访问失败，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",D,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"目录枚举",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 成功登录后，获取并记录 FTP 服务器上可访问的目录和文件列表，提供更多服务信息 ",2)],2)]),n[4]||(n[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),n[5]||(n[5]=t("p",{class:"mb-4"},"FTP 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",L,[t("table",{class:o(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:o(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:o(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(g,null,u(y,i=>t("tr",{key:i.name,class:o(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:o(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:o(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:o(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 匿名访问检测 ",2),n[6]||(n[6]=t("p",{class:"mb-4"},"匿名访问是 FTP 协议中的一项特性，允许用户无需提供有效的用户名和密码即可登录 FTP 服务器。Fscan 首先会尝试使用匿名凭据进行登录：",-1)),t("div",N,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",H,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 首先尝试匿名登录
Common.LogDebug("尝试匿名登录...")
anonymousResult := tryFtpCredential(ctx, info, FtpCredential{"anonymous", ""}, Common.Timeout, Common.MaxRetries)

if anonymousResult.Success {
    // 匿名登录成功
    saveFtpResult(info, target, anonymousResult)
    return nil
}`,2)])],2)]),n[7]||(n[7]=t("p",{class:"mb-4"},"匿名登录成功后，程序会获取并记录目录列表，以便于后续分析 FTP 服务器内容：",-1)),t("div",I,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",M,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// saveFtpResult 保存FTP扫描结果
func saveFtpResult(info *Common.HostInfo, target string, result *FtpScanResult) {
    var successMsg string
    var details map[string]interface{}

    if result.IsAnonymous {
        successMsg = fmt.Sprintf("FTP服务 %s 匿名登录成功!", target)
        details = map[string]interface{}{
            "port":        info.Ports,
            "service":     "ftp",
            "username":    "anonymous",
            "password":    "",
            "type":        "anonymous-login",
            "directories": result.Directories,
        }
    } else {
        // 处理非匿名登录成功的情况...
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
}`,2)])],2)]),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",j,[a(e(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"安全提示",2),t("p",{class:o(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 匿名 FTP 访问在生产环境中通常是一个严重的安全风险。在没有必要的情况下，建议禁用 FTP 服务器的匿名访问功能，或者将匿名用户限制在只读目录中。 ",2)])])],2),t("h2",{id:"section-4",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),n[8]||(n[8]=t("p",{class:"mb-4"},"如果匿名访问检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),t("div",E,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []FtpCredential
for _, user := range Common.Userdict["ftp"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, FtpCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["ftp"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentFtpScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),n[9]||(n[9]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",B,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentFtpScan 并发扫描FTP服务
func concurrentFtpScan(ctx context.Context, info *Common.HostInfo, credentials []FtpCredential,
                       timeoutSeconds int64, maxRetries int) *FtpScanResult {
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
    resultChan := make(chan *FtpScanResult, 1)
    workChan := make(chan FtpCredential, maxConcurrent)
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
                    result := tryFtpCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," FTP 连接与认证 ",2),n[10]||(n[10]=t("p",{class:"mb-4"},[s("FTP 连接使用第三方库 "),t("code",null,"github.com/jlaffaye/ftp"),s(" 实现，支持登录认证和目录列表获取：")],-1)),t("div",G,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// FtpConn 建立FTP连接并尝试登录
func FtpConn(info *Common.HostInfo, user string, pass string) (success bool, directories []string, err error) {
    Host, Port := info.Host, info.Ports

    // 建立FTP连接
    conn, err := ftp.DialTimeout(fmt.Sprintf("%v:%v", Host, Port), time.Duration(Common.Timeout)*time.Second)
    if err != nil {
        return false, nil, err
    }
    defer func() {
        if conn != nil {
            conn.Quit()
        }
    }()

    // 尝试登录
    if err = conn.Login(user, pass); err != nil {
        return false, nil, err
    }

    // 获取目录信息
    dirs, err := conn.List("")
    if err == nil && len(dirs) > 0 {
        directories = make([]string, 0, min(6, len(dirs)))
        for i := 0; i < len(dirs) && i < 6; i++ {
            name := dirs[i].Name
            if len(name) > 50 {
                name = name[:50]
            }
            directories = append(directories, name)
        }
    }

    return true, directories, nil
}`,2)])],2)]),t("h2",{id:"section-5",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),n[11]||(n[11]=t("p",{class:"mb-4"},[s("FTP 扫描模块使用 "),t("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),s(" 参数设置：")],-1)),t("div",A,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 21 -m ftp -t 100",2)])],2)]),n[12]||(n[12]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",z,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Q,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),n[13]||(n[13]=t("p",{class:"mb-4"},"FTP 扫描支持两层超时控制：",-1)),n[14]||(n[14]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 FTP 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",$,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
conn, err := ftp.DialTimeout(fmt.Sprintf("%v:%v", Host, Port), time.Duration(Common.Timeout)*time.Second)`,2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制与错误处理 ",2),n[15]||(n[15]=t("p",{class:"mb-4"},"FTP 扫描模块具有智能重试机制，可以识别不同类型的错误并相应调整：",-1)),t("div",K,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`lastErr = err
if err != nil {
    // 登录错误不需要重试
    if strings.Contains(err.Error(), "Login incorrect") {
        break
    }

    // 连接数过多需要等待
    if strings.Contains(err.Error(), "too many connections") {
        Common.LogDebug("连接数过多，等待5秒...")
        time.Sleep(5 * time.Second)
        continue
    }

    // 检查是否需要重试
    if retryErr := Common.CheckErrs(err); retryErr == nil {
        break
    }
}`,2)])],2)]),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",X,[a(e(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:o(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},' FTP 服务器通常会限制同时连接的数量。如果在扫描过程中遇到"too many connections"错误，程序会自动等待 5 秒后重试，以避免过度消耗服务器资源。 ',2)])])],2),t("h2",{id:"section-6",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Y,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 21 -m ftp",2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",tt,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 21 -m ftp -user admin,ftp,ftpuser -pwd admin123,ftp,{user}@123",2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",rt,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ot,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 21 -m ftp -t 50 -time 3 -retries 2 -o ftp_results.txt",2)])],2)]),n[16]||(n[16]=t("p",{class:"mb-4"},"这个配置使用 50 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 仅进行匿名访问检测 ",2),t("div",nt,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",st,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 21 -m ftp -usernull",2)])],2)]),n[17]||(n[17]=t("p",{class:"mb-4"},[s("使用 "),t("code",null,"-usernull"),s(" 参数可以仅检测匿名访问，不进行密码爆破。")],-1)),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",at,[a(e(l),{icon:"mdi:check-circle",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-green-300":"text-green-700"])},"最佳实践",2),t("p",{class:o(["mt-1",e(r)?"text-green-200":"text-green-800"])}," 在大规模网络扫描中，建议先使用匿名检测和少量常见凭据进行扫描，找到潜在目标后再进行更详细的密码爆破，以提高效率并减少对网络和目标系统的影响。 ",2)])])],2),t("h2",{id:"section-7",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 安全防护建议 ",2),n[18]||(n[18]=h('<p class="mb-4" data-v-75dd3693>针对 FTP 服务的常见安全问题，建议采取以下防护措施：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-75dd3693><li data-v-75dd3693><strong data-v-75dd3693>禁用匿名访问</strong>：除非有特定需求，否则应禁用匿名 FTP 访问</li><li data-v-75dd3693><strong data-v-75dd3693>使用强密码</strong>：为 FTP 账户设置强密码，避免使用默认密码或弱密码</li><li data-v-75dd3693><strong data-v-75dd3693>实施访问控制</strong>：限制 FTP 服务器只允许特定 IP 地址或网络段访问</li><li data-v-75dd3693><strong data-v-75dd3693>启用加密</strong>：考虑使用 FTPS（FTP over SSL/TLS）或 SFTP（SSH File Transfer Protocol）代替明文 FTP</li><li data-v-75dd3693><strong data-v-75dd3693>日志监控</strong>：启用详细的 FTP 访问日志并定期审查</li><li data-v-75dd3693><strong data-v-75dd3693>文件权限管理</strong>：为 FTP 用户设置适当的文件和目录权限</li><li data-v-75dd3693><strong data-v-75dd3693>定期更新</strong>：保持 FTP 服务器软件更新到最新版本，修复已知安全漏洞</li></ul><p class="mb-4" data-v-75dd3693>通过实施这些安全措施，可以显著提高 FTP 服务器的安全性，减少被扫描和攻击的风险。</p>',3))],2),t("div",{class:o(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:o(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),n[19]||(n[19]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},mt=f(lt,[["__scopeId","data-v-75dd3693"]]);export{mt as default};
