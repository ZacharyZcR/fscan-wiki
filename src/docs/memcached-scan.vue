<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'"
      >
        <Icon
          icon="mdi:database-outline"
          class="text-xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        Memcached 扫描指南
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
        Memcached 扫描是 Fscan 的一项重要功能，用于发现网络中的 Memcached
        服务并检测未授权访问漏洞。本指南详细介绍 Memcached 扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        Memcached 扫描简介
      </h2>

      <p class="mb-4">
        Memcached
        是一个高性能的分布式内存对象缓存系统，常用于缓存数据库查询、API调用结果等，以提高动态Web应用的性能。Fscan
        的 Memcached 扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Memcached 服务（默认端口 11211）</li>
        <li>检测 Memcached 未授权访问漏洞</li>
        <li>获取服务器状态和统计信息</li>
        <li>帮助识别可能被滥用的 Memcached 实例</li>
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
              未授权访问的 Memcached 服务可能导致数据泄露、被用于 DDoS
              放大攻击或成为内网渗透的入口点。仅在授权的安全测试环境中使用此功能。
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
        Memcached 扫描模块采用简单有效的检测方法，通过以下步骤识别未授权的 Memcached 服务：
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
            扫描目标 IP 范围，识别开放 Memcached 服务（默认端口 11211）的主机
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
              发送测试命令
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            向发现的 Memcached 服务发送 "stats" 命令来请求统计信息
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
              分析响应
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            检查服务器响应是否包含 "STAT" 关键字，验证是否存在未授权访问
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
              结果记录
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            记录扫描结果，包括服务器统计信息、版本和配置参数
          </p>
        </div>
      </div>

      <p class="mb-4">
        整个扫描过程采用并发设计，使用上下文（context）处理超时和取消操作，确保即使在大规模扫描时也能高效运行。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">Memcached 扫描提供以下配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in memcachedParameters"
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

      <h2
        id="section-3"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        未授权访问检测
      </h2>

      <p class="mb-4">
        Memcached 未授权访问检测的核心是
        <code>tryMemcachedConnection</code> 函数，它通过以下步骤执行检测：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryMemcachedConnection 尝试连接Memcached并检查未授权访问
func tryMemcachedConnection(ctx context.Context, info *Common.HostInfo, timeoutSeconds int64) *MemcachedScanResult {
    realhost := fmt.Sprintf("%s:%v", info.Host, info.Ports)
    timeout := time.Duration(timeoutSeconds) * time.Second

    // 创建连接上下文，带超时
    connCtx, connCancel := context.WithTimeout(ctx, timeout)
    defer connCancel()

    // 在协程中尝试连接
    go func() {
        // 建立TCP连接
        client, err := Common.WrapperTcpWithTimeout("tcp", realhost, timeout)
        if err != nil {
            // 处理连接错误...
            return
        }
        defer client.Close()

        // 发送stats命令
        if _, err := client.Write([]byte("stats\n")); err != nil {
            // 处理写入错误...
            return
        }

        // 读取响应
        rev := make([]byte, 1024)
        n, err := client.Read(rev)
        if err != nil {
            // 处理读取错误...
            return
        }

        // 检查响应是否包含统计信息
        response := string(rev[:n])
        if strings.Contains(response, "STAT") {
            result.Success = true
            result.Stats = response
        }

        // 发送结果...
    }()

    // 等待结果或上下文取消...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">检测流程详解：</p>

      <ol class="pl-5 list-decimal space-y-2 mb-6">
        <li>创建带超时的TCP连接到目标Memcached服务</li>
        <li>向服务发送 <code>stats\n</code> 命令</li>
        <li>读取并解析服务器的响应内容</li>
        <li>检查响应中是否包含 "STAT" 关键字</li>
        <li>如果包含，则认为存在未授权访问漏洞</li>
      </ol>

      <p class="mb-4">成功检测到未授权访问时，将保存包含以下信息的结果：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 保存成功结果
scanResult := &Common.ScanResult{
    Time:   time.Now(),
    Type:   Common.VULN,
    Target: info.Host,
    Status: "vulnerable",
    Details: map[string]interface{}{
        "port":        info.Ports,
        "service":     "memcached",
        "type":        "unauthorized-access",
        "description": "Memcached unauthorized access",
        "stats":       result.Stats,
    },
}
Common.SaveResult(scanResult)
Common.LogSuccess(fmt.Sprintf("Memcached %s 未授权访问", realhost))</code></pre>
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
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">
              Memcached stats 命令
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Memcached 的 stats
              命令会返回大量服务器统计信息，包括版本号、内存使用情况、命中率、运行时间等关键指标。这些信息对攻击者分析系统非常有价值。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        高级设置
      </h2>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        超时控制
      </h3>

      <p class="mb-4">Memcached 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数控制每个 Memcached
          连接尝试的最大时间
        </li>
        <li>
          <strong>全局超时</strong>：通过 <code>-timeout</code> 参数控制整个扫描任务的最大执行时间
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

// 创建连接上下文，带单个连接超时
connCtx, connCancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds) * time.Second)
defer connCancel()</code></pre>
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
              在扫描大型网络时，合理设置超时参数非常重要。推荐的连接超时时间为 3-5
              秒，全局超时时间视网络规模而定，通常为 300-600 秒。
            </p>
          </div>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        并发控制
      </h3>

      <p class="mb-4">
        虽然 Memcached 扫描本身不支持并发扫描多个目标，但 Fscan
        的全局扫描引擎支持多线程扫描，可以通过 <code>-t</code> 参数控制：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 11211 -m memcached -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">这将同时扫描最多 100 个不同的主机，大大提高扫描效率。</p>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        安全风险与防护
      </h2>

      <p class="mb-4">未授权访问的 Memcached 服务可能导致以下安全风险：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>数据泄露</strong>：攻击者可以读取存储在缓存中的敏感数据</li>
        <li><strong>DDoS 放大攻击</strong>：Memcached 可被用作反射放大 DDoS 攻击的跳板</li>
        <li><strong>缓存投毒</strong>：攻击者可以修改缓存数据，导致应用程序行为异常</li>
        <li><strong>权限提升</strong>：在某些配置下，可能导致远程命令执行</li>
      </ul>

      <p class="mb-4">推荐的 Memcached 安全加固措施：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-start mb-2">
            <div
              class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-2 mt-0.5"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <Icon
                icon="mdi:check"
                class="text-sm"
                :class="isDark ? 'text-green-400' : 'text-green-600'"
              />
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                绑定内部IP
              </h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                将 Memcached 绑定到内部 IP 地址（127.0.0.1 或内网 IP），而不是 0.0.0.0
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-start mb-2">
            <div
              class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-2 mt-0.5"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <Icon
                icon="mdi:check"
                class="text-sm"
                :class="isDark ? 'text-green-400' : 'text-green-600'"
              />
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                防火墙限制
              </h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                使用防火墙规则限制对 Memcached 端口（11211）的访问，只允许授权的应用服务器连接
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-start mb-2">
            <div
              class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-2 mt-0.5"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <Icon
                icon="mdi:check"
                class="text-sm"
                :class="isDark ? 'text-green-400' : 'text-green-600'"
              />
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                SASL 认证
              </h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                启用 SASL 认证（如果版本支持），要求客户端提供有效的用户名和密码
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-start mb-2">
            <div
              class="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center mr-2 mt-0.5"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <Icon
                icon="mdi:check"
                class="text-sm"
                :class="isDark ? 'text-green-400' : 'text-green-600'"
              />
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                禁用 UDP
              </h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                关闭 Memcached 的 UDP 支持，防止被用于 DDoS 放大攻击
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2
        id="section-6"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        应用场景与示例
      </h2>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        扫描单个主机
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 11211 -m memcached</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        扫描整个网段
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 11211 -m memcached</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        扫描多个目标并调整超时
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24,10.0.0.1-10.0.0.50 -p 11211 -m memcached -time 3 -timeout 300</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 11211 -m memcached -t 100 -time 2 -o memcached_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 2 秒，并将结果保存到文件。</p>

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
              定期扫描内部网络中的 Memcached
              服务，确保没有暴露未授权访问的实例，是企业安全自查的重要部分。扫描后及时修复发现的问题，并建立长期监控机制。
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
  'Memcached 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '未授权访问检测',
  '高级设置',
  '安全风险与防护',
  '应用场景与示例',
]

// Memcached参数表格数据
const memcachedParameters = [
  { name: '-m memcached', description: '启用 Memcached 扫描模块', example: '-m memcached' },
  { name: '-p 11211', description: '指定 Memcached 端口（默认为 11211）', example: '-p 11211' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
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
  color: #79b8ff;
}
.code-string {
  color: #9ecbff;
}
.code-comment {
  color: #8b949e;
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
  border-left: 3px solid rgba(59, 130, 246, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(59, 130, 246, 0.6);
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
