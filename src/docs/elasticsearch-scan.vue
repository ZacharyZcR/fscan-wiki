<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'"
      >
        <Icon
          icon="mdi:database-search"
          class="text-xl"
          :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        Elasticsearch 扫描指南
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
            isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
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
        Elasticsearch 扫描是 Fscan 的核心功能之一，用于发现网络中的 Elasticsearch
        服务并检测可能的未授权访问和弱口令漏洞。本指南详细介绍 Elasticsearch
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        Elasticsearch 扫描简介
      </h2>

      <p class="mb-4">
        Elasticsearch 是一个分布式、RESTful
        风格的搜索和分析引擎，广泛应用于全文搜索、日志分析和实时数据分析。Fscan 的 Elasticsearch
        扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Elasticsearch 服务（默认端口 9200）</li>
        <li>检测 Elasticsearch 未授权访问漏洞</li>
        <li>进行用户名密码组合的爆破测试</li>
        <li>支持 HTTP Basic 认证验证</li>
        <li>生成详细的安全风险报告</li>
      </ul>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-yellow-900/10 border border-yellow-900/20'
            : 'bg-yellow-50 border border-yellow-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-yellow-300' : 'text-yellow-700'">
              安全提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-yellow-200' : 'text-yellow-800'">
              Elasticsearch 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未授权访问的
              Elasticsearch 服务可能包含敏感信息，未经许可的访问可能违反法律法规。
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

      <p class="mb-4">Elasticsearch 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-yellow-900/20' : 'bg-yellow-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
                >1</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务发现
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Elasticsearch 服务端口（默认 9200）的主机
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-yellow-900/20' : 'bg-yellow-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
                >2</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              未授权访问检测
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            尝试无认证连接，检查是否能直接访问敏感 API 端点
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-yellow-900/20' : 'bg-yellow-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
                >3</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              身份验证爆破
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果需要认证，使用多线程技术尝试用户名密码组合，支持自动重试和超时控制
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-yellow-900/20' : 'bg-yellow-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
                >4</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              结果分析
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            记录成功的身份验证或未授权访问，生成详细报告
          </p>
        </div>
      </div>

      <p class="mb-4">
        Elasticsearch 扫描实现基于 HTTP 请求而非 TCP 连接，使用 Elasticsearch 的 REST API
        进行验证。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">Elasticsearch 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in elasticParameters"
              :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
            >
              <td
                class="py-2 px-4 font-mono"
                :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
              >
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

      <h2
        id="section-3"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        认证机制
      </h2>

      <p class="mb-4">
        Elasticsearch 支持多种认证方式，Fscan 主要使用 HTTP Basic 认证进行身份验证：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// ElasticConn 尝试Elasticsearch连接
func ElasticConn(ctx context.Context, info *Common.HostInfo, user string, pass string, timeoutSeconds int64) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(timeoutSeconds) * time.Second

    // 创建带有超时的HTTP客户端
    client := &http.Client{
        Timeout: timeout,
        Transport: &http.Transport{
            TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
        },
    }

    baseURL := fmt.Sprintf("http://%s:%s", host, port)

    // 使用上下文创建请求
    req, err := http.NewRequestWithContext(ctx, "GET", baseURL+"/_cat/indices", nil)
    if err != nil {
        return false, err
    }

    if user != "" || pass != "" {
        auth := base64.StdEncoding.EncodeToString([]byte(user + ":" + pass))
        req.Header.Add("Authorization", "Basic "+auth)
    }

    // 执行HTTP请求
    resp, err := client.Do(req)
    if err != nil {
        return false, err
    }
    defer resp.Body.Close()

    // 返回认证结果
    return resp.StatusCode == 200, nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">HTTP Basic 认证流程如下：</p>
      <ol class="pl-5 list-decimal space-y-2 mb-6">
        <li>将用户名和密码组合为 <code>用户名:密码</code> 格式</li>
        <li>对组合进行 Base64 编码</li>
        <li>添加 <code>Authorization: Basic [Base64编码结果]</code> 头部</li>
        <li>发送 HTTP 请求并检查响应状态码</li>
      </ol>

      <p class="mb-4">
        Fscan 的扫描模块检测 <code>_cat/indices</code> API 是否返回 200
        状态码来判断身份验证是否成功。
      </p>

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
              认证提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Elasticsearch 6.0 及更高版本默认启用了 X-Pack
              安全功能，而早期版本可能未默认启用认证。Fscan 支持检测这两种情况。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        未授权访问检测
      </h2>

      <p class="mb-4">
        未授权访问是 Elasticsearch 常见的安全问题。Fscan
        首先会尝试无认证访问来检测是否存在这一漏洞：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 首先测试无认证访问
Common.LogDebug("尝试无认证访问...")
unauthResult := tryElasticCredential(ctx, info, ElasticCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if unauthResult.Success {
    // 无需认证情况
    saveElasticResult(info, target, unauthResult.Credential, true)
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">未授权访问检测中，Fscan 会特别标记结果，以区分是弱密码还是无需认证的情况：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// saveElasticResult 保存Elasticsearch扫描结果
func saveElasticResult(info *Common.HostInfo, target string, credential ElasticCredential, isUnauth bool) {
    var successMsg string
    var details map[string]interface{}

    if isUnauth {
        successMsg = fmt.Sprintf("Elasticsearch服务 %s 无需认证", target)
        details = map[string]interface{}{
            "port":    info.Ports,
            "service": "elasticsearch",
            "type":    "unauthorized-access",
        }
    } else {
        successMsg = fmt.Sprintf("Elasticsearch服务 %s 爆破成功 用户名: %v 密码: %v",
            target, credential.Username, credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "elasticsearch",
            "username": credential.Username,
            "password": credential.Password,
            "type":     "weak-password",
        }
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    result := &Common.ScanResult{
        Time:    time.Now(),
        Type:    Common.VULN,
        Target:  info.Host,
        Status:  "vulnerable",
        Details: details,
    }
    Common.SaveResult(result)
}</code></pre>
        </div>
      </div>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-yellow-900/10 border border-yellow-900/20'
            : 'bg-yellow-50 border border-yellow-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-yellow-400' : 'text-yellow-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-yellow-300' : 'text-yellow-700'">
              安全风险
            </p>
            <p class="mt-1" :class="isDark ? 'text-yellow-200' : 'text-yellow-800'">
              未授权访问的 Elasticsearch 可能导致数据泄露、数据篡改甚至远程代码执行风险。建议立即为
              Elasticsearch 启用认证和访问控制。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        密码爆破流程
      </h2>

      <p class="mb-4">如果未授权访问检测失败，Fscan 将尝试使用字典进行密码爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []ElasticCredential
for _, user := range Common.Userdict["elastic"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, ElasticCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["elastic"]), len(Common.Passwords), len(credentials)))

// 并发扫描
result := concurrentElasticScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
        </div>
      </div>

      <p class="mb-4">并发扫描使用工作池模式，支持最大并发数控制和提前退出：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentElasticScan 并发扫描Elasticsearch服务
func concurrentElasticScan(ctx context.Context, info *Common.HostInfo, credentials []ElasticCredential,
                          timeoutSeconds int64, maxRetries int) *ElasticScanResult {
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
    resultChan := make(chan *ElasticScanResult, 1)
    workChan := make(chan ElasticCredential, maxConcurrent)
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
                    result := tryElasticCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

      <h2
        id="section-6"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        高级设置
      </h2>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        线程控制
      </h3>

      <p class="mb-4">
        Elasticsearch 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过
        <code>-t</code> 参数设置：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9200 -m elastic -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">maxConcurrent := Common.ModuleThreadNum
if maxConcurrent <= 0 {
    maxConcurrent = 10 // 默认值
}
if maxConcurrent > len(credentials) {
    maxConcurrent = len(credentials)
}</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        超时设置
      </h3>

      <p class="mb-4">Elasticsearch 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 HTTP
          请求的最大时间（秒）
        </li>
        <li>
          <strong>全局超时</strong>：通过
          <code>-timeout</code> 参数设置整个扫描任务的最大执行时间（秒）
        </li>
      </ul>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在HTTP客户端中使用超时
client := &http.Client{
    Timeout: time.Duration(timeoutSeconds) * time.Second,
    Transport: &http.Transport{
        TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
    },
}</code></pre>
        </div>
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
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              在扫描大型网络时，合理设置超时参数非常重要。过短的超时可能导致漏报，而过长的超时会降低扫描效率。建议根据网络环境调整这些参数。
            </p>
          </div>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        重试机制
      </h3>

      <p class="mb-4">
        Fscan 的 Elasticsearch 扫描模块支持自动重试连接，通过
        <code>-retries</code> 参数设置最大重试次数：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">for retry := 0; retry < maxRetries; retry++ {
    select {
    case <-ctx.Done():
        return &ElasticScanResult{
            Success:    false,
            Error:      fmt.Errorf("全局超时"),
            Credential: credential,
        }
    default:
        if retry > 0 {
            Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
            time.Sleep(500 * time.Millisecond) // 重试前等待
        }

        success, err := ElasticConn(ctx, info, credential.Username, credential.Password, timeoutSeconds)
        // ...处理结果...
    }
}</code></pre>
        </div>
      </div>

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
        快速扫描整个网段
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9200 -m elastic</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 9200 -m elastic -user elastic,admin,system -pwd elastic,{user}123,changeme</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        高性能扫描配置
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 9200 -m elastic -t 100 -time 3 -retries 2 -o elastic_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">
        这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。
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
              保护 Elasticsearch 的最佳实践包括：启用 X-Pack 安全功能、配置强密码、使用 TLS/SSL
              加密、限制网络访问、定期更新版本，以及使用 Elastic Stack 安全功能监控异常访问。
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
        :class="
          isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'
        "
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
  'Elasticsearch 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '认证机制',
  '未授权访问检测',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例',
]

// Elasticsearch参数表格数据
const elasticParameters = [
  { name: '-m elastic', description: '启用 Elasticsearch 扫描模块', example: '-m elastic' },
  {
    name: '-p 9200',
    description: '指定 Elasticsearch 端口（默认为 9200）',
    example: '-p 9200,9300',
  },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user elastic,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd changeme,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
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
  color: #d7ba7d;
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
  border-left: 3px solid rgba(234, 179, 8, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(234, 179, 8, 0.6);
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
