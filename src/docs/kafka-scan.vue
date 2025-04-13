<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-orange-900/30' : 'bg-orange-100'">
        <Icon icon="mdi:message-stream" class="text-xl" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Kafka 扫描指南
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
            :class="isDark ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">Kafka 扫描是 Fscan 的重要功能模块，用于发现网络中运行的 Apache Kafka 消息队列服务，并检测未授权访问和弱密码问题。本指南详细介绍 Kafka 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Kafka 扫描简介
      </h2>

      <p class="mb-4">Apache Kafka 是一个分布式的流处理平台，被广泛用于构建实时数据流管道和流式应用程序。Fscan 的 Kafka 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Kafka 服务（默认端口 9092）</li>
        <li>检测 Kafka 未授权访问漏洞</li>
        <li>进行 SASL 认证的密码爆破</li>
        <li>识别默认和弱密码账户</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-orange-900/10 border border-orange-900/20' : 'bg-orange-50 border border-orange-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-orange-300' : 'text-orange-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-orange-200' : 'text-orange-800'">
              Kafka 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">Kafka 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-green-900/20' : 'bg-green-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务发现</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Kafka 服务（默认端口 9092）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-green-900/20' : 'bg-green-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">未授权访问检测</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试无凭据连接 Kafka，检测是否允许匿名访问（常见安全风险）
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-green-900/20' : 'bg-green-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">密码爆破</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果无法未授权访问，则使用多线程技术尝试常见用户名和密码组合
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-green-900/20' : 'bg-green-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">结果分析</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            记录成功的访问方式（无认证或有效凭据）并生成详细报告
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">Kafka 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in kafkaParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'">
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
        未授权访问检测
      </h2>

      <p class="mb-4">Kafka 未授权访问是一个常见的安全隐患。许多组织未正确配置 Kafka 的身份验证，导致服务可以在没有任何凭据的情况下被访问。Fscan 会首先尝试无认证连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 先尝试无认证访问
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">无认证连接会尝试创建一个不带任何 SASL 配置的 Kafka 客户端或消费者：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// KafkaConn 尝试 Kafka 连接
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
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">防护提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              防止 Kafka 未授权访问的关键措施包括启用 SASL 认证、配置 ACL 访问控制、使用 SSL/TLS 加密，以及使用防火墙限制对 Kafka 端口的访问。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        SASL 认证爆破
      </h2>

      <p class="mb-4">当 Kafka 服务启用了 SASL 认证，Fscan 会自动尝试使用内置用户名和密码字典进行爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
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
result := concurrentKafkaScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
        </div>
      </div>

      <p class="mb-4">爆破过程使用协程池并发测试多个凭据，支持自动重试和超时控制：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentKafkaScan 并发扫描Kafka服务
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
}</code></pre>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Kafka 连接与验证
      </h2>

      <p class="mb-4">Kafka 扫描模块使用 Sarama 库实现连接与验证功能。它同时尝试两种连接方式：作为消费者和作为客户端连接，这增加了检测成功率：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">brokers := []string{fmt.Sprintf("%s:%s", host, port)}

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

return false, err</code></pre>
        </div>
      </div>

      <p class="mb-4">这种双重检测方法提高了验证的可靠性，因为某些 Kafka 配置可能只允许特定类型的连接。扫描过程中还会分析错误信息，以判断失败原因是否与认证相关。</p>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        线程控制
      </h3>

      <p class="mb-4">Kafka 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9092 -m kafka -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">并发控制实现确保工作池大小不会超过凭据总数，避免资源浪费：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 使用ModuleThreadNum控制并发数
maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        超时设置
      </h3>

      <p class="mb-4">Kafka 扫描支持三层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>连接超时</strong>：控制建立 TCP 连接的最大时间</li>
        <li><strong>读写超时</strong>：控制 Kafka 协议交互的最大时间</li>
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

// 设置 Kafka 客户端超时配置
config := sarama.NewConfig()
config.Net.DialTimeout = timeout
config.Net.ReadTimeout = timeout
config.Net.WriteTimeout = timeout</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Kafka 连接在大型集群或网络延迟较高的环境中可能需要更长的超时时间。建议使用 <code>-time</code> 参数适当调整单个连接的超时时间。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制
      </h3>

      <p class="mb-4">Fscan 的 Kafka 扫描模块支持自动重试连接，提高在不稳定网络环境中的成功率：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryKafkaCredential 尝试单个Kafka凭据
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
}</code></pre>
        </div>
      </div>

      <h2 id="section-7" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9092 -m kafka</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 9092 -m kafka -user admin,kafka,system -pwd admin123,kafka123,{user}@123</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描非标准端口
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 29092 -m kafka</code></pre>
        </div>
      </div>

      <p class="mb-4">这个命令会扫描使用非标准端口（29092）的 Kafka 服务。在容器化环境或某些云平台中，Kafka 可能使用非默认端口。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        高性能扫描配置
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9092 -m kafka -t 100 -time 5 -retries 2 -o kafka_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-green-900/10 border border-green-900/20' : 'bg-green-50 border border-green-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              在扫描 Kafka 服务时，考虑扩展用户名字典，包括常见的 Kafka 相关用户名如 "kafka"、"admin"、"service"、
              "consumer" 等，以及与目标组织相关的特定用户名。
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
         :class="isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'">
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
  'Kafka 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '未授权访问检测',
  'SASL 认证爆破',
  'Kafka 连接与验证',
  '高级设置',
  '应用场景与示例'
];

// Kafka参数表格数据
const kafkaParameters = [
  { name: '-m kafka', description: '启用 Kafka 扫描模块', example: '-m kafka' },
  { name: '-p 9092', description: '指定 Kafka 端口（默认为 9092）', example: '-p 9092,29092' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user admin,kafka' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd admin123,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
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
.code-keyword { color: #ee8e4b; }
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
  border-left: 3px solid rgba(237, 137, 54, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(237, 137, 54, 0.6);
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
