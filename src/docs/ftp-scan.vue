<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'">
        <Icon icon="mdi:folder-network" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        FTP 扫描指南
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
      <p class="mb-4">FTP 扫描是 Fscan 的重要功能模块，用于发现网络中运行的文件传输协议（FTP）服务器，检测匿名访问漏洞以及进行密码爆破。本指南详细介绍 FTP 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        FTP 扫描简介
      </h2>

      <p class="mb-4">文件传输协议（File Transfer Protocol，FTP）是一种用于在计算机网络上进行文件传输的标准网络协议。Fscan 的 FTP 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 FTP 服务（默认端口 21）</li>
        <li>检测 FTP 匿名访问漏洞</li>
        <li>执行密码爆破</li>
        <li>获取并显示可访问的目录列表</li>
        <li>识别存在弱密码的 FTP 服务</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              FTP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">FTP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

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
            扫描目标 IP 范围，识别开放 FTP 服务（默认端口 21）的主机
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
            首先尝试使用匿名账户（anonymous）登录，检测 FTP 服务是否允许匿名访问
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
            如果匿名访问失败，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">目录枚举</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            成功登录后，获取并记录 FTP 服务器上可访问的目录和文件列表，提供更多服务信息
          </p>
        </div>
      </div>

      <p class="mb-4">扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。</p>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">FTP 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in ftpParameters" :key="param.name"
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
        匿名访问检测
      </h2>

      <p class="mb-4">匿名访问是 FTP 协议中的一项特性，允许用户无需提供有效的用户名和密码即可登录 FTP 服务器。Fscan 首先会尝试使用匿名凭据进行登录：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 首先尝试匿名登录
Common.LogDebug("尝试匿名登录...")
anonymousResult := tryFtpCredential(ctx, info, FtpCredential{"anonymous", ""}, Common.Timeout, Common.MaxRetries)

if anonymousResult.Success {
    // 匿名登录成功
    saveFtpResult(info, target, anonymousResult)
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">匿名登录成功后，程序会获取并记录目录列表，以便于后续分析 FTP 服务器内容：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// saveFtpResult 保存FTP扫描结果
func saveFtpResult(info *Common.HostInfo, target string, result *FtpScanResult) {
    var successMsg string
    var details map[string]interface{}

    if result.IsAnonymous {
        successMsg = fmt.Sprintf("FTP服务 %s 匿名登录成功!", target)
        details = map[string]interface{}{
            "port":        info.Ports,
            "service":     "ftp",
            "username":    "anonymous",
            "password":    "",
            "type":        "anonymous-login",
            "directories": result.Directories,
        }
    } else {
        // 处理非匿名登录成功的情况...
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

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              匿名 FTP 访问在生产环境中通常是一个严重的安全风险。在没有必要的情况下，建议禁用 FTP 服务器的匿名访问功能，或者将匿名用户限制在只读目录中。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        密码爆破流程
      </h2>

      <p class="mb-4">如果匿名访问检测失败，Fscan 将尝试使用字典进行密码爆破：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []FtpCredential
for _, user := range Common.Userdict["ftp"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, FtpCredential{
            Username: user,
            Password: actualPass,
        })
    }
}

Common.LogDebug(fmt.Sprintf("开始尝试用户名密码组合 (总用户数: %d, 总密码数: %d, 总组合数: %d)",
    len(Common.Userdict["ftp"]), len(Common.Passwords), len(credentials)))

// 使用工作池并发扫描
result := concurrentFtpScan(ctx, info, credentials, Common.Timeout, Common.MaxRetries)</code></pre>
        </div>
      </div>

      <p class="mb-4">并发扫描使用工作池模式，支持最大并发数控制和提前退出：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentFtpScan 并发扫描FTP服务
func concurrentFtpScan(ctx context.Context, info *Common.HostInfo, credentials []FtpCredential,
                       timeoutSeconds int64, maxRetries int) *FtpScanResult {
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
    resultChan := make(chan *FtpScanResult, 1)
    workChan := make(chan FtpCredential, maxConcurrent)
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
                    result := tryFtpCredential(scanCtx, info, credential, timeoutSeconds, maxRetries)
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

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        FTP 连接与认证
      </h3>

      <p class="mb-4">FTP 连接使用第三方库 <code>github.com/jlaffaye/ftp</code> 实现，支持登录认证和目录列表获取：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// FtpConn 建立FTP连接并尝试登录
func FtpConn(info *Common.HostInfo, user string, pass string) (success bool, directories []string, err error) {
    Host, Port := info.Host, info.Ports

    // 建立FTP连接
    conn, err := ftp.DialTimeout(fmt.Sprintf("%v:%v", Host, Port), time.Duration(Common.Timeout)*time.Second)
    if err != nil {
        return false, nil, err
    }
    defer func() {
        if conn != nil {
            conn.Quit()
        }
    }()

    // 尝试登录
    if err = conn.Login(user, pass); err != nil {
        return false, nil, err
    }

    // 获取目录信息
    dirs, err := conn.List("")
    if err == nil && len(dirs) > 0 {
        directories = make([]string, 0, min(6, len(dirs)))
        for i := 0; i < len(dirs) && i < 6; i++ {
            name := dirs[i].Name
            if len(name) > 50 {
                name = name[:50]
            }
            directories = append(directories, name)
        }
    }

    return true, directories, nil
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

      <p class="mb-4">FTP 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过 <code>-t</code> 参数设置：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 21 -m ftp -t 100</code></pre>
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

      <p class="mb-4">FTP 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 FTP 连接尝试的最大时间（秒）</li>
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
conn, err := ftp.DialTimeout(fmt.Sprintf("%v:%v", Host, Port), time.Duration(Common.Timeout)*time.Second)</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        重试机制与错误处理
      </h3>

      <p class="mb-4">FTP 扫描模块具有智能重试机制，可以识别不同类型的错误并相应调整：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">lastErr = err
if err != nil {
    // 登录错误不需要重试
    if strings.Contains(err.Error(), "Login incorrect") {
        break
    }

    // 连接数过多需要等待
    if strings.Contains(err.Error(), "too many connections") {
        Common.LogDebug("连接数过多，等待5秒...")
        time.Sleep(5 * time.Second)
        continue
    }

    // 检查是否需要重试
    if retryErr := Common.CheckErrs(err); retryErr == nil {
        break
    }
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
              FTP 服务器通常会限制同时连接的数量。如果在扫描过程中遇到"too many connections"错误，程序会自动等待 5 秒后重试，以避免过度消耗服务器资源。
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 21 -m ftp</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 21 -m ftp -user admin,ftp,ftpuser -pwd admin123,ftp,{user}@123</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 21 -m ftp -t 50 -time 3 -retries 2 -o ftp_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">这个配置使用 50 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。</p>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        仅进行匿名访问检测
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 21 -m ftp -usernull</code></pre>
        </div>
      </div>

      <p class="mb-4">使用 <code>-usernull</code> 参数可以仅检测匿名访问，不进行密码爆破。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-green-900/10 border border-green-900/20' : 'bg-green-50 border border-green-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              在大规模网络扫描中，建议先使用匿名检测和少量常见凭据进行扫描，找到潜在目标后再进行更详细的密码爆破，以提高效率并减少对网络和目标系统的影响。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-7" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        安全防护建议
      </h2>

      <p class="mb-4">针对 FTP 服务的常见安全问题，建议采取以下防护措施：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><strong>禁用匿名访问</strong>：除非有特定需求，否则应禁用匿名 FTP 访问</li>
        <li><strong>使用强密码</strong>：为 FTP 账户设置强密码，避免使用默认密码或弱密码</li>
        <li><strong>实施访问控制</strong>：限制 FTP 服务器只允许特定 IP 地址或网络段访问</li>
        <li><strong>启用加密</strong>：考虑使用 FTPS（FTP over SSL/TLS）或 SFTP（SSH File Transfer Protocol）代替明文 FTP</li>
        <li><strong>日志监控</strong>：启用详细的 FTP 访问日志并定期审查</li>
        <li><strong>文件权限管理</strong>：为 FTP 用户设置适当的文件和目录权限</li>
        <li><strong>定期更新</strong>：保持 FTP 服务器软件更新到最新版本，修复已知安全漏洞</li>
      </ul>

      <p class="mb-4">通过实施这些安全措施，可以显著提高 FTP 服务器的安全性，减少被扫描和攻击的风险。</p>
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
  'FTP 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  '匿名访问检测',
  '密码爆破流程',
  '高级设置',
  '应用场景与示例',
  '安全防护建议'
];

// FTP参数表格数据
const ftpParameters = [
  { name: '-m ftp', description: '启用 FTP 扫描模块', example: '-m ftp' },
  { name: '-p 21', description: 'FTP 服务默认端口（21）', example: '-p 21' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user admin,ftp' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd admin,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-usernull', description: '只检测匿名访问，不进行密码爆破', example: '-usernull' },
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
