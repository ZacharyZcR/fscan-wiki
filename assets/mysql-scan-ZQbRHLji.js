import{_ as f,i as p,r as h,a as c,q as m,b as t,n,d as e,e as a,I as l,F as u,g as x,t as d,f as s}from"./index-DADAu9_P.js";const v={class:"flex items-center mb-6"},S={class:"flex items-center mb-2"},C={class:"pl-4 space-y-1"},w=["href"],M={class:"flex"},_={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},L={class:"flex items-center mb-2"},Q={class:"flex items-center mb-2"},q={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},E={class:"overflow-x-auto mb-6"},D={class:"mb-4"},P={class:"p-3 text-sm font-mono overflow-x-auto"},R={class:"flex"},T={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},A={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"flex"},z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"flex"},ot={__name:"mysql-scan",setup(st){const r=p("isDark",h(!1)),g=["MySQL 扫描简介","扫描原理与流程","配置参数与选项","凭据验证流程","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m mysql",description:"启用 MySQL 扫描模块",example:"-m mysql"},{name:"-p 3306",description:"指定 MySQL 端口（默认为 3306）",example:"-p 3306"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user root,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd 123456,{user}"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o mysql_result.txt"}];return(at,o)=>(m(),c("div",null,[t("div",v,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:database",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," MySQL 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",S,[a(e(l),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",C,[(m(),c(u,null,x(g,(i,b)=>t("li",{key:b,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},d(i),9,w)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"MySQL 扫描是 Fscan 的核心功能之一，用于发现网络中的 MySQL 数据库服务并尝试进行弱密码检测。本指南详细介绍 MySQL 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," MySQL 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"MySQL 是全球最流行的开源关系型数据库管理系统之一，广泛应用于各类 Web 应用和企业信息系统。Fscan 的 MySQL 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 MySQL 服务（默认端口 3306）"),t("li",null,"进行弱密码检测和暴力破解"),t("li",null,"支持自定义用户名和密码字典"),t("li",null,"生成详细的扫描报告")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",M,[a(e(l),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," MySQL 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"MySQL 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",_,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",L,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 MySQL 服务（默认端口 3306）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",Q,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"凭据准备",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 生成用户名和密码组合，支持变量替换，如将 {user} 替换为实际用户名 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",q,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"并发验证",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术同时测试多个凭据组合，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"扫描实现采用高效的工作池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"MySQL 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",E,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(u,null,x(y,i=>t("tr",{key:i.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据验证流程 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"MySQL 扫描模块使用官方的 Go MySQL 驱动进行连接验证，这确保了与各种 MySQL 版本的良好兼容性。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 连接建立过程 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},"MySQL 验证使用以下流程进行连接和认证：",-1)),t("div",D,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",P,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// MysqlConn 尝试MySQL连接
func MysqlConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error) {
    host, port, username, password := info.Host, info.Ports, user, pass
    timeout := time.Duration(Common.Timeout) * time.Second

    // 构造连接字符串，包含超时设置
    connStr := fmt.Sprintf(
        "%v:%v@tcp(%v:%v)/mysql?charset=utf8&timeout=%v",
        username, password, host, port, timeout,
    )

    // 建立数据库连接
    db, err := sql.Open("mysql", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(timeout)
    db.SetConnMaxIdleTime(timeout)
    db.SetMaxIdleConns(0)

    // 添加上下文支持
    conn, err := db.Conn(ctx)
    if err != nil {
        return false, err
    }
    defer conn.Close()

    // 测试连接
    err = conn.PingContext(ctx)
    if err != nil {
        return false, err
    }

    // 连接成功
    return true, nil
}`,2)])],2)]),o[8]||(o[8]=t("p",{class:"mb-4"},"上述代码中的关键步骤包括：",-1)),o[9]||(o[9]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"构建 DSN（数据源名称）连接字符串，包含用户名、密码、主机、端口和超时设置"),t("li",null,[s("使用标准库的 "),t("code",null,"sql.Open"),s(" 创建数据库连接池")]),t("li",null,"设置连接超时参数防止资源泄漏"),t("li",null,[s("通过 "),t("code",null,"PingContext"),s(" 验证连接有效性")])],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",R,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"认证提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},' 当凭据错误时，MySQL 服务器返回包含 "Access denied" 的错误消息。扫描器会识别这种错误，并避免对明确错误的凭据进行重试。 ',2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"MySQL 扫描模块使用并发工作池实现高效的密码爆破：",-1)),t("div",T,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []MySQLCredential
for _, user := range Common.Userdict["mysql"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, MySQLCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["mysql"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentMySQLScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"并发扫描的核心实现使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",I,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",A,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentMySQLScan 并发扫描MySQL服务
func concurrentMySQLScan(ctx context.Context, info *Common.HostInfo, credentials []MySQLCredential,
                         timeoutSeconds int64, maxRetries int) *MySQLScanResult {
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
    resultChan := make(chan *MySQLScanResult, 1)
    workChan := make(chan MySQLCredential, maxConcurrent)
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
                    result := tryMySQLCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略部分代码...
}`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},'单个凭据尝试支持自动重试机制，但会跳过 "Access denied" 等明确错误的凭据：',-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryMySQLCredential 尝试单个MySQL凭据
func tryMySQLCredential(ctx context.Context, info *Common.HostInfo, credential MySQLCredential,
                        timeoutSeconds int64, maxRetries int) *MySQLScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &MySQLScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建独立的超时上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := MysqlConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                return &MySQLScanResult{Success: true, Credential: credential}
            }

            lastErr = err
            if err != nil {
                // Access denied 表示用户名或密码错误，无需重试
                if strings.Contains(err.Error(), "Access denied") {
                    break
                }

                // 检查是否需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &MySQLScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},[s("MySQL 扫描模块使用 "),t("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),s(" 参数设置：")],-1)),t("div",H,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 3306 -m mysql -t 100",2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"线程控制算法会根据凭据数量自动调整工作池大小，确保资源高效利用：",-1)),t("div",W,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[15]||(o[15]=t("p",{class:"mb-4"},"MySQL 扫描支持两层超时控制：",-1)),o[16]||(o[16]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 MySQL 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",G,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在DSN连接字符串中设置连接超时
connStr := fmt.Sprintf(
    "%v:%v@tcp(%v:%v)/mysql?charset=utf8&timeout=%v",
    username, password, host, port, timeout,
)`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",O,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。 ",2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[17]||(o[17]=t("p",{class:"mb-4"},[s("Fscan 的 MySQL 扫描模块实现了智能重试机制，可通过 "),t("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),t("div",z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 3306 -m mysql -retries 5",2)])],2)]),o[18]||(o[18]=t("p",{class:"mb-4"},"重试机制会自动跳过不需要重试的错误（如 Access denied），只对可能是临时网络故障的错误进行重试：",-1)),t("div",J,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// Access denied 表示用户名或密码错误，无需重试
if strings.Contains(err.Error(), "Access denied") {
    break
}

// 检查是否需要重试
if retryErr := Common.CheckErrs(err); retryErr == nil {
    break // 不需要重试的错误
}`,2)])],2)]),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",X,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 3306 -m mysql",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",Z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 3306 -m mysql -user root,admin,mysql -pwd root,admin,{user}@123,{user}",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",et,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 3306 -m mysql -t 100 -time 3 -retries 2 -o mysql_results.txt",2)])],2)]),o[19]||(o[19]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",nt,[a(e(l),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," 在MySQL扫描中，常见的默认用户有 root、mysql、admin 等。针对目标环境定制用户名和密码字典可以显著提高扫描效率。使用 {user} 变量可以根据用户名自动生成常见密码模式。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),o[20]||(o[20]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},it=f(ot,[["__scopeId","data-v-c187884c"]]);export{it as default};
