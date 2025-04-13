<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'">
        <Icon icon="mdi:database" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        PostgreSQL 扫描指南
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
            :class="isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">PostgreSQL 扫描是 Fscan 的重要功能模块，用于发现网络中运行的 PostgreSQL 数据库服务，并尝试通过弱密码进行身份验证。本指南详细介绍 PostgreSQL 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        PostgreSQL 扫描简介
      </h2>

      <p class="mb-4">PostgreSQL 是一个功能强大的开源关系型数据库系统，以其可靠性、数据完整性和正确性而闻名。Fscan 的 PostgreSQL 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 PostgreSQL 服务（默认端口 5432）</li>
        <li>使用数据库标准协议进行弱密码检测</li>
        <li>识别常见的默认账户配置</li>
        <li>支持自定义用户名和密码字典</li>
        <li>验证连接权限和数据库版本</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              PostgreSQL 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">PostgreSQL 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务发现</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 PostgreSQL 服务（默认端口 5432）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">凭据生成</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            根据内置或用户提供的字典，生成用户名和密码组合，支持变量替换功能
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">并发连接测试</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用多线程技术尝试数据库连接和身份验证，支持自动重试和超时控制
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">权限验证</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            成功连接后，执行查询测试验证权限级别，并获取数据库版本信息
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">PostgreSQL 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in postgresParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'">
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
        连接验证流程
      </h2>

      <p class="mb-4">PostgreSQL 扫描模块使用标准数据库驱动和 SQL 查询来验证凭据。连接过程包括建立连接、身份验证以及权限验证三个阶段。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        连接建立与测试
      </h3>

      <p class="mb-4">PostgreSQL 连接使用标准 Go SQL 驱动与 <code>lib/pq</code> 库，通过连接字符串指定连接参数：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// PostgresConn 尝试PostgreSQL连接
func PostgresConn(ctx context.Context, info *Common.HostInfo, user string, pass string) (bool, error) {
    // 构造连接字符串
    connStr := fmt.Sprintf(
        "postgres://%v:%v@%v:%v/postgres?sslmode=disable&connect_timeout=%d",
        user, pass, info.Host, info.Ports, Common.Timeout/1000, // 转换为秒
    )

    // 建立数据库连接
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(time.Duration(Common.Timeout) * time.Millisecond)
    db.SetMaxOpenConns(1)
    db.SetMaxIdleConns(0)

    // 使用上下文测试连接
    err = db.PingContext(ctx)
    if err != nil {
        return false, err
    }

    // 简单查询测试权限
    var version string
    err = db.QueryRowContext(ctx, "SELECT version()").Scan(&version)
    if err != nil {
        return false, err
    }

    return true, nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">连接字符串中的主要参数包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><code>user</code> 和 <code>pass</code>：尝试的用户名和密码</li>
        <li><code>sslmode=disable</code>：禁用 SSL 连接，用于快速扫描</li>
        <li><code>connect_timeout</code>：连接超时时间（秒）</li>
        <li><code>postgres</code>：默认连接的数据库名</li>
      </ul>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        权限验证
      </h3>

      <p class="mb-4">成功连接后，通过执行 <code>SELECT version()</code> 查询验证用户权限并获取数据库版本信息：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 简单查询测试权限
var version string
err = db.QueryRowContext(ctx, "SELECT version()").Scan(&version)
if err != nil {
    return false, err
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">安全知识</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              PostgreSQL 中的权限管理非常精细。即使连接成功，用户可能只拥有有限的权限。通过尝试执行简单查询可以进一步验证用户的实际权限级别。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        密码爆破流程
      </h2>

      <p class="mb-4">密码爆破是通过尝试多种凭据组合自动发现有效登录信息的过程。PostgreSQL 扫描模块采用高效的并发爆破策略：</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        凭据生成
      </h3>

      <p class="mb-4">首先生成所有可能的用户名和密码组合：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []PostgresCredential
for _, user := range Common.Userdict["postgresql"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, PostgresCredential{
            Username: user,
            Password: actualPass,
        })
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">支持密码变量替换功能，例如 <code>{user}</code> 会被替换为当前尝试的用户名，便于生成常见的密码模式。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        并发爆破
      </h3>

      <p class="mb-4">使用协程池并发测试多个凭据组合，提高扫描效率：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentPostgresScan 并发扫描PostgreSQL服务
func concurrentPostgresScan(ctx context.Context, info *Common.HostInfo, credentials []PostgresCredential,
                            timeoutSeconds int64, maxRetries int) *PostgresScanResult {
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
    resultChan := make(chan *PostgresScanResult, 1)
    workChan := make(chan PostgresCredential, maxConcurrent)
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
                    result := tryPostgresCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略其余代码...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">关键特性包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>动态线程数调整：根据 <code>ModuleThreadNum</code> 和凭据数量自动调整</li>
        <li>提前退出：一旦找到有效凭据，立即取消所有未完成的工作</li>
        <li>上下文管理：使用 <code>context</code> 统一管理超时和取消</li>
      </ul>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制
      </h3>

      <p class="mb-4">为了处理网络波动和临时错误，实现了自动重试机制：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryPostgresCredential 尝试单个PostgreSQL凭据
func tryPostgresCredential(ctx context.Context, info *Common.HostInfo, credential PostgresCredential,
                          timeoutSeconds int64, maxRetries int) *PostgresScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &PostgresScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建单个连接超时的上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := PostgresConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                return &PostgresScanResult{Success: true, Credential: credential}
            }

            lastErr = err
            if err != nil {
                // 检查是否需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &PostgresScanResult{Success: false, Error: lastErr, Credential: credential}
}</code></pre>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        线程控制
      </h3>

      <p class="mb-4">PostgreSQL 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 5432 -m postgresql -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">maxConcurrent := Common.ModuleThreadNum
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

      <p class="mb-4">PostgreSQL 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 PostgreSQL 连接尝试的最大时间（秒）</li>
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

// 在连接字符串中设置单个连接超时
connStr := fmt.Sprintf(
    "postgres://%v:%v@%v:%v/postgres?sslmode=disable&connect_timeout=%d",
    user, pass, info.Host, info.Ports, Common.Timeout/1000, // 转换为秒
)</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              在扫描大型网络时，合理设置超时参数非常重要。PostgreSQL 的默认连接超时通常较长，适当缩短可以提高扫描效率。
            </p>
          </div>
        </div>
      </div>

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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 5432 -m postgresql</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 5432 -m postgresql -user postgres,admin -pwd postgres,admin123,{user}@123</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 5432 -m postgresql -t 100 -time 3 -retries 2 -o postgres_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              PostgreSQL 的默认用户通常是 "postgres"，将其作为首要尝试的用户名可以提高扫描效率。此外，使用 "{user}" 变量可以生成与用户名相关的密码模式，这是常见的弱密码设置方式。
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
         :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
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
  'PostgreSQL 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '连接验证流程',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例'
];

// PostgreSQL参数表格数据
const postgresParameters = [
  { name: '-m postgresql', description: '启用 PostgreSQL 扫描模块', example: '-m postgresql' },
  { name: '-p 5432', description: 'PostgreSQL 默认端口', example: '-p 5432' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user postgres,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd postgres,{user}123' },
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
.code-keyword { color: #569cd6; }
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
  border-left: 3px solid rgba(66, 153, 225, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(66, 153, 225, 0.6);
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
