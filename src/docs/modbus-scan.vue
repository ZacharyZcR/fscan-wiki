<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-orange-900/30' : 'bg-orange-100'">
        <Icon icon="mdi:factory" class="text-xl" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Modbus 扫描指南
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
            :class="isDark ? 'text-gray-400 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">Modbus 扫描是 Fscan 的一项工业控制系统安全检测功能，用于发现网络中的 Modbus TCP 设备并检测无认证访问风险。本指南详细介绍 Modbus 扫描的工作原理、配置选项和最佳实践。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Modbus 扫描简介
      </h2>

      <p class="mb-4">Modbus 是一种应用于工业控制系统的通信协议，广泛用于可编程逻辑控制器（PLC）、人机界面（HMI）、传感器和各类工业设备之间的通信。Fscan 的 Modbus 扫描模块可以：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Modbus TCP 服务（默认端口 502）</li>
        <li>检测无需认证的 Modbus 设备</li>
        <li>提取设备基本信息（单元标识符、功能支持情况等）</li>
        <li>检测线圈状态等设备运行数据</li>
      </ul>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-orange-900/10 border border-orange-900/20' : 'bg-orange-50 border border-orange-100'">
        <div class="flex">
          <Icon icon="mdi:shield-alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-orange-300' : 'text-orange-700'">安全提示</p>
            <p class="mt-1" :class="isDark ? 'text-orange-200' : 'text-orange-800'">
              Modbus 协议设计时未考虑安全因素，对工业控制系统进行扫描可能影响设备正常运行。仅在授权的安全测试环境中使用此功能，避免对生产系统造成影响。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        Modbus 协议基础
      </h2>

      <p class="mb-4">Modbus TCP 是基于 TCP/IP 的工业通信协议，在 OSI 模型的应用层实现数据交换：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">1</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">数据模型</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            包括线圈（Coils）、离散输入、保持寄存器和输入寄存器四种主要数据类型
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">2</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">功能码</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            定义操作类型，如读取线圈(0x01)、读取寄存器(0x03)、写入单个线圈(0x05)等
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">3</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">MBAP头</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Modbus TCP应用协议头部，包含事务标识符、协议标识符、长度和单元标识符
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
                 :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-blue-400' : 'text-blue-600'">4</span>
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">通信模式</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            客户端-服务器模式，主站（客户端）发送请求，从站（服务器）响应
          </p>
        </div>
      </div>

      <p class="mb-4">Fscan 的 Modbus 扫描通过发送标准的 Modbus TCP 请求并分析响应来检测设备：</p>

      <!-- Modbus TCP帧结构图 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3 transition-colors duration-300"
            :class="isDark ? 'text-white' : 'text-gray-800'">
          Modbus TCP帧结构
        </h3>
        <div class="overflow-auto">
          <div class="border rounded-lg transition-colors duration-300 p-2"
               :class="isDark ? 'border-gray-700' : 'border-gray-200'">
            <div class="grid grid-cols-12 gap-1">
              <div class="col-span-2 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-700'">
                <div>事务标识符</div>
                <div class="font-mono mt-1">(2字节)</div>
              </div>
              <div class="col-span-2 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-700'">
                <div>协议标识符</div>
                <div class="font-mono mt-1">(2字节)</div>
              </div>
              <div class="col-span-2 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-700'">
                <div>长度</div>
                <div class="font-mono mt-1">(2字节)</div>
              </div>
              <div class="col-span-1 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-blue-900/20 text-blue-300' : 'bg-blue-100 text-blue-700'">
                <div>单元标识符</div>
                <div class="font-mono mt-1">(1字节)</div>
              </div>
              <div class="col-span-1 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-orange-900/20 text-orange-300' : 'bg-orange-100 text-orange-700'">
                <div>功能码</div>
                <div class="font-mono mt-1">(1字节)</div>
              </div>
              <div class="col-span-4 p-2 text-center text-xs rounded"
                   :class="isDark ? 'bg-orange-900/20 text-orange-300' : 'bg-orange-100 text-orange-700'">
                <div>数据</div>
                <div class="font-mono mt-1">(N字节)</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 mt-1">
              <div class="p-1 text-center text-xs rounded"
                   :class="isDark ? 'bg-blue-900/10 text-blue-300' : 'bg-blue-50 text-blue-600'">
                MBAP 头部
              </div>
              <div class="p-1 text-center text-xs rounded"
                   :class="isDark ? 'bg-orange-900/10 text-orange-300' : 'bg-orange-50 text-orange-600'">
                PDU (协议数据单元)
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        扫描原理与流程
      </h2>

      <p class="mb-4">Fscan 的 Modbus 扫描通过以下步骤完成设备发现和信息获取：</p>

      <div class="mb-6 p-4 rounded-lg border transition-colors duration-300"
           :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <ol class="space-y-4">
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">1</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">端口扫描</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                扫描目标IP的Modbus标准端口（默认为502）是否开放
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">2</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">构建请求</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                创建标准的Modbus TCP请求包，包含MBAP头和功能码（默认使用"读取线圈"功能码0x01）
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">3</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">发送与接收</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                向目标设备发送Modbus请求，并等待设备响应，支持超时控制和重试机制
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">4</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">响应验证</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                分析响应包，验证是否为有效的Modbus响应，检查协议标识符和功能码
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">5</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">信息提取</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                从Modbus响应中提取设备信息，包括单元标识符、支持的功能以及线圈状态等
              </p>
            </div>
          </li>
          <li class="flex">
            <div class="w-6 h-6 rounded-md flex items-center justify-center mr-3"
                 :class="isDark ? 'bg-orange-900/20' : 'bg-orange-100'">
              <span class="text-xs font-bold" :class="isDark ? 'text-orange-400' : 'text-orange-600'">6</span>
            </div>
            <div>
              <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">结果记录</h3>
              <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                记录扫描结果，包括目标主机、端口、服务类型和提取的设备信息
              </p>
            </div>
          </li>
        </ol>
      </div>

      <h2 id="section-3" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        代码实现详解
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        构建 Modbus 请求包
      </h3>

      <p class="mb-4">Fscan 使用以下代码构建标准的 Modbus TCP 请求包：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// buildModbusRequest 构建Modbus TCP请求包
func buildModbusRequest() []byte {
    request := make([]byte, 12)

    // Modbus TCP头部
    binary.BigEndian.PutUint16(request[0:], 0x0001) // 事务标识符
    binary.BigEndian.PutUint16(request[2:], 0x0000) // 协议标识符
    binary.BigEndian.PutUint16(request[4:], 0x0006) // 长度
    request[6] = 0x01                               // 单元标识符

    // Modbus 请求
    request[7] = 0x01                                // 功能码: Read Coils
    binary.BigEndian.PutUint16(request[8:], 0x0000)  // 起始地址
    binary.BigEndian.PutUint16(request[10:], 0x0001) // 读取数量

    return request
}</code></pre>
        </div>
      </div>

      <p class="mb-4">上述代码创建了一个基本的 Modbus TCP 请求，用于读取设备第一个线圈状态：</p>

      <ul class="pl-5 list-disc space-y-1 mb-6">
        <li>事务标识符 <code>0x0001</code>：唯一标识请求和对应的响应</li>
        <li>协议标识符 <code>0x0000</code>：标准 Modbus 协议</li>
        <li>长度 <code>0x0006</code>：后续数据的字节数</li>
        <li>单元标识符 <code>0x01</code>：目标设备的地址</li>
        <li>功能码 <code>0x01</code>：读取线圈操作</li>
        <li>起始地址 <code>0x0000</code>：从地址 0 开始读取</li>
        <li>读取数量 <code>0x0001</code>：仅读取 1 个线圈</li>
      </ul>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        验证 Modbus 响应
      </h3>

      <p class="mb-4">接收到响应后，需要验证是否为有效的 Modbus 响应：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// isValidModbusResponse 验证Modbus响应是否有效
func isValidModbusResponse(response []byte) bool {
    if len(response) < 9 {
        return false
    }

    // 检查协议标识符
    protocolID := binary.BigEndian.Uint16(response[2:])
    if protocolID != 0 {
        return false
    }

    // 检查功能码
    funcCode := response[7]
    if funcCode == 0x81 { // 错误响应
        return false
    }

    return true
}</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        解析 Modbus 响应
      </h3>

      <p class="mb-4">从有效的 Modbus 响应中提取设备信息：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// parseModbusResponse 解析Modbus响应获取设备信息
func parseModbusResponse(response []byte) string {
    if len(response) < 9 {
        return ""
    }

    // 提取更多设备信息
    unitID := response[6]
    funcCode := response[7]

    // 简单的设备信息提取，实际应用中可以提取更多信息
    info := fmt.Sprintf("Unit ID: %d, Function: 0x%02X", unitID, funcCode)

    // 如果是读取线圈响应，尝试解析线圈状态
    if funcCode == 0x01 && len(response) >= 10 {
        byteCount := response[8]
        if byteCount > 0 && len(response) >= 9+int(byteCount) {
            coilValue := response[9] & 0x01 // 获取第一个线圈状态
            info += fmt.Sprintf(", Coil Status: %d", coilValue)
        }
    }

    return info
}</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:information" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">信息提示</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              Modbus 协议中功能码 0x81 表示请求功能码 0x01 的错误响应。Modbus 错误响应的功能码始终是请求功能码加上 0x80。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        配置参数与选项
      </h2>

      <p class="mb-4">Modbus 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
          <tr v-for="param in modbusParameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-orange-400' : 'text-orange-600'">
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

      <h2 id="section-5" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        高级设置
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        超时和重试机制
      </h3>

      <p class="mb-4">Modbus 扫描支持两层超时控制和自动重试：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 设置全局超时上下文
ctx, cancel := context.WithTimeout(context.Background(), time.Duration(Common.GlobalTimeout)*time.Second)
defer cancel()

// 创建单个连接超时的上下文
connCtx, connCancel := context.WithTimeout(ctx, time.Duration(timeoutSeconds)*time.Second)

// 重试机制
for retry := 0; retry < maxRetries; retry++ {
    select {
    case <-ctx.Done():
        return &ModbusScanResult{
            Success: false,
            Error:   fmt.Errorf("全局超时"),
        }
    default:
        if retry > 0 {
            Common.LogDebug(fmt.Sprintf("第%d次重试 Modbus 扫描: %s", retry+1, target))
            time.Sleep(500 * time.Millisecond) // 重试前等待
        }

        // 执行扫描...
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">通过这种方式，Fscan 实现了全局超时控制和单个连接超时控制，并在连接失败时提供了自动重试功能。</p>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              工业网络环境通常响应较慢，建议适当增加超时时间，例如将默认的 3 秒增加到 5-10 秒，以提高扫描的准确性。
            </p>
          </div>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        并发控制
      </h3>

      <p class="mb-4">为避免对工业控制系统造成过大负载，Fscan 在 Modbus 扫描中实现了并发控制：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 在协程中执行扫描
go func() {
    // 尝试建立连接
    var d net.Dialer
    conn, err := d.DialContext(connCtx, "tcp", target)
    if err != nil {
        select {
        case <-connCtx.Done():
        case resultChan <- &ModbusScanResult{Success: false, Error: err}:
        }
        return
    }
    defer conn.Close()

    // ... 执行扫描逻辑 ...
}()</code></pre>
        </div>
      </div>

      <p class="mb-4">通过 Goroutine 和通道机制，Fscan 能够有效地控制并发扫描任务，同时确保不会因为单个扫描任务阻塞整个扫描过程。</p>

      <h2 id="section-6" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        应用场景与示例
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描单个 Modbus 设备
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 502 -m modbus</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描工厂网络 Modbus 设备
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 502 -m modbus -time 5 -o modbus_results.txt</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描多个端口
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 502,1502,503 -m modbus -retries 3</code></pre>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-green-900/10 border border-green-900/20' : 'bg-green-50 border border-green-100'">
        <div class="flex">
          <Icon icon="mdi:check-circle" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-green-300' : 'text-green-700'">最佳实践</p>
            <p class="mt-1" :class="isDark ? 'text-green-200' : 'text-green-800'">
              对工业控制系统进行扫描时，建议在非生产环境或维护窗口期进行，并使用较低的并发数和较长的超时时间，避免对设备造成负面影响。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-7" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        安全建议
      </h2>

      <p class="mb-4">Modbus 协议设计时未考虑安全性，因此在工业环境中使用 Modbus 需要采取额外的安全措施：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:shield" class="text-lg mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">网络隔离</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            将工业控制网络与企业网络和互联网物理隔离，使用防火墙严格控制访问
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:shield" class="text-lg mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">加密隧道</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            使用 VPN 或 SSH 隧道等技术为 Modbus 通信提供加密保护
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:shield" class="text-lg mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">访问控制</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            实施基于 IP 和 MAC 地址的访问控制，限制能够与 Modbus 设备通信的主机
          </p>
        </div>

        <div class="p-4 rounded-lg border transition-colors duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="flex items-center mb-2">
            <Icon icon="mdi:shield" class="text-lg mr-2" :class="isDark ? 'text-orange-400' : 'text-orange-600'" />
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">安全监控</h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            部署工业网络监控系统，检测异常的 Modbus 通信和未授权访问尝试
          </p>
        </div>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-red-900/10 border border-red-900/20' : 'bg-red-50 border border-red-100'">
        <div class="flex">
          <Icon icon="mdi:alert" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-red-400' : 'text-red-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-red-300' : 'text-red-700'">风险警告</p>
            <p class="mt-1" :class="isDark ? 'text-red-200' : 'text-red-800'">
              未经保护的 Modbus 设备可能被攻击者利用来监控或控制工业流程，甚至可能导致物理设备损坏或安全事故。定期进行安全评估和渗透测试对保障工业系统安全至关重要。
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
         :class="isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'">
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
  'Modbus 扫描简介',
  'Modbus 协议基础',
  '扫描原理与流程',
  '代码实现详解',
  '配置参数与选项',
  '高级设置',
  '应用场景与示例',
  '安全建议'
];

// Modbus参数表格数据
const modbusParameters = [
  { name: '-m modbus', description: '启用 Modbus 扫描模块', example: '-m modbus' },
  { name: '-p 502', description: '指定 Modbus 端口（默认为 502）', example: '-p 502,1502' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 5' },
  { name: '-timeout', description: '设置全局扫描超时时间（秒）', example: '-timeout 300' },
  { name: '-retries', description: '连接失败时的重试次数', example: '-retries 3' },
  { name: '-o', description: '将扫描结果输出到指定文件', example: '-o modbus_results.txt' }
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
.code-keyword { color: #ed8936; }
.code-string { color: #e7c17b; }
.code-comment { color: #68768a; font-style: italic; }

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
  border-left: 3px solid rgba(221, 107, 32, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(221, 107, 32, 0.6);
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
