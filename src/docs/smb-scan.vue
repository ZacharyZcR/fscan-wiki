<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'">
        <Icon icon="mdi:microsoft-windows" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        SMB 扫描指南
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
      <p class="mb-4">SMB (Server Message Block) 扫描是 Fscan 的重要功能之一，用于发现网络中的 Windows 文件共享服务，并尝试通过弱密码进行身份验证。本指南详细介绍 SMB 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        SMB 扫描简介
      </h2>

      <p class="mb-4">SMB 协议是 Windows 网络环境中常用的文件共享协议，广泛应用于局域网内的文件访问、打印共享和域认证。Fscan 的 SMB 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 SMB 服务（默认端口 445）</li>
        <li>尝试使用不同的用户名和密码组合进行身份验证</li>
        <li>支持域环境（Domain）认证</li>
        <li>检测用户账户锁定，避免造成拒绝服务</li>
        <li>识别各类登录失败原因（密码错误、账户禁用、密码过期等）</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              SMB 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规，并可能触发账户锁定策略。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">SMB 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

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
            扫描目标 IP 范围，识别开放 SMB 服务（默认端口 445）的主机
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
            根据用户字典和密码字典生成凭据组合，支持{user}变量替换
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">并发认证</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用多线程技术同时测试多个凭据，支持用户锁定检测，避免对同一用户的重复尝试
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">结果分析</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            详细解析 SMB 认证错误，区分密码错误、账号锁定、账号禁用等状态
          </p>
        </div>
      </div>

      <p class="mb-4">SMB 扫描的实现考虑了网络环境的安全性，通过错误检测和账户锁定检测，降低对目标系统的影响。同时通过并发扫描和超时控制，提高了扫描效率。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">SMB 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in smbParameters" :key="param.name"
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
        账户锁定防护
      </h2>

      <p class="mb-4">SMB 服务通常配置有账户锁定策略，多次错误密码尝试会导致账户被锁定。Fscan 的 SMB 扫描模块通过智能识别账户锁定状态，避免继续尝试已锁定的账户：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 记录用户锁定状态，避免继续尝试已锁定的用户
lockedUsers := make(map[string]bool)
var lockedMutex sync.Mutex

// 在工作协程中检查用户是否已锁定
lockedMutex.Lock()
locked := lockedUsers[credential.Username]
lockedMutex.Unlock()
if locked {
    Common.LogDebug(fmt.Sprintf("跳过已锁定用户: %s", credential.Username))
    continue
}

// 检查账号锁定错误
if result.Error != nil && strings.Contains(result.Error.Error(), "账号锁定") {
    lockedMutex.Lock()
    lockedUsers[credential.Username] = true
    lockedMutex.Unlock()
    Common.LogError(fmt.Sprintf("用户 %s 已被锁定", credential.Username))
}</code></pre>
        </div>
      </div>

      <p class="mb-4">该机制通过维护一个锁定用户列表，在扫描过程中动态识别和记录被锁定的账户，避免无效尝试，降低对目标系统的影响。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              在扫描生产环境时，建议使用较小的密码列表，并降低线程数（如 -t 5），减少触发账户锁定策略的风险。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        SMB 认证过程
      </h2>

      <p class="mb-4">SMB 认证使用 NTLM 或 Kerberos 协议进行身份验证，Fscan 通过调用底层 SMB 库实现连接和认证：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// SmblConn 尝试建立SMB连接并认证
func SmblConn(info *Common.HostInfo, user string, pass string, signal chan struct{}) (flag bool, err error) {
    options := smb.Options{
        Host:        info.Host,
        Port:        445,
        User:        user,
        Password:    pass,
        Domain:      Common.Domain,
        Workstation: "",
    }

    session, err := smb.NewSession(options, false)
    if err == nil {
        defer session.Close()
        if session.IsAuthenticated {
            return true, nil
        }
        return false, fmt.Errorf("认证失败")
    }

    // 清理错误信息中的换行符和多余空格
    errMsg := strings.TrimSpace(strings.ReplaceAll(err.Error(), "\n", " "))
    if strings.Contains(errMsg, "NT Status Error") {
        switch {
        case strings.Contains(errMsg, "STATUS_LOGON_FAILURE"):
            err = fmt.Errorf("密码错误")
        case strings.Contains(errMsg, "STATUS_ACCOUNT_LOCKED_OUT"):
            err = fmt.Errorf("账号锁定")
        case strings.Contains(errMsg, "STATUS_ACCESS_DENIED"):
            err = fmt.Errorf("拒绝访问")
        case strings.Contains(errMsg, "STATUS_ACCOUNT_DISABLED"):
            err = fmt.Errorf("账号禁用")
        case strings.Contains(errMsg, "STATUS_PASSWORD_EXPIRED"):
            err = fmt.Errorf("密码过期")
        case strings.Contains(errMsg, "STATUS_USER_SESSION_DELETED"):
            return false, fmt.Errorf("会话断开")
        default:
            err = fmt.Errorf("认证失败")
        }
    }

    signal <- struct{}{}
    return false, err
}</code></pre>
        </div>
      </div>

      <p class="mb-4">Fscan 对 SMB 认证错误进行了详细解析，可以区分以下常见状态：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>STATUS_LOGON_FAILURE</strong>：提供的用户名或密码不正确</li>
        <li><strong>STATUS_ACCOUNT_LOCKED_OUT</strong>：账户因多次密码错误而被锁定</li>
        <li><strong>STATUS_ACCESS_DENIED</strong>：认证成功但用户无权访问</li>
        <li><strong>STATUS_ACCOUNT_DISABLED</strong>：账户被管理员禁用</li>
        <li><strong>STATUS_PASSWORD_EXPIRED</strong>：密码已过期需要重置</li>
        <li><strong>STATUS_USER_SESSION_DELETED</strong>：用户会话被删除或断开</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:information" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">信息</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              SMB认证使用会话安全协议，支持NTLM和Kerberos认证机制。在域环境中，通过设置 -domain 参数进行域身份验证。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        并发扫描实现
      </h2>

      <p class="mb-4">SMB 扫描使用工作池模式进行并发扫描，提高扫描效率的同时避免对目标系统造成过大压力：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentSmbScan 并发扫描SMB服务
func concurrentSmbScan(ctx context.Context, info *Common.HostInfo, credentials []SmbCredential, timeoutSeconds int64) *SmbScanResult {
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
    resultChan := make(chan *SmbScanResult, 1)
    workChan := make(chan SmbCredential, maxConcurrent)
    scanCtx, scanCancel := context.WithCancel(ctx)
    defer scanCancel()

    // 启动工作协程
    for i := 0; i < maxConcurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for credential := range workChan {
                // ...工作协程代码...

                result := trySmbCredential(scanCtx, info, credential, timeoutSeconds)
                if result.Success {
                    select {
                    case resultChan <- result:
                        scanCancel() // 找到有效凭据，取消其他工作
                    default:
                    }
                    return
                }
            }
        }()
    }

    // ...省略其他代码...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">并发扫描的关键特性包括：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>自动调整工作池大小，确保资源利用最优化</li>
        <li>使用 context 进行超时控制和任务取消</li>
        <li>一旦找到有效凭据，立即取消所有未完成工作，减少对目标系统的影响</li>
        <li>支持全局超时控制，避免扫描任务长时间运行</li>
      </ul>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        域环境支持
      </h2>

      <p class="mb-4">SMB 扫描支持域环境认证，通过指定域名进行域账户的验证：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 域认证配置
options := smb.Options{
    Host:        info.Host,
    Port:        445,
    User:        user,
    Password:    pass,
    Domain:      Common.Domain,  // 域名
    Workstation: "",
}

// 结果保存逻辑也支持域环境
if Common.Domain != "" {
    successMsg = fmt.Sprintf("SMB认证成功 %s %s\\%s:%s", target, Common.Domain, credential.Username, credential.Password)
    details["domain"] = Common.Domain
} else {
    successMsg = fmt.Sprintf("SMB认证成功 %s %s:%s", target, credential.Username, credential.Password)
}</code></pre>
        </div>
      </div>

      <p class="mb-4">在域环境中，通过 <code>-domain</code> 参数指定域名，格式为 <code>DOMAIN\\username</code> 或 <code>username@DOMAIN</code>。</p>

      <h2 id="section-7" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        应用场景与示例
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        基本 SMB 扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 445 -m smb</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        指定用户和密码
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 445 -m smb -user administrator,admin -pwd Password123!,{user}123</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        域环境扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 445 -m smb -domain CONTOSO -user administrator,john.doe -pwd Password123!</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        低并发扫描（减少账户锁定风险）
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 445 -m smb -t 3 -time 5 -o smb_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">该命令使用低并发（3线程）、较长超时（5秒）进行扫描，减少对目标系统的影响，并将结果保存到文件。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-green-900/10 border border-green-900/20' : 'bg-green-50 border border-green-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              由于 Windows 环境通常具有账户锁定策略，建议在扫描前了解目标环境的安全策略，使用精简的密码列表，避免触发大量账户锁定。
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
  'SMB 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '账户锁定防护',
  'SMB 认证过程',
  '并发扫描实现',
  '域环境支持',
  '应用场景与示例'
];

// SMB参数表格数据
const smbParameters = [
  { name: '-m smb', description: '启用 SMB 扫描模块', example: '-m smb' },
  { name: '-p 445', description: '指定 SMB 端口（默认为 445）', example: '-p 445' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user administrator,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd admin123,{user}@2023' },
  { name: '-domain', description: '指定域名（用于域环境）', example: '-domain CONTOSO' },
  { name: '-t', description: '设置并发线程数', example: '-t 10' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
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
