import{_ as p,i as v,r as S,a as c,q as m,b as t,n,d as e,e as a,I as l,F as u,g,t as i,h as x,f as o}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},M=["href"],_={class:"flex"},q={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},L={class:"flex items-center mb-2"},Q={class:"flex items-center mb-2"},D={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},P={class:"overflow-x-auto mb-6"},T={class:"mb-4"},E={class:"p-3 text-sm font-mono overflow-x-auto"},R={class:"flex"},I={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},U={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"flex"},K={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"mb-4"},nt={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"flex"},ot={__name:"mssql-scan",setup(at){const r=v("isDark",S(!1)),f=["MSSQL 扫描简介","扫描原理与流程","配置参数与选项","凭据验证流程","密码爆破流程","高级设置","应用场景与示例","安全建议"],y=[{name:"-m mssql",description:"启用 MSSQL 扫描模块",example:"-m mssql"},{name:"-p 1433",description:"MSSQL 默认端口",example:"-p 1433,1434"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user sa,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd sa123,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(lt,s)=>(m(),c("div",null,[t("div",h,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:database",class:n(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," MSSQL 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",C,[a(e(l),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(m(),c(u,null,g(f,(d,b)=>t("li",{key:b,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},i(d),9,M)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[s[2]||(s[2]=t("p",{class:"mb-4"},"MSSQL 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Microsoft SQL Server 数据库服务，并尝试通过弱密码进行身份验证。本指南详细介绍 MSSQL 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," MSSQL 扫描简介 ",2),s[3]||(s[3]=t("p",{class:"mb-4"},"Microsoft SQL Server（简称MSSQL）是微软公司推出的关系型数据库管理系统，广泛应用于企业环境中。Fscan 的 MSSQL 扫描模块可以：",-1)),s[4]||(s[4]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 MSSQL 服务（默认端口 1433）"),t("li",null,"使用 TDS 协议进行弱密码检测"),t("li",null,"识别默认或弱密码账户"),t("li",null,"支持自定义用户名和密码字典"),t("li",null,"支持 Windows 认证和 SQL 认证模式")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",_,[a(e(l),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," MSSQL 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),s[5]||(s[5]=t("p",{class:"mb-4"},"MSSQL 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",q,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",L,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 MSSQL 服务（默认端口 1433）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",Q,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"凭据生成",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 生成用户名和密码的组合，支持变量替换和自定义字典 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",D,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"并发验证",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果收集",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析 ",2)],2)]),s[6]||(s[6]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),s[7]||(s[7]=t("p",{class:"mb-4"},"MSSQL 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",P,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(u,null,g(y,d=>t("tr",{key:d.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},i(d.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},i(d.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},i(d.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据验证流程 ",2),s[8]||(s[8]=t("p",{class:"mb-4"},"MSSQL 扫描模块使用 TDS 协议连接数据库并验证凭据。TDS（Tabular Data Stream）是 SQL Server 使用的专有通信协议。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 数据库连接过程 ",2),s[9]||(s[9]=t("p",{class:"mb-4"},[o("Fscan 使用 Go 语言的 "),t("code",null,"database/sql"),o(" 和 MSSQL 驱动来实现数据库连接：")],-1)),t("div",T,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",E,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// MssqlConn 尝试MSSQL连接
func MssqlConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error) {
    host, port, username, password := info.Host, info.Ports, user, pass
    timeout := time.Duration(Common.Timeout) * time.Second

    // 构造连接字符串
    connStr := fmt.Sprintf(
        "server=%s;user id=%s;password=%s;port=%v;encrypt=disable;",
        host, username, password, port,
    )

    // 建立数据库连接
    db, err := sql.Open("mssql", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(timeout)
    db.SetConnMaxIdleTime(timeout)
    db.SetMaxIdleConns(0)
    db.SetMaxOpenConns(1)

    // 通过上下文执行ping操作，以支持超时控制
    pingCtx, pingCancel := context.WithTimeout(ctx, timeout)
    defer pingCancel()

    errChan := make(chan error, 1)
    go func() {
        errChan <- db.PingContext(pingCtx)
    }()

    // 等待ping结果或者超时
    select {
    case err := <-errChan:
        if err != nil {
            return false, err
        }
        return true, nil
    case <-ctx.Done():
        // 全局超时或取消
        return false, ctx.Err()
    case <-pingCtx.Done():
        if pingCtx.Err() == context.DeadlineExceeded {
            // 单个连接超时
            return false, fmt.Errorf("连接超时")
        }
        return false, pingCtx.Err()
    }
}`,2)])],2)]),s[10]||(s[10]=x('<p class="mb-4" data-v-38d6d180>数据库连接过程的关键元素包括：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-38d6d180><li data-v-38d6d180><strong data-v-38d6d180>连接字符串</strong>：包含服务器地址、端口、用户名和密码等信息</li><li data-v-38d6d180><strong data-v-38d6d180>encrypt=disable</strong>：禁用加密，用于一些内网场景</li><li data-v-38d6d180><strong data-v-38d6d180>连接池配置</strong>：设置连接生命周期和最大连接数</li><li data-v-38d6d180><strong data-v-38d6d180>Ping操作</strong>：通过Ping验证连接的有效性</li><li data-v-38d6d180><strong data-v-38d6d180>超时控制</strong>：使用上下文实现多级超时管理</li></ul>',2)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",R,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"连接提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},s[0]||(s[0]=[o(" Fscan 使用的 "),t("code",null,"encrypt=disable",-1),o(" 参数仅适用于内网测试环境。在生产环境中，应启用加密以保护敏感信息的传输安全。 ")]),2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),s[11]||(s[11]=t("p",{class:"mb-4"},"Fscan 使用高效的并发方式进行 MSSQL 密码爆破：",-1)),t("div",I,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// MssqlScan 执行MSSQL服务扫描
func MssqlScan(info *Common.HostInfo) error {
    if Common.DisableBrute {
        return nil
    }

    target := fmt.Sprintf("%v:%v", info.Host, info.Ports)
    Common.LogDebug(fmt.Sprintf("开始扫描 %s", target))

    // 设置全局超时上下文
    ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
    defer cancel()

    // 构建凭据列表
    var credentials []MssqlCredential
    for _, user := range Common.Userdict["mssql"] {
        for _, pass := range Common.Passwords {
            actualPass := strings.Replace(pass, "{user}", user, -1)
            credentials = append(credentials, MssqlCredential{
                Username: user,
                Password: actualPass,
            })
        }
    }

    Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
        len(Common.Userdict["mssql"]), len(Common.Passwords), len(credentials)))

    // 使用工作池并发扫描
    result := concurrentMssqlScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
    if result != nil {
        // 记录成功结果
        saveMssqlResult(info, target, result.Credential)
        return nil
    }

    // 检查是否因为全局超时而退出
    select {
    case <-ctx.Done():
        Common.LogDebug("MSSQL扫描全局超时")
        return fmt.Errorf("全局超时")
    default:
        Common.LogDebug(fmt.Sprintf("扫描完成，共尝试 %d 个组合", len(credentials)))
        return nil
    }
}`,2)])],2)]),s[12]||(s[12]=t("p",{class:"mb-4"},"凭据生成会对每个用户名和密码组合进行处理，支持变量替换：",-1)),t("div",U,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []MssqlCredential
for _, user := range Common.Userdict["mssql"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, MssqlCredential{
            Username: user,
            Password: actualPass,
        })
    }
}`,2)])],2)]),s[13]||(s[13]=t("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),t("div",F,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",H,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentMssqlScan 并发扫描MSSQL服务
func concurrentMssqlScan(ctx context.Context, info *Common.HostInfo, credentials []MssqlCredential,
                         timeoutSeconds int64, maxRetries int) *MssqlScanResult {
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
    resultChan := make(chan *MssqlScanResult, 1)
    workChan := make(chan MssqlCredential, maxConcurrent)
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
                    result := tryMssqlCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 自动重试机制 ",2),s[14]||(s[14]=t("p",{class:"mb-4"},"MSSQL 扫描支持自动重试，以应对网络波动和临时错误：",-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryMssqlCredential 尝试单个MSSQL凭据
func tryMssqlCredential(ctx context.Context, info *Common.HostInfo, credential MssqlCredential,
                        timeoutSeconds int64, maxRetries int) *MssqlScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &MssqlScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时的上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := MssqlConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                return &MssqlScanResult{
                    Success:    true,
                    Credential: credential,
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

    return &MssqlScanResult{
        Success:    false,
        Error:      lastErr,
        Credential: credential,
    }
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),s[15]||(s[15]=t("p",{class:"mb-4"},[o("MSSQL 扫描模块使用 "),t("code",null,"ModuleThreadNum"),o(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),o(" 参数设置：")],-1)),t("div",G,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1433 -m mssql -t 100",2)])],2)]),s[16]||(s[16]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",O,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),s[17]||(s[17]=t("p",{class:"mb-4"},"MSSQL 扫描支持两层超时控制：",-1)),s[18]||(s[18]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),o("：通过 "),t("code",null,"-time"),o(" 参数设置每个 MSSQL 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),o("：通过 "),t("code",null,"-timeout"),o(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",A,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 创建连接超时的上下文
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
success, err := MssqlConn(connCtx, info, credential.Username, credential.Password)
cancel()`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",J,[a(e(l),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 扫描大型网络时，可能需要增加超时时间。但过长的超时会降低扫描效率，应根据网络环境和目标系统的响应速度调整这些参数。 ",2)])])],2),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",K,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1433 -m mssql",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",Y,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 1433 -m mssql -user sa,admin -pwd sa123,admin123,{user}2023",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 扫描SQL Server实例 ",2),t("div",tt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 1433,1434 -m mssql",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",rt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",nt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1433 -m mssql -t 100 -time 3 -retries 2 -o mssql_results.txt",2)])],2)]),s[19]||(s[19]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",st,[a(e(l),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-blue-200":"text-blue-800"])},s[1]||(s[1]=[o(" 在MSSQL环境中，"),t("code",null,"sa",-1),o("账户是最常见的管理员账户，也是攻击者的首要目标。确保使用强密码保护sa账户，或在不需要时禁用该账户。 ")]),2)])])],2),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 安全建议 ",2),s[20]||(s[20]=x('<p class="mb-4" data-v-38d6d180>为提高 MSSQL 服务的安全性，建议采取以下措施：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-38d6d180><li data-v-38d6d180>修改默认用户名（如sa）的默认密码，使用强密码策略</li><li data-v-38d6d180>定期更换密码并避免在多个系统中使用相同的密码</li><li data-v-38d6d180>限制可连接到 SQL Server 的 IP 地址</li><li data-v-38d6d180>启用 SQL Server 审计功能以监控可疑活动</li><li data-v-38d6d180>禁用不必要的功能和扩展</li><li data-v-38d6d180>及时安装安全补丁和更新</li><li data-v-38d6d180>使用最小权限原则配置数据库用户权限</li><li data-v-38d6d180>配置 SQL Server 使用加密连接</li></ul><p class="mb-4" data-v-38d6d180>通过实施这些安全措施，可以有效降低 MSSQL 服务面临的安全风险，提高数据库环境的整体安全性。</p>',3))],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),s[21]||(s[21]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},it=p(ot,[["__scopeId","data-v-38d6d180"]]);export{it as default};
