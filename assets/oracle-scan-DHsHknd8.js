import{_ as f,i as p,r as v,a as c,q as m,b as e,n as o,d as r,e as a,I as l,F as b,g as x,t as d,h as S,f as s}from"./index-DADAu9_P.js";const h={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},O=["href"],_={class:"flex"},Y={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},D={class:"flex items-center mb-2"},N={class:"flex items-center mb-2"},E={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},R={class:"overflow-x-auto mb-6"},P={class:"mb-4"},k={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"flex"},M={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},A={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"flex"},H={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"flex"},Z={class:"mb-4"},ee={class:"p-3 text-sm font-mono overflow-x-auto"},re={class:"mb-4"},te={class:"p-3 text-sm font-mono overflow-x-auto"},oe={class:"mb-4"},ne={class:"p-3 text-sm font-mono overflow-x-auto"},se={class:"mb-4"},ae={class:"p-3 text-sm font-mono overflow-x-auto"},le={class:"mb-4"},ie={class:"p-3 text-sm font-mono overflow-x-auto"},de={class:"flex"},ce={__name:"oracle-scan",setup(me){const t=p("isDark",v(!1)),u=["Oracle 扫描简介","扫描原理与流程","配置参数与选项","高危凭据检测","服务名枚举与测试","凭据验证流程","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m oracle",description:"启用 Oracle 扫描模块",example:"-m oracle"},{name:"-p 1521",description:"指定 Oracle 端口（默认为 1521）",example:"-p 1521,1522"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user SYS,SYSTEM"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd oracle,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 30"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(ge,n)=>(m(),c("div",null,[e("div",h,[e("div",{class:o(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",r(t)?"bg-orange-900/30":"bg-orange-100"])},[a(r(l),{icon:"mdi:database-outline",class:o(["text-xl",r(t)?"text-orange-400":"text-orange-600"])},null,8,["class"])],2),e("h1",{class:o(["text-2xl font-bold transition-colors duration-300",r(t)?"text-white":"text-gray-900"])}," Oracle 扫描指南 ",2)]),e("div",{class:o(["mb-6 rounded-lg p-3 transition-colors duration-300",r(t)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[e("div",C,[a(r(l),{icon:"mdi:format-list-bulleted",class:o(["mr-2",r(t)?"text-gray-400":"text-gray-500"])},null,8,["class"]),e("h3",{class:o(["font-medium text-sm transition-colors duration-300",r(t)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),e("ul",w,[(m(),c(b,null,x(u,(i,g)=>e("li",{key:g,class:o(["transition-colors duration-200 text-sm font-normal",r(t)?"text-gray-400 hover:text-orange-400":"text-gray-600 hover:text-orange-600"])},[e("a",{href:`#section-${g}`,class:"hover:underline"},d(i),9,O)],2)),64))])],2),e("div",{class:o(["doc-content transition-colors duration-300",r(t)?"text-gray-300":"text-gray-700"])},[n[0]||(n[0]=e("p",{class:"mb-4"},"Oracle 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Oracle 数据库服务，并尝试通过弱密码进行身份验证。本指南详细介绍 Oracle 扫描的工作原理、配置选项和最佳实践。",-1)),e("h2",{id:"section-0",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Oracle 扫描简介 ",2),n[1]||(n[1]=e("p",{class:"mb-4"},"Oracle 数据库是企业中广泛使用的关系型数据库管理系统，通常包含关键业务数据。Fscan 的 Oracle 扫描模块可以：",-1)),n[2]||(n[2]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,"发现内网中开放的 Oracle 数据库服务（默认端口 1521）"),e("li",null,"通过多种服务名（SID）进行自动化测试"),e("li",null,"支持对常见高危账户（如 SYS、SYSTEM）进行检测"),e("li",null,"支持 SYSDBA 权限特殊模式的连接测试"),e("li",null,"实现多线程并发扫描，提高效率")],-1)),e("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",r(t)?"bg-orange-900/10 border border-orange-900/20":"bg-orange-50 border border-orange-100"])},[e("div",_,[a(r(l),{icon:"mdi:shield-alert",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",r(t)?"text-orange-400":"text-orange-600"])},null,8,["class"]),e("div",null,[e("p",{class:o(["font-medium",r(t)?"text-orange-300":"text-orange-700"])},"安全提示",2),e("p",{class:o(["mt-1",r(t)?"text-orange-200":"text-orange-800"])}," Oracle 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对数据库系统进行扫描可能违反法律法规，并可能触发数据库的安全监控告警。 ",2)])])],2),e("h2",{id:"section-1",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),n[3]||(n[3]=e("p",{class:"mb-4"},"Oracle 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),e("div",Y,[e("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",r(t)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",D,[e("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(t)?"bg-orange-900/20":"bg-orange-100"])},[e("span",{class:o(["text-xs font-bold",r(t)?"text-orange-400":"text-orange-600"])},"1",2)],2),e("h3",{class:o(["font-medium",r(t)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),e("p",{class:o(["text-sm",r(t)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Oracle 服务（默认端口 1521）的主机 ",2)],2),e("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",r(t)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",N,[e("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(t)?"bg-orange-900/20":"bg-orange-100"])},[e("span",{class:o(["text-xs font-bold",r(t)?"text-orange-400":"text-orange-600"])},"2",2)],2),e("h3",{class:o(["font-medium",r(t)?"text-gray-200":"text-gray-800"])},"高危凭据检测",2)]),e("p",{class:o(["text-sm",r(t)?"text-gray-400":"text-gray-600"])}," 首先尝试常见高危凭据组合（如 SYS/123456、SYSTEM/manager 等）与常见服务名 ",2)],2),e("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",r(t)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",E,[e("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(t)?"bg-orange-900/20":"bg-orange-100"])},[e("span",{class:o(["text-xs font-bold",r(t)?"text-orange-400":"text-orange-600"])},"3",2)],2),e("h3",{class:o(["font-medium",r(t)?"text-gray-200":"text-gray-800"])},"服务名枚举",2)]),e("p",{class:o(["text-sm",r(t)?"text-gray-400":"text-gray-600"])}," 针对每个凭据组合尝试多种常见服务名（如 ORCL、XE、ORCLPDB1 等） ",2)],2),e("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",r(t)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",T,[e("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(t)?"bg-orange-900/20":"bg-orange-100"])},[e("span",{class:o(["text-xs font-bold",r(t)?"text-orange-400":"text-orange-600"])},"4",2)],2),e("h3",{class:o(["font-medium",r(t)?"text-gray-200":"text-gray-800"])},"并发密码爆破",2)]),e("p",{class:o(["text-sm",r(t)?"text-gray-400":"text-gray-600"])}," 使用多线程技术并发测试用户名和密码组合，支持自动重试和超时控制 ",2)],2)]),n[4]||(n[4]=e("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),e("h2",{id:"section-2",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),n[5]||(n[5]=e("p",{class:"mb-4"},"Oracle 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),e("div",R,[e("table",{class:o(["min-w-full rounded-lg overflow-hidden text-sm font-normal",r(t)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("thead",{class:o(r(t)?"bg-gray-850":"bg-gray-50")},[e("tr",null,[e("th",{class:o(["py-3 px-4 text-left font-medium border-b",r(t)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),e("th",{class:o(["py-3 px-4 text-left font-medium border-b",r(t)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),e("th",{class:o(["py-3 px-4 text-left font-medium border-b",r(t)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),e("tbody",{class:o(["divide-y",r(t)?"divide-gray-700":"divide-gray-200"])},[(m(),c(b,null,x(y,i=>e("tr",{key:i.name,class:o(r(t)?"hover:bg-gray-750":"hover:bg-gray-50")},[e("td",{class:o(["py-2 px-4 font-mono",r(t)?"text-orange-400":"text-orange-600"])},d(i.name),3),e("td",{class:o(["py-2 px-4",r(t)?"text-gray-300":"text-gray-700"])},d(i.description),3),e("td",{class:o(["py-2 px-4 font-mono",r(t)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),e("h2",{id:"section-3",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高危凭据检测 ",2),n[6]||(n[6]=e("p",{class:"mb-4"},"Oracle 数据库中存在一些常见的默认或高危账户，这些账户往往是攻击者首选的目标。Fscan 首先会尝试这些高危凭据组合：",-1)),e("div",P,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",k,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// 构建常见高危凭据列表（优先测试）
highRiskCredentials := []OracleCredential{
    {Username: "SYS", Password: "123456"},
    {Username: "SYSTEM", Password: "123456"},
    {Username: "SYS", Password: "oracle"},
    {Username: "SYSTEM", Password: "oracle"},
    {Username: "SYS", Password: "password"},
    {Username: "SYSTEM", Password: "password"},
    {Username: "SYS", Password: "sys123"},
    {Username: "SYS", Password: "change_on_install"},
    {Username: "SYSTEM", Password: "manager"},
}

// 先尝试常见高危凭据
Common.LogDebug("尝试常见高危凭据...")
for _, cred := range highRiskCredentials {
    result := tryAllServiceNames(ctx, info, cred, Common.Timeout, 1)
    if result != nil && result.Success {
        saveOracleResult(info, target, result.Credential, result.ServiceName)
        return nil
    }
}`,2)])],2)]),e("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",r(t)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",B,[a(r(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",r(t)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:o(["font-medium",r(t)?"text-amber-300":"text-amber-700"])},"高危账户说明",2),e("p",{class:o(["mt-1",r(t)?"text-amber-200":"text-amber-800"])}," SYS 是 Oracle 最高权限账户，具有 SYSDBA 特权；SYSTEM 是主要管理账户。这些账户的默认密码在安装后经常未被修改，构成重大安全风险。 ",2)])])],2),e("h2",{id:"section-4",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 服务名枚举与测试 ",2),n[7]||(n[7]=e("p",{class:"mb-4"},"Oracle 连接需要服务名（SID）才能建立有效连接。Fscan 会尝试多种常见服务名：",-1)),e("div",M,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",U,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// 常见Oracle服务名列表
var commonServiceNames = []string{"XE", "ORCL", "ORCLPDB1", "XEPDB1", "PDBORCL"}

// tryAllServiceNames 尝试所有常见服务名
func tryAllServiceNames(ctx context.Context, info *Common.HostInfo, credential OracleCredential,
                        timeoutSeconds int64, maxRetries int) *OracleScanResult {
    for _, serviceName := range commonServiceNames {
        result := tryOracleCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
        if result.Success {
            result.ServiceName = serviceName
            return result
        }

        // 对SYS用户尝试SYSDBA模式
        if strings.ToUpper(credential.Username) == "SYS" {
            result = tryOracleSysCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
            if result.Success {
                result.ServiceName = serviceName
                return result
            }
        }
    }
    return nil
}`,2)])],2)]),n[8]||(n[8]=S('<p class="mb-4" data-v-a29c96d9>常见的 Oracle 服务名包括：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-a29c96d9><li data-v-a29c96d9><strong data-v-a29c96d9>XE</strong>：Oracle Express Edition 的默认服务名</li><li data-v-a29c96d9><strong data-v-a29c96d9>ORCL</strong>：Oracle 标准版和企业版的默认服务名</li><li data-v-a29c96d9><strong data-v-a29c96d9>ORCLPDB1</strong>：Oracle 12c+ 中的可插拔数据库默认服务名</li><li data-v-a29c96d9><strong data-v-a29c96d9>XEPDB1</strong>：Oracle Express Edition 18c+ 的默认可插拔数据库服务名</li><li data-v-a29c96d9><strong data-v-a29c96d9>PDBORCL</strong>：企业环境中常见的可插拔数据库服务名</li></ul>',2)),e("h2",{id:"section-5",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据验证流程 ",2),n[9]||(n[9]=e("p",{class:"mb-4"},[s("Oracle 扫描模块使用 "),e("code",null,"go-ora"),s(" 驱动进行数据库连接和凭据验证：")],-1)),e("div",A,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",L,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// OracleConn 尝试Oracle连接
func OracleConn(ctx context.Context, info *Common.HostInfo, user string, pass string,
               serviceName string, asSysdba bool) (bool, error) {
    host, port := info.Host, info.Ports

    // 构造连接字符串，添加更多参数
    connStr := fmt.Sprintf("oracle://%s:%s@%s:%s/%s?connect_timeout=%d",
        user, pass, host, port, serviceName, Common.Timeout)

    // 对SYS用户使用SYSDBA权限
    if asSysdba {
        connStr += "&sysdba=1"
    }

    // 建立数据库连接
    db, err := sql.Open("oracle", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(time.Duration(Common.Timeout) * time.Second)
    db.SetConnMaxIdleTime(time.Duration(Common.Timeout) * time.Second)
    db.SetMaxIdleConns(0)
    db.SetMaxOpenConns(1)

    // 使用上下文测试连接
    pingCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
    defer cancel()

    // 测试连接
    err = db.PingContext(pingCtx)
    if err != nil {
        return false, err
    }

    // 不需要额外的查询验证，连接成功即可
    return true, nil
}`,2)])],2)]),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," SYSDBA 权限模式 ",2),n[10]||(n[10]=e("p",{class:"mb-4"},"对于 SYS 用户，Fscan 会自动尝试 SYSDBA 权限模式的连接：",-1)),e("div",I,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",F,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// 对SYS用户尝试SYSDBA模式
if strings.ToUpper(credential.Username) == "SYS" {
    result = tryOracleSysCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
    if result.Success {
        result.ServiceName = serviceName
        return result
    }
}`,2)])],2)]),e("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",r(t)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",j,[a(r(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",r(t)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:o(["font-medium",r(t)?"text-amber-300":"text-amber-700"])},"SYSDBA 权限说明",2),e("p",{class:o(["mt-1",r(t)?"text-amber-200":"text-amber-800"])}," SYSDBA 是 Oracle 中最高级别的系统权限，拥有此权限可以启动/关闭数据库、创建数据库、完全访问 SYS 用户对象，甚至在数据库关闭状态下执行操作。 ",2)])])],2),e("h2",{id:"section-6",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),n[11]||(n[11]=e("p",{class:"mb-4"},"如果高危凭据检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),e("div",H,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",X,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// 构建完整凭据列表
var credentials []OracleCredential
for _, user := range Common.Userdict["oracle"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        // 转换用户名为大写，提高匹配率
        credentials = append(credentials, OracleCredential{
            Username: strings.ToUpper(user),
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["oracle"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentOracleScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),n[12]||(n[12]=e("p",{class:"mb-4"},"并发扫描使用工作池模式，支持最大并发数控制和提前退出：",-1)),e("div",V,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",W,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// concurrentOracleScan 并发扫描Oracle服务
func concurrentOracleScan(ctx context.Context, info *Common.HostInfo, credentials []OracleCredential,
                          timeoutSeconds int64, maxRetries int) *OracleScanResult {
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
    resultChan := make(chan *OracleScanResult, 1)
    workChan := make(chan OracleCredential, maxConcurrent)
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
                    // 尝试所有常见服务名
                    result := tryAllServiceNames(scanCtx, info, credential, timeoutSeconds, maxRetries)
                    if result != nil && result.Success {
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

    // ...省略发送工作和等待结果的代码...
}`,2)])],2)]),e("h2",{id:"section-7",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 线程控制 ",2),n[13]||(n[13]=e("p",{class:"mb-4"},[s("Oracle 扫描模块使用 "),e("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),e("code",null,"-t"),s(" 参数设置：")],-1)),e("div",G,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",q,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1521 -m oracle -t 50",2)])],2)]),n[14]||(n[14]=e("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),e("div",z,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",$,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 超时设置 ",2),n[15]||(n[15]=e("p",{class:"mb-4"},"Oracle 扫描支持两层超时控制：",-1)),n[16]||(n[16]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,[e("strong",null,"单个连接超时"),s("：通过 "),e("code",null,"-time"),s(" 参数设置每个 Oracle 连接尝试的最大时间（秒）")]),e("li",null,[e("strong",null,"全局超时"),s("：通过 "),e("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),e("div",J,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",K,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
connStr := fmt.Sprintf("oracle://%s:%s@%s:%s/%s?connect_timeout=%d",
    user, pass, host, port, serviceName, Common.Timeout)`,2)])],2)]),e("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",r(t)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",Q,[a(r(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",r(t)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:o(["font-medium",r(t)?"text-amber-300":"text-amber-700"])},"提示",2),e("p",{class:o(["mt-1",r(t)?"text-amber-200":"text-amber-800"])}," Oracle 数据库连接可能较慢，特别是在远程网络环境中。建议根据网络环境适当增加单个连接超时时间，避免漏报。 ",2)])])],2),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 重试机制 ",2),n[17]||(n[17]=e("p",{class:"mb-4"},[s("Fscan 的 Oracle 扫描模块支持自动重试连接，通过 "),e("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),e("div",Z,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",ee,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},`// tryOracleCredential 尝试单个Oracle凭据
func tryOracleCredential(ctx context.Context, info *Common.HostInfo, credential OracleCredential,
                         serviceName string, timeoutSeconds int64, maxRetries int) *OracleScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &OracleScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s@%s", retry+1,
                               credential.Username, credential.Password, serviceName))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时上下文并尝试连接
            // ...省略详细实现...

            // 连接失败时的错误处理
            if err != nil {
                // 如果是认证错误，不需要重试
                if strings.Contains(err.Error(), "ORA-01017") {
                    break // 认证失败
                }

                // 检查是否需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &OracleScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),e("h2",{id:"section-8",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(t)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 快速扫描单个主机 ",2),e("div",re,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",te,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 1521 -m oracle",2)])],2)]),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 扫描网段并指定用户名 ",2),e("div",oe,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",ne,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1521 -m oracle -user SYS,SYSTEM,DBSNMP",2)])],2)]),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),e("div",se,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",ae,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 1521 -m oracle -user SYS,SYSTEM -pwd oracle,123456,{user}@123",2)])],2)]),e("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(t)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),e("div",le,[e("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",r(t)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",ie,[e("code",{class:o(["transition-colors duration-300",r(t)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 1521 -m oracle -t 30 -time 5 -retries 2 -o oracle_results.txt",2)])],2)]),n[18]||(n[18]=e("p",{class:"mb-4"},"这个配置使用 30 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),e("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",r(t)?"bg-orange-900/10 border border-orange-900/20":"bg-orange-50 border border-orange-100"])},[e("div",de,[a(r(l),{icon:"mdi:check-circle",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",r(t)?"text-orange-400":"text-orange-600"])},null,8,["class"]),e("div",null,[e("p",{class:o(["font-medium",r(t)?"text-orange-300":"text-orange-700"])},"最佳实践",2),e("p",{class:o(["mt-1",r(t)?"text-orange-200":"text-orange-800"])}," 成功爆破 Oracle 数据库后，建议记录服务名，因为同一服务器上可能有多个 Oracle 实例运行在同一端口上，但服务名不同。 ",2)])])],2)],2),e("div",{class:o(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",r(t)?"border-gray-700":"border-gray-200"])},[e("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:o(["inline-flex items-center transition-colors duration-200",r(t)?"text-orange-400 hover:text-orange-300":"text-orange-600 hover:text-orange-700"])},[a(r(l),{icon:"mdi:github",class:"mr-1.5"}),n[19]||(n[19]=e("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},xe=f(ce,[["__scopeId","data-v-a29c96d9"]]);export{xe as default};
