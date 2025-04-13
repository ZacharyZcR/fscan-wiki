<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-amber-900/30' : 'bg-amber-100'">
        <Icon icon="mdi:console" class="text-xl" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Telnet 扫描指南
      </h1>
    </div>

    <!-- 内容概览 -->
    <div class="mb-6 rounded-lg p-3 transition-colors duration-300"
         :class="isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'">
      <div class="flex items-center mb-2">
        <Icon icon="mdi:format-list-bulleted" class="mr-2" :class="isDark ? 'text-gray-400' : 'text-gray-500'" />
        <h3 class="font-medium text-sm transition-colors duration-300"
            :class="isDark ? 'text-gray-200' : 'text-gray-700'">
          内容概览
        </h3>
      </div>
      <ul class="pl-4 space-y-1">
        <li v-for="(section, index) in contentSections" :key="index"
            class="transition-colors duration-200 text-sm font-normal"
            :class="isDark ? 'text-gray-400 hover:text-amber-400' : 'text-gray-600 hover:text-amber-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">Telnet 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Telnet 服务，并尝试检测未授权访问和弱密码漏洞。本指南详细介绍 Telnet 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Telnet 扫描简介
      </h2>

      <p class="mb-4">Telnet 是一种应用层协议，基于 TCP 协议，提供远程终端连接服务。虽然 Telnet 因其明文传输特性在安全性方面存在缺陷，但在许多遗留系统和设备中仍然广泛使用。Fscan 的 Telnet 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Telnet 服务（默认端口 23）</li>
        <li>检测无需认证即可访问的 Telnet 服务</li>
        <li>识别多种 Telnet 服务器类型</li>
        <li>进行密码爆破，支持仅密码和用户名密码组合认证</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Telnet 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。建议使用更安全的 SSH 替代 Telnet。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">Telnet 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-amber-900/20' : 'bg-amber-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-amber-400' : 'text-amber-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务发现</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Telnet 服务（默认端口 23）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-amber-900/20' : 'bg-amber-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-amber-400' : 'text-amber-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务类型识别</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            根据响应特征自动识别服务器类型：未授权访问、仅需密码、需要用户名和密码等
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-amber-900/20' : 'bg-amber-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-amber-400' : 'text-amber-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">密码爆破</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            根据服务器类型选择合适的认证策略，使用多线程技术尝试用户名和密码组合
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-amber-900/20' : 'bg-amber-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-amber-400' : 'text-amber-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">结果分析</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            通过分析响应内容判断登录是否成功，记录认证信息和漏洞详情
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">Telnet 扫描提供多种配置选项，以适应不同的扫描需求：</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full rounded-lg overflow-hidden text-sm font-normal"
               :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <thead :class="isDark ? 'bg-gray-850' : 'bg-gray-50'">
          <tr>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              参数
            </th>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              说明
            </th>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              示例
            </th>
          </tr>
          </thead>
          <tbody class="divide-y" :class="isDark ? 'divide-gray-700' : 'divide-gray-200'">
          <tr v-for="param in telnetParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-amber-400' : 'text-amber-600'">
              {{ param.name }}
            </td>
            <td class="py-2 px-4"
                :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              {{ param.description }}
            </td>
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-gray-400' : 'text-gray-500'">
              {{ param.example }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <h2 id="section-3" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Telnet 协议与交互
      </h2>

      <p class="mb-4">Telnet 是一种基于文本的协议，需要处理各种控制字符和命令。Fscan 实现了完整的 Telnet 协议处理逻辑：</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        Telnet 协议基础
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// Telnet协议常量定义
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
)</code></pre>
        </div>
      </div>

      <p class="mb-4">扫描模块通过解析这些控制字符，实现了与不同类型 Telnet 服务器的准确交互。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        响应处理
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// SerializationResponse 解析Telnet响应数据
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">该函数解析 Telnet 服务器返回的原始字节流，分离出实际显示内容和需要回复的命令列表，是实现正确 Telnet 交互的关键。</p>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        服务器类型检测
      </h2>

      <p class="mb-4">Telnet 扫描模块能够自动识别多种服务器类型，并根据不同类型采用相应的认证策略：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// MakeServerType 通过分析服务器响应判断服务器类型
func (c *TelnetClient) MakeServerType() int {
    responseString := c.ReadContext()

    // 空响应情况
    if responseString == "" {
        return Closed
    }

    response := strings.Split(responseString, "\n")
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">服务器类型检测逻辑主要基于以下几点：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>分析服务器返回的提示信息，如 "login:", "password:" 等</li>
        <li>检查命令提示符格式，判断是否已处于登录状态</li>
        <li>识别多语言环境下的不同提示（包括中文提示）</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">服务器类型提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              UnauthorizedAccess（无需认证）类型对应的是没有设置密码保护的 Telnet 服务，这类服务存在严重的安全风险，应立即配置密码保护或关闭服务。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        认证流程
      </h2>

      <p class="mb-4">根据识别出的服务器类型，扫描模块会执行不同的认证流程：</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        无需认证检测
      </h3>

      <p class="mb-4">当服务器类型被识别为 UnauthorizedAccess 时，表示无需认证即可访问：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// isNoAuthRequired 检查是否无需认证
func isNoAuthRequired(line string) bool {
    patterns := []string{
        `^/ #.*`,        // Linux root提示符
        `^<[A-Za-z0-9_]+>`, // 网络设备提示符
        `^#`,            // 一般root提示符
    }

    for _, pattern := range patterns {
        if regexp.MustCompile(pattern).MatchString(line) {
            return true
        }
    }
    return false
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        仅需密码的认证
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// loginForOnlyPassword 处理只需密码的登录
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
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        用户名和密码认证
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// loginForUsernameAndPassword 处理需要用户名和密码的登录
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
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        登录结果判断
      </h3>

      <p class="mb-4">扫描模块使用多种方法判断登录是否成功：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// isLoginSucceed 检查是否登录成功
func (c *TelnetClient) isLoginSucceed(responseString string) bool {
    // 空响应视为失败
    if responseString == "" {
        return false
    }

    // 获取最后一行响应
    lines := strings.Split(responseString, "\n")
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
    if strings.Count(responseString, "\n") > 6 || len([]rune(responseString)) > 100 {
        return true
    }

    return false
}</code></pre>
        </div>
      </div>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        并发控制
      </h3>

      <p class="mb-4">Telnet 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentTelnetScan 并发扫描Telnet服务
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
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        超时设置
      </h3>

      <p class="mb-4">Telnet 扫描支持多层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 Telnet 连接尝试的最大时间（秒）</li>
        <li><strong>全局超时</strong>：通过 <code>-timeout</code> 参数设置整个扫描任务的最大执行时间（秒）</li>
        <li><strong>读取和写入超时</strong>：模块内部设置了更细粒度的读写操作超时机制</li>
      </ul>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 设置单个连接超时
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)

// 设置读写超时
_ = c.conn.SetReadDeadline(time.Now().Add(time.Second * 2))
_ = c.conn.SetWriteDeadline(time.Now().Add(time.Second * 3))</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Telnet 通常比其他服务需要更长的响应时间，因为它涉及交互式会话和多步骤对话。建议设置更长的超时时间（如 5-10 秒）以提高扫描准确性。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-7" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        应用场景与示例
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描整个网段的 Telnet 服务
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 23 -m telnet</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        使用自定义用户名和密码
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 23 -m telnet -user admin,root -pwd admin123,{user}@123</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        网络设备 Telnet 扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.1 -p 23 -m telnet -user cisco,admin -pwd cisco,admin -time 10</code></pre>
        </div>
      </div>

      <p class="mb-4">这个命令专门针对网络设备（如路由器、交换机）进行 Telnet 扫描，设置了较长的超时时间以适应网络设备的响应特性。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        高性能扫描配置
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 23 -m telnet -t 50 -time 5 -retries 2 -o telnet_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 50 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件，适合大规模扫描。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-green-900/10 border border-green-900/20' : 'bg-green-50 border border-green-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              由于 Telnet 安全性较低，建议使用 SSH 替代所有 Telnet 服务。对于无法立即替换的遗留系统，应启用强密码保护，限制访问 IP 范围，并在可能的情况下实施双因素认证。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 简化的文档反馈 -->
    <div class="mt-8 pt-4 border-t transition-colors duration-300 text-sm"
         :class="isDark ? 'border-gray-700' : 'border-gray-200'">
      <a href="https://github.com/shadow1ng/fscan/issues" target="_blank"
         class="inline-flex items-center transition-colors duration-200"
         :class="isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-600 hover:text-amber-700'">
        <Icon icon="mdi:github" class="mr-1.5" />
        <span>在 GitHub 上反馈问题</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { Icon } from '@iconify/vue';

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false));

// 内容章节标题（用于目录）
const contentSections = [
  'Telnet 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'Telnet 协议与交互',
  '服务器类型检测',
  '认证流程',
  '高级设置',
  '应用场景与示例'
];

// Telnet参数表格数据
const telnetParameters = [
  { name: '-m telnet', description: '启用 Telnet 扫描模块', example: '-m telnet' },
  { name: '-p 23', description: '指定 Telnet 端口（默认为 23）', example: '-p 23,2323' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user root,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd 123456,{user}' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o results.txt' }
];
</script>

<style scoped>
/* 添加 bg-gray-750 和 bg-gray-850 兼容性 */
.bg-gray-750 {
  background-color: rgb(38, 42, 51);
}
.bg-gray-850 {
  background-color: rgb(30, 34, 43);
}

/* 主要内容样式调整 */
.doc-content p {
  line-height: 1.6;
}

/* 代码样式优化 */
.doc-content code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
}

.dark .doc-content code {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 代码块强化样式 */
pre code {
  display: block;
  background: transparent !important;
  padding: 0 !important;
}

/* 代码高亮优化 */
.code-keyword { color: #d5a455; }
.code-string { color: #ce9178; }
.code-comment { color: #6a9955; font-style: italic; }

/* 字体优化 */
h1, h2, h3, h4, h5, h6, p, li, a, span, div, td, th {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

pre, code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/* 代码块左侧边框指示器 */
pre {
  position: relative;
  border-left: 3px solid rgba(217, 158, 59, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(217, 158, 59, 0.6);
  filter: brightness(1.1);
}

/* 代码块复制按钮 */
pre::after {
  content: "复制";
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
}

pre:hover::after {
  opacity: 1;
}

/* 改进内容可读性 */
.doc-content {
  line-height: 1.7;
  font-size: 1rem;
}

/* 表格行间距优化 */
tbody tr {
  transition: background-color 0.15s ease-in-out;
}

/* 链接交互效果 */
a {
  transition: all 0.2s ease;
}
</style>
