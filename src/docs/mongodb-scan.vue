<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'"
      >
        <Icon
          icon="mdi:database"
          class="text-xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        MongoDB 扫描指南
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
        MongoDB 扫描是 Fscan 的一个重要功能模块，用于发现网络中运行的 MongoDB
        数据库服务，并检测常见的未授权访问安全问题。本指南详细介绍 MongoDB
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        MongoDB 扫描简介
      </h2>

      <p class="mb-4">
        MongoDB 是一种流行的开源文档数据库，由于配置不当，常常面临未授权访问的安全风险。Fscan 的
        MongoDB 扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 MongoDB 服务（默认端口 27017）</li>
        <li>检测 MongoDB 未授权访问漏洞</li>
        <li>支持多种 MongoDB 协议版本（OP_MSG 和 OP_QUERY）</li>
        <li>生成详细的扫描报告</li>
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
              MongoDB
              扫描功能应当仅用于合法的安全测试和授权的渗透测试。未经授权对系统进行扫描可能违反法律法规。
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

      <p class="mb-4">MongoDB 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

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
            扫描目标 IP 范围，识别开放 MongoDB 服务（默认端口 27017）的主机
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
              协议选择
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            首先尝试新版 OP_MSG 协议，如果失败再尝试传统的 OP_QUERY 协议
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
              命令执行
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            发送管理命令 getLog("startupWarnings") 测试是否能够未授权访问管理功能
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
            通过响应分析判断是否存在未授权访问，生成详细报告
          </p>
        </div>
      </div>

      <p class="mb-4">
        扫描实现采用上下文管理和并发控制，确保扫描效率和稳定性。同时会考虑全局超时和单个连接超时，避免资源浪费。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">MongoDB 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in mongodbParameters"
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
        MongoDB 协议详解
      </h2>

      <p class="mb-4">MongoDB 使用基于二进制的网络协议，Fscan 支持两种主要的通信方式：</p>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        OP_MSG 协议
      </h3>

      <p class="mb-4">OP_MSG 是 MongoDB 3.6+ 版本引入的通信协议，结构更加灵活：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// createOpMsgPacket 创建OP_MSG查询包
func createOpMsgPacket() []byte {
    return []byte{
        0x69, 0x00, 0x00, 0x00, // messageLength
        0x39, 0x00, 0x00, 0x00, // requestID
        0x00, 0x00, 0x00, 0x00, // responseTo
        0xdd, 0x07, 0x00, 0x00, // opCode OP_MSG (2013)
        0x00, 0x00, 0x00, 0x00, // flagBits
        // sections - db.adminCommand({getLog: "startupWarnings"})
        0x00, 0x54, 0x00, 0x00, 0x00, 0x02, 0x67, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x00, 0x10, 0x00, 0x00, 0x00,
        0x73, 0x74, 0x61, 0x72, 0x74, 0x75, 0x70, 0x57, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x00, 0x02,
        0x24, 0x64, 0x62, 0x00, 0x06, 0x00, 0x00, 0x00, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x00, 0x03, 0x6c, 0x73,
        0x69, 0x64, 0x00, 0x1e, 0x00, 0x00, 0x00, 0x05, 0x69, 0x64, 0x00, 0x10, 0x00, 0x00, 0x00, 0x04, 0x6e,
        0x81, 0xf8, 0x8e, 0x37, 0x7b, 0x4c, 0x97, 0x84, 0x4e, 0x90, 0x62, 0x5a, 0x54, 0x3c, 0x93, 0x00, 0x00,
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">OP_MSG 协议头包含以下主要字段：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><code>messageLength</code>：消息总长度（32 位整数）</li>
        <li><code>requestID</code>：请求 ID（32 位整数）</li>
        <li><code>responseTo</code>：对应请求的 ID（32 位整数）</li>
        <li><code>opCode</code>：操作码，OP_MSG 为 2013（0x07DD）</li>
        <li><code>flagBits</code>：标志位</li>
        <li><code>sections</code>：包含 BSON 格式命令</li>
      </ul>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        OP_QUERY 协议
      </h3>

      <p class="mb-4">OP_QUERY 是旧版 MongoDB 使用的通信协议，为了兼容较早版本的服务器：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// createOpQueryPacket 创建OP_QUERY查询包
func createOpQueryPacket() []byte {
    return []byte{
        0x48, 0x00, 0x00, 0x00, // messageLength
        0x02, 0x00, 0x00, 0x00, // requestID
        0x00, 0x00, 0x00, 0x00, // responseTo
        0xd4, 0x07, 0x00, 0x00, // opCode OP_QUERY (2004)
        0x00, 0x00, 0x00, 0x00, // flags
        0x61, 0x64, 0x6d, 0x69, 0x6e, 0x2e, 0x24, 0x63, 0x6d, 0x64, 0x00, // fullCollectionName admin.$cmd
        0x00, 0x00, 0x00, 0x00, // numberToSkip
        0x01, 0x00, 0x00, 0x00, // numberToReturn
        // query - db.adminCommand({getLog: "startupWarnings"})
        0x21, 0x00, 0x00, 0x00, 0x2, 0x67, 0x65, 0x74, 0x4c, 0x6f, 0x67, 0x00, 0x10, 0x00, 0x00, 0x00,
        0x73, 0x74, 0x61, 0x72, 0x74, 0x75, 0x70, 0x57, 0x61, 0x72, 0x6e, 0x69, 0x6e, 0x67, 0x73, 0x00, 0x00,
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">OP_QUERY 协议头包含以下主要字段：</p>
      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li><code>messageLength</code>：消息总长度（32 位整数）</li>
        <li><code>requestID</code>：请求 ID（32 位整数）</li>
        <li><code>responseTo</code>：对应请求的 ID（32 位整数）</li>
        <li><code>opCode</code>：操作码，OP_QUERY 为 2004（0x07D4）</li>
        <li><code>flags</code>：查询标志位</li>
        <li><code>fullCollectionName</code>：目标集合名称（admin.$cmd 用于执行管理命令）</li>
        <li><code>numberToSkip</code>：跳过的文档数量</li>
        <li><code>numberToReturn</code>：返回的最大文档数量</li>
        <li><code>query</code>：BSON 格式的查询文档</li>
      </ul>

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
              协议兼容性提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Fscan 首先尝试较新的 OP_MSG 协议，如果失败则回退到 OP_QUERY 协议，确保与不同版本的
              MongoDB 服务器兼容。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        未授权访问检测原理
      </h2>

      <p class="mb-4">
        MongoDB 未授权访问检测的核心是尝试执行需要管理员权限的命令，并分析响应结果：
      </p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// MongodbUnauth 检测MongoDB未授权访问
func MongodbUnauth(ctx context.Context, info *Common.HostInfo) (bool, error) {
    msgPacket := createOpMsgPacket()
    queryPacket := createOpQueryPacket()

    realhost := fmt.Sprintf("%s:%v", info.Host, info.Ports)
    Common.LogDebug(fmt.Sprintf("检测MongoDB未授权访问: %s", realhost))

    // 尝试OP_MSG查询
    Common.LogDebug("尝试使用OP_MSG协议")
    reply, err := checkMongoAuth(ctx, realhost, msgPacket)
    if err != nil {
        Common.LogDebug(fmt.Sprintf("OP_MSG查询失败: %v, 尝试使用OP_QUERY协议", err))
        // 失败则尝试OP_QUERY查询
        reply, err = checkMongoAuth(ctx, realhost, queryPacket)
        if err != nil {
            Common.LogDebug(fmt.Sprintf("OP_QUERY查询也失败: %v", err))
            return false, err
        }
    }

    // 检查响应结果
    Common.LogDebug(fmt.Sprintf("收到响应，长度: %d", len(reply)))
    if strings.Contains(reply, "totalLinesWritten") {
        Common.LogDebug("响应中包含totalLinesWritten，确认未授权访问")
        return true, nil
    }

    Common.LogDebug("响应未包含预期内容，可能需要认证")
    return false, nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">未授权检测的关键步骤：</p>

      <ol class="pl-5 list-decimal space-y-2 mb-6">
        <li>尝试发送 <code>getLog("startupWarnings")</code> 管理命令，这通常需要管理员权限</li>
        <li>先使用 OP_MSG 协议尝试，如果失败再使用 OP_QUERY 协议</li>
        <li>分析响应内容，如果包含 <code>totalLinesWritten</code> 字段，表示命令执行成功</li>
        <li>成功执行管理命令意味着存在未授权访问漏洞</li>
      </ol>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:information-outline"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-blue-400' : 'text-blue-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">检测背景</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              <code>getLog("startupWarnings")</code> 是一个读取 MongoDB
              启动警告日志的管理命令。在配置了认证的 MongoDB
              中，这个命令只有经过认证的管理员才能执行。如果未配置认证的 MongoDB
              实例会允许任何连接执行此命令。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        连接与检查流程
      </h2>

      <p class="mb-4">MongoDB 检测的连接过程采用带超时控制的 TCP 连接：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// checkMongoAuth 检查MongoDB认证状态
func checkMongoAuth(ctx context.Context, address string, packet []byte) (string, error) {
    Common.LogDebug(fmt.Sprintf("建立MongoDB连接: %s", address))

    // 创建连接超时上下文
    connCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
    defer cancel()

    // 使用带超时的连接
    var d net.Dialer
    conn, err := d.DialContext(connCtx, "tcp", address)
    if err != nil {
        return "", fmt.Errorf("连接失败: %v", err)
    }
    defer conn.Close()

    // 检查上下文是否已取消
    select {
    case <-ctx.Done():
        return "", ctx.Err()
    default:
    }

    // 设置读写超时
    if err := conn.SetDeadline(time.Now().Add(time.Duration(Common.Timeout) * time.Second)); err != nil {
        return "", fmt.Errorf("设置超时失败: %v", err)
    }

    // 发送查询包
    Common.LogDebug("发送查询包")
    if _, err := conn.Write(packet); err != nil {
        return "", fmt.Errorf("发送查询失败: %v", err)
    }

    // 读取响应
    Common.LogDebug("读取响应")
    reply := make([]byte, 2048)
    count, err := conn.Read(reply)
    if err != nil && err != io.EOF {
        return "", fmt.Errorf("读取响应失败: %v", err)
    }

    if count == 0 {
        return "", fmt.Errorf("收到空响应")
    }

    Common.LogDebug(fmt.Sprintf("成功接收响应，字节数: %d", count))
    return string(reply[:count]), nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">连接流程的关键特点：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>使用 <code>context.WithTimeout</code> 控制连接超时</li>
        <li>使用 <code>SetDeadline</code> 设置套接字读写超时</li>
        <li>支持随时取消的上下文控制</li>
        <li>发送二进制格式的 MongoDB 协议数据包</li>
        <li>读取并解析服务器响应</li>
      </ul>

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
        超时设置
      </h3>

      <p class="mb-4">MongoDB 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 MongoDB
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

// 创建连接超时上下文
connCtx, cancel := context.WithTimeout(ctx, time.Duration(Common.Timeout)*time.Second)
defer cancel()</code></pre>
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
        并发控制
      </h3>

      <p class="mb-4">MongoDB 扫描使用 Goroutine 和通道机制实现并发控制：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 创建结果通道
resultChan := make(chan struct {
    isUnauth bool
    err      error
}, 1)

// 在协程中执行扫描
go func() {
    isUnauth, err := MongodbUnauth(ctx, info)
    select {
    case <-ctx.Done():
    case resultChan <- struct {
        isUnauth bool
        err      error
    }{isUnauth, err}:
    }
}()

// 等待结果或超时
select {
case result := <-resultChan:
    // 处理结果
case <-ctx.Done():
    // 处理超时
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 27017 -m mongodb</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        扫描非标准端口
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 27000-28000 -m mongodb</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        调整超时参数
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 27017 -m mongodb -time 3 -timeout 300</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        保存扫描结果
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 27017 -m mongodb -o mongodb_scan.txt</code></pre>
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
            icon="mdi:shield-check"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-green-400' : 'text-green-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">
              安全防护措施
            </p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              保护 MongoDB 服务器免受未授权访问的最佳实践：
              <br />1. 总是启用身份验证（参数 <code>--auth</code> 或配置文件中的
              <code>security.authorization: enabled</code>） <br />2. 将 MongoDB 绑定到非公开 IP（如
              127.0.0.1） <br />3. 使用防火墙限制对 MongoDB 端口的访问 <br />4.
              为数据库创建具有最小权限的专用账户
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
  'MongoDB 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'MongoDB 协议详解',
  '未授权访问检测原理',
  '连接与检查流程',
  '高级设置',
  '应用场景与示例',
]

// MongoDB参数表格数据
const mongodbParameters = [
  { name: '-m mongodb', description: '启用 MongoDB 扫描模块', example: '-m mongodb' },
  { name: '-p 27017', description: '指定 MongoDB 端口（默认为 27017）', example: '-p 27017,27018' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o result.txt' },
  { name: '-nocolor', description: '禁用彩色输出', example: '-nocolor' },
  { name: '-debug', description: '启用调试模式，显示详细日志', example: '-debug' },
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
  color: #4299e1;
}
.code-string {
  color: #68d391;
}
.code-comment {
  color: #a0aec0;
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
