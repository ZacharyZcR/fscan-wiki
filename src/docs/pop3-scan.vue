<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'"
      >
        <Icon
          icon="mdi:email"
          class="text-xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        POP3 扫描指南
      </h1>
    </div>

    <!-- 内容概览 -->
    <div
      class="mb-6 rounded-lg p-3 transition-colors duration-300"
      :class="isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'"
    >
      <div class="flex items-center mb-2">
        <Icon
          icon="mdi:format-list-bulleted"
          class="mr-2"
          :class="isDark ? 'text-gray-400' : 'text-gray-500'"
        />
        <h3
          class="font-medium text-sm transition-colors duration-300"
          :class="isDark ? 'text-gray-200' : 'text-gray-700'"
        >
          内容概览
        </h3>
      </div>
      <ul class="pl-4 space-y-1">
        <li
          v-for="(section, index) in contentSections"
          :key="index"
          class="transition-colors duration-200 text-sm font-normal"
          :class="
            isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          "
        >
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div
      class="doc-content transition-colors duration-300"
      :class="isDark ? 'text-gray-300' : 'text-gray-700'"
    >
      <p class="mb-4">
        POP3 扫描是 Fscan 的一个专用功能模块，用于发现网络中运行的 POP3
        邮件服务器，并测试邮箱账户的弱密码。本指南详细介绍 POP3 扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        POP3 扫描简介
      </h2>

      <p class="mb-4">
        POP3（Post Office Protocol 3）是一种用于从远程服务器获取电子邮件的标准协议。Fscan 的 POP3
        扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中的 POP3 邮件服务器（默认端口 110，SSL/TLS 加密为 995）</li>
        <li>支持普通连接和 TLS 加密连接</li>
        <li>利用 USER/PASS 命令自动测试邮箱账户弱密码</li>
        <li>内置低速扫描机制，避免触发服务器限制</li>
        <li>智能处理各类连接错误和异常情况</li>
      </ul>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-blue-400' : 'text-blue-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              POP3
              扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对邮件服务器进行扫描不仅违反法律法规，还可能导致封禁
              IP 或触发安全警报。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-1"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        扫描原理与流程
      </h2>

      <p class="mb-4">
        POP3 扫描模块采用特殊的低速扫描策略，减少对目标服务器的冲击，并避免触发安全限制：
      </p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'"
                >1</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务发现
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 POP3 服务的主机（端口 110/995）
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'"
                >2</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              连接尝试
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            先尝试普通 TCP 连接，若失败则尝试 TLS 加密连接，适应各种服务器配置
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'"
                >3</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              低速认证
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用限速机制（单线程，请求间隔 1.5 秒），发送 USER/PASS 命令尝试认证
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'"
                >4</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              智能错误处理
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            检测并处理"连接过多"等特殊错误，动态调整重试策略和等待时间
          </p>
        </div>
      </div>

      <p class="mb-4">
        POP3
        扫描实现与其他服务扫描模块的主要差异在于其特殊的低速和单线程设计，这是因为邮件服务器通常对连接数和认证尝试次数有严格限制。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">POP3 扫描提供多种配置选项，以适应不同的扫描需求：</p>

      <div class="overflow-x-auto mb-6">
        <table
          class="min-w-full rounded-lg overflow-hidden text-sm font-normal"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <thead :class="isDark ? 'bg-gray-850' : 'bg-gray-50'">
            <tr>
              <th
                class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'"
              >
                参数
              </th>
              <th
                class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'"
              >
                说明
              </th>
              <th
                class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'"
              >
                示例
              </th>
            </tr>
          </thead>
          <tbody class="divide-y" :class="isDark ? 'divide-gray-700' : 'divide-gray-200'">
            <tr
              v-for="param in pop3Parameters"
              :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
            >
              <td class="py-2 px-4 font-mono" :class="isDark ? 'text-blue-400' : 'text-blue-600'">
                {{ param.name }}
              </td>
              <td class="py-2 px-4" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                {{ param.description }}
              </td>
              <td class="py-2 px-4 font-mono" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                {{ param.example }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-amber-900/10 border border-amber-900/20'
            : 'bg-amber-50 border border-amber-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:lightbulb"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-amber-400' : 'text-amber-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">
              特别注意
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              尽管提供了 <code>-t</code> 参数，POP3 扫描默认会强制使用单线程（maxConcurrent =
              1）进行扫描，以避免触发邮件服务器的防护机制。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-3"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        POP3 协议认证流程
      </h2>

      <p class="mb-4">POP3 认证遵循特定的命令序列，Fscan 实现了完整的 POP3 交互流程：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryPOP3Auth 尝试POP3认证
func tryPOP3Auth(conn net.Conn, user string, pass string, timeout time.Duration) (bool, error) {
    reader := bufio.NewReader(conn)

    // 设置较长的超时时间以适应一些较慢的服务器
    conn.SetDeadline(time.Now().Add(timeout))

    // 读取欢迎信息
    response, err := reader.ReadString('\n')
    if err != nil {
        return false, fmt.Errorf("读取欢迎消息失败: %v", err)
    }

    // 检查是否有错误信息
    if strings.Contains(strings.ToLower(response), "error") ||
        strings.Contains(strings.ToLower(response), "too many") {
        return false, fmt.Errorf("服务器拒绝连接: %s", strings.TrimSpace(response))
    }

    // 发送用户名前等待一小段时间
    time.Sleep(300 * time.Millisecond)

    // 发送用户名
    conn.SetDeadline(time.Now().Add(timeout))
    _, err = conn.Write([]byte(fmt.Sprintf("USER %s\r\n", user)))
    if err != nil {
        return false, fmt.Errorf("发送用户名失败: %v", err)
    }

    // 读取用户名响应
    conn.SetDeadline(time.Now().Add(timeout))
    response, err = reader.ReadString('\n')
    if err != nil {
        return false, fmt.Errorf("读取用户名响应失败: %v", err)
    }
    if !strings.Contains(response, "+OK") {
        return false, fmt.Errorf("用户名无效: %s", strings.TrimSpace(response))
    }

    // 发送密码前等待一小段时间
    time.Sleep(300 * time.Millisecond)

    // 发送密码
    conn.SetDeadline(time.Now().Add(timeout))
    _, err = conn.Write([]byte(fmt.Sprintf("PASS %s\r\n", pass)))
    if err != nil {
        return false, fmt.Errorf("发送密码失败: %v", err)
    }

    // 读取密码响应
    conn.SetDeadline(time.Now().Add(timeout))
    response, err = reader.ReadString('\n')
    if err != nil {
        return false, fmt.Errorf("读取密码响应失败: %v", err)
    }

    if strings.Contains(response, "+OK") {
        return true, nil
    }

    return false, fmt.Errorf("认证失败: %s", strings.TrimSpace(response))
}</code></pre>
        </div>
      </div>

      <p class="mb-4">POP3 协议的认证流程包含以下关键步骤：</p>
      <ol class="pl-5 list-decimal space-y-2 mb-6">
        <li><strong>建立连接后接收欢迎信息</strong>：服务器发送 <code>+OK</code> 开头的欢迎信息</li>
        <li><strong>发送 USER 命令</strong>：格式为 <code>USER username</code></li>
        <li><strong>接收 USER 命令响应</strong>：服务器返回 <code>+OK</code> 表示用户名有效</li>
        <li><strong>发送 PASS 命令</strong>：格式为 <code>PASS password</code></li>
        <li>
          <strong>接收 PASS 命令响应</strong>：服务器返回 <code>+OK</code> 表示密码正确，认证成功
        </li>
      </ol>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:information"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-blue-400' : 'text-blue-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
              POP3 响应格式
            </p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              POP3 协议中所有成功的响应都以 <code>+OK</code> 开头，表示命令执行成功；错误响应通常以
              <code>-ERR</code> 开头， 后面跟随错误详情。通过检查响应内容可以确定认证结果。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        双模式连接支持
      </h2>

      <p class="mb-4">
        POP3 服务通常同时支持明文连接和 TLS 加密连接。Fscan 会按顺序尝试这两种连接方式：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// POP3Conn 尝试POP3连接
func POP3Conn(ctx context.Context, info *Common.HostInfo, user string, pass string) (success bool, isTLS bool, err error) {
    timeout := time.Duration(Common.Timeout) * time.Second
    addr := fmt.Sprintf("%s:%s", info.Host, info.Ports)

    // 首先尝试普通连接
    dialer := &net.Dialer{
        Timeout: timeout,
        // 增加KeepAlive设置，可能有助于处理一些服务器的限制
        KeepAlive: 30 * time.Second,
    }
    conn, err := dialer.DialContext(ctx, "tcp", addr)
    if err == nil {
        flag, authErr := tryPOP3Auth(conn, user, pass, timeout)
        conn.Close()
        if authErr == nil && flag {
            return flag, false, nil  // 普通连接成功
        }
    }

    // 如果普通连接失败，尝试TLS连接
    tlsConfig := &tls.Config{
        InsecureSkipVerify: true,
    }
    tlsConn, tlsErr := tls.DialWithDialer(dialer, "tcp", addr, tlsConfig)
    if tlsErr != nil {
        return false, false, fmt.Errorf("连接失败: %v", tlsErr)
    }
    defer tlsConn.Close()

    flag, authErr := tryPOP3Auth(tlsConn, user, pass, timeout)
    return flag, true, authErr  // 返回TLS连接结果
}</code></pre>
        </div>
      </div>

      <p class="mb-4">此方法的优点包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>适应不同服务器配置，提高兼容性</li>
        <li>自动检测服务器支持的连接方式</li>
        <li>当普通连接失败时，尝试更安全的 TLS 连接</li>
        <li>通过 <code>isTLS</code> 标志记录使用的连接类型</li>
      </ul>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        限速机制设计
      </h2>

      <p class="mb-4">POP3 扫描模块使用特殊的限速机制，这是 Fscan 中最保守的扫描策略之一：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentPOP3Scan 并发扫描POP3服务（包含速率限制）
func concurrentPOP3Scan(ctx context.Context, info *Common.HostInfo, credentials []POP3Credential,
                        timeoutSeconds int64, maxRetries int) *POP3ScanResult {
    // 不使用ModuleThreadNum控制并发数，必须单线程
    maxConcurrent := 1
    if maxConcurrent <= 0 {
        maxConcurrent = 1 // POP3默认并发更低
    }

    // 创建限速通道，控制请求频率
    rateLimiter := make(chan struct{}, maxConcurrent)

    // 初始填充令牌
    for i := 0; i < maxConcurrent; i++ {
        rateLimiter <- struct{}{}
    }

    // 使用动态的请求间隔
    requestInterval := 1500 * time.Millisecond // 默认间隔1.5秒

    // ...

    // 使用令牌发送请求
    case <-rateLimiter:
        // 获取令牌，可以发送请求

        // ...执行认证尝试...

        // 尝试完成后添加延迟，然后归还令牌
        time.Sleep(requestInterval)

        // 未被取消的情况下归还令牌
        select {
        case <-scanCtx.Done():
            // 如果已经取消，不再归还令牌
        default:
            rateLimiter <- struct{}{}
        }</code></pre>
        </div>
      </div>

      <p class="mb-4">主要限速策略包括：</p>
      <ol class="pl-5 list-decimal space-y-2 mb-6">
        <li><strong>强制单线程</strong>：不管用户设置的线程数多少，POP3 扫描始终使用单线程</li>
        <li><strong>令牌桶限速</strong>：使用令牌桶算法控制请求发送频率</li>
        <li><strong>固定请求间隔</strong>：每个请求之间间隔 1.5 秒</li>
        <li><strong>命令发送间隔</strong>：USER 和 PASS 命令之间增加 300 毫秒延迟</li>
        <li><strong>动态重试间隔</strong>：遇到错误时，重试间隔会动态增加</li>
      </ol>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-amber-900/10 border border-amber-900/20'
            : 'bg-amber-50 border border-amber-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:lightbulb"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-amber-400' : 'text-amber-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">
              为什么需要限速？
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              邮件服务器通常设有严格的安全措施，包括：1) 连接频率限制；2) 认证失败次数限制；3) IP
              封禁机制。 过快的扫描不仅会失败，还可能导致 IP 被服务器临时或永久封禁。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-6"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        错误处理与重试机制
      </h2>

      <p class="mb-4">
        POP3 扫描模块实现了智能的错误处理和重试策略，特别关注邮件服务器常见的限制错误：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryPOP3Credential 尝试单个POP3凭据
func tryPOP3Credential(ctx context.Context, info *Common.HostInfo, credential POP3Credential,
                      timeoutSeconds int64, maxRetries int) *POP3ScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        // ...

        if retry > 0 {
            Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
            // 重试间隔时间增加，避免触发服务器限制
            retryDelay := time.Duration(retry*2000) * time.Millisecond
            time.Sleep(retryDelay)
        }

        // ...

        if err != nil {
            // 处理特定错误情况
            if strings.Contains(strings.ToLower(err.Error()), "too many connections") ||
                strings.Contains(strings.ToLower(err.Error()), "connection refused") ||
                strings.Contains(strings.ToLower(err.Error()), "timeout") {
                // 服务器可能限制连接，增加等待时间
                waitTime := time.Duration((retry+1)*3000) * time.Millisecond
                Common.LogDebug(fmt.Sprintf("服务器可能限制连接，等待 %v 后重试", waitTime))
                time.Sleep(waitTime)
                continue
            }

            // 检查是否需要重试
            if retryErr := Common.CheckErrs(err); retryErr == nil {
                break // 不需要重试的错误
            }
        }
    }

    // ...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">重点错误处理策略：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>动态重试延迟</strong>：重试次数越多，等待时间越长（retry * 2000ms）</li>
        <li><strong>连接限制识别</strong>：检测 "too many connections" 等特定错误</li>
        <li>
          <strong>自适应延迟</strong>：遇到连接限制时，使用更长的等待时间（(retry+1) * 3000ms）
        </li>
        <li><strong>错误过滤</strong>：通过 CheckErrs 函数判断错误是否需要重试</li>
      </ul>

      <h2
        id="section-7"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        应用场景与示例
      </h2>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        基本 POP3 扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 110 -m pop3</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        指定 POP3 和 POP3S 端口
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h mail.example.com -p 110,995 -m pop3</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        使用自定义用户名和密码
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 110 -m pop3 -user user1,user2,admin -pwd password123,{user}@123</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        调整超时和重试设置
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h mail.example.com -p 110 -m pop3 -time 10 -retries 5 -o pop3_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">
        这个配置使用更长的单个连接超时（10秒）和更多的重试次数（5次），并将结果保存到文件。
      </p>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-green-900/10 border border-green-900/20'
            : 'bg-green-50 border border-green-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:check-circle"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-green-400' : 'text-green-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">
              最佳实践
            </p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              针对 POP3 服务的扫描应特别注意以下几点：1)
              使用较少的用户名和密码组合，避免触发账户锁定； 2) 扫描时间可能较长，耐心等待；3)
              避免在短时间内重复扫描同一目标。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 简化的文档反馈 -->
    <div
      class="mt-8 pt-4 border-t transition-colors duration-300 text-sm"
      :class="isDark ? 'border-gray-700' : 'border-gray-200'"
    >
      <a
        href="https://github.com/shadow1ng/fscan/issues"
        target="_blank"
        class="inline-flex items-center transition-colors duration-200"
        :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'"
      >
        <Icon icon="mdi:github" class="mr-1.5" />
        <span>在 GitHub 上反馈问题</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { Icon } from '@iconify/vue'

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false))

// 内容章节标题（用于目录）
const contentSections = [
  'POP3 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'POP3 协议认证流程',
  '双模式连接支持',
  '限速机制设计',
  '错误处理与重试机制',
  '应用场景与示例',
]

// POP3参数表格数据
const pop3Parameters = [
  { name: '-m pop3', description: '启用 POP3 扫描模块', example: '-m pop3' },
  {
    name: '-p 110,995',
    description: '指定 POP3 端口，110 为普通连接，995 为 SSL/TLS 加密连接',
    example: '-p 110,995',
  },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user user1,admin' },
  {
    name: '-pwd',
    description: '指定密码列表，多个用逗号分隔，支持 {user} 变量',
    example: '-pwd 123456,{user}@2023',
  },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 3600' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o result.txt' },
]
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
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
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
.code-keyword {
  color: #569cd6;
}
.code-string {
  color: #ce9178;
}
.code-comment {
  color: #6a9955;
  font-style: italic;
}

/* 字体优化 */
h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
a,
span,
div,
td,
th {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
}

pre,
code {
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
}

/* 代码块左侧边框指示器 */
pre {
  position: relative;
  border-left: 3px solid rgba(66, 153, 225, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(66, 153, 225, 0.6);
  filter: brightness(1.1);
}

/* 代码块复制按钮 */
pre::after {
  content: '复制';
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
