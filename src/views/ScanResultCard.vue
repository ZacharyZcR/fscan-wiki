<template>
  <div
    class="rounded-xl border overflow-hidden shadow-lg transition-colors duration-300 mb-16"
    :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
  >
    <div
      class="px-6 py-4 border-b flex items-center gap-4"
      :class="
        isDark
          ? 'border-gray-700 bg-gray-800/90 backdrop-blur-sm'
          : 'border-gray-200 bg-white/90 backdrop-blur-sm'
      "
    >
      <div class="flex items-center shrink-0">
        <Icon
          icon="mdi:console"
          class="mr-2 text-xl"
          :class="isDark ? 'text-blue-400' : 'text-blue-600'"
        />
        <span class="font-medium text-lg" :class="isDark ? 'text-gray-200' : 'text-gray-700'"
          >扫描结果</span
        >
      </div>
      <div class="flex-1 px-4">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center">
            <span class="font-medium text-sm" :class="isDark ? 'text-gray-300' : 'text-gray-600'"
              >扫描状态:</span
            >
            <span
              class="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold"
              :class="{
                'bg-green-100 text-green-800': scanStatus === 'active',
                'bg-blue-100 text-blue-800': scanStatus === 'completed',
                'bg-gray-100 text-gray-800': !['active', 'completed'].includes(scanStatus),
              }"
            >
              {{ scanStatusText }}
            </span>
          </div>
          <span
            v-if="scanStatus === 'active'"
            class="text-xs"
            :class="isDark ? 'text-gray-400' : 'text-gray-500'"
          >
            进度: {{ scanProgress }}%
          </span>
        </div>

        <!-- Only show progress bar when scanning is active -->
        <div v-if="scanStatus === 'active'" class="w-full">
          <div class="w-full rounded-full h-2" :class="isDark ? 'bg-gray-700' : 'bg-gray-200'">
            <div class="bg-blue-600 h-2 rounded-full" :style="{ width: scanProgress + '%' }"></div>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button
          class="text-sm px-4 py-2 rounded-lg transition-all duration-200 flex items-center hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          :class="
            isDark
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          "
          @click="execute"
        >
          <Icon icon="mdi:play-circle" class="mr-1.5 text-base" />
          RPC调用
        </button>
      </div>
    </div>
    <div class="p-8">
      <div class="border shadow-sm rounded-lg overflow-hidden">
        <div class="p-4">
          <div class="tabs">
            <div class="tab-list flex space-x-2 border-b mb-4">
              <button
                :class="[
                  'py-2 px-4 font-medium transition-colors duration-200',
                  view === 'table'
                    ? isDark
                      ? 'bg-blue-600 text-white rounded-t-md'
                      : 'bg-blue-500 text-white rounded-t-md'
                    : 'bg-transparent',
                ]"
                @click="setView('table')"
              >
                表格视图
              </button>
              <button
                :class="[
                  'py-2 px-4 font-medium transition-colors duration-200',
                  view === 'json'
                    ? isDark
                      ? 'bg-blue-600 text-white rounded-t-md'
                      : 'bg-blue-500 text-white rounded-t-md'
                    : 'bg-transparent',
                ]"
                @click="setView('json')"
              >
                JSON视图
              </button>
            </div>
            <div
              v-if="view === 'table'"
              class="overflow-x-auto max-h-96"
              :class="isDark ? 'bg-gray-800' : 'bg-white'"
            >
              <table
                class="min-w-full divide-y divide-gray-200"
                :class="isDark ? 'text-gray-200' : 'text-gray-700'"
              >
                <thead :class="isDark ? 'bg-gray-700' : 'bg-gray-50'">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      :class="isDark ? 'text-gray-300' : 'text-gray-500'"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      :class="isDark ? 'text-gray-300' : 'text-gray-500'"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      :class="isDark ? 'text-gray-300' : 'text-gray-500'"
                    >
                      Target
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      :class="isDark ? 'text-gray-300' : 'text-gray-500'"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      :class="isDark ? 'text-gray-300' : 'text-gray-500'"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="divide-y divide-gray-200"
                  :class="isDark ? 'divide-gray-700' : 'divide-gray-200'"
                >
                  <tr
                    v-for="(item, index) in filteredData"
                    :key="index"
                    :class="[
                      isDark
                        ? index % 2 === 0
                          ? 'bg-gray-800'
                          : 'bg-gray-750'
                        : index % 2 === 0
                          ? 'bg-white'
                          : 'bg-gray-50',
                      'transition-colors duration-150 hover:bg-opacity-80',
                      isDark ? 'hover:bg-gray-700' : 'hover:bg-blue-50',
                    ]"
                  >
                    <td class="px-6 py-4 whitespace-nowrap text-sm">{{ item.time }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                        :class="{
                          'bg-green-100 text-green-800': item.type === 'PORT',
                          'bg-blue-100 text-blue-800': item.type === 'SERVICE',
                          'bg-yellow-100 text-yellow-800': item.type === 'VULNERABILITY',
                          'bg-red-100 text-red-800': item.type === 'ATTACK',
                          'bg-gray-100 text-gray-800': ![
                            'PORT',
                            'SERVICE',
                            'VULNERABILITY',
                            'ATTACK',
                          ].includes(item.type),
                        }"
                      >
                        {{ item.type }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {{ item.target }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                        :class="{
                          'bg-green-100 text-green-800': item.status === 'open',
                          'bg-blue-100 text-blue-800': item.status === 'identified',
                          'bg-yellow-100 text-yellow-800': item.status === 'warning',
                          'bg-red-100 text-red-800': item.status === 'critical',
                          'bg-gray-100 text-gray-800': ![
                            'open',
                            'identified',
                            'warning',
                            'critical',
                          ].includes(item.status),
                        }"
                      >
                        {{ item.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm max-w-xs lg:max-w-md">
                      <div class="table-json-viewer" :class="isDark ? 'dark-theme' : 'light-theme'">
                        <json-viewer :value="item.detailsJson" :expand-depth="3" copyable sort />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              v-if="view === 'json'"
              class="overflow-x-auto max-h-96"
              :class="isDark ? 'bg-gray-800' : 'bg-white'"
            >
              <json-viewer :value="filteredData" :expand-depth="5" copyable boxed sort />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import JsonViewer from 'vue-json-viewer' // 导入 vue-json-viewer

// 定义isDark属性，根据环境判断是否为深色模式
const isDark = inject('isDark')

// 扫描状态相关数据 - 只有两种状态：扫描中(active)和完成(completed)
const scanStatus = ref('completed') // 默认为扫描中状态，可以根据需要更改
const scanStatusText = computed(() => {
  const statusMap = {
    active: '正在扫描',
    completed: '无执行中任务',
  }
  return statusMap[scanStatus.value] || '未知状态'
})
const scanProgress = ref(45)

// 执行按钮逻辑
const execute = async () => {
  const serverAddress = localStorage.getItem('serverAddress')
  const serverKey = localStorage.getItem('serverKey')
  const formattedCommand = localStorage.getItem('formattedCommand') || []
  if (!serverAddress || !serverKey || !formattedCommand) {
    console.error('请检查服务器地址和密钥是否已设置。')
    return
  }

  const body = {
    arg: formattedCommand,
  }

  try {
    const response = await fetch(`http://${serverAddress}/v1/startscan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Fscan-API-SECRET': serverKey,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`请求失败，状态码: ${response.status}`)
    }

    const result = await response.json()
    console.log('执行结果:', result)

    // 启动轮询逻辑，调用getResult直到finished为true
    pollForResult(result.taskId)
  } catch (error) {
    console.error('执行命令失败:', error)
  }
}

// 轮询获取结果
const pollForResult = taskId => {
  const serverAddress = localStorage.getItem('serverAddress')
  const serverKey = localStorage.getItem('serverKey')

  const intervalId = setInterval(async () => {
    try {
      const response = await fetch(`http://${serverAddress}/v1/getresults`, {
        method: 'POST',
        headers: {
          'Fscan-API-SECRET': serverKey,
        },
        body: JSON.stringify({ taskId }), // 添加 taskId 来获取特定任务的结果
      })

      if (!response.ok) {
        throw new Error(`请求失败，状态码: ${response.status}`)
      }

      const result = await response.json()
      console.log('获取结果:', result)

      // 将获取的结果更新到 scanData 中
      scanData.value = result.results || [] // 更新扫描数据

      // 检查返回的结果是否完成
      if (result.finished) {
        clearInterval(intervalId) // 停止轮询
        console.log('任务完成:', result)
        scanStatus.value = 'completed' // 更新状态为完成
        scanProgress.value = 100 // 设置进度为100
      } else {
        scanProgress.value = (result.end / result.total) * 100 || 0 // 更新进度
        scanStatus.value = 'active' // 设置状态为扫描中
      }
    } catch (error) {
      console.error('获取结果失败:', error)
    }
  }, 1000) // 每1秒钟轮询一次
}

const scanData = ref([]) // 用来存储扫描结果
const filteredData = computed(() => scanData.value) // 可以用来筛选扫描数据

const view = ref('table')

const setView = newView => {
  view.value = newView
}
</script>

<style scoped>
/* 带有自定义滚动条的样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 深色模式下的滚动条 */
.dark ::-webkit-scrollbar-track {
  background: #2d3748;
}

.dark ::-webkit-scrollbar-thumb {
  background: #4a5568;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #718096;
}

/* 表格动画效果 */
tr {
  transition: all 0.2s ease;
}

/* 表格内的JSON查看器样式 */
.table-json-viewer {
  max-height: 160px;
  overflow-y: auto;
  border-radius: 6px;
}

/* 修改表格内JsonViewer组件的样式，使其与表格风格一致 */
.table-json-viewer.light-theme :deep(.jv-container) {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.75rem;
  padding: 8px;
}

.table-json-viewer.dark-theme :deep(.jv-container) {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  font-size: 0.75rem;
  padding: 8px;
  color: #e5e7eb;
}

/* 调整JsonViewer内部样式 */
.table-json-viewer :deep(.jv-ellipsis) {
  color: #6b7280;
  background-color: transparent;
  display: inline-block;
  line-height: 0.9;
  font-size: 0.75rem;
}

.table-json-viewer :deep(.jv-key) {
  color: #2563eb;
  margin-right: 4px;
}

.table-json-viewer.dark-theme :deep(.jv-key) {
  color: #60a5fa;
}

.table-json-viewer :deep(.jv-item.jv-string) {
  color: #059669;
}

.table-json-viewer.dark-theme :deep(.jv-item.jv-string) {
  color: #34d399;
}

.table-json-viewer :deep(.jv-item.jv-number) {
  color: #d97706;
}

.table-json-viewer :deep(.jv-code) {
  padding: 0;
}

/* 调整复制按钮的位置和样式 */
.table-json-viewer :deep(.jv-button) {
  position: absolute;
  right: 4px;
  top: 4px;
}
</style>
