import{_ as p,i as f,r as h,a as d,q as c,b as e,n as r,d as t,e as s,I as a,F as b,g as x,t as l,h as v,f as m}from"./index-DnnHOreL.js";const w={class:"flex items-center mb-6"},T={class:"flex items-center mb-2"},S={class:"pl-4 space-y-1"},_=["href"],C={class:"flex"},B={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},L={class:"flex items-center mb-2"},A={class:"flex items-center mb-2"},I={class:"flex items-center mb-2"},N={class:"flex items-center mb-2"},k={class:"overflow-x-auto mb-6"},W={class:"mb-4"},D={class:"p-3 text-sm font-mono overflow-x-auto"},M={class:"mb-4"},R={class:"p-3 text-sm font-mono overflow-x-auto"},P={class:"mb-4"},O={class:"p-3 text-sm font-mono overflow-x-auto"},F={class:"flex"},z={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},E={class:"mb-4"},j={class:"p-3 text-sm font-mono overflow-x-auto"},q={class:"mb-4"},H={class:"p-3 text-sm font-mono overflow-x-auto"},V={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},Y={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"flex"},Q={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},ee={class:"mb-4"},te={class:"p-3 text-sm font-mono overflow-x-auto"},ne={class:"mb-4"},re={class:"p-3 text-sm font-mono overflow-x-auto"},oe={class:"mb-4"},se={class:"p-3 text-sm font-mono overflow-x-auto"},ae={class:"flex"},ie={__name:"telnet-scan",setup(le){const n=f("isDark",h(!1)),u=["Telnet 扫描简介","扫描原理与流程","配置参数与选项","Telnet 协议与交互","服务器类型检测","认证流程","高级设置","应用场景与示例"],y=[{name:"-m telnet",description:"启用 Telnet 扫描模块",example:"-m telnet"},{name:"-p 23",description:"指定 Telnet 端口（默认为 23）",example:"-p 23,2323"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user root,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd 123456,{user}"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 5"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o results.txt"}];return(de,o)=>(c(),d("div",null,[e("div",w,[e("div",{class:r(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",t(n)?"bg-amber-900/30":"bg-amber-100"])},[s(t(a),{icon:"mdi:console",class:r(["text-xl",t(n)?"text-amber-400":"text-amber-600"])},null,8,["class"])],2),e("h1",{class:r(["text-2xl font-bold transition-colors duration-300",t(n)?"text-white":"text-gray-900"])}," Telnet 扫描指南 ",2)]),e("div",{class:r(["mb-6 rounded-lg p-3 transition-colors duration-300",t(n)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[e("div",T,[s(t(a),{icon:"mdi:format-list-bulleted",class:r(["mr-2",t(n)?"text-gray-400":"text-gray-500"])},null,8,["class"]),e("h3",{class:r(["font-medium text-sm transition-colors duration-300",t(n)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),e("ul",S,[(c(),d(b,null,x(u,(i,g)=>e("li",{key:g,class:r(["transition-colors duration-200 text-sm font-normal",t(n)?"text-gray-400 hover:text-amber-400":"text-gray-600 hover:text-amber-600"])},[e("a",{href:`#section-${g}`,class:"hover:underline"},l(i),9,_)],2)),64))])],2),e("div",{class:r(["doc-content transition-colors duration-300",t(n)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=e("p",{class:"mb-4"},"Telnet 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Telnet 服务，并尝试检测未授权访问和弱密码漏洞。本指南详细介绍 Telnet 扫描的工作原理、配置选项和最佳实践。",-1)),e("h2",{id:"section-0",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Telnet 扫描简介 ",2),o[1]||(o[1]=e("p",{class:"mb-4"},"Telnet 是一种应用层协议，基于 TCP 协议，提供远程终端连接服务。虽然 Telnet 因其明文传输特性在安全性方面存在缺陷，但在许多遗留系统和设备中仍然广泛使用。Fscan 的 Telnet 扫描模块可以：",-1)),o[2]||(o[2]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,"发现内网中开放的 Telnet 服务（默认端口 23）"),e("li",null,"检测无需认证即可访问的 Telnet 服务"),e("li",null,"识别多种 Telnet 服务器类型"),e("li",null,"进行密码爆破，支持仅密码和用户名密码组合认证")],-1)),e("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",t(n)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",C,[s(t(a),{icon:"mdi:shield-alert",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",t(n)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:r(["font-medium",t(n)?"text-amber-300":"text-amber-700"])},"安全提示",2),e("p",{class:r(["mt-1",t(n)?"text-amber-200":"text-amber-800"])}," Telnet 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。建议使用更安全的 SSH 替代 Telnet。 ",2)])])],2),e("h2",{id:"section-1",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=e("p",{class:"mb-4"},"Telnet 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),e("div",B,[e("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",t(n)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",L,[e("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(n)?"bg-amber-900/20":"bg-amber-100"])},[e("span",{class:r(["text-xs font-bold",t(n)?"text-amber-400":"text-amber-600"])},"1",2)],2),e("h3",{class:r(["font-medium",t(n)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),e("p",{class:r(["text-sm",t(n)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Telnet 服务（默认端口 23）的主机 ",2)],2),e("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",t(n)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",A,[e("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(n)?"bg-amber-900/20":"bg-amber-100"])},[e("span",{class:r(["text-xs font-bold",t(n)?"text-amber-400":"text-amber-600"])},"2",2)],2),e("h3",{class:r(["font-medium",t(n)?"text-gray-200":"text-gray-800"])},"服务类型识别",2)]),e("p",{class:r(["text-sm",t(n)?"text-gray-400":"text-gray-600"])}," 根据响应特征自动识别服务器类型：未授权访问、仅需密码、需要用户名和密码等 ",2)],2),e("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",t(n)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",I,[e("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(n)?"bg-amber-900/20":"bg-amber-100"])},[e("span",{class:r(["text-xs font-bold",t(n)?"text-amber-400":"text-amber-600"])},"3",2)],2),e("h3",{class:r(["font-medium",t(n)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),e("p",{class:r(["text-sm",t(n)?"text-gray-400":"text-gray-600"])}," 根据服务器类型选择合适的认证策略，使用多线程技术尝试用户名和密码组合 ",2)],2),e("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",t(n)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("div",N,[e("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",t(n)?"bg-amber-900/20":"bg-amber-100"])},[e("span",{class:r(["text-xs font-bold",t(n)?"text-amber-400":"text-amber-600"])},"4",2)],2),e("h3",{class:r(["font-medium",t(n)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),e("p",{class:r(["text-sm",t(n)?"text-gray-400":"text-gray-600"])}," 通过分析响应内容判断登录是否成功，记录认证信息和漏洞详情 ",2)],2)]),o[4]||(o[4]=e("p",{class:"mb-4"},"扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),e("h2",{id:"section-2",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=e("p",{class:"mb-4"},"Telnet 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),e("div",k,[e("table",{class:r(["min-w-full rounded-lg overflow-hidden text-sm font-normal",t(n)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[e("thead",{class:r(t(n)?"bg-gray-850":"bg-gray-50")},[e("tr",null,[e("th",{class:r(["py-3 px-4 text-left font-medium border-b",t(n)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),e("th",{class:r(["py-3 px-4 text-left font-medium border-b",t(n)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),e("th",{class:r(["py-3 px-4 text-left font-medium border-b",t(n)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),e("tbody",{class:r(["divide-y",t(n)?"divide-gray-700":"divide-gray-200"])},[(c(),d(b,null,x(y,i=>e("tr",{key:i.name,class:r(t(n)?"hover:bg-gray-750":"hover:bg-gray-50")},[e("td",{class:r(["py-2 px-4 font-mono",t(n)?"text-amber-400":"text-amber-600"])},l(i.name),3),e("td",{class:r(["py-2 px-4",t(n)?"text-gray-300":"text-gray-700"])},l(i.description),3),e("td",{class:r(["py-2 px-4 font-mono",t(n)?"text-gray-400":"text-gray-500"])},l(i.example),3)],2)),64))],2)],2)]),e("h2",{id:"section-3",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Telnet 协议与交互 ",2),o[6]||(o[6]=e("p",{class:"mb-4"},"Telnet 是一种基于文本的协议，需要处理各种控制字符和命令。Fscan 实现了完整的 Telnet 协议处理逻辑：",-1)),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," Telnet 协议基础 ",2),e("div",W,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",D,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// Telnet协议常量定义
const (
    // 写入操作后的延迟时间
    TIME_DELAY_AFTER_WRITE = 300 * time.Millisecond

    // Telnet基础控制字符
    IAC  = byte(255) // 解释为命令(Interpret As Command)
    DONT = byte(254) // 请求对方停止执行某选项
    DO   = byte(253) // 请求对方执行某选项
    WONT = byte(252) // 拒绝执行某选项
    WILL = byte(251) // 同意执行某选项

    // 子协商相关控制字符
    SB = byte(250) // 子协商开始(Subnegotiation Begin)
    SE = byte(240) // 子协商结束(Subnegotiation End)

    // 服务器类型常量定义
    Closed              = iota // 连接关闭
    UnauthorizedAccess         // 无需认证
    OnlyPassword               // 仅需密码
    UsernameAndPassword        // 需要用户名和密码
)`,2)])],2)]),o[7]||(o[7]=e("p",{class:"mb-4"},"扫描模块通过解析这些控制字符，实现了与不同类型 Telnet 服务器的准确交互。",-1)),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 响应处理 ",2),e("div",M,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",R,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// SerializationResponse 解析Telnet响应数据
func (c *TelnetClient) SerializationResponse(responseBuf []byte) (displayBuf []byte, commandList [][]byte) {
    for {
        // 查找IAC命令标记
        index := bytes.IndexByte(responseBuf, IAC)
        if index == -1 || len(responseBuf)-index < 2 {
            displayBuf = append(displayBuf, responseBuf...)
            break
        }

        // 获取选项字符
        ch := responseBuf[index+1]

        // 处理连续的IAC
        if ch == IAC {
            displayBuf = append(displayBuf, responseBuf[:index]...)
            responseBuf = responseBuf[index+1:]
            continue
        }

        // 处理DO/DONT/WILL/WONT命令
        if ch == DO || ch == DONT || ch == WILL || ch == WONT {
            commandBuf := responseBuf[index : index+3]
            commandList = append(commandList, commandBuf)
            displayBuf = append(displayBuf, responseBuf[:index]...)
            responseBuf = responseBuf[index+3:]
            continue
        }

        // 处理子协商命令
        if ch == SB {
            displayBuf = append(displayBuf, responseBuf[:index]...)
            seIndex := bytes.IndexByte(responseBuf, SE)
            if seIndex != -1 && seIndex > index {
                commandList = append(commandList, responseBuf[index:seIndex+1])
                responseBuf = responseBuf[seIndex+1:]
                continue
            }
        }

        break
    }

    return displayBuf, commandList
}`,2)])],2)]),o[8]||(o[8]=e("p",{class:"mb-4"},"该函数解析 Telnet 服务器返回的原始字节流，分离出实际显示内容和需要回复的命令列表，是实现正确 Telnet 交互的关键。",-1)),e("h2",{id:"section-4",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 服务器类型检测 ",2),o[9]||(o[9]=e("p",{class:"mb-4"},"Telnet 扫描模块能够自动识别多种服务器类型，并根据不同类型采用相应的认证策略：",-1)),e("div",P,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",O,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// MakeServerType 通过分析服务器响应判断服务器类型
func (c *TelnetClient) MakeServerType() int {
    responseString := c.ReadContext()

    // 空响应情况
    if responseString == "" {
        return Closed
    }

    response := strings.Split(responseString, "\\n")
    if len(response) == 0 {
        return Closed
    }

    lastLine := strings.ToLower(response[len(response)-1])

    // 检查是否需要用户名和密码
    if containsAny(lastLine, []string{"user", "name", "login", "account", "用户名", "登录"}) {
        return UsernameAndPassword
    }

    // 检查是否只需要密码
    if strings.Contains(lastLine, "pass") {
        return OnlyPassword
    }

    // 检查是否无需认证的情况
    if isNoAuthRequired(lastLine) || c.isLoginSucceed(responseString) {
        return UnauthorizedAccess
    }

    return Closed
}`,2)])],2)]),o[10]||(o[10]=e("p",{class:"mb-4"},"服务器类型检测逻辑主要基于以下几点：",-1)),o[11]||(o[11]=e("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[e("li",null,'分析服务器返回的提示信息，如 "login:", "password:" 等'),e("li",null,"检查命令提示符格式，判断是否已处于登录状态"),e("li",null,"识别多语言环境下的不同提示（包括中文提示）")],-1)),e("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",t(n)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",F,[s(t(a),{icon:"mdi:lightbulb",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",t(n)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:r(["font-medium",t(n)?"text-amber-300":"text-amber-700"])},"服务器类型提示",2),e("p",{class:r(["mt-1",t(n)?"text-amber-200":"text-amber-800"])}," UnauthorizedAccess（无需认证）类型对应的是没有设置密码保护的 Telnet 服务，这类服务存在严重的安全风险，应立即配置密码保护或关闭服务。 ",2)])])],2),e("h2",{id:"section-5",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 认证流程 ",2),o[12]||(o[12]=e("p",{class:"mb-4"},"根据识别出的服务器类型，扫描模块会执行不同的认证流程：",-1)),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 无需认证检测 ",2),o[13]||(o[13]=e("p",{class:"mb-4"},"当服务器类型被识别为 UnauthorizedAccess 时，表示无需认证即可访问：",-1)),e("div",z,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",U,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// isNoAuthRequired 检查是否无需认证
func isNoAuthRequired(line string) bool {
    patterns := []string{
        \`^/ #.*\`,        // Linux root提示符
        \`^<[A-Za-z0-9_]+>\`, // 网络设备提示符
        \`^#\`,            // 一般root提示符
    }

    for _, pattern := range patterns {
        if regexp.MustCompile(pattern).MatchString(line) {
            return true
        }
    }
    return false
}`,2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 仅需密码的认证 ",2),e("div",E,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",j,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// loginForOnlyPassword 处理只需密码的登录
func (c *TelnetClient) loginForOnlyPassword() error {
    c.Clear() // 清空之前的响应

    // 发送密码并等待响应
    c.WriteContext(c.Password)
    time.Sleep(time.Second * 2)

    // 验证登录结果
    responseString := c.ReadContext()
    if c.isLoginFailed(responseString) {
        return errors.New("login failed")
    }
    if c.isLoginSucceed(responseString) {
        return nil
    }

    return errors.New("login failed")
}`,2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 用户名和密码认证 ",2),e("div",q,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",H,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// loginForUsernameAndPassword 处理需要用户名和密码的登录
func (c *TelnetClient) loginForUsernameAndPassword() error {
    // 发送用户名
    c.WriteContext(c.UserName)
    time.Sleep(time.Second * 2)
    c.Clear()

    // 发送密码
    c.WriteContext(c.Password)
    time.Sleep(time.Second * 3)

    // 验证登录结果
    responseString := c.ReadContext()
    if c.isLoginFailed(responseString) {
        return errors.New("login failed")
    }
    if c.isLoginSucceed(responseString) {
        return nil
    }

    return errors.New("login failed")
}`,2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 登录结果判断 ",2),o[14]||(o[14]=e("p",{class:"mb-4"},"扫描模块使用多种方法判断登录是否成功：",-1)),e("div",V,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",G,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// isLoginSucceed 检查是否登录成功
func (c *TelnetClient) isLoginSucceed(responseString string) bool {
    // 空响应视为失败
    if responseString == "" {
        return false
    }

    // 获取最后一行响应
    lines := strings.Split(responseString, "\\n")
    if len(lines) == 0 {
        return false
    }

    lastLine := lines[len(lines)-1]

    // 检查命令提示符
    if regexp.MustCompile("^[#$>].*").MatchString(lastLine) ||
       regexp.MustCompile("^<[a-zA-Z0-9_]+>.*").MatchString(lastLine) {
        return true
    }

    // 检查last login信息
    if regexp.MustCompile("(?:s)last login").MatchString(responseString) {
        return true
    }

    // 发送测试命令验证
    c.Clear()
    c.WriteContext("?")
    time.Sleep(time.Second * 2)
    responseString = c.ReadContext()

    // 检查响应长度
    if strings.Count(responseString, "\\n") > 6 || len([]rune(responseString)) > 100 {
        return true
    }

    return false
}`,2)])],2)]),e("h2",{id:"section-6",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 并发控制 ",2),o[15]||(o[15]=e("p",{class:"mb-4"},[m("Telnet 扫描模块使用 "),e("code",null,"ModuleThreadNum"),m(" 参数控制并发线程数，可以通过 "),e("code",null,"-t"),m(" 参数设置：")],-1)),e("div",Z,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",$,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// concurrentTelnetScan 并发扫描Telnet服务
func concurrentTelnetScan(ctx context.Context, info *Common.HostInfo, credentials []TelnetCredential,
                          timeoutSeconds int64, maxRetries int) *TelnetScanResult {
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
    resultChan := make(chan *TelnetScanResult, 1)
    workChan := make(chan TelnetCredential, maxConcurrent)
    scanCtx, scanCancel := context.WithCancel(ctx)
    defer scanCancel()

    // 启动工作协程
    for i := 0; i < maxConcurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for credential := range workChan {
                // ... 省略实现细节 ...
            }
        }()
    }

    // ... 省略后续实现 ...
}`,2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[16]||(o[16]=v('<p class="mb-4" data-v-4ca65ca0>Telnet 扫描支持多层超时控制：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-4ca65ca0><li data-v-4ca65ca0><strong data-v-4ca65ca0>单个连接超时</strong>：通过 <code data-v-4ca65ca0>-time</code> 参数设置每个 Telnet 连接尝试的最大时间（秒）</li><li data-v-4ca65ca0><strong data-v-4ca65ca0>全局超时</strong>：通过 <code data-v-4ca65ca0>-timeout</code> 参数设置整个扫描任务的最大执行时间（秒）</li><li data-v-4ca65ca0><strong data-v-4ca65ca0>读取和写入超时</strong>：模块内部设置了更细粒度的读写操作超时机制</li></ul>',2)),e("div",Y,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",J,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 设置单个连接超时
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)

// 设置读写超时
_ = c.conn.SetReadDeadline(time.Now().Add(time.Second * 2))
_ = c.conn.SetWriteDeadline(time.Now().Add(time.Second * 3))`,2)])],2)]),e("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",t(n)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[e("div",K,[s(t(a),{icon:"mdi:lightbulb",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",t(n)?"text-amber-400":"text-amber-600"])},null,8,["class"]),e("div",null,[e("p",{class:r(["font-medium",t(n)?"text-amber-300":"text-amber-700"])},"提示",2),e("p",{class:r(["mt-1",t(n)?"text-amber-200":"text-amber-800"])}," Telnet 通常比其他服务需要更长的响应时间，因为它涉及交互式会话和多步骤对话。建议设置更长的超时时间（如 5-10 秒）以提高扫描准确性。 ",2)])])],2),e("h2",{id:"section-7",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",t(n)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 扫描整个网段的 Telnet 服务 ",2),e("div",Q,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",X,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 23 -m telnet",2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 使用自定义用户名和密码 ",2),e("div",ee,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",te,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 23 -m telnet -user admin,root -pwd admin123,{user}@123",2)])],2)]),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 网络设备 Telnet 扫描 ",2),e("div",ne,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",re,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.1 -p 23 -m telnet -user cisco,admin -pwd cisco,admin -time 10",2)])],2)]),o[17]||(o[17]=e("p",{class:"mb-4"},"这个命令专门针对网络设备（如路由器、交换机）进行 Telnet 扫描，设置了较长的超时时间以适应网络设备的响应特性。",-1)),e("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",t(n)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),e("div",oe,[e("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",t(n)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[e("pre",se,[e("code",{class:r(["transition-colors duration-300",t(n)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 23 -m telnet -t 50 -time 5 -retries 2 -o telnet_results.txt",2)])],2)]),o[18]||(o[18]=e("p",{class:"mb-4"},"这个配置使用 50 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件，适合大规模扫描。",-1)),e("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",t(n)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[e("div",ae,[s(t(a),{icon:"mdi:check-circle",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",t(n)?"text-green-400":"text-green-600"])},null,8,["class"]),e("div",null,[e("p",{class:r(["font-medium",t(n)?"text-green-300":"text-green-700"])},"最佳实践",2),e("p",{class:r(["mt-1",t(n)?"text-green-200":"text-green-800"])}," 由于 Telnet 安全性较低，建议使用 SSH 替代所有 Telnet 服务。对于无法立即替换的遗留系统，应启用强密码保护，限制访问 IP 范围，并在可能的情况下实施双因素认证。 ",2)])])],2)],2),e("div",{class:r(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",t(n)?"border-gray-700":"border-gray-200"])},[e("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:r(["inline-flex items-center transition-colors duration-200",t(n)?"text-amber-400 hover:text-amber-300":"text-amber-600 hover:text-amber-700"])},[s(t(a),{icon:"mdi:github",class:"mr-1.5"}),o[19]||(o[19]=e("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},me=p(ie,[["__scopeId","data-v-4ca65ca0"]]);export{me as default};
