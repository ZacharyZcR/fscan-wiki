<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-purple-900/30' : 'bg-purple-100'">
        <Icon icon="mdi:rabbit" class="text-xl" :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        RabbitMQ 扫描指南
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
            :class="isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">RabbitMQ 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 RabbitMQ 消息代理服务，并尝试通过弱密码进行身份验证。本指南详细介绍 RabbitMQ 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        RabbitMQ 扫描简介
      </h2>

      <p class="mb-4">RabbitMQ 是一个开源的消息代理软件，实现了高级消息队列协议（AMQP），被广泛应用于分布式系统集成、微服务架构和云原生应用。Fscan 的 RabbitMQ 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 RabbitMQ 服务（默认端口 5672）</li>
        <li>使用 AMQP 协议进行身份验证测试</li>
        <li>检测默认的管理员账户（guest/guest）</li>
        <li>支持自定义用户名和密码字典</li>
        <li>识别弱密码和身份验证问题</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-purple-900/10 border border-purple-900/20' : 'bg-purple-50 border border-purple-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-purple-300' : 'text-purple-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-purple-200' : 'text-purple-800'">
              RabbitMQ 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">RabbitMQ 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-purple-900/20' : 'bg-purple-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务发现</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 RabbitMQ 服务（默认端口 5672、15672）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-purple-900/20' : 'bg-purple-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">默认凭据检测</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试默认的 guest/guest 凭据进行连接，这是最常见的管理员账户
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-purple-900/20' : 'bg-purple-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">密码爆破</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果默认凭据失败，则使用多线程技术尝试用户名和密码组合，智能处理错误和重试
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-purple-900/20' : 'bg-purple-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">结果分析</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            记录成功的身份验证并生成详细报告，包括凭据信息和弱密码分析
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">RabbitMQ 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in rabbitmqParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-purple-400' : 'text-purple-600'">
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
        凭据验证流程
      </h2>

      <p class="mb-4">RabbitMQ 扫描模块使用 AMQP（高级消息队列协议）来验证凭据。AMQP 是 RabbitMQ 的核心协议，提供了一种标准化的方式来发送和接收消息。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        默认凭据检测
      </h3>

      <p class="mb-4">扫描首先会尝试使用默认凭据（guest/guest）进行连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 先测试默认账号 guest/guest
Common.LogDebug("尝试默认账号 guest/guest")
defaultCredential := RabbitMQCredential{Username: "guest", Password: "guest"}
defaultResult := tryRabbitMQCredential(ctx, info, defaultCredential, Common.Timeout, Common.MaxRetries)

if defaultResult.Success {
    saveRabbitMQResult(info, target, defaultResult.Credential)
    return nil
} else if defaultResult.Error != nil {
    // 打印默认账号的详细错误信息
    Common.LogDebug(fmt.Sprintf("默认账号 guest/guest 失败，详细错误: %s", defaultResult.ErrorMsg))
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-purple-900/10 border border-purple-900/20' : 'bg-purple-50 border border-purple-100'">
        <div class="flex">
          <Icon icon="mdi:information-outline" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-purple-300' : 'text-purple-700'">默认凭据说明</p>
            <p class="mt-1" :class="isDark ? 'text-purple-200' : 'text-purple-800'">
              RabbitMQ 默认安装时会创建 guest/guest 账户，但从 3.3.0 版本开始，该账户仅允许从本地主机连接。这是一项重要的安全特性，但在某些配置中可能被更改。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        AMQP 连接过程
      </h3>

      <p class="mb-4">RabbitMQ 验证使用 AMQP 协议进行连接尝试：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// RabbitMQConn 尝试 RabbitMQ 连接
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">AMQP 连接过程主要包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>构造标准的 AMQP URL，格式为 <code>amqp://用户名:密码@主机:端口/</code></li>
        <li>配置连接选项，包括超时设置</li>
        <li>尝试建立连接，连接成功表示凭据有效</li>
        <li>详细记录错误信息，以便后续分析</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">错误分析</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              当连接失败时，RabbitMQ 会返回具体的错误信息，例如 "ACCESS_REFUSED" 表示凭据错误。Fscan 会根据错误类型决定是否需要重试，提高扫描效率。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        密码爆破流程
      </h2>

      <p class="mb-4">如果默认凭据检测失败，Fscan 将尝试使用字典进行密码爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建其他凭据列表
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
result := concurrentRabbitMQScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
        </div>
      </div>

      <p class="mb-4">密码爆破过程智能处理重试和错误分析：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryRabbitMQCredential 尝试单个RabbitMQ凭据
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
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        智能错误识别
      </h3>

      <p class="mb-4">RabbitMQ 扫描模块能够识别不同类型的错误并做出相应处理：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:close-circle" class="text-lg mr-2" :class="isDark ? 'text-red-400' : 'text-red-500'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">认证错误</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            <code>ACCESS_REFUSED</code> - 表示用户名或密码错误，无需重试
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:clock-alert" class="text-lg mr-2" :class="isDark ? 'text-yellow-400' : 'text-yellow-500'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">超时错误</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            连接超时或读写超时，可能需要重试
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:lan-disconnect" class="text-lg mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-500'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">连接错误</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            连接被拒绝或网络错误，根据具体情况决定是否重试
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:cancel" class="text-lg mr-2" :class="isDark ? 'text-purple-400' : 'text-purple-500'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">全局取消</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            全局上下文取消，立即终止所有正在进行的操作
          </p>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        并发控制
      </h3>

      <p class="mb-4">RabbitMQ 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentRabbitMQScan 并发扫描RabbitMQ服务
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现使用协程池并发处理多个凭据检测任务，一旦发现有效凭据会立即取消其他正在进行的任务，提高扫描效率。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        超时设置
      </h3>

      <p class="mb-4">RabbitMQ 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 RabbitMQ 连接尝试的最大时间（秒）</li>
        <li><strong>全局超时</strong>：通过 <code>-timeout</code> 参数设置整个扫描任务的最大执行时间（秒）</li>
      </ul>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 为单个连接创建超时上下文
connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
success, err, detailErr := RabbitMQConn(connCtx, info, credential.Username, credential.Password)
cancel()</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制
      </h3>

      <p class="mb-4">Fscan 的 RabbitMQ 扫描模块支持智能重试机制，通过 <code>-retries</code> 参数设置最大重试次数：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">for retry := 0; retry < maxRetries; retry++ {
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">重试机制的关键特性：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>在重试前会等待 500 毫秒，避免对目标服务器造成过大压力</li>
        <li>针对不同类型的错误采取不同的重试策略，例如对于认证错误（凭据无效）不进行重试</li>
        <li>详细记录每次重试的过程和结果，便于调试和分析</li>
      </ul>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        应用场景与示例
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        快速扫描整个网段
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 5672,15672 -m rabbitmq</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 5672 -m rabbitmq -user admin,rabbitmq,root -pwd admin123,rabbitmq,{user}@2023</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        高性能扫描配置
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 5672,15672 -m rabbitmq -t 100 -time 3 -retries 2 -o rabbitmq_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-purple-900/10 border border-purple-900/20' : 'bg-purple-50 border border-purple-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-purple-300' : 'text-purple-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-purple-200' : 'text-purple-800'">
              使用 RabbitMQ 时应始终更改默认凭据，使用强密码，并限制允许访问的 IP 地址。保证消息队列安全性是分布式系统安全的重要组成部分。
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
         :class="isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'">
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
  'RabbitMQ 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '凭据验证流程',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例'
];

// RabbitMQ参数表格数据
const rabbitmqParameters = [
  { name: '-m rabbitmq', description: '启用 RabbitMQ 扫描模块', example: '-m rabbitmq' },
  { name: '-p 5672,15672', description: 'RabbitMQ 常用端口，多个用逗号分隔', example: '-p 5672,15672' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user guest,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd guest,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o result.txt' }
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
.code-keyword { color: #b57edc; }
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
  border-left: 3px solid rgba(139, 92, 246, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(139, 92, 246, 0.6);
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
