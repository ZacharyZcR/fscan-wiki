<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-orange-900/30' : 'bg-orange-100'"
      >
        <Icon
          icon="mdi:database-outline"
          class="text-xl"
          :class="isDark ? 'text-orange-400' : 'text-orange-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        Oracle 扫描指南
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
            isDark ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'
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
        Oracle 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 Oracle
        数据库服务，并尝试通过弱密码进行身份验证。本指南详细介绍 Oracle
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        Oracle 扫描简介
      </h2>

      <p class="mb-4">
        Oracle 数据库是企业中广泛使用的关系型数据库管理系统，通常包含关键业务数据。Fscan 的 Oracle
        扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Oracle 数据库服务（默认端口 1521）</li>
        <li>通过多种服务名（SID）进行自动化测试</li>
        <li>支持对常见高危账户（如 SYS、SYSTEM）进行检测</li>
        <li>支持 SYSDBA 权限特殊模式的连接测试</li>
        <li>实现多线程并发扫描，提高效率</li>
      </ul>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-orange-900/10 border border-orange-900/20'
            : 'bg-orange-50 border border-orange-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-orange-400' : 'text-orange-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-orange-300' : 'text-orange-700'">
              安全提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-orange-200' : 'text-orange-800'">
              Oracle
              扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对数据库系统进行扫描可能违反法律法规，并可能触发数据库的安全监控告警。
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

      <p class="mb-4">Oracle 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'"
                >1</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务发现
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Oracle 服务（默认端口 1521）的主机
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'"
                >2</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              高危凭据检测
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试常见高危凭据组合（如 SYS/123456、SYSTEM/manager 等）与常见服务名
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'"
                >3</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务名枚举
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            针对每个凭据组合尝试多种常见服务名（如 ORCL、XE、ORCLPDB1 等）
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'"
                >4</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              并发密码爆破
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用多线程技术并发测试用户名和密码组合，支持自动重试和超时控制
          </p>
        </div>
      </div>

      <p class="mb-4">
        扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">Oracle 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in oracleParameters"
              :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
            >
              <td
                class="py-2 px-4 font-mono"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'"
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
        高危凭据检测
      </h2>

      <p class="mb-4">
        Oracle 数据库中存在一些常见的默认或高危账户，这些账户往往是攻击者首选的目标。Fscan
        首先会尝试这些高危凭据组合：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建常见高危凭据列表（优先测试）
highRiskCredentials := []OracleCredential{
    {Username: "SYS", Password: "123456"},
    {Username: "SYSTEM", Password: "123456"},
    {Username: "SYS", Password: "oracle"},
    {Username: "SYSTEM", Password: "oracle"},
    {Username: "SYS", Password: "password"},
    {Username: "SYSTEM", Password: "password"},
    {Username: "SYS", Password: "sys123"},
    {Username: "SYS", Password: "change_on_install"},
    {Username: "SYSTEM", Password: "manager"},
}

// 先尝试常见高危凭据
Common.LogDebug("尝试常见高危凭据...")
for _, cred := range highRiskCredentials {
    result := tryAllServiceNames(ctx, info, cred, Common.Timeout, 1)
    if result != nil && result.Success {
        saveOracleResult(info, target, result.Credential, result.ServiceName)
        return nil
    }
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
              高危账户说明
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              SYS 是 Oracle 最高权限账户，具有 SYSDBA 特权；SYSTEM
              是主要管理账户。这些账户的默认密码在安装后经常未被修改，构成重大安全风险。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        服务名枚举与测试
      </h2>

      <p class="mb-4">Oracle 连接需要服务名（SID）才能建立有效连接。Fscan 会尝试多种常见服务名：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 常见Oracle服务名列表
var commonServiceNames = []string{"XE", "ORCL", "ORCLPDB1", "XEPDB1", "PDBORCL"}

// tryAllServiceNames 尝试所有常见服务名
func tryAllServiceNames(ctx context.Context, info *Common.HostInfo, credential OracleCredential,
                        timeoutSeconds int64, maxRetries int) *OracleScanResult {
    for _, serviceName := range commonServiceNames {
        result := tryOracleCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
        if result.Success {
            result.ServiceName = serviceName
            return result
        }

        // 对SYS用户尝试SYSDBA模式
        if strings.ToUpper(credential.Username) == "SYS" {
            result = tryOracleSysCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
            if result.Success {
                result.ServiceName = serviceName
                return result
            }
        }
    }
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">常见的 Oracle 服务名包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>XE</strong>：Oracle Express Edition 的默认服务名</li>
        <li><strong>ORCL</strong>：Oracle 标准版和企业版的默认服务名</li>
        <li><strong>ORCLPDB1</strong>：Oracle 12c+ 中的可插拔数据库默认服务名</li>
        <li><strong>XEPDB1</strong>：Oracle Express Edition 18c+ 的默认可插拔数据库服务名</li>
        <li><strong>PDBORCL</strong>：企业环境中常见的可插拔数据库服务名</li>
      </ul>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        凭据验证流程
      </h2>

      <p class="mb-4">Oracle 扫描模块使用 <code>go-ora</code> 驱动进行数据库连接和凭据验证：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// OracleConn 尝试Oracle连接
func OracleConn(ctx context.Context, info *Common.HostInfo, user string, pass string,
               serviceName string, asSysdba bool) (bool, error) {
    host, port := info.Host, info.Ports

    // 构造连接字符串，添加更多参数
    connStr := fmt.Sprintf("oracle://%s:%s@%s:%s/%s?connect_timeout=%d",
        user, pass, host, port, serviceName, Common.Timeout)

    // 对SYS用户使用SYSDBA权限
    if asSysdba {
        connStr += "&sysdba=1"
    }

    // 建立数据库连接
    db, err := sql.Open("oracle", connStr)
    if err != nil {
        return false, err
    }
    defer db.Close()

    // 设置连接参数
    db.SetConnMaxLifetime(time.Duration(Common.Timeout) * time.Second)
    db.SetConnMaxIdleTime(time.Duration(Common.Timeout) * time.Second)
    db.SetMaxIdleConns(0)
    db.SetMaxOpenConns(1)

    // 使用上下文测试连接
    pingCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
    defer cancel()

    // 测试连接
    err = db.PingContext(pingCtx)
    if err != nil {
        return false, err
    }

    // 不需要额外的查询验证，连接成功即可
    return true, nil
}</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        SYSDBA 权限模式
      </h3>

      <p class="mb-4">对于 SYS 用户，Fscan 会自动尝试 SYSDBA 权限模式的连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 对SYS用户尝试SYSDBA模式
if strings.ToUpper(credential.Username) == "SYS" {
    result = tryOracleSysCredential(ctx, info, credential, serviceName, timeoutSeconds, maxRetries)
    if result.Success {
        result.ServiceName = serviceName
        return result
    }
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
              SYSDBA 权限说明
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              SYSDBA 是 Oracle
              中最高级别的系统权限，拥有此权限可以启动/关闭数据库、创建数据库、完全访问 SYS
              用户对象，甚至在数据库关闭状态下执行操作。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-6"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        密码爆破流程
      </h2>

      <p class="mb-4">如果高危凭据检测失败，Fscan 将尝试使用字典进行密码爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建完整凭据列表
var credentials []OracleCredential
for _, user := range Common.Userdict["oracle"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        // 转换用户名为大写，提高匹配率
        credentials = append(credentials, OracleCredential{
            Username: strings.ToUpper(user),
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["oracle"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentOracleScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentOracleScan 并发扫描Oracle服务
func concurrentOracleScan(ctx context.Context, info *Common.HostInfo, credentials []OracleCredential,
                          timeoutSeconds int64, maxRetries int) *OracleScanResult {
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
    resultChan := make(chan *OracleScanResult, 1)
    workChan := make(chan OracleCredential, maxConcurrent)
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
                    // 尝试所有常见服务名
                    result := tryAllServiceNames(scanCtx, info, credential, timeoutSeconds, maxRetries)
                    if result != nil && result.Success {
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

    // ...省略发送工作和等待结果的代码...
}</code></pre>
        </div>
      </div>

      <h2
        id="section-7"
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
        Oracle 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 1521 -m oracle -t 50</code></pre>
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

      <p class="mb-4">Oracle 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 Oracle
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 在单个连接中使用超时
connStr := fmt.Sprintf("oracle://%s:%s@%s:%s/%s?connect_timeout=%d",
    user, pass, host, port, serviceName, Common.Timeout)</code></pre>
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
              Oracle
              数据库连接可能较慢，特别是在远程网络环境中。建议根据网络环境适当增加单个连接超时时间，避免漏报。
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
        Fscan 的 Oracle 扫描模块支持自动重试连接，通过 <code>-retries</code> 参数设置最大重试次数：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryOracleCredential 尝试单个Oracle凭据
func tryOracleCredential(ctx context.Context, info *Common.HostInfo, credential OracleCredential,
                         serviceName string, timeoutSeconds int64, maxRetries int) *OracleScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &OracleScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s@%s", retry+1,
                               credential.Username, credential.Password, serviceName))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时上下文并尝试连接
            // ...省略详细实现...

            // 连接失败时的错误处理
            if err != nil {
                // 如果是认证错误，不需要重试
                if strings.Contains(err.Error(), "ORA-01017") {
                    break // 认证失败
                }

                // 检查是否需要重试
                if retryErr := Common.CheckErrs(err); retryErr == nil {
                    break // 不需要重试的错误
                }
            }
        }
    }

    return &OracleScanResult{Success: false, Error: lastErr, Credential: credential}
}</code></pre>
        </div>
      </div>

      <h2
        id="section-8"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        应用场景与示例
      </h2>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        快速扫描单个主机
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 1521 -m oracle</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        扫描网段并指定用户名
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 1521 -m oracle -user SYS,SYSTEM,DBSNMP</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 1521 -m oracle -user SYS,SYSTEM -pwd oracle,123456,{user}@123</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 1521 -m oracle -t 30 -time 5 -retries 2 -o oracle_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">
        这个配置使用 30 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。
      </p>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-orange-900/10 border border-orange-900/20'
            : 'bg-orange-50 border border-orange-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:check-circle"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-orange-400' : 'text-orange-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-orange-300' : 'text-orange-700'">
              最佳实践
            </p>
            <p class="mt-1" :class="isDark ? 'text-orange-200' : 'text-orange-800'">
              成功爆破 Oracle 数据库后，建议记录服务名，因为同一服务器上可能有多个 Oracle
              实例运行在同一端口上，但服务名不同。
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
          isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
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
  'Oracle 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '高危凭据检测',
  '服务名枚举与测试',
  '凭据验证流程',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例',
]

// Oracle参数表格数据
const oracleParameters = [
  { name: '-m oracle', description: '启用 Oracle 扫描模块', example: '-m oracle' },
  { name: '-p 1521', description: '指定 Oracle 端口（默认为 1521）', example: '-p 1521,1522' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user SYS,SYSTEM' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd oracle,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 30' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
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
  color: #ff9d45;
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
  border-left: 3px solid rgba(237, 137, 54, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(237, 137, 54, 0.6);
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
