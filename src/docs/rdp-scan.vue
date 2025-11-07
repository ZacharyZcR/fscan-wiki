<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'"
      >
        <Icon
          icon="mdi:desktop-windows"
          class="text-xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        RDP 扫描指南
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
        RDP（Remote Desktop Protocol）扫描是 Fscan
        的一个重要功能模块，用于发现网络中的远程桌面服务并尝试进行身份验证。本指南详细介绍 RDP
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        RDP 扫描简介
      </h2>

      <p class="mb-4">
        远程桌面协议（RDP）是微软开发的一种网络协议，允许用户连接到远程计算机并与之交互，就像坐在本地计算机前一样。Fscan
        的 RDP 扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 RDP 服务（默认端口 3389）</li>
        <li>进行远程桌面身份验证测试（支持密码爆破）</li>
        <li>支持 NLA（Network Level Authentication）认证</li>
        <li>检测弱密码账户</li>
        <li>支持域账户认证</li>
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
              RDP 扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行 RDP
              扫描可能违反法律法规，并可能被视为入侵行为。
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

      <p class="mb-4">RDP 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

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
            扫描目标 IP 范围，识别开放 RDP 服务（默认端口 3389）的主机
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
              凭据生成
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            根据配置生成用户名与密码组合，支持变量替换和域账户格式
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
              并发验证
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用多线程技术同时测试多个凭据组合，支持超时控制和提前终止
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
              结果分析
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            记录成功的身份验证并生成详细报告，包括认证方式和账户信息
          </p>
        </div>
      </div>

      <p class="mb-4">
        RDP 扫描使用完整的 RDP 协议栈实现，包括 TPKT、X224、MCS、SEC 和 PDU
        多个协议层，能够准确模拟真实 RDP 客户端的行为，提高扫描的准确性。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">RDP 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in rdpParameters"
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
        RDP 协议栈实现
      </h2>

      <p class="mb-4">Fscan 使用完整的 RDP 协议栈来执行连接和身份验证，包括以下层次：</p>

      <div
        class="mb-6 relative overflow-hidden rounded-lg transition-colors duration-300 border"
        :class="isDark ? 'border-gray-700' : 'border-gray-200'"
      >
        <div class="overflow-auto p-4" :class="isDark ? 'bg-gray-800' : 'bg-white'">
          <div class="flex flex-col items-stretch">
            <div
              class="p-3 border rounded-t-lg transition-colors duration-300"
              :class="isDark ? 'bg-blue-900/20 border-blue-800/30' : 'bg-blue-50 border-blue-200'"
            >
              <div class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
                5. PDU 层
              </div>
              <div class="mt-1 text-sm" :class="isDark ? 'text-blue-200' : 'text-blue-600'">
                提供远程桌面基本图形接口
              </div>
            </div>
            <div
              class="p-3 border-l border-r transition-colors duration-300"
              :class="
                isDark ? 'bg-blue-900/15 border-blue-800/30' : 'bg-blue-50/80 border-blue-200'
              "
            >
              <div class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
                4. SEC 层
              </div>
              <div class="mt-1 text-sm" :class="isDark ? 'text-blue-200' : 'text-blue-600'">
                处理 RDP 安全加密和身份认证
              </div>
            </div>
            <div
              class="p-3 border-l border-r transition-colors duration-300"
              :class="
                isDark ? 'bg-blue-900/10 border-blue-800/30' : 'bg-blue-50/60 border-blue-200'
              "
            >
              <div class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
                3. MCS/T.125 层
              </div>
              <div class="mt-1 text-sm" :class="isDark ? 'text-blue-200' : 'text-blue-600'">
                处理多通道和数据传输
              </div>
            </div>
            <div
              class="p-3 border-l border-r transition-colors duration-300"
              :class="isDark ? 'bg-blue-900/5 border-blue-800/30' : 'bg-blue-50/40 border-blue-200'"
            >
              <div class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
                2. X.224 层
              </div>
              <div class="mt-1 text-sm" :class="isDark ? 'text-blue-200' : 'text-blue-600'">
                处理连接初始化和通信控制
              </div>
            </div>
            <div
              class="p-3 border rounded-b-lg transition-colors duration-300"
              :class="isDark ? 'bg-blue-900/0 border-blue-800/30' : 'bg-blue-50/20 border-blue-200'"
            >
              <div class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">
                1. TPKT 层
              </div>
              <div class="mt-1 text-sm" :class="isDark ? 'text-blue-200' : 'text-blue-600'">
                处理基础网络传输和封包
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mb-4">
        这种多层协议实现使 Fscan 能够处理各种 RDP 服务器配置，包括支持 NLA (Network Level
        Authentication) 的安全配置。
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// initProtocolStack 初始化RDP协议栈
func (g *Client) initProtocolStack(conn net.Conn, domain, user, pwd string) {
    // 创建协议层实例
    g.tpkt = tpkt.New(core.NewSocketLayer(conn), nla.NewNTLMv2(domain, user, pwd))
    g.x224 = x224.New(g.tpkt)
    g.mcs = t125.NewMCSClient(g.x224)
    g.sec = sec.NewClient(g.mcs)
    g.pdu = pdu.NewClient(g.sec)

    // 设置认证信息
    g.sec.SetUser(user)
    g.sec.SetPwd(pwd)
    g.sec.SetDomain(domain)

    // 配置协议层关联
    g.tpkt.SetFastPathListener(g.sec)
    g.sec.SetFastPathListener(g.pdu)
    g.pdu.SetFastPathSender(g.tpkt)
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
              NLA 支持说明
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Fscan 支持通过 NTLMv2 进行 Network Level Authentication，这是一种更安全的 RDP
              认证方式。NLA 要求在建立 RDP 会话之前进行用户认证，提高了安全性。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        并发扫描实现
      </h2>

      <p class="mb-4">RDP 扫描使用工作池模式进行并发处理，提高扫描效率：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// concurrentRdpScan 并发扫描RDP服务
func concurrentRdpScan(ctx context.Context, info *Common.HostInfo, credentials []RDPCredential,
                       port int, timeoutSeconds int64) *RDPScanResult {
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
    resultChan := make(chan *RDPScanResult, 1)
    workChan := make(chan RDPCredential, maxConcurrent)
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
                    result := tryRdpCredential(scanCtx, info.Host, credential, port, timeoutSeconds)
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

    // ...省略后续代码...
}</code></pre>
        </div>
      </div>

      <p class="mb-4">核心特性包括：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>工作池大小根据配置的线程数和凭据数量自动调整</li>
        <li>使用 Go 的 context 包实现超时控制和任务取消</li>
        <li>成功发现有效凭据后立即取消其他正在进行的任务</li>
        <li>等待组（WaitGroup）确保所有工作协程正确完成</li>
      </ul>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        凭据尝试与连接
      </h2>

      <p class="mb-4">每个 RDP 凭据尝试都在单独的 goroutine 中进行，包含完整的 RDP 协议交互：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// Login 执行RDP登录
func (g *Client) Login(domain, user, pwd string, timeout int64) error {
    // 建立TCP连接
    conn, err := Common.WrapperTcpWithTimeout("tcp", g.Host, time.Duration(timeout)*time.Second)
    if err != nil {
        return fmt.Errorf("[连接错误] %v", err)
    }
    defer conn.Close()

    // 初始化协议栈
    g.initProtocolStack(conn, domain, user, pwd)

    // 建立X224连接
    if err = g.x224.Connect(); err != nil {
        return fmt.Errorf("[X224连接错误] %v", err)
    }

    // 等待连接完成
    wg := &sync.WaitGroup{}
    breakFlag := false
    wg.Add(1)

    // 设置事件处理器
    g.setupEventHandlers(wg, &breakFlag, &err)

    // 添加额外的超时保护
    connectionDone := make(chan struct{})
    go func() {
        wg.Wait()
        close(connectionDone)
    }()

    select {
    case <-connectionDone:
        // 连接过程正常完成
        return err
    case <-time.After(time.Duration(timeout) * time.Second):
        // 超时
        if !breakFlag {
            breakFlag = true
            wg.Done()
        }
        return fmt.Errorf("连接超时")
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">RDP 连接实现了完整的事件处理机制，包括成功、失败、错误和超时等多种情况：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// setupEventHandlers 设置PDU事件处理器
func (g *Client) setupEventHandlers(wg *sync.WaitGroup, breakFlag *bool, err *error) {
    // 错误处理
    g.pdu.On("error", func(e error) {
        *err = e
        glog.Error("错误:", e)
        g.pdu.Emit("done")
    })

    // 连接关闭
    g.pdu.On("close", func() {
        *err = errors.New("连接关闭")
        glog.Info("连接已关闭")
        g.pdu.Emit("done")
    })

    // 连接成功
    g.pdu.On("success", func() {
        *err = nil
        glog.Info("连接成功")
        g.pdu.Emit("done")
    })

    // 连接就绪
    g.pdu.On("ready", func() {
        glog.Info("连接就绪")
        g.pdu.Emit("done")
    })

    // 完成处理
    g.pdu.On("done", func() {
        if !*breakFlag {
            *breakFlag = true
            wg.Done()
        }
    })
}</code></pre>
        </div>
      </div>

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
              安全考虑
            </p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              RDP
              连接的异常处理机制确保了即使在网络不稳定或服务器过载的情况下，扫描也能正常结束而不会占用大量资源或导致程序崩溃。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-6"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        结果处理与保存
      </h2>

      <p class="mb-4">扫描成功后，将保存结果并记录详细信息：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// saveRdpResult 保存RDP扫描结果
func saveRdpResult(info *Common.HostInfo, target string, port int, credential RDPCredential) {
    var successMsg string

    if credential.Domain != "" {
        successMsg = fmt.Sprintf("RDP %v Domain: %v\\%v Password: %v",
            target, credential.Domain, credential.Username, credential.Password)
    } else {
        successMsg = fmt.Sprintf("RDP %v Username: %v Password: %v",
            target, credential.Username, credential.Password)
    }

    Common.LogSuccess(successMsg)

    // 保存结果
    details := map[string]interface{}{
        "port":     port,
        "service":  "rdp",
        "username": credential.Username,
        "password": credential.Password,
        "type":     "weak-password",
    }

    if credential.Domain != "" {
        details["domain"] = credential.Domain
    }

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

      <p class="mb-4">结果包含以下关键信息：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>目标主机和端口</li>
        <li>成功的用户名和密码</li>
        <li>域名信息（如适用）</li>
        <li>漏洞类型（弱密码）</li>
        <li>发现时间</li>
      </ul>

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
        基本 RDP 扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 3389 -m rdp</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 3389 -m rdp -user administrator,admin -pwd P@ssw0rd,admin123,{user}2023</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        域环境 RDP 扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 3389 -m rdp -domain CONTOSO -user john,david -pwd Welcome123!,P@ssw0rd</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 3389 -m rdp -t 50 -time 5 -timeout 600 -o rdp_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">
        这个配置使用 50 个线程，单个连接超时设置为 5 秒，全局扫描超时为 10
        分钟，并将结果保存到文件。
      </p>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:check-circle"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-blue-400' : 'text-blue-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              使用 RDP
              扫描时，建议从小范围开始测试并适当限制线程数和超时时间，避免对目标系统造成过大负载。在生产环境中进行扫描前，确保获得相关授权。
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
  'RDP 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'RDP 协议栈实现',
  '并发扫描实现',
  '凭据尝试与连接',
  '结果处理与保存',
  '应用场景与示例',
]

// RDP参数表格数据
const rdpParameters = [
  { name: '-m rdp', description: '启用 RDP 扫描模块', example: '-m rdp' },
  { name: '-p 3389', description: '指定 RDP 端口（默认为 3389）', example: '-p 3389,3390' },
  {
    name: '-user',
    description: '指定用户名列表，多个用逗号分隔',
    example: '-user administrator,admin',
  },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd P@ssw0rd,{user}123' },
  { name: '-domain', description: '指定域名（用于域账户认证）', example: '-domain CONTOSO' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 600' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o rdp_results.txt' },
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
  color: #569cd6;
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
  border-left: 3px solid rgba(66, 153, 225, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(66, 153, 225, 0.6);
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
