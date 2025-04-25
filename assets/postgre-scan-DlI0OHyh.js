import{_ as f,i as p,r as v,a as c,q as b,b as t,n as s,d as e,e as a,I as l,F as m,g as u,t as d,h,f as n}from"./index-DnnHOreL.js";const w={class:"flex items-center mb-6"},S={class:"flex items-center mb-2"},C={class:"pl-4 space-y-1"},P=["href"],_={class:"flex"},L={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},Q={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},E={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},R={class:"overflow-x-auto mb-6"},q={class:"mb-4"},D={class:"p-3 text-sm font-mono overflow-x-auto"},M={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"flex"},j={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"flex"},K={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"flex"},st={__name:"postgre-scan",setup(ot){const r=p("isDark",v(!1)),x=["PostgreSQL 扫描简介","扫描原理与流程","配置参数与选项","连接验证流程","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m postgresql",description:"启用 PostgreSQL 扫描模块",example:"-m postgresql"},{name:"-p 5432",description:"PostgreSQL 默认端口",example:"-p 5432"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user postgres,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd postgres,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(nt,o)=>(b(),c("div",null,[t("div",w,[t("div",{class:s(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:database",class:s(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:s(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," PostgreSQL 扫描指南 ",2)]),t("div",{class:s(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",S,[a(e(l),{icon:"mdi:format-list-bulleted",class:s(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:s(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",C,[(b(),c(m,null,u(x,(i,g)=>t("li",{key:g,class:s(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${g}`,class:"hover:underline"},d(i),9,P)],2)),64))])],2),t("div",{class:s(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"PostgreSQL 扫描是 Fscan 的重要功能模块，用于发现网络中运行的 PostgreSQL 数据库服务，并尝试通过弱密码进行身份验证。本指南详细介绍 PostgreSQL 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," PostgreSQL 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"PostgreSQL 是一个功能强大的开源关系型数据库系统，以其可靠性、数据完整性和正确性而闻名。Fscan 的 PostgreSQL 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 PostgreSQL 服务（默认端口 5432）"),t("li",null,"使用数据库标准协议进行弱密码检测"),t("li",null,"识别常见的默认账户配置"),t("li",null,"支持自定义用户名和密码字典"),t("li",null,"验证连接权限和数据库版本")],-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",_,[a(e(l),{icon:"mdi:shield-alert",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:s(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," PostgreSQL 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"PostgreSQL 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",L,[t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",Q,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 PostgreSQL 服务（默认端口 5432）的主机 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"凭据生成",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 根据内置或用户提供的字典，生成用户名和密码组合，支持变量替换功能 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",E,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"并发连接测试",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 使用多线程技术尝试数据库连接和身份验证，支持自动重试和超时控制 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"权限验证",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 成功连接后，执行查询测试验证权限级别，并获取数据库版本信息 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"PostgreSQL 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",R,[t("table",{class:s(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:s(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:s(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(b(),c(m,null,u(y,i=>t("tr",{key:i.name,class:s(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},d(i.name),3),t("td",{class:s(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 连接验证流程 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"PostgreSQL 扫描模块使用标准数据库驱动和 SQL 查询来验证凭据。连接过程包括建立连接、身份验证以及权限验证三个阶段。",-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 连接建立与测试 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},[n("PostgreSQL 连接使用标准 Go SQL 驱动与 "),t("code",null,"lib/pq"),n(" 库，通过连接字符串指定连接参数：")],-1)),t("div",q,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",D,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// PostgresConn 尝试PostgreSQL连接
func PostgresConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error) {
    // 构造连接字符串
    connStr := fmt.Sprintf(
        "postgres://%v:%v@%v:%v/postgres?sslmode=disable&connect_timeout=%d",
        user, pass, info.Host, info.Ports, Common.Timeout/1000, // 转换为秒
    )

    // 建立数据库连接
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(time.Duration(Common.Timeout) * time.Millisecond)
    db.SetMaxOpenConns(1)
    db.SetMaxIdleConns(0)

    // 使用上下文测试连接
    err = db.PingContext(ctx)
    if err != nil {
        return false, err
    }

    // 简单查询测试权限
    var version string
    err = db.QueryRowContext(ctx, "SELECT version()").Scan(&version)
    if err != nil {
        return false, err
    }

    return true, nil
}`,2)])],2)]),o[8]||(o[8]=h('<p class="mb-4" data-v-4ee371da>连接字符串中的主要参数包括：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-4ee371da><li data-v-4ee371da><code data-v-4ee371da>user</code> 和 <code data-v-4ee371da>pass</code>：尝试的用户名和密码</li><li data-v-4ee371da><code data-v-4ee371da>sslmode=disable</code>：禁用 SSL 连接，用于快速扫描</li><li data-v-4ee371da><code data-v-4ee371da>connect_timeout</code>：连接超时时间（秒）</li><li data-v-4ee371da><code data-v-4ee371da>postgres</code>：默认连接的数据库名</li></ul>',2)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 权限验证 ",2),o[9]||(o[9]=t("p",{class:"mb-4"},[n("成功连接后，通过执行 "),t("code",null,"SELECT version()"),n(" 查询验证用户权限并获取数据库版本信息：")],-1)),t("div",M,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 简单查询测试权限
var version string
err = db.QueryRowContext(ctx, "SELECT version()").Scan(&version)
if err != nil {
    return false, err
}`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",I,[a(e(l),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"安全知识",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," PostgreSQL 中的权限管理非常精细。即使连接成功，用户可能只拥有有限的权限。通过尝试执行简单查询可以进一步验证用户的实际权限级别。 ",2)])])],2),t("h2",{id:"section-4",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"密码爆破是通过尝试多种凭据组合自动发现有效登录信息的过程。PostgreSQL 扫描模块采用高效的并发爆破策略：",-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 凭据生成 ",2),o[11]||(o[11]=t("p",{class:"mb-4"},"首先生成所有可能的用户名和密码组合：",-1)),t("div",j,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",H,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []PostgresCredential
for _, user := range Common.Userdict["postgresql"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, PostgresCredential{
            Username: user,
            Password: actualPass,
        })
    }
}`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},[n("支持密码变量替换功能，例如 "),t("code",null,"{user}"),n(" 会被替换为当前尝试的用户名，便于生成常见的密码模式。")],-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 并发爆破 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},"使用协程池并发测试多个凭据组合，提高扫描效率：",-1)),t("div",B,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentPostgresScan 并发扫描PostgreSQL服务
func concurrentPostgresScan(ctx context.Context, info *Common.HostInfo, credentials []PostgresCredential,
                            timeoutSeconds int64, maxRetries int) *PostgresScanResult {
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
    resultChan := make(chan *PostgresScanResult, 1)
    workChan := make(chan PostgresCredential, maxConcurrent)
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
                    result := tryPostgresCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略其余代码...
}`,2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"关键特性包括：",-1)),o[15]||(o[15]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[n("动态线程数调整：根据 "),t("code",null,"ModuleThreadNum"),n(" 和凭据数量自动调整")]),t("li",null,"提前退出：一旦找到有效凭据，立即取消所有未完成的工作"),t("li",null,[n("上下文管理：使用 "),t("code",null,"context"),n(" 统一管理超时和取消")])],-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[16]||(o[16]=t("p",{class:"mb-4"},"为了处理网络波动和临时错误，实现了自动重试机制：",-1)),t("div",G,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryPostgresCredential 尝试单个PostgreSQL凭据
func tryPostgresCredential(ctx context.Context, info *Common.HostInfo, credential PostgresCredential,
                          timeoutSeconds int64, maxRetries int) *PostgresScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &PostgresScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建单个连接超时的上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := PostgresConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                return &PostgresScanResult{Success: true, Credential: credential}
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

    return &PostgresScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-5",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[17]||(o[17]=t("p",{class:"mb-4"},[n("PostgreSQL 扫描模块使用 "),t("code",null,"ModuleThreadNum"),n(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),n(" 参数设置：")],-1)),t("div",V,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5432 -m postgresql -t 100",2)])],2)]),o[18]||(o[18]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",O,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[19]||(o[19]=t("p",{class:"mb-4"},"PostgreSQL 扫描支持两层超时控制：",-1)),o[20]||(o[20]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),n("：通过 "),t("code",null,"-time"),n(" 参数设置每个 PostgreSQL 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),n("：通过 "),t("code",null,"-timeout"),n(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",A,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在连接字符串中设置单个连接超时
connStr := fmt.Sprintf(
    "postgres://%v:%v@%v:%v/postgres?sslmode=disable&connect_timeout=%d",
    user, pass, info.Host, info.Ports, Common.Timeout/1000, // 转换为秒
)`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",J,[a(e(l),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。PostgreSQL 的默认连接超时通常较长，适当缩短可以提高扫描效率。 ",2)])])],2),t("h2",{id:"section-6",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",K,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5432 -m postgresql",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",Y,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 5432 -m postgresql -user postgres,admin -pwd postgres,admin123,{user}@123",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",tt,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5432 -m postgresql -t 100 -time 3 -retries 2 -o postgres_results.txt",2)])],2)]),o[21]||(o[21]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",rt,[a(e(l),{icon:"mdi:check-circle",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:s(["mt-1",e(r)?"text-blue-200":"text-blue-800"])},' PostgreSQL 的默认用户通常是 "postgres"，将其作为首要尝试的用户名可以提高扫描效率。此外，使用 "{user}" 变量可以生成与用户名相关的密码模式，这是常见的弱密码设置方式。 ',2)])])],2)],2),t("div",{class:s(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:s(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),o[22]||(o[22]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},lt=f(st,[["__scopeId","data-v-4ee371da"]]);export{lt as default};
