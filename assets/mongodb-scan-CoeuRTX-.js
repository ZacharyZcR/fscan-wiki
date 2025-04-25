import{_ as p,i as v,r as h,a as x,q as c,b as t,n as r,d as e,e as a,I as l,F as g,g as m,t as i,h as u,f as s}from"./index-DnnHOreL.js";const D={class:"flex items-center mb-6"},_={class:"flex items-center mb-2"},M={class:"pl-4 space-y-1"},w=["href"],B={class:"flex"},P={class:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"},C={class:"flex items-center mb-2"},k={class:"flex items-center mb-2"},O={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},L={class:"overflow-x-auto mb-6"},E={class:"mb-4"},U={class:"p-3 text-sm font-mono overflow-x-auto"},T={class:"mb-4"},G={class:"p-3 text-sm font-mono overflow-x-auto"},Q={class:"flex"},R={class:"mb-4"},I={class:"p-3 text-sm font-mono overflow-x-auto"},W={class:"flex"},Y={class:"mb-4"},q={class:"p-3 text-sm font-mono overflow-x-auto"},N={class:"mb-4"},F={class:"p-3 text-sm font-mono overflow-x-auto"},j={class:"flex"},A={class:"mb-4"},V={class:"p-3 text-sm font-mono overflow-x-auto"},H={class:"mb-4"},$={class:"p-3 text-sm font-mono overflow-x-auto"},z={class:"mb-4"},J={class:"p-3 text-sm font-mono overflow-x-auto"},K={class:"mb-4"},X={class:"p-3 text-sm font-mono overflow-x-auto"},Z={class:"mb-4"},tt={class:"p-3 text-sm font-mono overflow-x-auto"},et={class:"flex"},ot={__name:"mongodb-scan",setup(rt){const o=v("isDark",h(!1)),f=["MongoDB 扫描简介","扫描原理与流程","配置参数与选项","MongoDB 协议详解","未授权访问检测原理","连接与检查流程","高级设置","应用场景与示例"],y=[{name:"-m mongodb",description:"启用 MongoDB 扫描模块",example:"-m mongodb"},{name:"-p 27017",description:"指定 MongoDB 端口（默认为 27017）",example:"-p 27017,27018"},{name:"-time",description:"设置单个连接超时时间（秒）",example:"-time 3"},{name:"-timeout",description:"设置全局扫描超时时间（秒）",example:"-timeout 300"},{name:"-o",description:"将扫描结果输出到指定文件",example:"-o result.txt"},{name:"-nocolor",description:"禁用彩色输出",example:"-nocolor"},{name:"-debug",description:"启用调试模式，显示详细日志",example:"-debug"}];return(nt,n)=>(c(),x("div",null,[t("div",D,[t("div",{class:r(["w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center",e(o)?"bg-blue-900/30":"bg-blue-100"])},[a(e(l),{icon:"mdi:database",class:r(["text-xl",e(o)?"text-blue-400":"text-blue-600"])},null,8,["class"])],2),t("h1",{class:r(["text-2xl font-bold transition-colors duration-300",e(o)?"text-white":"text-gray-900"])}," MongoDB 扫描指南 ",2)]),t("div",{class:r(["mb-6 rounded-lg p-3 transition-colors duration-300",e(o)?"bg-gray-800 border border-gray-700":"bg-gray-50 border border-gray-200"])},[t("div",_,[a(e(l),{icon:"mdi:format-list-bulleted",class:r(["mr-2",e(o)?"text-gray-400":"text-gray-500"])},null,8,["class"]),t("h3",{class:r(["font-medium text-sm transition-colors duration-300",e(o)?"text-gray-200":"text-gray-700"])}," 内容概览 ",2)]),t("ul",M,[(c(),x(g,null,m(f,(d,b)=>t("li",{key:b,class:r(["transition-colors duration-200 text-sm font-normal",e(o)?"text-gray-400 hover:text-blue-400":"text-gray-600 hover:text-blue-600"])},[t("a",{href:`#section-${b}`,class:"hover:underline"},i(d),9,w)],2)),64))])],2),t("div",{class:r(["doc-content transition-colors duration-300",e(o)?"text-gray-300":"text-gray-700"])},[n[2]||(n[2]=t("p",{class:"mb-4"},"MongoDB 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 MongoDB 数据库服务，并检测常见的未授权访问安全问题。本指南详细介绍 MongoDB 扫描的工作原理、配置选项和最佳实践。",-1)),t("h2",{id:"section-0",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," MongoDB 扫描简介 ",2),n[3]||(n[3]=t("p",{class:"mb-4"},"MongoDB 是一种流行的开源文档数据库，由于配置不当，常常面临未授权访问的安全风险。Fscan 的 MongoDB 扫描模块可以：",-1)),n[4]||(n[4]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,"发现内网中开放的 MongoDB 服务（默认端口 27017）"),t("li",null,"检测 MongoDB 未授权访问漏洞"),t("li",null,"支持多种 MongoDB 协议版本（OP_MSG 和 OP_QUERY）"),t("li",null,"生成详细的扫描报告")],-1)),t("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",e(o)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",B,[a(e(l),{icon:"mdi:shield-alert",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",e(o)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:r(["font-medium",e(o)?"text-blue-300":"text-blue-700"])},"安全提示",2),t("p",{class:r(["mt-1",e(o)?"text-blue-200":"text-blue-800"])}," MongoDB 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。 ",2)])])],2),t("h2",{id:"section-1",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 扫描原理与流程 ",2),n[5]||(n[5]=t("p",{class:"mb-4"},"MongoDB 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：",-1)),t("div",P,[t("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",e(o)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",C,[t("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(o)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:r(["text-xs font-bold",e(o)?"text-blue-400":"text-blue-600"])},"1",2)],2),t("h3",{class:r(["font-medium",e(o)?"text-gray-200":"text-gray-800"])},"服务发现",2)]),t("p",{class:r(["text-sm",e(o)?"text-gray-400":"text-gray-600"])}," 扫描目标 IP 范围，识别开放 MongoDB 服务（默认端口 27017）的主机 ",2)],2),t("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",e(o)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",k,[t("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(o)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:r(["text-xs font-bold",e(o)?"text-blue-400":"text-blue-600"])},"2",2)],2),t("h3",{class:r(["font-medium",e(o)?"text-gray-200":"text-gray-800"])},"协议选择",2)]),t("p",{class:r(["text-sm",e(o)?"text-gray-400":"text-gray-600"])}," 首先尝试新版 OP_MSG 协议，如果失败再尝试传统的 OP_QUERY 协议 ",2)],2),t("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",e(o)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",O,[t("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(o)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:r(["text-xs font-bold",e(o)?"text-blue-400":"text-blue-600"])},"3",2)],2),t("h3",{class:r(["font-medium",e(o)?"text-gray-200":"text-gray-800"])},"命令执行",2)]),t("p",{class:r(["text-sm",e(o)?"text-gray-400":"text-gray-600"])},' 发送管理命令 getLog("startupWarnings") 测试是否能够未授权访问管理功能 ',2)],2),t("div",{class:r(["p-4 rounded-lg border transition-colors duration-300",e(o)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("div",S,[t("div",{class:r(["w-6 h-6 rounded-md flex items-center justify-center mr-2",e(o)?"bg-blue-900/20":"bg-blue-100"])},[t("span",{class:r(["text-xs font-bold",e(o)?"text-blue-400":"text-blue-600"])},"4",2)],2),t("h3",{class:r(["font-medium",e(o)?"text-gray-200":"text-gray-800"])},"结果分析",2)]),t("p",{class:r(["text-sm",e(o)?"text-gray-400":"text-gray-600"])}," 通过响应分析判断是否存在未授权访问，生成详细报告 ",2)],2)]),n[6]||(n[6]=t("p",{class:"mb-4"},"扫描实现采用上下文管理和并发控制，确保扫描效率和稳定性。同时会考虑全局超时和单个连接超时，避免资源浪费。",-1)),t("h2",{id:"section-2",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 配置参数与选项 ",2),n[7]||(n[7]=t("p",{class:"mb-4"},"MongoDB 扫描提供多种配置选项，以适应不同的扫描需求：",-1)),t("div",L,[t("table",{class:r(["min-w-full rounded-lg overflow-hidden text-sm font-normal",e(o)?"bg-gray-800 border-gray-700":"bg-white border-gray-200"])},[t("thead",{class:r(e(o)?"bg-gray-850":"bg-gray-50")},[t("tr",null,[t("th",{class:r(["py-3 px-4 text-left font-medium border-b",e(o)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 参数 ",2),t("th",{class:r(["py-3 px-4 text-left font-medium border-b",e(o)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 说明 ",2),t("th",{class:r(["py-3 px-4 text-left font-medium border-b",e(o)?"text-gray-300 border-gray-700":"text-gray-700 border-gray-200"])}," 示例 ",2)])],2),t("tbody",{class:r(["divide-y",e(o)?"divide-gray-700":"divide-gray-200"])},[(c(),x(g,null,m(y,d=>t("tr",{key:d.name,class:r(e(o)?"hover:bg-gray-750":"hover:bg-gray-50")},[t("td",{class:r(["py-2 px-4 font-mono",e(o)?"text-blue-400":"text-blue-600"])},i(d.name),3),t("td",{class:r(["py-2 px-4",e(o)?"text-gray-300":"text-gray-700"])},i(d.description),3),t("td",{class:r(["py-2 px-4 font-mono",e(o)?"text-gray-400":"text-gray-500"])},i(d.example),3)],2)),64))],2)],2)]),t("h2",{id:"section-3",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," MongoDB 协议详解 ",2),n[8]||(n[8]=t("p",{class:"mb-4"},"MongoDB 使用基于二进制的网络协议，Fscan 支持两种主要的通信方式：",-1)),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," OP_MSG 协议 ",2),n[9]||(n[9]=t("p",{class:"mb-4"},"OP_MSG 是 MongoDB 3.6+ 版本引入的通信协议，结构更加灵活：",-1)),t("div",E,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",U,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// createOpMsgPacket 创建OP_MSG查询包
func createOpMsgPacket() []byte {
    return []byte{
        0x69, 0x00, 0x00, 0x00, // messageLength
        0x39, 0x00, 0x00, 0x00, // requestID
        0x00, 0x00, 0x00, 0x00, // responseTo
        0xdd, 0x07, 0x00, 0x00, // opCode OP_MSG (2013)
        0x00, 0x00, 0x00, 0x00, // flagBits
        // sections - db.adminCommand({getLog: "startupWarnings"})
        0x00, 0x54, 0x00, 0x00, 0x00, 0x02, 0x67, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x00, 0x10, 0x00, 0x00, 0x00,
        0x73, 0x74, 0x61, 0x72, 0x74, 0x75, 0x70, 0x57, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x00, 0x02,
        0x24, 0x64, 0x62, 0x00, 0x06, 0x00, 0x00, 0x00, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x00, 0x03, 0x6c, 0x73,
        0x69, 0x64, 0x00, 0x1e, 0x00, 0x00, 0x00, 0x05, 0x69, 0x64, 0x00, 0x10, 0x00, 0x00, 0x00, 0x04, 0x6e,
        0x81, 0xf8, 0x8e, 0x37, 0x7b, 0x4c, 0x97, 0x84, 0x4e, 0x90, 0x62, 0x5a, 0x54, 0x3c, 0x93, 0x00, 0x00,
    }
}`,2)])],2)]),n[10]||(n[10]=u('<p class="mb-4" data-v-47cb94fa>OP_MSG 协议头包含以下主要字段：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-47cb94fa><li data-v-47cb94fa><code data-v-47cb94fa>messageLength</code>：消息总长度（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>requestID</code>：请求 ID（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>responseTo</code>：对应请求的 ID（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>opCode</code>：操作码，OP_MSG 为 2013（0x07DD）</li><li data-v-47cb94fa><code data-v-47cb94fa>flagBits</code>：标志位</li><li data-v-47cb94fa><code data-v-47cb94fa>sections</code>：包含 BSON 格式命令</li></ul>',2)),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," OP_QUERY 协议 ",2),n[11]||(n[11]=t("p",{class:"mb-4"},"OP_QUERY 是旧版 MongoDB 使用的通信协议，为了兼容较早版本的服务器：",-1)),t("div",T,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",G,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// createOpQueryPacket 创建OP_QUERY查询包
func createOpQueryPacket() []byte {
    return []byte{
        0x48, 0x00, 0x00, 0x00, // messageLength
        0x02, 0x00, 0x00, 0x00, // requestID
        0x00, 0x00, 0x00, 0x00, // responseTo
        0xd4, 0x07, 0x00, 0x00, // opCode OP_QUERY (2004)
        0x00, 0x00, 0x00, 0x00, // flags
        0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x24, 0x63, 0x6d, 0x64, 0x00, // fullCollectionName admin.$cmd
        0x00, 0x00, 0x00, 0x00, // numberToSkip
        0x01, 0x00, 0x00, 0x00, // numberToReturn
        // query - db.adminCommand({getLog: "startupWarnings"})
        0x21, 0x00, 0x00, 0x00, 0x2, 0x67, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x00, 0x10, 0x00, 0x00, 0x00,
        0x73, 0x74, 0x61, 0x72, 0x74, 0x75, 0x70, 0x57, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x00, 0x00,
    }
}`,2)])],2)]),n[12]||(n[12]=u('<p class="mb-4" data-v-47cb94fa>OP_QUERY 协议头包含以下主要字段：</p><ul class="pl-5 list-disc space-y-2 mb-6" data-v-47cb94fa><li data-v-47cb94fa><code data-v-47cb94fa>messageLength</code>：消息总长度（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>requestID</code>：请求 ID（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>responseTo</code>：对应请求的 ID（32 位整数）</li><li data-v-47cb94fa><code data-v-47cb94fa>opCode</code>：操作码，OP_QUERY 为 2004（0x07D4）</li><li data-v-47cb94fa><code data-v-47cb94fa>flags</code>：查询标志位</li><li data-v-47cb94fa><code data-v-47cb94fa>fullCollectionName</code>：目标集合名称（admin.$cmd 用于执行管理命令）</li><li data-v-47cb94fa><code data-v-47cb94fa>numberToSkip</code>：跳过的文档数量</li><li data-v-47cb94fa><code data-v-47cb94fa>numberToReturn</code>：返回的最大文档数量</li><li data-v-47cb94fa><code data-v-47cb94fa>query</code>：BSON 格式的查询文档</li></ul>',2)),t("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",e(o)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",Q,[a(e(l),{icon:"mdi:lightbulb",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",e(o)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:r(["font-medium",e(o)?"text-amber-300":"text-amber-700"])},"协议兼容性提示",2),t("p",{class:r(["mt-1",e(o)?"text-amber-200":"text-amber-800"])}," Fscan 首先尝试较新的 OP_MSG 协议，如果失败则回退到 OP_QUERY 协议，确保与不同版本的 MongoDB 服务器兼容。 ",2)])])],2),t("h2",{id:"section-4",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 未授权访问检测原理 ",2),n[13]||(n[13]=t("p",{class:"mb-4"},"MongoDB 未授权访问检测的核心是尝试执行需要管理员权限的命令，并分析响应结果：",-1)),t("div",R,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",I,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// MongodbUnauth 检测MongoDB未授权访问
func MongodbUnauth(ctx context.Context, info *Common.HostInfo) (bool, error) {
    msgPacket := createOpMsgPacket()
    queryPacket := createOpQueryPacket()

    realhost := fmt.Sprintf("%s:%v", info.Host, info.Ports)
    Common.LogDebug(fmt.Sprintf("检测MongoDB未授权访问: %s", realhost))

    // 尝试OP_MSG查询
    Common.LogDebug("尝试使用OP_MSG协议")
    reply, err := checkMongoAuth(ctx, realhost, msgPacket)
    if err != nil {
        Common.LogDebug(fmt.Sprintf("OP_MSG查询失败: %v, 尝试使用OP_QUERY协议", err))
        // 失败则尝试OP_QUERY查询
        reply, err = checkMongoAuth(ctx, realhost, queryPacket)
        if err != nil {
            Common.LogDebug(fmt.Sprintf("OP_QUERY查询也失败: %v", err))
            return false, err
        }
    }

    // 检查响应结果
    Common.LogDebug(fmt.Sprintf("收到响应，长度: %d", len(reply)))
    if strings.Contains(reply, "totalLinesWritten") {
        Common.LogDebug("响应中包含totalLinesWritten，确认未授权访问")
        return true, nil
    }

    Common.LogDebug("响应未包含预期内容，可能需要认证")
    return false, nil
}`,2)])],2)]),n[14]||(n[14]=t("p",{class:"mb-4"},"未授权检测的关键步骤：",-1)),n[15]||(n[15]=t("ol",{class:"pl-5 list-decimal space-y-2 mb-6"},[t("li",null,[s("尝试发送 "),t("code",null,'getLog("startupWarnings")'),s(" 管理命令，这通常需要管理员权限")]),t("li",null,"先使用 OP_MSG 协议尝试，如果失败再使用 OP_QUERY 协议"),t("li",null,[s("分析响应内容，如果包含 "),t("code",null,"totalLinesWritten"),s(" 字段，表示命令执行成功")]),t("li",null,"成功执行管理命令意味着存在未授权访问漏洞")],-1)),t("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",e(o)?"bg-blue-900/10 border border-blue-900/20":"bg-blue-50 border border-blue-100"])},[t("div",W,[a(e(l),{icon:"mdi:information-outline",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",e(o)?"text-blue-400":"text-blue-600"])},null,8,["class"]),t("div",null,[t("p",{class:r(["font-medium",e(o)?"text-blue-300":"text-blue-700"])},"检测背景",2),t("p",{class:r(["mt-1",e(o)?"text-blue-200":"text-blue-800"])},n[0]||(n[0]=[t("code",null,'getLog("startupWarnings")',-1),s(" 是一个读取 MongoDB 启动警告日志的管理命令。在配置了认证的 MongoDB 中，这个命令只有经过认证的管理员才能执行。如果未配置认证的 MongoDB 实例会允许任何连接执行此命令。 ")]),2)])])],2),t("h2",{id:"section-5",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 连接与检查流程 ",2),n[16]||(n[16]=t("p",{class:"mb-4"},"MongoDB 检测的连接过程采用带超时控制的 TCP 连接：",-1)),t("div",Y,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",q,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// checkMongoAuth 检查MongoDB认证状态
func checkMongoAuth(ctx context.Context, address string, packet []byte) (string, error) {
    Common.LogDebug(fmt.Sprintf("建立MongoDB连接: %s", address))

    // 创建连接超时上下文
    connCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
    defer cancel()

    // 使用带超时的连接
    var d net.Dialer
    conn, err := d.DialContext(connCtx, "tcp", address)
    if err != nil {
        return "", fmt.Errorf("连接失败: %v", err)
    }
    defer conn.Close()

    // 检查上下文是否已取消
    select {
    case <-ctx.Done():
        return "", ctx.Err()
    default:
    }

    // 设置读写超时
    if err := conn.SetDeadline(time.Now().Add(time.Duration(Common.Timeout) * time.Second)); err != nil {
        return "", fmt.Errorf("设置超时失败: %v", err)
    }

    // 发送查询包
    Common.LogDebug("发送查询包")
    if _, err := conn.Write(packet); err != nil {
        return "", fmt.Errorf("发送查询失败: %v", err)
    }

    // 读取响应
    Common.LogDebug("读取响应")
    reply := make([]byte, 2048)
    count, err := conn.Read(reply)
    if err != nil && err != io.EOF {
        return "", fmt.Errorf("读取响应失败: %v", err)
    }

    if count == 0 {
        return "", fmt.Errorf("收到空响应")
    }

    Common.LogDebug(fmt.Sprintf("成功接收响应，字节数: %d", count))
    return string(reply[:count]), nil
}`,2)])],2)]),n[17]||(n[17]=t("p",{class:"mb-4"},"连接流程的关键特点：",-1)),n[18]||(n[18]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[s("使用 "),t("code",null,"context.WithTimeout"),s(" 控制连接超时")]),t("li",null,[s("使用 "),t("code",null,"SetDeadline"),s(" 设置套接字读写超时")]),t("li",null,"支持随时取消的上下文控制"),t("li",null,"发送二进制格式的 MongoDB 协议数据包"),t("li",null,"读取并解析服务器响应")],-1)),t("h2",{id:"section-6",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 高级设置 ",2),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 超时设置 ",2),n[19]||(n[19]=t("p",{class:"mb-4"},"MongoDB 扫描支持两层超时控制：",-1)),n[20]||(n[20]=t("ul",{class:"pl-5 list-disc space-y-2 mb-6"},[t("li",null,[t("strong",null,"单个连接超时"),s("：通过 "),t("code",null,"-time"),s(" 参数设置每个 MongoDB 连接尝试的最大时间（秒）")]),t("li",null,[t("strong",null,"全局超时"),s("：通过 "),t("code",null,"-timeout"),s(" 参数设置整个扫描任务的最大执行时间（秒）")])],-1)),t("div",N,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",F,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 创建连接超时上下文
connCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
defer cancel()`,2)])],2)]),t("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",e(o)?"bg-amber-900/10 border border-amber-900/20":"bg-amber-50 border border-amber-100"])},[t("div",j,[a(e(l),{icon:"mdi:lightbulb",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",e(o)?"text-amber-400":"text-amber-600"])},null,8,["class"]),t("div",null,[t("p",{class:r(["font-medium",e(o)?"text-amber-300":"text-amber-700"])},"提示",2),t("p",{class:r(["mt-1",e(o)?"text-amber-200":"text-amber-800"])}," 在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。 ",2)])])],2),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 并发控制 ",2),n[21]||(n[21]=t("p",{class:"mb-4"},"MongoDB 扫描使用 Goroutine 和通道机制实现并发控制：",-1)),t("div",A,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",V,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},`// 创建结果通道
resultChan := make(chan struct {
    isUnauth bool
    err      error
}, 1)

// 在协程中执行扫描
go func() {
    isUnauth, err := MongodbUnauth(ctx, info)
    select {
    case <-ctx.Done():
    case resultChan <- struct {
        isUnauth bool
        err      error
    }{isUnauth, err}:
    }
}()

// 等待结果或超时
select {
case result := <-resultChan:
    // 处理结果
case <-ctx.Done():
    // 处理超时
}`,2)])],2)]),t("h2",{id:"section-7",class:r(["text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300",e(o)?"text-white border-gray-700":"text-gray-800 border-gray-200"])}," 应用场景与示例 ",2),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 快速扫描整个网段 ",2),t("div",H,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",$,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 27017 -m mongodb",2)])],2)]),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 扫描非标准端口 ",2),t("div",z,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",J,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.10 -p 27000-28000 -m mongodb",2)])],2)]),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 调整超时参数 ",2),t("div",K,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",X,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 27017 -m mongodb -time 3 -timeout 300",2)])],2)]),t("h3",{class:r(["text-lg font-semibold mt-5 mb-3 transition-colors duration-300",e(o)?"text-white":"text-gray-800"])}," 保存扫描结果 ",2),t("div",Z,[t("div",{class:r(["rounded-lg overflow-hidden border transition-colors duration-300",e(o)?"border-gray-700 bg-gray-800/50":"border-gray-200 bg-gray-50"])},[t("pre",tt,[t("code",{class:r(["transition-colors duration-300",e(o)?"text-gray-100":"text-gray-800"])},"./fscan -h 192.168.1.0/24 -p 27017 -m mongodb -o mongodb_scan.txt",2)])],2)]),t("div",{class:r(["p-3 rounded-lg mb-6 text-sm font-normal",e(o)?"bg-green-900/10 border border-green-900/20":"bg-green-50 border border-green-100"])},[t("div",et,[a(e(l),{icon:"mdi:shield-check",class:r(["text-lg flex-shrink-0 mt-0.5 mr-2",e(o)?"text-green-400":"text-green-600"])},null,8,["class"]),t("div",null,[t("p",{class:r(["font-medium",e(o)?"text-green-300":"text-green-700"])},"安全防护措施",2),t("p",{class:r(["mt-1",e(o)?"text-green-200":"text-green-800"])},n[1]||(n[1]=[s(" 保护 MongoDB 服务器免受未授权访问的最佳实践： "),t("br",null,null,-1),s("1. 总是启用身份验证（参数 "),t("code",null,"--auth",-1),s(" 或配置文件中的 "),t("code",null,"security.authorization: enabled",-1),s("） "),t("br",null,null,-1),s("2. 将 MongoDB 绑定到非公开 IP（如 127.0.0.1） "),t("br",null,null,-1),s("3. 使用防火墙限制对 MongoDB 端口的访问 "),t("br",null,null,-1),s("4. 为数据库创建具有最小权限的专用账户 ")]),2)])])],2)],2),t("div",{class:r(["mt-8 pt-4 border-t transition-colors duration-300 text-sm",e(o)?"border-gray-700":"border-gray-200"])},[t("a",{href:"https://github.com/shadow1ng/fscan/issues",target:"_blank",class:r(["inline-flex items-center transition-colors duration-200",e(o)?"text-blue-400 hover:text-blue-300":"text-blue-600 hover:text-blue-700"])},[a(e(l),{icon:"mdi:github",class:"mr-1.5"}),n[22]||(n[22]=t("span",null,"在 GitHub 上反馈问题",-1))],2)],2)]))}},at=p(ot,[["__scopeId","data-v-47cb94fa"]]);export{at as default};
