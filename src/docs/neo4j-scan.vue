<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-cyan-900/30' : 'bg-cyan-100'">
        <Icon icon="mdi:database-search" class="text-xl" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Neo4j 扫描指南
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
            :class="isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">Neo4j 扫描是 Fscan 的一个专业功能模块，用于发现网络中运行的 Neo4j 图数据库服务，并检测无认证访问、默认凭据和弱密码等安全问题。本指南详细介绍 Neo4j 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Neo4j 扫描简介
      </h2>

      <p class="mb-4">Neo4j 是领先的图数据库平台，被广泛应用于数据关系分析、推荐系统、网络和 IT 运维等领域。Fscan 的 Neo4j 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Neo4j 服务（默认端口 7687、7474）</li>
        <li>检测 Neo4j 是否允许无认证访问</li>
        <li>识别使用默认凭据（neo4j/neo4j）的实例</li>
        <li>进行凭据爆破，发现弱密码问题</li>
        <li>支持使用 Bolt 协议进行高效连接测试</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-cyan-900/10 border border-cyan-900/20' : 'bg-cyan-50 border border-cyan-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-cyan-300' : 'text-cyan-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-cyan-200' : 'text-cyan-800'">
              Neo4j 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">Neo4j 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-cyan-900/20' : 'bg-cyan-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">服务发现</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Neo4j Bolt 服务（默认端口 7687）和 HTTP 服务（7474）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-cyan-900/20' : 'bg-cyan-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">基本安全检测</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试无认证连接和默认凭据（neo4j/neo4j），这是最常见的安全问题
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-cyan-900/20' : 'bg-cyan-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">密码爆破</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果基本检测失败，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-cyan-900/20' : 'bg-cyan-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">权限验证</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            连接成功后，执行简单查询以验证访问权限，并生成详细的安全报告
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">Neo4j 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in neo4jParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
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
        认证和安全检测
      </h2>

      <p class="mb-4">Neo4j 扫描模块首先尝试两种基本安全检测：无认证访问和默认凭据检测。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        初始安全检测
      </h3>

      <p class="mb-4">扫描首先会尝试无需认证和默认凭据进行连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 初始检查列表 - 无认证和默认凭证
initialCredentials := []Neo4jCredential{
    {"", ""},           // 无认证
    {"neo4j", "neo4j"}, // 默认凭证
}

// 先检查无认证和默认凭证
Common.LogDebug("尝试默认凭证...")
for _, credential := range initialCredentials {
    Common.LogDebug(fmt.Sprintf("尝试: %s:%s", credential.Username, credential.Password))

    result := tryNeo4jCredential(ctx, info, credential, Common.Timeout, 1)
    if result.Success {
        // 标记结果类型
        if credential.Username == "" && credential.Password == "" {
            result.IsUnauth = true
        } else {
            result.IsDefaultCreds = true
        }

        // 保存结果
        saveNeo4jResult(info, target, result)
        return nil
    }
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Neo4j 的默认安装通常需要认证，但配置不当可能导致无认证访问。默认用户名和密码都是 "neo4j"，首次登录后会要求修改密码，但很多测试或开发环境可能没有变更默认凭据。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        Bolt 协议连接验证
      </h3>

      <p class="mb-4">Neo4j 扫描使用 Bolt 协议进行连接和验证。Bolt 是 Neo4j 的二进制协议，提供更高效的数据库通信：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// Neo4jConn 尝试Neo4j连接
func Neo4jConn(info *Common.HostInfo, user string, pass string) (bool, error) {
    host, port := info.Host, info.Ports
    timeout := time.Duration(Common.Timeout) * time.Second

    // 构造Neo4j URL
    uri := fmt.Sprintf("bolt://%s:%s", host, port)

    // 配置驱动选项
    config := func(c *neo4j.Config) {
        c.SocketConnectTimeout = timeout
        c.ConnectionAcquisitionTimeout = timeout
    }

    var driver neo4j.Driver
    var err error

    // 尝试建立连接
    if user != "" || pass != "" {
        // 有认证信息时使用认证
        driver, err = neo4j.NewDriver(uri, neo4j.BasicAuth(user, pass, ""), config)
    } else {
        // 无认证时使用NoAuth
        driver, err = neo4j.NewDriver(uri, neo4j.NoAuth(), config)
    }

    if err != nil {
        return false, err
    }
    defer driver.Close()

    // 测试连接有效性
    err = driver.VerifyConnectivity()
    if err != nil {
        return false, err
    }

    // 尝试执行简单查询以确认权限
    session := driver.NewSession(neo4j.SessionConfig{AccessMode: neo4j.AccessModeRead})
    defer session.Close()

    _, err = session.Run("MATCH (n) RETURN count(n) LIMIT 1", nil)
    if err != nil {
        return false, err
    }

    return true, nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">连接验证过程包含以下关键步骤：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>构造 Bolt 协议 URI（bolt://host:port）</li>
        <li>根据是否提供用户名密码选择认证方式（BasicAuth 或 NoAuth）</li>
        <li>验证连接的可用性（VerifyConnectivity）</li>
        <li>执行简单的 Cypher 查询以确认权限（MATCH (n) RETURN count(n) LIMIT 1）</li>
      </ul>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        密码爆破流程
      </h2>

      <p class="mb-4">如果基本安全检测失败，Fscan 将使用用户字典和密码字典进行凭据爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []Neo4jCredential
for _, user := range Common.Userdict["neo4j"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, Neo4jCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["neo4j"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentNeo4jScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
        </div>
      </div>

      <p class="mb-4">并发扫描使用工作池模式，支持最大并发数控制和提前退出机制：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentNeo4jScan 并发扫描Neo4j服务
func concurrentNeo4jScan(ctx context.Context, info *Common.HostInfo, credentials []Neo4jCredential,
                         timeoutSeconds int64, maxRetries int) *Neo4jScanResult {
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
    resultChan := make(chan *Neo4jScanResult, 1)
    workChan := make(chan Neo4jCredential, maxConcurrent)
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
                    result := tryNeo4jCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

    // ...省略其他实现...
}</code></pre>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        结果分析与报告
      </h2>

      <p class="mb-4">Neo4j 扫描结果会根据不同情况进行分类和报告：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// saveNeo4jResult 保存Neo4j扫描结果
func saveNeo4jResult(info *Common.HostInfo, target string, result *Neo4jScanResult) {
    var successMsg string
    var details map[string]interface{}

    if result.IsUnauth {
        // 无认证访问
        successMsg = fmt.Sprintf("Neo4j服务 %s 无需认证即可访问", target)
        details = map[string]interface{}{
            "port":    info.Ports,
            "service": "neo4j",
            "type":    "unauthorized-access",
        }
    } else if result.IsDefaultCreds {
        // 默认凭证
        successMsg = fmt.Sprintf("Neo4j服务 %s 默认凭证可用 用户名: %s 密码: %s",
            target, result.Credential.Username, result.Credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "neo4j",
            "type":     "default-credentials",
            "username": result.Credential.Username,
            "password": result.Credential.Password,
        }
    } else {
        // 弱密码
        successMsg = fmt.Sprintf("Neo4j服务 %s 爆破成功 用户名: %s 密码: %s",
            target, result.Credential.Username, result.Credential.Password)
        details = map[string]interface{}{
            "port":     info.Ports,
            "service":  "neo4j",
            "type":     "weak-password",
            "username": result.Credential.Username,
            "password": result.Credential.Password,
        }
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    vulnResult := &Common.ScanResult{
        Time:    time.Now(),
        Type:    Common.VULN,
        Target:  info.Host,
        Status:  "vulnerable",
        Details: details,
    }
    Common.SaveResult(vulnResult)
}</code></pre>
        </div>
      </div>

      <p class="mb-4">扫描结果会根据以下三种类型进行分类：</p>

      <div class="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-red-800/30' : 'bg-white border-red-300'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:shield-off" class="mr-2 text-lg" :class="isDark ? 'text-red-400' : 'text-red-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">无认证访问</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Neo4j 服务配置为无需认证即可访问，存在严重安全风险，任何人都可以读取或修改数据
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-amber-800/30' : 'bg-white border-amber-300'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:key-alert" class="mr-2 text-lg" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">默认凭据</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Neo4j 服务使用默认的用户名和密码（neo4j/neo4j），建议立即更改以提高安全性
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-orange-800/30' : 'bg-white border-orange-300'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:key-link" class="mr-2 text-lg" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">弱密码</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Neo4j 服务使用了易于猜测的弱密码，增加了被未授权访问的风险
          </p>
        </div>
      </div>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        线程控制
      </h3>

      <p class="mb-4">Neo4j 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 7687 -m neo4j -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        超时设置
      </h3>

      <p class="mb-4">Neo4j 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 Neo4j 连接尝试的最大时间（秒）</li>
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

// 在单个连接中使用超时
timeout := time.Duration(Common.Timeout) * time.Second
config := func(c *neo4j.Config) {
    c.SocketConnectTimeout = timeout
    c.ConnectionAcquisitionTimeout = timeout
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Neo4j 数据库在处理复杂查询时可能需要较长时间，建议根据网络环境和数据库规模设置合理的超时时间，避免因超时过短而导致漏报。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制
      </h3>

      <p class="mb-4">Fscan 的 Neo4j 扫描模块支持自动重试连接，通过 <code>-retries</code> 参数设置最大重试次数：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryNeo4jCredential 尝试单个Neo4j凭据
func tryNeo4jCredential(ctx context.Context, info *Common.HostInfo, credential Neo4jCredential,
                        timeoutSeconds int64, maxRetries int) *Neo4jScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &Neo4jScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 尝试连接
            // ...连接逻辑...

            // 根据结果决定是否重试
            if success {
                return &Neo4jScanResult{Success: true, Credential: credential}
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

    return &Neo4jScanResult{Success: false, Error: lastErr, Credential: credential}
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 7687,7474 -m neo4j</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 7687 -m neo4j -user neo4j,admin -pwd neo4j,admin123,{user}@123</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        自定义重试和超时
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 7687 -m neo4j -time 5 -retries 2</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 7687,7474 -m neo4j -t 100 -time 3 -retries 2 -o neo4j_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-cyan-900/10 border border-cyan-900/20' : 'bg-cyan-50 border border-cyan-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-cyan-300' : 'text-cyan-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-cyan-200' : 'text-cyan-800'">
              Neo4j 通常用于存储和处理敏感数据关系，应确保其安全配置。建议始终启用认证、使用强密码、限制网络访问，并定期更新到最新版本以获取安全补丁。
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
         :class="isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'">
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
  'Neo4j 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '认证和安全检测',
  '密码爆破流程',
  '结果分析与报告',
  '高级设置',
  '应用场景与示例'
];

// Neo4j参数表格数据
const neo4jParameters = [
  { name: '-m neo4j', description: '启用 Neo4j 扫描模块', example: '-m neo4j' },
  { name: '-p 7687,7474', description: 'Neo4j 常用端口，多个用逗号分隔', example: '-p 7687,7474' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user neo4j,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd neo4j,{user}123' },
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
.code-keyword { color: #4dc0b5; }
.code-string { color: #4fd1c5; }
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
  border-left: 3px solid rgba(56, 178, 172, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(56, 178, 172, 0.6);
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

/* 优化不同类型的结果卡片 */
.border-red-800\/30, .border-amber-800\/30, .border-orange-800\/30 {
  transition: border-color 0.3s, transform 0.3s;
}

div:hover.border-red-800\/30,
div:hover.border-amber-800\/30,
div:hover.border-orange-800\/30 {
  transform: translateY(-2px);
}
</style>
