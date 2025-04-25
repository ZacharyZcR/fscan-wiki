import{_ as y,i as p,r as k,a as c,q as m,b as t,n,d as e,e as s,I as i,F as b,g as u,t as d,f as a}from"./index-DnnHOreL.js";const h={class:"flex items-center mb-6"},v={class:"flex items-center mb-2"},C={class:"pl-4 space-y-1"},w=["href"],S={class:"flex"},K={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},_={class:"flex items-center mb-2"},N={class:"flex items-center mb-2"},L={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},R={class:"overflow-x-auto mb-6"},A={class:"mb-4"},E={class:"p-3 text-sm font-mono overflow-x-auto"},D={class:"mb-4"},P={class:"p-3 text-sm font-mono overflow-x-auto"},U={class:"flex"},M={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"mb-4"},B={class:"p-3 text-sm font-mono overflow-x-auto"},G={class:"mb-4"},z={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},J={class:"flex"},O={class:"mb-4"},Q={class:"p-3 text-sm font-mono overflow-x-auto"},X={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"mb-4"},rt={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"mb-4"},ot={class:"p-3 text-sm font-mono overflow-x-auto"},at={class:"flex"},st={__name:"kafka-scan",setup(it){const r=p("isDark",k(!1)),f=["Kafka 扫描简介","扫描原理与流程","配置参数与选项","未授权访问检测","SASL 认证爆破","Kafka 连接与验证","高级设置","应用场景与示例"],x=[{name:"-m kafka",description:"启用 Kafka 扫描模块",example:"-m kafka"},{name:"-p 9092",description:"指定 Kafka 端口（默认为 9092）",example:"-p 9092,29092"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user admin,kafka"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd admin123,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(lt,o)=>(m(),c("div",null,[t("div",h,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(r)?"bg-orange-900/30":"bg-orange-100"])},[s(e(i),{icon:"mdi:message-stream",class:n(["text-xl",e(r)?"text-orange-400":"text-orange-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",e(r)?"text-white":"text-gray-900"])}," Kafka 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",e(r)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",v,[s(e(i),{icon:"mdi:format-list-bulleted",class:n(["mr-2",e(r)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",e(r)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",C,[(m(),c(b,null,u(f,(l,g)=>t("li",{key:g,class:n(["transition-colors duration-200 text-sm font-normal",e(r)?"text-gray-400 hover:text-orange-400":"text-gray-600 hover:text-orange-600"])},[t("a",{href:`#section-${g}`,class:"hover:underline"},d(l),9,w)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",e(r)?"text-gray-300":"text-gray-700"])},[o[1]||(o[1]=t("p",{class:"mb-4"},"Kafka 扫描是 Fscan 的重要功能模块，用于发现网络中运行的 Apache Kafka 消息队列服务，并检测未授权访问和弱密码问题。本指南详细介绍 Kafka 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Kafka 扫描简介 ",2),o[2]||(o[2]=t("p",{class:"mb-4"},"Apache Kafka 是一个分布式的流处理平台，被广泛用于构建实时数据流管道和流式应用程序。Fscan 的 Kafka 扫描模块可以：",-1)),o[3]||(o[3]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 Kafka 服务（默认端口 9092）"),t("li",null,"检测 Kafka 未授权访问漏洞"),t("li",null,"进行 SASL 认证的密码爆破"),t("li",null,"识别默认和弱密码账户")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-orange-900/10 border border-orange-900/20":"bg-orange-50 border border-orange-100"])},[t("div",S,[s(e(i),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-orange-400":"text-orange-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-orange-300":"text-orange-700"])},"安全提示",2),t("p",{class:n(["mt-1",e(r)?"text-orange-200":"text-orange-800"])}," Kafka 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[4]||(o[4]=t("p",{class:"mb-4"},"Kafka 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",K,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",_,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-green-900/20":"bg-green-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-green-400":"text-green-600"])},"1",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Kafka 服务（默认端口 9092）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",N,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-green-900/20":"bg-green-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-green-400":"text-green-600"])},"2",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"未授权访问检测",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 首先尝试无凭据连接 Kafka，检测是否允许匿名访问（常见安全风险） ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",L,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-green-900/20":"bg-green-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-green-400":"text-green-600"])},"3",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 如果无法未授权访问，则使用多线程技术尝试常见用户名和密码组合 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(r)?"bg-green-900/20":"bg-green-100"])},[t("span",{class:n(["text-xs font-bold",e(r)?"text-green-400":"text-green-600"])},"4",2)],2),t("h3",{class:n(["font-medium",e(r)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:n(["text-sm",e(r)?"text-gray-400":"text-gray-600"])}," 记录成功的访问方式（无认证或有效凭据）并生成详细报告 ",2)],2)]),o[5]||(o[5]=t("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"Kafka 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",R,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(r)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(e(r)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",e(r)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",e(r)?"divide-gray-700":"divide-gray-200"])},[(m(),c(b,null,u(x,l=>t("tr",{key:l.name,class:n(e(r)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-orange-400":"text-orange-600"])},d(l.name),3),t("td",{class:n(["py-2 px-4",e(r)?"text-gray-300":"text-gray-700"])},d(l.description),3),t("td",{class:n(["py-2 px-4 font-mono",e(r)?"text-gray-400":"text-gray-500"])},d(l.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 未授权访问检测 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},"Kafka 未授权访问是一个常见的安全隐患。许多组织未正确配置 Kafka 的身份验证，导致服务可以在没有任何凭据的情况下被访问。Fscan 会首先尝试无认证连接：",-1)),t("div",A,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",E,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 先尝试无认证访问
Common.LogDebug("尝试无认证访问...")
unauthResult := tryKafkaCredential(ctx, info, KafkaCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if unauthResult.Success {
    // 无认证访问成功
    Common.LogSuccess(fmt.Sprintf("Kafka服务 %s 无需认证即可访问", target))

    // 保存无认证访问结果
    result := &Common.ScanResult{
        Time:   time.Now(),
        Type:   Common.VULN,
        Target: info.Host,
        Status: "vulnerable",
        Details: map[string]interface{}{
            "port":    info.Ports,
            "service": "kafka",
            "type":    "unauthorized-access",
        },
    }
    Common.SaveResult(result)
    return nil
}`,2)])],2)]),o[8]||(o[8]=t("p",{class:"mb-4"},"无认证连接会尝试创建一个不带任何 SASL 配置的 Kafka 客户端或消费者：",-1)),t("div",D,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",P,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// KafkaConn 尝试 Kafka 连接
func KafkaConn(info *Common.HostInfo, user string, pass string) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(Common.Timeout) * time.Second

    config := sarama.NewConfig()
    config.Net.DialTimeout = timeout
    config.Net.ReadTimeout = timeout
    config.Net.WriteTimeout = timeout
    config.Net.TLS.Enable = false
    config.Version = sarama.V2_0_0_0

    // 设置 SASL 配置（仅当提供了用户名或密码时）
    if user != "" || pass != "" {
        config.Net.SASL.Enable = true
        config.Net.SASL.Mechanism = sarama.SASLTypePlaintext
        config.Net.SASL.User = user
        config.Net.SASL.Password = pass
        config.Net.SASL.Handshake = true
    }

    brokers := []string{fmt.Sprintf("%s:%s", host, port)}

    // 尝试连接...
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",U,[s(e(i),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"防护提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])}," 防止 Kafka 未授权访问的关键措施包括启用 SASL 认证、配置 ACL 访问控制、使用 SSL/TLS 加密，以及使用防火墙限制对 Kafka 端口的访问。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," SASL 认证爆破 ",2),o[9]||(o[9]=t("p",{class:"mb-4"},"当 Kafka 服务启用了 SASL 认证，Fscan 会自动尝试使用内置用户名和密码字典进行爆破：",-1)),t("div",M,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []KafkaCredential
for _, user := range Common.Userdict["kafka"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, KafkaCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["kafka"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentKafkaScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)`,2)])],2)]),o[10]||(o[10]=t("p",{class:"mb-4"},"爆破过程使用协程池并发测试多个凭据，支持自动重试和超时控制：",-1)),t("div",F,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",H,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// concurrentKafkaScan 并发扫描Kafka服务
func concurrentKafkaScan(ctx context.Context, info *Common.HostInfo, credentials []KafkaCredential,
                         timeoutSeconds int64, maxRetries int) *KafkaScanResult {
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
    resultChan := make(chan *KafkaScanResult, 1)
    workChan := make(chan KafkaCredential, maxConcurrent)
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
                    result := tryKafkaCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}`,2)])],2)]),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Kafka 连接与验证 ",2),o[11]||(o[11]=t("p",{class:"mb-4"},"Kafka 扫描模块使用 Sarama 库实现连接与验证功能。它同时尝试两种连接方式：作为消费者和作为客户端连接，这增加了检测成功率：",-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`brokers := []string{fmt.Sprintf("%s:%s", host, port)}

// 尝试作为消费者连接测试
consumer, err := sarama.NewConsumer(brokers, config)
if err == nil {
    defer consumer.Close()
    return true, nil
}

// 如果消费者连接失败，尝试作为客户端连接
client, err := sarama.NewClient(brokers, config)
if err == nil {
    defer client.Close()
    return true, nil
}

// 检查错误类型
if strings.Contains(err.Error(), "SASL") ||
    strings.Contains(err.Error(), "authentication") ||
    strings.Contains(err.Error(), "credentials") {
    return false, fmt.Errorf("认证失败")
}

return false, err`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},"这种双重检测方法提高了验证的可靠性，因为某些 Kafka 配置可能只允许特定类型的连接。扫描过程中还会分析错误信息，以判断失败原因是否与认证相关。",-1)),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 线程控制 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},[a("Kafka 扫描模块使用 "),t("code",null,"ModuleThreadNum"),a(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),a(" 参数设置：")],-1)),t("div",W,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",B,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9092 -m kafka -t 100",2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"并发控制实现确保工作池大小不会超过凭据总数，避免资源浪费：",-1)),t("div",G,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",z,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[15]||(o[15]=t("p",{class:"mb-4"},"Kafka 扫描支持三层超时控制：",-1)),o[16]||(o[16]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"连接超时"),a("：控制建立 TCP 连接的最大时间")]),t("li",null,[t("strong",null,"读写超时"),a("：控制 Kafka 协议交互的最大时间")]),t("li",null,[t("strong",null,"全局超时"),a("：通过 "),t("code",null,"-timeout"),a(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 设置 Kafka 客户端超时配置
config := sarama.NewConfig()
config.Net.DialTimeout = timeout
config.Net.ReadTimeout = timeout
config.Net.WriteTimeout = timeout`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",J,[s(e(i),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:n(["mt-1",e(r)?"text-amber-200":"text-amber-800"])},o[0]||(o[0]=[a(" Kafka 连接在大型集群或网络延迟较高的环境中可能需要更长的超时时间。建议使用 "),t("code",null,"-time",-1),a(" 参数适当调整单个连接的超时时间。 ")]),2)])])],2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[17]||(o[17]=t("p",{class:"mb-4"},"Fscan 的 Kafka 扫描模块支持自动重试连接，提高在不稳定网络环境中的成功率：",-1)),t("div",O,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Q,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},`// tryKafkaCredential 尝试单个Kafka凭据
func tryKafkaCredential(ctx context.Context, info *Common.HostInfo, credential KafkaCredential,
                        timeoutSeconds int64, maxRetries int) *KafkaScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &KafkaScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 尝试连接...

            if success {
                isUnauth := credential.Username == "" && credential.Password == ""
                return &KafkaScanResult{
                    Success:    true,
                    IsUnauth:   isUnauth,
                    Credential: credential,
                }
            }

            // 判断是否需要重试
            if err != nil {
                // 只有某些类型的错误需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &KafkaScanResult{Success: false, Error: lastErr, Credential: credential}
}`,2)])],2)]),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(r)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",X,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9092 -m kafka",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),t("div",Z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 9092 -m kafka -user admin,kafka,system -pwd admin123,kafka123,{user}@123",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 扫描非标准端口 ",2),t("div",et,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",rt,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 29092 -m kafka",2)])],2)]),o[18]||(o[18]=t("p",{class:"mb-4"},"这个命令会扫描使用非标准端口（29092）的 Kafka 服务。在容器化环境或某些云平台中，Kafka 可能使用非默认端口。",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(r)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",nt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",e(r)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ot,[t("code",{class:n(["transition-colors duration-300",e(r)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 9092 -m kafka -t 100 -time 5 -retries 2 -o kafka_results.txt",2)])],2)]),o[19]||(o[19]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",e(r)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",at,[s(e(i),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",e(r)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",e(r)?"text-green-300":"text-green-700"])},"最佳实践",2),t("p",{class:n(["mt-1",e(r)?"text-green-200":"text-green-800"])},' 在扫描 Kafka 服务时，考虑扩展用户名字典，包括常见的 Kafka 相关用户名如 "kafka"、"admin"、"service"、 "consumer" 等，以及与目标组织相关的特定用户名。 ',2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(r)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",e(r)?"text-orange-400 hover:text-orange-300":"text-orange-600 hover:text-orange-700"])},[s(e(i),{icon:"mdi:github",class:"mr-1.5"}),o[20]||(o[20]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},ct=y(st,[["__scopeId","data-v-212f6a1b"]]);export{ct as default};
