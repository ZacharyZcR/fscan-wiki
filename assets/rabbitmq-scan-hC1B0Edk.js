import{_ as y,i as f,r as h,a as b,q as c,b as t,n as s,d as e,e as o,I as a,F as g,g as u,t as d,f as l}from"./index-DADAu9_P.js";const v={class:"flex items-center mb-6"},C={class:"flex items-center mb-2"},R={class:"pl-4 space-y-1"},w=["href"],M={class:"flex"},Q={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},_={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},E={class:"flex items-center mb-2"},D={class:"overflow-x-auto mb-6"},P={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},U={class:"flex"},A={class:"mb-4"},L={class:"p-3 text-sm font-mono overflow-x-auto"},T={class:"flex"},F={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},N={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},W={class:"flex items-center mb-2"},B={class:"flex items-center mb-2"},G={class:"flex items-center mb-2"},V={class:"flex items-center mb-2"},z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"mb-4"},K={class:"p-3 text-sm font-mono overflow-x-auto"},O={class:"flex"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"mb-4"},nt={class:"p-3 text-sm font-mono overflow-x-auto"},ot={class:"flex"},at={__name:"rabbitmq-scan",setup(lt){const r=f("isDark",h(!1)),x=["RabbitMQ 扫描简介","扫描原理与流程","配置参数与选项","凭据验证流程","密码爆破流程","高级设置","应用场景与示例"],p=[{name:"-m rabbitmq",description:"启用 RabbitMQ 扫描模块",example:"-m rabbitmq"},{name:"-p 5672,15672",description:"RabbitMQ 常用端口，多个用逗号分隔",example:"-p 5672,15672"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user guest,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd guest,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(it,n)=>(c(),b("div",null,[t("div",v,[t("div",{class:s(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-purple-900/30":"bg-purple-100"])},[o(e(a),{icon:"mdi:rabbit",class:s(["text-xl",e(r)?"text-purple-400":"text-purple-600"])},null,8,["class"])],2),t("h1",{class:s(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," RabbitMQ 扫描指南 ",2)]),t("div",{class:s(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",C,[o(e(a),{icon:"mdi:format-list-bulleted",class:s(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:s(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",R,[(c(),b(g,null,u(x,(i,m)=>t("li",{key:m,class:s(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-purple-400":"text-gray-600 hover:text-purple-600"])},[t("a",{href:`#section-${m}`,class:"hover:underline"},d(i),9,w)],2)),64))])],2),t("div",{class:s(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[n[1]||(n[1]=t("p",{class:"mb-4"},"RabbitMQ 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 RabbitMQ 消息代理服务，并尝试通过弱密码进行身份验证。本指南详细介绍 RabbitMQ 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," RabbitMQ 扫描简介 ",2),n[2]||(n[2]=t("p",{class:"mb-4"},"RabbitMQ 是一个开源的消息代理软件，实现了高级消息队列协议（AMQP），被广泛应用于分布式系统集成、微服务架构和云原生应用。Fscan 的 RabbitMQ 扫描模块可以：",-1)),n[3]||(n[3]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 RabbitMQ 服务（默认端口 5672）"),t("li",null,"使用 AMQP 协议进行身份验证测试"),t("li",null,"检测默认的管理员账户（guest/guest）"),t("li",null,"支持自定义用户名和密码字典"),t("li",null,"识别弱密码和身份验证问题")],-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-purple-900/10 border border-purple-900/20":"bg-purple-50 border border-purple-100"])},[t("div",M,[o(e(a),{icon:"mdi:shield-alert",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-purple-400":"text-purple-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-purple-300":"text-purple-700"])},"安全提示",2),t("p",{class:s(["mt-1",e(r)?"text-purple-200":"text-purple-800"])}," RabbitMQ 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),n[4]||(n[4]=t("p",{class:"mb-4"},"RabbitMQ 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",Q,[t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",_,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-purple-900/20":"bg-purple-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-purple-400":"text-purple-600"])},"1",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 RabbitMQ 服务（默认端口 5672、15672）的主机 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-purple-900/20":"bg-purple-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-purple-400":"text-purple-600"])},"2",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"默认凭据检测",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试默认的 guest/guest 凭据进行连接，这是最常见的管理员账户 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-purple-900/20":"bg-purple-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-purple-400":"text-purple-600"])},"3",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果默认凭据失败，则使用多线程技术尝试用户名和密码组合，智能处理错误和重试 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",E,[t("div",{class:s(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-purple-900/20":"bg-purple-100"])},[t("span",{class:s(["text-xs font-bold",e(r)?"text-purple-400":"text-purple-600"])},"4",2)],2),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析 ",2)],2)]),n[5]||(n[5]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),n[6]||(n[6]=t("p",{class:"mb-4"},"RabbitMQ 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",D,[t("table",{class:s(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:s(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:s(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:s(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(c(),b(g,null,u(p,i=>t("tr",{key:i.name,class:s(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-purple-400":"text-purple-600"])},d(i.name),3),t("td",{class:s(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(i.description),3),t("td",{class:s(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(i.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 凭据验证流程 ",2),n[7]||(n[7]=t("p",{class:"mb-4"},"RabbitMQ 扫描模块使用 AMQP（高级消息队列协议）来验证凭据。AMQP 是 RabbitMQ 的核心协议，提供了一种标准化的方式来发送和接收消息。",-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 默认凭据检测 ",2),n[8]||(n[8]=t("p",{class:"mb-4"},"扫描首先会尝试使用默认凭据（guest/guest）进行连接：",-1)),t("div",P,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 先测试默认账号 guest/guest
Common.LogDebug("尝试默认账号 guest/guest")
defaultCredential := RabbitMQCredential{Username: "guest", Password: "guest"}
defaultResult := tryRabbitMQCredential(ctx, info, defaultCredential, Common.Timeout, Common.MaxRetries)

if defaultResult.Success {
    saveRabbitMQResult(info, target, defaultResult.Credential)
    return nil
} else if defaultResult.Error != nil {
    // 打印默认账号的详细错误信息
    Common.LogDebug(fmt.Sprintf("默认账号 guest/guest 失败，详细错误: %s", defaultResult.ErrorMsg))
}`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-purple-900/10 border border-purple-900/20":"bg-purple-50 border border-purple-100"])},[t("div",U,[o(e(a),{icon:"mdi:information-outline",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-purple-400":"text-purple-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-purple-300":"text-purple-700"])},"默认凭据说明",2),t("p",{class:s(["mt-1",e(r)?"text-purple-200":"text-purple-800"])}," RabbitMQ 默认安装时会创建 guest/guest 账户，但从 3.3.0 版本开始，该账户仅允许从本地主机连接。这是一项重要的安全特性，但在某些配置中可能被更改。 ",2)])])],2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," AMQP 连接过程 ",2),n[9]||(n[9]=t("p",{class:"mb-4"},"RabbitMQ 验证使用 AMQP 协议进行连接尝试：",-1)),t("div",A,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",L,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// RabbitMQConn 尝试 RabbitMQ 连接
func RabbitMQConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error, string) {
    host, port := info.Host, info.Ports

    // 构造 AMQP URL
    amqpURL := fmt.Sprintf("amqp://%s:%s@%s:%s/", user, pass, host, port)

    // 配置连接
    config := amqp.Config{
        Dial: func(network, addr string) (net.Conn, error) {
            dialer := &net.Dialer{Timeout: time.Duration(Common.Timeout) * time.Second}
            return dialer.DialContext(ctx, network, addr)
        },
    }

    // 尝试连接
    conn, err := amqp.DialConfig(amqpURL, config)

    if err != nil {
        detailErr := err.Error()
        return false, err, detailErr
    }
    defer conn.Close()

    return true, nil, ""
}`,2)])],2)]),n[10]||(n[10]=t("p",{class:"mb-4"},"AMQP 连接过程主要包括：",-1)),n[11]||(n[11]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[l("构造标准的 AMQP URL，格式为 "),t("code",null,"amqp://用户名:密码@主机:端口/")]),t("li",null,"配置连接选项，包括超时设置"),t("li",null,"尝试建立连接，连接成功表示凭据有效"),t("li",null,"详细记录错误信息，以便后续分析")],-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",T,[o(e(a),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"错误分析",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},' 当连接失败时，RabbitMQ 会返回具体的错误信息，例如 "ACCESS_REFUSED" 表示凭据错误。Fscan 会根据错误类型决定是否需要重试，提高扫描效率。 ',2)])])],2),t("h2",{id:"section-4",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 密码爆破流程 ",2),n[12]||(n[12]=t("p",{class:"mb-4"},"如果默认凭据检测失败，Fscan 将尝试使用字典进行密码爆破：",-1)),t("div",F,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建其他凭据列表
var credentials []RabbitMQCredential
for _, user := range Common.Userdict["rabbitmq"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, RabbitMQCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["rabbitmq"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentRabbitMQScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),n[13]||(n[13]=t("p",{class:"mb-4"},"密码爆破过程智能处理重试和错误分析：",-1)),t("div",j,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",N,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryRabbitMQCredential 尝试单个RabbitMQ凭据
func tryRabbitMQCredential(ctx context.Context, info *Common.HostInfo, credential RabbitMQCredential,
                          timeoutSeconds int64, maxRetries int) *RabbitMQScanResult {
    // ...省略部分代码...

    for retry := 0; retry < maxRetries; retry++ {
        // ...省略部分代码...

        // 创建连接超时上下文
        connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
        success, err, detailErr := RabbitMQConn(connCtx, info, credential.Username, credential.Password)
        cancel()

        if success {
            return &RabbitMQScanResult{
                Success:    true,
                Credential: credential,
            }
        }

        lastErr = err
        errorMsg = detailErr

        // 打印详细的错误信息，包括所有原始错误信息
        Common.LogDebug(fmt.Sprintf("凭据 %s:%s 失败，错误详情: %s",
            credential.Username, credential.Password, errorMsg))

        if err != nil {
            // 可以根据错误信息类型来决定是否需要重试
            // 例如，如果错误是认证错误，则无需重试
            if strings.Contains(errorMsg, "ACCESS_REFUSED") {
                Common.LogDebug("认证错误，无需重试")
                break
            }

            // 检查是否需要重试
            if retryErr := Common.CheckErrs(err); retryErr == nil {
                break // 不需要重试的错误
            }
        }
    }

    // ...省略部分代码...
}`,2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 智能错误识别 ",2),n[14]||(n[14]=t("p",{class:"mb-4"},"RabbitMQ 扫描模块能够识别不同类型的错误并做出相应处理：",-1)),t("div",H,[t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",W,[o(e(a),{icon:"mdi:close-circle",class:s(["text-lg mr-2",e(r)?"text-red-400":"text-red-500"])},null,8,["class"]),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"认证错误",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])},n[0]||(n[0]=[t("code",null,"ACCESS_REFUSED",-1),l(" - 表示用户名或密码错误，无需重试 ")]),2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",B,[o(e(a),{icon:"mdi:clock-alert",class:s(["text-lg mr-2",e(r)?"text-yellow-400":"text-yellow-500"])},null,8,["class"]),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"超时错误",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 连接超时或读写超时，可能需要重试 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",G,[o(e(a),{icon:"mdi:lan-disconnect",class:s(["text-lg mr-2",e(r)?"text-orange-400":"text-orange-500"])},null,8,["class"]),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"连接错误",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 连接被拒绝或网络错误，根据具体情况决定是否重试 ",2)],2),t("div",{class:s(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",V,[o(e(a),{icon:"mdi:cancel",class:s(["text-lg mr-2",e(r)?"text-purple-400":"text-purple-500"])},null,8,["class"]),t("h3",{class:s(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"全局取消",2)]),t("p",{class:s(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 全局上下文取消，立即终止所有正在进行的操作 ",2)],2)]),t("h2",{id:"section-5",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 并发控制 ",2),n[15]||(n[15]=t("p",{class:"mb-4"},[l("RabbitMQ 扫描模块使用 "),t("code",null,"ModuleThreadNum"),l(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),l(" 参数设置：")],-1)),t("div",z,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentRabbitMQScan 并发扫描RabbitMQ服务
func concurrentRabbitMQScan(ctx context.Context, info *Common.HostInfo, credentials []RabbitMQCredential,
                           timeoutSeconds int64, maxRetries int) *RabbitMQScanResult {
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
    resultChan := make(chan *RabbitMQScanResult, 1)
    workChan := make(chan RabbitMQCredential, maxConcurrent)
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
                    result := tryRabbitMQCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),n[16]||(n[16]=t("p",{class:"mb-4"},"内部实现使用协程池并发处理多个凭据检测任务，一旦发现有效凭据会立即取消其他正在进行的任务，提高扫描效率。",-1)),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),n[17]||(n[17]=t("p",{class:"mb-4"},"RabbitMQ 扫描支持两层超时控制：",-1)),n[18]||(n[18]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),l("：通过 "),t("code",null,"-time"),l(" 参数设置每个 RabbitMQ 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),l("：通过 "),t("code",null,"-timeout"),l(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",J,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",K,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 为单个连接创建超时上下文
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
success, err, detailErr := RabbitMQConn(connCtx, info, credential.Username, credential.Password)
cancel()`,2)])],2)]),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",O,[o(e(a),{icon:"mdi:lightbulb",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:s(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。 ",2)])])],2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),n[19]||(n[19]=t("p",{class:"mb-4"},[l("Fscan 的 RabbitMQ 扫描模块支持智能重试机制，通过 "),t("code",null,"-retries"),l(" 参数设置最大重试次数：")],-1)),t("div",X,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`for retry := 0; retry < maxRetries; retry++ {
    // ...省略部分代码...

    if retry > 0 {
        Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
        time.Sleep(500 * time.Millisecond) // 重试前等待
    }

    // 尝试连接...

    // 智能分析错误类型决定是否继续重试
    if strings.Contains(errorMsg, "ACCESS_REFUSED") {
        Common.LogDebug("认证错误，无需重试")
        break
    }
}`,2)])],2)]),n[20]||(n[20]=t("p",{class:"mb-4"},"重试机制的关键特性：",-1)),n[21]||(n[21]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"在重试前会等待 500 毫秒，避免对目标服务器造成过大压力"),t("li",null,"针对不同类型的错误采取不同的重试策略，例如对于认证错误（凭据无效）不进行重试"),t("li",null,"详细记录每次重试的过程和结果，便于调试和分析")],-1)),t("h2",{id:"section-6",class:s(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Z,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5672,15672 -m rabbitmq",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",et,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 5672 -m rabbitmq -user admin,rabbitmq,root -pwd admin123,rabbitmq,{user}@2023",2)])],2)]),t("h3",{class:s(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",st,[t("div",{class:s(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",nt,[t("code",{class:s(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 5672,15672 -m rabbitmq -t 100 -time 3 -retries 2 -o rabbitmq_results.txt",2)])],2)]),n[22]||(n[22]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:s(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-purple-900/10 border border-purple-900/20":"bg-purple-50 border border-purple-100"])},[t("div",ot,[o(e(a),{icon:"mdi:check-circle",class:s(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-purple-400":"text-purple-600"])},null,8,["class"]),t("div",null,[t("p",{class:s(["font-medium",e(r)?"text-purple-300":"text-purple-700"])},"最佳实践",2),t("p",{class:s(["mt-1",e(r)?"text-purple-200":"text-purple-800"])}," 使用 RabbitMQ 时应始终更改默认凭据，使用强密码，并限制允许访问的 IP 地址。保证消息队列安全性是分布式系统安全的重要组成部分。 ",2)])])],2)],2),t("div",{class:s(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:s(["inline-flex items-center transition-colors duration-200",e(r)?"text-purple-400 hover:text-purple-300":"text-purple-600 hover:text-purple-700"])},[o(e(a),{icon:"mdi:github",class:"mr-1.5"}),n[23]||(n[23]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},bt=y(at,[["__scopeId","data-v-24dfdcab"]]);export{bt as default};
