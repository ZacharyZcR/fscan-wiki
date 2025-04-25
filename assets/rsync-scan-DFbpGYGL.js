import{_ as f,i as p,r as h,a as c,q as g,b as t,n,d as r,e as i,I as a,F as b,g as u,t as l,f as s}from"./index-DnnHOreL.js";const v={class:"flex items-center mb-6"},R={class:"flex items-center mb-2"},w={class:"pl-4 space-y-1"},C=["href"],_={class:"flex"},S={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},D={class:"flex items-center mb-2"},N={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},T={class:"flex items-center mb-2"},W={class:"overflow-x-auto mb-6"},A={class:"mb-4"},E={class:"p-3 text-sm font-mono overflow-x-auto"},P={class:"mb-4"},Y={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},L={class:"flex"},M={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},B={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"flex"},O={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},$={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},rt={class:"mb-4"},et={class:"p-3 text-sm font-mono overflow-x-auto"},nt={class:"mb-4"},ot={class:"p-3 text-sm font-mono overflow-x-auto"},st={class:"flex"},it={__name:"rsync-scan",setup(at){const e=p("isDark",h(!1)),x=["Rsync 扫描简介","扫描原理与流程","配置参数与选项","Rsync 协议交互流程","匿名访问检测","身份验证流程","高级设置","应用场景与示例"],y=[{name:"-m rsync",description:"启用 Rsync 扫描模块",example:"-m rsync"},{name:"-p 873",description:"指定 Rsync 端口（默认为 873）",example:"-p 873"},{name:"-user",description:"指定用户名列表，多个用逗号分隔",example:"-user rsync,admin"},{name:"-pwd",description:"指定密码列表，多个用逗号分隔",example:"-pwd rsync,{user}123"},{name:"-t",description:"设置并发线程数",example:"-t 50"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-retries",description:"连接失败时的重试次数",example:"-retries 3"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"}];return(dt,o)=>(g(),c("div",null,[t("div",v,[t("div",{class:n(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",r(e)?"bg-indigo-900/30":"bg-indigo-100"])},[i(r(a),{icon:"mdi:sync",class:n(["text-xl",r(e)?"text-indigo-400":"text-indigo-600"])},null,8,["class"])],2),t("h1",{class:n(["text-2xl font-bold transition-colors duration-300",r(e)?"text-white":"text-gray-900"])}," Rsync 扫描指南 ",2)]),t("div",{class:n(["mb-6 rounded-lg p-3 transition-colors duration-300",r(e)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",R,[i(r(a),{icon:"mdi:format-list-bulleted",class:n(["mr-2",r(e)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:n(["font-medium text-sm transition-colors duration-300",r(e)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",w,[(g(),c(b,null,u(x,(d,m)=>t("li",{key:m,class:n(["transition-colors duration-200 text-sm font-normal",r(e)?"text-gray-400 hover:text-indigo-400":"text-gray-600 hover:text-indigo-600"])},[t("a",{href:`#section-${m}`,class:"hover:underline"},l(d),9,C)],2)),64))])],2),t("div",{class:n(["doc-content transition-colors duration-300",r(e)?"text-gray-300":"text-gray-700"])},[o[0]||(o[0]=t("p",{class:"mb-4"},"Rsync 扫描是 Fscan 的一个重要功能，用于发现网络中的 Rsync 服务，检测匿名访问漏洞以及进行凭据爆破。本指南详细介绍 Rsync 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Rsync 扫描简介 ",2),o[1]||(o[1]=t("p",{class:"mb-4"},"Rsync（Remote Synchronization）是一个用于文件传输和同步的开源工具，常用于服务器备份、数据同步和镜像站点维护。Fscan 的 Rsync 扫描模块可以：",-1)),o[2]||(o[2]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 Rsync 服务（默认端口 873）"),t("li",null,"检测 Rsync 匿名访问配置"),t("li",null,"列举可用的 Rsync 模块"),t("li",null,"尝试使用凭据进行认证"),t("li",null,"检测弱密码配置")],-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-indigo-900/10 border border-indigo-900/20":"bg-indigo-50 border border-indigo-100"])},[t("div",_,[i(r(a),{icon:"mdi:shield-alert",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-indigo-400":"text-indigo-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",r(e)?"text-indigo-300":"text-indigo-700"])},"安全提示",2),t("p",{class:n(["mt-1",r(e)?"text-indigo-200":"text-indigo-800"])}," Rsync 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),o[3]||(o[3]=t("p",{class:"mb-4"},"Rsync 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",S,[t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",D,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-indigo-900/20":"bg-indigo-100"])},[t("span",{class:n(["text-xs font-bold",r(e)?"text-indigo-400":"text-indigo-600"])},"1",2)],2),t("h3",{class:n(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:n(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 Rsync 服务（默认端口 873）的主机 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",N,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-indigo-900/20":"bg-indigo-100"])},[t("span",{class:n(["text-xs font-bold",r(e)?"text-indigo-400":"text-indigo-600"])},"2",2)],2),t("h3",{class:n(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"模块获取",2)]),t("p",{class:n(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 通过发送 #list 命令，获取目标服务器上的可用 Rsync 模块列表 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-indigo-900/20":"bg-indigo-100"])},[t("span",{class:n(["text-xs font-bold",r(e)?"text-indigo-400":"text-indigo-600"])},"3",2)],2),t("h3",{class:n(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"匿名访问检测",2)]),t("p",{class:n(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 尝试无凭据方式连接每个模块，检测是否允许匿名访问 ",2)],2),t("div",{class:n(["p-4 rounded-lg border transition-colors duration-300",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",T,[t("div",{class:n(["w-6 h-6 rounded-md flex items-center justify-center mr-2",r(e)?"bg-indigo-900/20":"bg-indigo-100"])},[t("span",{class:n(["text-xs font-bold",r(e)?"text-indigo-400":"text-indigo-600"])},"4",2)],2),t("h3",{class:n(["font-medium",r(e)?"text-gray-200":"text-gray-800"])},"密码爆破",2)]),t("p",{class:n(["text-sm",r(e)?"text-gray-400":"text-gray-600"])}," 如果无法匿名访问，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制 ",2)],2)]),o[4]||(o[4]=t("p",{class:"mb-4"},"Rsync 扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),o[5]||(o[5]=t("p",{class:"mb-4"},"Rsync 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",W,[t("table",{class:n(["min-w-full rounded-lg overflow-hidden text-sm font-normal",r(e)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:n(r(e)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:n(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:n(["py-3 px-4 text-left font-medium border-b",r(e)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:n(["divide-y",r(e)?"divide-gray-700":"divide-gray-200"])},[(g(),c(b,null,u(y,d=>t("tr",{key:d.name,class:n(r(e)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:n(["py-2 px-4 font-mono",r(e)?"text-indigo-400":"text-indigo-600"])},l(d.name),3),t("td",{class:n(["py-2 px-4",r(e)?"text-gray-300":"text-gray-700"])},l(d.description),3),t("td",{class:n(["py-2 px-4 font-mono",r(e)?"text-gray-400":"text-gray-500"])},l(d.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," Rsync 协议交互流程 ",2),o[6]||(o[6]=t("p",{class:"mb-4"},"Rsync 扫描模块通过与 Rsync 服务器进行一系列协议交互来检测服务状态和尝试认证：",-1)),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 协议版本协商 ",2),o[7]||(o[7]=t("p",{class:"mb-4"},"扫描首先会与 Rsync 服务器进行版本协商：",-1)),t("div",A,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",E,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 1. 读取服务器初始greeting
conn.SetReadDeadline(time.Now().Add(timeout))
n, err := conn.Read(buffer)
if err != nil {
    return false, "", err
}

greeting := string(buffer[:n])
if !strings.HasPrefix(greeting, "@RSYNCD:") {
    return false, "", fmt.Errorf("不是Rsync服务")
}

// 获取服务器版本号
version := strings.TrimSpace(strings.TrimPrefix(greeting, "@RSYNCD:"))

// 2. 回应相同的版本号
conn.SetWriteDeadline(time.Now().Add(timeout))
_, err = conn.Write([]byte(fmt.Sprintf("@RSYNCD: %s\\n", version)))
if err != nil {
    return false, "", err
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 模块列举 ",2),o[8]||(o[8]=t("p",{class:"mb-4"},"版本协商完成后，发送 #list 命令获取可用模块列表：",-1)),t("div",P,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",Y,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 3. 选择模块 - 先列出可用模块
conn.SetWriteDeadline(time.Now().Add(timeout))
_, err = conn.Write([]byte("#list\\n"))
if err != nil {
    return false, "", err
}

// 4. 读取模块列表
var moduleList strings.Builder
for {
    conn.SetReadDeadline(time.Now().Add(timeout))
    n, err = conn.Read(buffer)
    if err != nil {
        break
    }
    chunk := string(buffer[:n])
    moduleList.WriteString(chunk)
    if strings.Contains(chunk, "@RSYNCD: EXIT") {
        break
    }
}

modules := strings.Split(moduleList.String(), "\\n")`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 模块连接与验证 ",2),o[9]||(o[9]=t("p",{class:"mb-4"},"对每个模块尝试连接，并根据需要进行身份验证：",-1)),t("div",j,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 5. 为每个模块创建新连接尝试认证
authConn, err := dialer.DialContext(ctx, "tcp", fmt.Sprintf("%s:%s", host, port))
if err != nil {
    continue
}
defer authConn.Close()

// 重复初始握手
authConn.SetReadDeadline(time.Now().Add(timeout))
_, err = authConn.Read(buffer)
if err != nil {
    authConn.Close()
    continue
}

authConn.SetWriteDeadline(time.Now().Add(timeout))
_, err = authConn.Write([]byte(fmt.Sprintf("@RSYNCD: %s\\n", version)))
if err != nil {
    authConn.Close()
    continue
}

// 6. 选择模块
authConn.SetWriteDeadline(time.Now().Add(timeout))
_, err = authConn.Write([]byte(moduleName + "\\n"))
if err != nil {
    authConn.Close()
    continue
}

// 7. 等待认证挑战
authConn.SetReadDeadline(time.Now().Add(timeout))
n, err = authConn.Read(buffer)
if err != nil {
    authConn.Close()
    continue
}`,2)])],2)]),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",L,[i(r(a),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",r(e)?"text-amber-300":"text-amber-700"])},"交互提示",2),t("p",{class:n(["mt-1",r(e)?"text-amber-200":"text-amber-800"])}," Rsync 协议的交互是基于文本的，使用 @RSYNCD 前缀进行指令传递。服务器会给出明确响应指示是否需要认证或已成功访问。 ",2)])])],2),t("h2",{id:"section-4",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 匿名访问检测 ",2),o[10]||(o[10]=t("p",{class:"mb-4"},"Rsync 扫描首先尝试匿名访问，这是一个常见的安全漏洞：",-1)),t("div",M,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 首先尝试匿名访问
Common.LogDebug("尝试匿名访问...")
anonymousResult := tryRsyncCredential(ctx, info, RsyncCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if anonymousResult.Success {
    // 匿名访问成功
    saveRsyncResult(info, target, anonymousResult)
    return nil
}`,2)])],2)]),o[11]||(o[11]=t("p",{class:"mb-4"},"匿名访问检测的具体流程：",-1)),t("div",B,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`authResponse := string(buffer[:n])
if strings.Contains(authResponse, "@RSYNCD: OK") {
    // 模块不需要认证
    if user == "" && pass == "" {
        authConn.Close()
        return true, moduleName, nil
    }
}`,2)])],2)]),o[12]||(o[12]=t("p",{class:"mb-4"},'当模块响应 "@RSYNCD: OK" 且我们使用空用户名和密码尝试时，表示该模块允许匿名访问。这通常是由于配置不当导致的安全问题。',-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",H,[i(r(a),{icon:"mdi:lightbulb",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",r(e)?"text-amber-300":"text-amber-700"])},"防护建议",2),t("p",{class:n(["mt-1",r(e)?"text-amber-200":"text-amber-800"])}," 防止 Rsync 匿名访问的关键措施是在 rsyncd.conf 配置文件中为每个模块设置 auth users 和 secrets file 选项，确保所有访问都需要身份验证。 ",2)])])],2),t("h2",{id:"section-5",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 身份验证流程 ",2),o[13]||(o[13]=t("p",{class:"mb-4"},"如果模块需要认证，Rsync 扫描将尝试使用用户名和密码进行身份验证：",-1)),t("div",O,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`} else if strings.Contains(authResponse, "@RSYNCD: AUTHREQD") {
    if user != "" && pass != "" {
        // 8. 发送认证信息
        authString := fmt.Sprintf("%s %s\\n", user, pass)
        authConn.SetWriteDeadline(time.Now().Add(timeout))
        _, err = authConn.Write([]byte(authString))
        if err != nil {
            authConn.Close()
            continue
        }

        // 9. 读取认证结果
        authConn.SetReadDeadline(time.Now().Add(timeout))
        n, err = authConn.Read(buffer)
        if err != nil {
            authConn.Close()
            continue
        }

        if !strings.Contains(string(buffer[:n]), "@ERROR") {
            authConn.Close()
            return true, moduleName, nil
        }
    }
}`,2)])],2)]),o[14]||(o[14]=t("p",{class:"mb-4"},"身份验证过程使用用户名和密码组合：",-1)),t("div",z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 构建凭据列表
var credentials []RsyncCredential
for _, user := range Common.Userdict["rsync"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, RsyncCredential{
            Username: user,
            Password: actualPass,
        })
    }
}`,2)])],2)]),o[15]||(o[15]=t("p",{class:"mb-4"},'Rsync 认证格式非常简单，用户名和密码以空格分隔发送。需要注意的是，Rsync 的密码通常存储在服务器的 secrets file 中，格式为 "username:password"。',-1)),t("h2",{id:"section-6",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 并发控制 ",2),o[16]||(o[16]=t("p",{class:"mb-4"},[s("Rsync 扫描模块使用 "),t("code",null,"ModuleThreadNum"),s(" 参数控制并发线程数，可以通过 "),t("code",null,"-t"),s(" 参数设置：")],-1)),t("div",K,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 超时设置 ",2),o[17]||(o[17]=t("p",{class:"mb-4"},"Rsync 扫描支持两层超时控制：",-1)),o[18]||(o[18]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 Rsync 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",Q,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 设置带有上下文的拨号器
dialer := &net.Dialer{
    Timeout: time.Duration(Common.Timeout) * time.Second,
}`,2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 重试机制 ",2),o[19]||(o[19]=t("p",{class:"mb-4"},[s("扫描支持自动重试连接，通过 "),t("code",null,"-retries"),s(" 参数设置最大重试次数：")],-1)),t("div",$,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},`for retry := 0; retry < maxRetries; retry++ {
    select {
    case <-ctx.Done():
        return &RsyncScanResult{
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
        success, moduleName, err := RsyncConn(connCtx, info, credential.Username, credential.Password)
        cancel()

        if success {
            return &RsyncScanResult{
                Success:     true,
                Credential:  credential,
                IsAnonymous: credential.Username == "" && credential.Password == "",
                ModuleName:  moduleName,
            }
        }

        // 检查是否需要重试
        lastErr = err
        if err != nil {
            if retryErr := Common.CheckErrs(err); retryErr == nil {
                break // 不需要重试的错误
            }
        }
    }
}`,2)])],2)]),t("h2",{id:"section-7",class:n(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",r(e)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",Z,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 873 -m rsync",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 指定用户名和密码扫描 ",2),t("div",rt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",et,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 873 -m rsync -user rsync,root,admin -pwd rsync,{user}123,password",2)])],2)]),t("h3",{class:n(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",r(e)?"text-white":"text-gray-800"])}," 高性能扫描配置 ",2),t("div",nt,[t("div",{class:n(["rounded-lg overflow-hidden border transition-colors duration-300",r(e)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",ot,[t("code",{class:n(["transition-colors duration-300",r(e)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 873 -m rsync -t 100 -time 3 -retries 2 -o rsync_results.txt",2)])],2)]),o[20]||(o[20]=t("p",{class:"mb-4"},"这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。",-1)),t("div",{class:n(["p-3 rounded-lg mb-6 text-sm font-normal",r(e)?"bg-indigo-900/10 border border-indigo-900/20":"bg-indigo-50 border border-indigo-100"])},[t("div",st,[i(r(a),{icon:"mdi:check-circle",class:n(["text-lg flex-shrink-0 mt-0.5 mr-2",r(e)?"text-indigo-400":"text-indigo-600"])},null,8,["class"]),t("div",null,[t("p",{class:n(["font-medium",r(e)?"text-indigo-300":"text-indigo-700"])},"最佳实践",2),t("p",{class:n(["mt-1",r(e)?"text-indigo-200":"text-indigo-800"])}," 在执行 Rsync 扫描时，首先推荐仅检测匿名访问问题，这是最常见的 Rsync 安全漏洞。如果需要进行全面的密码爆破，建议限制并发数量，以避免对目标服务器造成过大压力。 ",2)])])],2)],2),t("div",{class:n(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",r(e)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:n(["inline-flex items-center transition-colors duration-200",r(e)?"text-indigo-400 hover:text-indigo-300":"text-indigo-600 hover:text-indigo-700"])},[i(r(a),{icon:"mdi:github",class:"mr-1.5"}),o[21]||(o[21]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},ct=f(it,[["__scopeId","data-v-03f71ad7"]]);export{ct as default};
