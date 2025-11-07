<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div
        class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
        :class="isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'"
      >
        <Icon
          icon="mdi:sync"
          class="text-xl"
          :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
        />
      </div>
      <h1
        class="text-2xl font-bold transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        Rsync 扫描指南
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
            isDark ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'
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
        Rsync 扫描是 Fscan 的一个重要功能，用于发现网络中的 Rsync
        服务，检测匿名访问漏洞以及进行凭据爆破。本指南详细介绍 Rsync
        扫描的工作原理、配置选项和最佳实践。
      </p>

      <h2
        id="section-0"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        Rsync 扫描简介
      </h2>

      <p class="mb-4">
        Rsync（Remote
        Synchronization）是一个用于文件传输和同步的开源工具，常用于服务器备份、数据同步和镜像站点维护。Fscan
        的 Rsync 扫描模块可以：
      </p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>发现内网中开放的 Rsync 服务（默认端口 873）</li>
        <li>检测 Rsync 匿名访问配置</li>
        <li>列举可用的 Rsync 模块</li>
        <li>尝试使用凭据进行认证</li>
        <li>检测弱密码配置</li>
      </ul>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-indigo-900/10 border border-indigo-900/20'
            : 'bg-indigo-50 border border-indigo-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:shield-alert"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-indigo-300' : 'text-indigo-700'">
              安全提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-indigo-200' : 'text-indigo-800'">
              Rsync
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

      <p class="mb-4">Rsync 扫描模块采用多阶段扫描策略，高效识别和测试目标系统：</p>

      <div class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-indigo-900/20' : 'bg-indigo-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
                >1</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              服务发现
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            扫描目标 IP 范围，识别开放 Rsync 服务（默认端口 873）的主机
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-indigo-900/20' : 'bg-indigo-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
                >2</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              模块获取
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            通过发送 #list 命令，获取目标服务器上的可用 Rsync 模块列表
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-indigo-900/20' : 'bg-indigo-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
                >3</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              匿名访问检测
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            尝试无凭据方式连接每个模块，检测是否允许匿名访问
          </p>
        </div>

        <div
          class="p-4 rounded-lg border transition-colors duration-300"
          :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
        >
          <div class="flex items-center mb-2">
            <div
              class="w-6 h-6 rounded-md flex items-center justify-center mr-2"
              :class="isDark ? 'bg-indigo-900/20' : 'bg-indigo-100'"
            >
              <span
                class="text-xs font-bold"
                :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
                >4</span
              >
            </div>
            <h3 class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              密码爆破
            </h3>
          </div>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            如果无法匿名访问，则使用多线程技术尝试用户名和密码组合，支持自动重试和超时控制
          </p>
        </div>
      </div>

      <p class="mb-4">
        Rsync
        扫描实现采用高效的协程池和上下文管理，确保即使在大规模扫描时也能保持稳定性和性能。扫描过程中会考虑全局超时和单个连接超时，避免资源浪费。
      </p>

      <h2
        id="section-2"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        配置参数与选项
      </h2>

      <p class="mb-4">Rsync 扫描提供多种配置选项，以适应不同的扫描需求：</p>

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
              v-for="param in rsyncParameters"
              :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
            >
              <td
                class="py-2 px-4 font-mono"
                :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
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
        Rsync 协议交互流程
      </h2>

      <p class="mb-4">
        Rsync 扫描模块通过与 Rsync 服务器进行一系列协议交互来检测服务状态和尝试认证：
      </p>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        协议版本协商
      </h3>

      <p class="mb-4">扫描首先会与 Rsync 服务器进行版本协商：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 1. 读取服务器初始greeting
conn.SetReadDeadline(time.Now().Add(timeout))
n, err := conn.Read(buffer)
if err != nil {
    return false, "", err
}

greeting := string(buffer[:n])
if !strings.HasPrefix(greeting, "@RSYNCD:") {
    return false, "", fmt.Errorf("不是Rsync服务")
}

// 获取服务器版本号
version := strings.TrimSpace(strings.TrimPrefix(greeting, "@RSYNCD:"))

// 2. 回应相同的版本号
conn.SetWriteDeadline(time.Now().Add(timeout))
_, err = conn.Write([]byte(fmt.Sprintf("@RSYNCD: %s\n", version)))
if err != nil {
    return false, "", err
}</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        模块列举
      </h3>

      <p class="mb-4">版本协商完成后，发送 #list 命令获取可用模块列表：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 3. 选择模块 - 先列出可用模块
conn.SetWriteDeadline(time.Now().Add(timeout))
_, err = conn.Write([]byte("#list\n"))
if err != nil {
    return false, "", err
}

// 4. 读取模块列表
var moduleList strings.Builder
for {
    conn.SetReadDeadline(time.Now().Add(timeout))
    n, err = conn.Read(buffer)
    if err != nil {
        break
    }
    chunk := string(buffer[:n])
    moduleList.WriteString(chunk)
    if strings.Contains(chunk, "@RSYNCD: EXIT") {
        break
    }
}

modules := strings.Split(moduleList.String(), "\n")</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        模块连接与验证
      </h3>

      <p class="mb-4">对每个模块尝试连接，并根据需要进行身份验证：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 5. 为每个模块创建新连接尝试认证
authConn, err := dialer.DialContext(ctx, "tcp", fmt.Sprintf("%s:%s", host, port))
if err != nil {
    continue
}
defer authConn.Close()

// 重复初始握手
authConn.SetReadDeadline(time.Now().Add(timeout))
_, err = authConn.Read(buffer)
if err != nil {
    authConn.Close()
    continue
}

authConn.SetWriteDeadline(time.Now().Add(timeout))
_, err = authConn.Write([]byte(fmt.Sprintf("@RSYNCD: %s\n", version)))
if err != nil {
    authConn.Close()
    continue
}

// 6. 选择模块
authConn.SetWriteDeadline(time.Now().Add(timeout))
_, err = authConn.Write([]byte(moduleName + "\n"))
if err != nil {
    authConn.Close()
    continue
}

// 7. 等待认证挑战
authConn.SetReadDeadline(time.Now().Add(timeout))
n, err = authConn.Read(buffer)
if err != nil {
    authConn.Close()
    continue
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
              交互提示
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              Rsync 协议的交互是基于文本的，使用 @RSYNCD
              前缀进行指令传递。服务器会给出明确响应指示是否需要认证或已成功访问。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-4"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        匿名访问检测
      </h2>

      <p class="mb-4">Rsync 扫描首先尝试匿名访问，这是一个常见的安全漏洞：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 首先尝试匿名访问
Common.LogDebug("尝试匿名访问...")
anonymousResult := tryRsyncCredential(ctx, info, RsyncCredential{"", ""}, Common.Timeout, Common.MaxRetries)

if anonymousResult.Success {
    // 匿名访问成功
    saveRsyncResult(info, target, anonymousResult)
    return nil
}</code></pre>
        </div>
      </div>

      <p class="mb-4">匿名访问检测的具体流程：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">authResponse := string(buffer[:n])
if strings.Contains(authResponse, "@RSYNCD: OK") {
    // 模块不需要认证
    if user == "" && pass == "" {
        authConn.Close()
        return true, moduleName, nil
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">
        当模块响应 "@RSYNCD: OK"
        且我们使用空用户名和密码尝试时，表示该模块允许匿名访问。这通常是由于配置不当导致的安全问题。
      </p>

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
              防护建议
            </p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              防止 Rsync 匿名访问的关键措施是在 rsyncd.conf 配置文件中为每个模块设置 auth users 和
              secrets file 选项，确保所有访问都需要身份验证。
            </p>
          </div>
        </div>
      </div>

      <h2
        id="section-5"
        class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
        :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'"
      >
        身份验证流程
      </h2>

      <p class="mb-4">如果模块需要认证，Rsync 扫描将尝试使用用户名和密码进行身份验证：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">} else if strings.Contains(authResponse, "@RSYNCD: AUTHREQD") {
    if user != "" && pass != "" {
        // 8. 发送认证信息
        authString := fmt.Sprintf("%s %s\n", user, pass)
        authConn.SetWriteDeadline(time.Now().Add(timeout))
        _, err = authConn.Write([]byte(authString))
        if err != nil {
            authConn.Close()
            continue
        }

        // 9. 读取认证结果
        authConn.SetReadDeadline(time.Now().Add(timeout))
        n, err = authConn.Read(buffer)
        if err != nil {
            authConn.Close()
            continue
        }

        if !strings.Contains(string(buffer[:n]), "@ERROR") {
            authConn.Close()
            return true, moduleName, nil
        }
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">身份验证过程使用用户名和密码组合：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">// 构建凭据列表
var credentials []RsyncCredential
for _, user := range Common.Userdict["rsync"] {
    for _, pass := range Common.Passwords {
        actualPass := strings.Replace(pass, "{user}", user, -1)
        credentials = append(credentials, RsyncCredential{
            Username: user,
            Password: actualPass,
        })
    }
}</code></pre>
        </div>
      </div>

      <p class="mb-4">
        Rsync 认证格式非常简单，用户名和密码以空格分隔发送。需要注意的是，Rsync
        的密码通常存储在服务器的 secrets file 中，格式为 "username:password"。
      </p>

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
        并发控制
      </h3>

      <p class="mb-4">
        Rsync 扫描模块使用 <code>ModuleThreadNum</code> 参数控制并发线程数，可以通过
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

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        超时设置
      </h3>

      <p class="mb-4">Rsync 扫描支持两层超时控制：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <strong>单个连接超时</strong>：通过 <code>-time</code> 参数设置每个 Rsync
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

// 设置带有上下文的拨号器
dialer := &net.Dialer{
    Timeout: time.Duration(Common.Timeout) * time.Second,
}</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        重试机制
      </h3>

      <p class="mb-4">扫描支持自动重试连接，通过 <code>-retries</code> 参数设置最大重试次数：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">for retry := 0; retry < maxRetries; retry++ {
    select {
    case <-ctx.Done():
        return &RsyncScanResult{
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
        success, moduleName, err := RsyncConn(connCtx, info, credential.Username, credential.Password)
        cancel()

        if success {
            return &RsyncScanResult{
                Success:     true,
                Credential:  credential,
                IsAnonymous: credential.Username == "" && credential.Password == "",
                ModuleName:  moduleName,
            }
        }

        // 检查是否需要重试
        lastErr = err
        if err != nil {
            if retryErr := Common.CheckErrs(err); retryErr == nil {
                break // 不需要重试的错误
            }
        }
    }
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 873 -m rsync</code></pre>
        </div>
      </div>

      <h3
        class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-gray-800'"
      >
        指定用户名和密码扫描
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div
          class="rounded-lg overflow-hidden border transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'"
        >
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code
class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.10 -p 873 -m rsync -user rsync,root,admin -pwd rsync,{user}123,password</code></pre>
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
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.0/24 -p 873 -m rsync -t 100 -time 3 -retries 2 -o rsync_results.txt</code></pre>
        </div>
      </div>

      <p class="mb-4">
        这个配置使用 100 个线程，单个连接超时设置为 3 秒，最大重试次数为 2，并将结果保存到文件。
      </p>

      <div
        class="p-3 rounded-lg mb-6 text-sm font-normal"
        :class="
          isDark
            ? 'bg-indigo-900/10 border border-indigo-900/20'
            : 'bg-indigo-50 border border-indigo-100'
        "
      >
        <div class="flex">
          <Icon
            icon="mdi:check-circle"
            class="text-lg flex-shrink-0 mt-0.5 mr-2"
            :class="isDark ? 'text-indigo-400' : 'text-indigo-600'"
          />
          <div>
            <p class="font-medium" :class="isDark ? 'text-indigo-300' : 'text-indigo-700'">
              最佳实践
            </p>
            <p class="mt-1" :class="isDark ? 'text-indigo-200' : 'text-indigo-800'">
              在执行 Rsync 扫描时，首先推荐仅检测匿名访问问题，这是最常见的 Rsync
              安全漏洞。如果需要进行全面的密码爆破，建议限制并发数量，以避免对目标服务器造成过大压力。
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
          isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
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
  'Rsync 扫描简介',
  '扫描原理与流程',
  '配置参数与选项',
  'Rsync 协议交互流程',
  '匿名访问检测',
  '身份验证流程',
  '高级设置',
  '应用场景与示例',
]

// Rsync参数表格数据
const rsyncParameters = [
  { name: '-m rsync', description: '启用 Rsync 扫描模块', example: '-m rsync' },
  { name: '-p 873', description: '指定 Rsync 端口（默认为 873）', example: '-p 873' },
  { name: '-user', description: '指定用户名列表，多个用逗号分隔', example: '-user rsync,admin' },
  { name: '-pwd', description: '指定密码列表，多个用逗号分隔', example: '-pwd rsync,{user}123' },
  { name: '-t', description: '设置并发线程数', example: '-t 50' },
  { name: '-time', description: '设置单个连接超时时间（秒）', example: '-time 3' },
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
  color: #7e80ef;
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
  border-left: 3px solid rgba(99, 102, 241, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(99, 102, 241, 0.6);
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
