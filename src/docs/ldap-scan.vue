<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'">
        <Icon icon="mdi:folder-account" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        LDAP 扫描指南
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
      <p class="mb-4">LDAP 扫描是 Fscan 提供的一个重要功能模块，用于发现网络中的轻量级目录访问协议（LDAP）服务，检测匿名访问漏洞以及进行凭据爆破测试。本指南详细介绍 LDAP 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        LDAP 扫描简介
      </h2>

      <p class="mb-4">LDAP（轻量级目录访问协议）是一种用于访问和维护分布式目录信息服务的网络协议，广泛应用于企业身份认证和用户目录管理。Fscan 的 LDAP 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 LDAP 服务（默认端口 389/636）</li>
        <li>检测 LDAP 匿名访问漏洞</li>
        <li>进行 LDAP 绑定认证的弱密码测试</li>
        <li>支持自定义用户名和密码字典</li>
        <li>提供详细的扫描结果报告</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              LDAP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">LDAP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

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
            扫描目标 IP 范围，识别开放 LDAP 服务（默认端口 389/636）的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">匿名访问检测</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试无凭据的匿名绑定访问，这是一个常见的安全配置错误
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">密码爆破</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果匿名访问被禁止，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制
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
            通过执行简单的目录搜索操作验证绑定成功后的权限，确保凭据有效
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">LDAP 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in ldapParameters" :key="param.name"
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
        LDAP 认证流程
      </h2>

      <p class="mb-4">LDAP 认证基于"绑定"（Bind）操作，用于验证连接凭据。Fscan 的 LDAP 扫描模块支持两种主要的绑定方式：</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        匿名绑定
      </h3>

      <p class="mb-4">匿名绑定是指不提供任何凭据的 LDAP 连接方式。如果 LDAP 服务器允许匿名绑定，可能会导致未授权访问目录信息：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 首先尝试匿名访问
Common.LogDebug("尝试匿名访问...")
anonymousResult := tryLDAPCredential(ctx, info, LDAPCredential{"", ""}, Common.Timeout, 1)

if anonymousResult.Success {
    // 匿名访问成功
    saveLDAPResult(info, target, anonymousResult)
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">在 LDAP 连接函数中，匿名绑定通过 <code>UnauthenticatedBind</code> 方法实现：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 尝试绑定
var err error
if user != "" {
    // 使用用户名和密码绑定
    bindDN := fmt.Sprintf("cn=%s,dc=example,dc=com", user)
    err = l.Bind(bindDN, pass)
} else {
    // 匿名绑定
    err = l.UnauthenticatedBind("")
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">安全建议</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              为提高安全性，建议在生产环境中禁用 LDAP 匿名绑定。这可以通过修改 LDAP 服务器配置并要求所有连接提供有效凭据来实现。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        认证绑定
      </h3>

      <p class="mb-4">认证绑定需要提供有效的用户名（DN）和密码。Fscan 会尝试常见的 DN 格式和用户名密码组合：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []LDAPCredential
for _, user := range Common.Userdict["ldap"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, LDAPCredential{
            Username: user,
            Password: actualPass,
        })
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">在扫描代码中，使用通用的 DN 格式尝试绑定操作，这能够覆盖许多常见的 LDAP 配置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 使用更通用的绑定DN模式
bindDN := fmt.Sprintf("cn=%s,dc=example,dc=com", user)
err = l.Bind(bindDN, pass)</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        权限验证
      </h3>

      <p class="mb-4">成功绑定后，Fscan 会执行一个简单的搜索操作，验证所获得的权限：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 尝试简单搜索以验证权限
searchRequest := ldap.NewSearchRequest(
    "dc=example,dc=com",
    ldap.ScopeWholeSubtree, ldap.NeverDerefAliases, 0, 0, false,
    "(objectClass=*)",
    []string{"dn"},
    nil,
)

_, err = l.Search(searchRequest)
done <- err</code></pre>
        </div>
      </div>

      <p class="mb-4">这个搜索请求参数包含：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>基础 DN</strong>：搜索的起始点（"dc=example,dc=com"）</li>
        <li><strong>搜索范围</strong>：整个子树（ScopeWholeSubtree）</li>
        <li><strong>过滤条件</strong>：所有对象（"(objectClass=*)"）</li>
        <li><strong>属性</strong>：仅返回 DN 属性</li>
      </ul>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        密码爆破流程
      </h2>

      <p class="mb-4">如果匿名访问被禁止，Fscan 将开始尝试用户名和密码组合：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 使用工作池并发扫描
result := concurrentLDAPScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)
if result != nil {
    // 记录成功结果
    saveLDAPResult(info, target, result)
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">爆破过程使用协程池并发测试多个凭据，支持自动取消和提前退出：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 启动工作协程
for i := 0; i < maxConcurrent; i++ {
    wg.Add(1)
    go func() {
        defer wg.Done()
        for credential := range workChan {
            select {
            case <-scanCtx.Done():
                return
            default:
                result := tryLDAPCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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
}</code></pre>
        </div>
      </div>

      <p class="mb-4">每个凭据会经过多次重试，处理常见的网络问题：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// tryLDAPCredential 尝试单个LDAP凭据
func tryLDAPCredential(ctx context.Context, info *Common.HostInfo, credential LDAPCredential,
                       timeoutSeconds int64, maxRetries int) *LDAPScanResult {
    var lastErr error

    for retry := 0; retry < maxRetries; retry++ {
        select {
        case <-ctx.Done():
            return &LDAPScanResult{
                Success:    false,
                Error:      fmt.Errorf("全局超时"),
                Credential: credential,
            }
        default:
            if retry > 0 {
                Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
                time.Sleep(500 * time.Millisecond) // 重试前等待
            }

            // 创建连接超时上下文
            connCtx, cancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)
            success, err := LDAPConn(connCtx, info, credential.Username, credential.Password)
            cancel()

            if success {
                isAnonymous := credential.Username == "" && credential.Password == ""
                return &LDAPScanResult{
                    Success:     true,
                    Credential:  credential,
                    IsAnonymous: isAnonymous,
                }
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

    return &LDAPScanResult{
        Success:    false,
        Error:      lastErr,
        Credential: credential,
    }
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

      <p class="mb-4">LDAP 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 389 -m ldap -t 100</code></pre>
        </div>
      </div>

      <p class="mb-4">内部实现会自动根据线程数和凭据数量调整工作池大小，优化资源利用：</p>

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

      <p class="mb-4">LDAP 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 LDAP 连接尝试的最大时间（秒）</li>
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
dialer := &net.Dialer{
    Timeout: time.Duration(Common.Timeout) * time.Second,
}
conn, err := dialer.DialContext(ctx, "tcp", address)</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              在扫描大型网络时，合理设置超时参数非常重要。LDAP 服务在高负载下响应可能较慢，建议适当增加超时时间。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制
      </h3>

      <p class="mb-4">Fscan 的 LDAP 扫描模块支持自动重试连接，通过 <code>-retries</code> 参数设置最大重试次数：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">for retry := 0; retry < maxRetries; retry++ {
    // ...
    if retry > 0 {
        Common.LogDebug(fmt.Sprintf("第%d次重试: %s:%s", retry+1, credential.Username, credential.Password))
        time.Sleep(500 * time.Millisecond) // 重试前等待
    }
    // ...
}</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 389,636 -m ldap</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        匿名访问检测
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 389 -m ldap -nopwdburst</code></pre>
        </div>
      </div>

      <p class="mb-4">使用 <code>-nopwdburst</code> 参数可以禁用密码爆破，仅检测匿名访问漏洞。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        使用自定义用户名和密码
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 389 -m ldap -user admin,manager,ldap -pwd admin123,{user}@123</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 389 -m ldap -t 100 -time 5 -retries 2 -o ldap_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 100 个线程，单个连接超时设置为 5 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              LDAP 目录的搜索基础 DN 通常因企业而异。在实际环境中，您可能需要根据目标环境调整 DN 格式，例如使用 "uid={user},ou=people,dc=example,dc=com" 等格式。
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
  'LDAP 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'LDAP 认证流程',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例'
];

// LDAP参数表格数据
const ldapParameters = [
  { name: '-m ldap', description: '启用 LDAP 扫描模块', example: '-m ldap' },
  { name: '-p 389,636', description: 'LDAP 常用端口，389 是标准端口，636 是 LDAPS 加密端口', example: '-p 389,636' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user admin,ldap' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd ldap123,{user}' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-nopwdburst', description: '禁用密码爆破，仅检测匿名访问', example: '-nopwdburst' },
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
