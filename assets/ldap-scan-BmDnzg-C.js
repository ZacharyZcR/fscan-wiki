import{_ as p,i as f,r as v,a as c,q as b,b as t,n as o,d as e,e as a,I as l,F as g,g as u,t as i,f as n}from"./index-DADAu9_P.js";const h={class:"flex items-center mb-6"},w={class:"flex items-center mb-2"},D={class:"pl-4 space-y-1"},P=["href"],_={class:"flex"},A={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},L={class:"flex items-center mb-2"},C={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},N={class:"flex items-center mb-2"},R={class:"overflow-x-auto mb-6"},k={class:"mb-4"},T={class:"p-3 text-sm font-mono overflow-x-auto"},E={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"flex"},j={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},I={class:"mb-4"},M={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},W={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},Z={class:"p-3 text-sm font-mono overflow-x-auto"},tt={class:"flex"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},ot={class:"mb-4"},st={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"mb-4"},at={class:"p-3 text-sm font-mono overflow-x-auto"},lt={class:"mb-4"},dt={class:"p-3 text-sm font-mono overflow-x-auto"},it={class:"mb-4"},ct={class:"p-3 text-sm font-mono overflow-x-auto"},bt={class:"flex"},mt={__name:"ldap-scan",setup(gt){const r=f("isDark",v(!1)),x=["LDAP 扫描简介","扫描原理与流程","配置参数与选项","LDAP 认证流程","密码爆破流程","高级设置","应用场景与示例"],y=[{name:"-m ldap",description:"启用 LDAP 扫描模块",example:"-m ldap"},{name:"-p 389,636",description:"LDAP 常用端口，389 是标准端口，636 是 LDAPS 加密端口",example:"-p 389,636"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,ldap"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd ldap123,{user}"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-nopwdburst",description:"禁用密码爆破，仅检测匿名访问",example:"-nopwdburst"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(ut,s)=>(b(),c("div",null,[t("div",h,[t("div",{class:o(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:folder-account",class:o(["text-xl",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:o(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," LDAP 扫描指南 ",2)]),t("div",{class:o(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",w,[a(e(l),{icon:"mdi:format-list-bulleted",class:o(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:o(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",D,[(b(),c(g,null,u(x,(d,m)=>t("li",{key:m,class:o(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${m}`,class:"hover:underline"},i(d),9,P)],2)),64))])],2),t("div",{class:o(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[s[0]||(s[0]=t("p",{class:"mb-4"},"LDAP 扫描是 Fscan 提供的一个重要功能模块，用于发现网络中的轻量级目录访问协议（LDAP）服务，检测匿名访问漏洞以及进行凭据爆破测试。本指南详细介绍 LDAP 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," LDAP 扫描简介 ",2),s[1]||(s[1]=t("p",{class:"mb-4"},"LDAP（轻量级目录访问协议）是一种用于访问和维护分布式目录信息服务的网络协议，广泛应用于企业身份认证和用户目录管理。Fscan 的 LDAP 扫描模块可以：",-1)),s[2]||(s[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 LDAP 服务（默认端口 389/636）"),t("li",null,"检测 LDAP 匿名访问漏洞"),t("li",null,"进行 LDAP 绑定认证的弱密码测试"),t("li",null,"支持自定义用户名和密码字典"),t("li",null,"提供详细的扫描结果报告")],-1)),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",_,[a(e(l),{icon:"mdi:shield-alert",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:o(["mt-1",e(r)?"text-blue-200":"text-blue-800"])}," LDAP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),s[3]||(s[3]=t("p",{class:"mb-4"},"LDAP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",A,[t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",L,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 LDAP 服务（默认端口 389/636）的主机 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",C,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"匿名访问检测",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试无凭据的匿名绑定访问，这是一个常见的安全配置错误 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果匿名访问被禁止，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2),t("div",{class:o(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",N,[t("div",{class:o(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:o(["text-xs font-bold",e(r)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:o(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"权限验证",2)]),t("p",{class:o(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 通过执行简单的目录搜索操作验证绑定成功后的权限，确保凭据有效 ",2)],2)]),s[4]||(s[4]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),s[5]||(s[5]=t("p",{class:"mb-4"},"LDAP 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",R,[t("table",{class:o(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:o(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:o(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:o(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(b(),c(g,null,u(y,d=>t("tr",{key:d.name,class:o(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:o(["py-2 px-4 font-mono",e(r)?"text-blue-400":"text-blue-600"])},i(d.name),3),t("td",{class:o(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},i(d.description),3),t("td",{class:o(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},i(d.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," LDAP 认证流程 ",2),s[6]||(s[6]=t("p",{class:"mb-4"},'LDAP 认证基于"绑定"（Bind）操作，用于验证连接凭据。Fscan 的 LDAP 扫描模块支持两种主要的绑定方式：',-1)),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 匿名绑定 ",2),s[7]||(s[7]=t("p",{class:"mb-4"},"匿名绑定是指不提供任何凭据的 LDAP 连接方式。如果 LDAP 服务器允许匿名绑定，可能会导致未授权访问目录信息：",-1)),t("div",k,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",T,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 首先尝试匿名访问
Common.LogDebug("尝试匿名访问...")
anonymousResult := tryLDAPCredential(ctx, info, LDAPCredential{"", ""}, Common.Timeout, 1)

if anonymousResult.Success {
    // 匿名访问成功
    saveLDAPResult(info, target, anonymousResult)
    return nil
}`,2)])],2)]),s[8]||(s[8]=t("p",{class:"mb-4"},[n("在 LDAP 连接函数中，匿名绑定通过 "),t("code",null,"UnauthenticatedBind"),n(" 方法实现：")],-1)),t("div",E,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 尝试绑定
var err error
if user != "" {
    // 使用用户名和密码绑定
    bindDN := fmt.Sprintf("cn=%s,dc=example,dc=com", user)
    err = l.Bind(bindDN, pass)
} else {
    // 匿名绑定
    err = l.UnauthenticatedBind("")
}`,2)])],2)]),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",F,[a(e(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"安全建议",2),t("p",{class:o(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 为提高安全性，建议在生产环境中禁用 LDAP 匿名绑定。这可以通过修改 LDAP 服务器配置并要求所有连接提供有效凭据来实现。 ",2)])])],2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 认证绑定 ",2),s[9]||(s[9]=t("p",{class:"mb-4"},"认证绑定需要提供有效的用户名（DN）和密码。Fscan 会尝试常见的 DN 格式和用户名密码组合：",-1)),t("div",j,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []LDAPCredential
for _, user := range Common.Userdict["ldap"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, LDAPCredential{
            Username: user,
            Password: actualPass,
        })
    }
}`,2)])],2)]),s[10]||(s[10]=t("p",{class:"mb-4"},"在扫描代码中，使用通用的 DN 格式尝试绑定操作，这能够覆盖许多常见的 LDAP 配置：",-1)),t("div",I,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",M,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用更通用的绑定DN模式
bindDN := fmt.Sprintf("cn=%s,dc=example,dc=com", user)
err = l.Bind(bindDN, pass)`,2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 权限验证 ",2),s[11]||(s[11]=t("p",{class:"mb-4"},"成功绑定后，Fscan 会执行一个简单的搜索操作，验证所获得的权限：",-1)),t("div",q,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",W,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 尝试简单搜索以验证权限
searchRequest := ldap.NewSearchRequest(
    "dc=example,dc=com",
    ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
    "(objectClass=*)",
    []string{"dn"},
    nil,
)

_, err = l.Search(searchRequest)
done <- err`,2)])],2)]),s[12]||(s[12]=t("p",{class:"mb-4"},"这个搜索请求参数包含：",-1)),s[13]||(s[13]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"基础 DN"),n('：搜索的起始点（"dc=example,dc=com"）')]),t("li",null,[t("strong",null,"搜索范围"),n("：整个子树（ScopeWholeSubtree）")]),t("li",null,[t("strong",null,"过滤条件"),n('：所有对象（"(objectClass=*)"）')]),t("li",null,[t("strong",null,"属性"),n("：仅返回 DN 属性")])],-1)),t("h2",{id:"section-4",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),s[14]||(s[14]=t("p",{class:"mb-4"},"如果匿名访问被禁止，Fscan 将开始尝试用户名和密码组合：",-1)),t("div",V,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用工作池并发扫描
result := concurrentLDAPScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
if result != nil {
    // 记录成功结果
    saveLDAPResult(info, target, result)
    return nil
}`,2)])],2)]),s[15]||(s[15]=t("p",{class:"mb-4"},"爆破过程使用协程池并发测试多个凭据，支持自动取消和提前退出：",-1)),t("div",H,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 启动工作协程
for i := 0; i < maxConcurrent; i++ {
    wg.Add(1)
    go func() {
        defer wg.Done()
        for credential := range workChan {
            select {
            case <-scanCtx.Done():
                return
            default:
                result := tryLDAPCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),s[16]||(s[16]=t("p",{class:"mb-4"},"每个凭据会经过多次重试，处理常见的网络问题：",-1)),t("div",$,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryLDAPCredential 尝试单个LDAP凭据
func tryLDAPCredential(ctx context.Context, info *Common.HostInfo, credential LDAPCredential,
                       timeoutSeconds int64, maxRetries int) *LDAPScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &LDAPScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := LDAPConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                isAnonymous := credential.Username == "" && credential.Password == ""
                return &LDAPScanResult{
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

    return &LDAPScanResult{
        Success:    false,
        Error:      lastErr,
        Credential: credential,
    }
}`,2)])],2)]),t("h2",{id:"section-5",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),s[17]||(s[17]=t("p",{class:"mb-4"},[n("LDAP 扫描模块使用 "),t("code",null,"ModuleThreadNum"),n(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),n(" 参数设置：")],-1)),t("div",K,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",O,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 389 -m ldap -t 100",2)])],2)]),s[18]||(s[18]=t("p",{class:"mb-4"},"内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：",-1)),t("div",Q,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),s[19]||(s[19]=t("p",{class:"mb-4"},"LDAP 扫描支持两层超时控制：",-1)),s[20]||(s[20]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),n("：通过 "),t("code",null,"-time"),n(" 参数设置每个 LDAP 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),n("：通过 "),t("code",null,"-timeout"),n(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",Y,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Z,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
dialer := &net.Dialer{
    Timeout: time.Duration(Common.Timeout) * time.Second,
}
conn, err := dialer.DialContext(ctx, "tcp", address)`,2)])],2)]),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",tt,[a(e(l),{icon:"mdi:lightbulb",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:o(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。LDAP 服务在高负载下响应可能较慢，建议适当增加超时时间。 ",2)])])],2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),s[21]||(s[21]=t("p",{class:"mb-4"},[n("Fscan 的 LDAP 扫描模块支持自动重试连接，通过 "),t("code",null,"-retries"),n(" 参数设置最大重试次数：")],-1)),t("div",et,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`for retry := 0; retry < maxRetries; retry++ {
    // ...
    if retry > 0 {
        Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
        time.Sleep(500 * time.Millisecond) // 重试前等待
    }
    // ...
}`,2)])],2)]),t("h2",{id:"section-6",class:o(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",ot,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",st,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 389,636 -m ldap",2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 匿名访问检测 ",2),t("div",nt,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",at,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 389 -m ldap -nopwdburst",2)])],2)]),s[22]||(s[22]=t("p",{class:"mb-4"},[n("使用 "),t("code",null,"-nopwdburst"),n(" 参数可以禁用密码爆破，仅检测匿名访问漏洞。")],-1)),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",lt,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",dt,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 389 -m ldap -user admin,manager,ldap -pwd admin123,{user}@123",2)])],2)]),t("h3",{class:o(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",it,[t("div",{class:o(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ct,[t("code",{class:o(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 389 -m ldap -t 100 -time 5 -retries 2 -o ldap_results.txt",2)])],2)]),s[23]||(s[23]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:o(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",bt,[a(e(l),{icon:"mdi:check-circle",class:o(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:o(["font-medium",e(r)?"text-blue-300":"text-blue-700"])},"最佳实践",2),t("p",{class:o(["mt-1",e(r)?"text-blue-200":"text-blue-800"])},' LDAP 目录的搜索基础 DN 通常因企业而异。在实际环境中，您可能需要根据目标环境调整 DN 格式，例如使用 "uid={user},ou=people,dc=example,dc=com" 等格式。 ',2)])])],2)],2),t("div",{class:o(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:o(["inline-flex items-center transition-colors duration-200",e(r)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),s[24]||(s[24]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},yt=p(mt,[["__scopeId","data-v-43c10b02"]]);export{yt as default};
