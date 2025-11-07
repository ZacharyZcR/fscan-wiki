<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-4">
        <div class="flex shrink-0 items-center gap-2">
          <Icon icon="mdi:console" class="text-xl text-primary" />
          <CardTitle>扫描结果</CardTitle>
        </div>
        <div class="flex-1 px-4">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <span class="text-sm font-medium text-muted-foreground">扫描状态:</span>
              <span
                class="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold"
                :class="{
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                    scanStatus === 'active',
                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
                    scanStatus === 'completed',
                  'bg-muted text-muted-foreground': !['active', 'completed'].includes(scanStatus),
                }"
              >
                {{ scanStatusText }}
              </span>
            </div>
            <span v-if="scanStatus === 'active'" class="text-xs text-muted-foreground">
              进度: {{ scanProgress }}%
            </span>
          </div>

          <!-- Only show progress bar when scanning is active -->
          <div v-if="scanStatus === 'active'" class="w-full">
            <div class="h-2 w-full rounded-full bg-muted">
              <div class="h-2 rounded-full bg-blue-600" :style="{ width: scanProgress + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <Button @click="execute">
            <Icon icon="mdi:play-circle" class="mr-1.5 text-base" />
            RPC调用
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div class="overflow-hidden rounded-lg border border-border shadow-sm">
        <div class="p-4">
          <div class="tabs">
            <div class="tab-list mb-4 flex space-x-2 border-b border-border">
              <button
                class="rounded-t-md px-4 py-2 font-medium transition-colors duration-200"
                :class="
                  view === 'table'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent hover:bg-accent'
                "
                @click="setView('table')"
              >
                表格视图
              </button>
              <button
                class="rounded-t-md px-4 py-2 font-medium transition-colors duration-200"
                :class="
                  view === 'json'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent hover:bg-accent'
                "
                @click="setView('json')"
              >
                JSON视图
              </button>
            </div>
            <div v-if="view === 'table'" class="max-h-96 overflow-x-auto">
              <table class="min-w-full divide-y divide-border">
                <thead class="bg-muted">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Target
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border">
                  <tr
                    v-for="(item, index) in filteredData"
                    :key="index"
                    class="transition-colors duration-150 hover:bg-accent/50"
                    :class="index % 2 === 0 ? 'bg-background' : 'bg-muted/30'"
                  >
                    <td class="whitespace-nowrap px-6 py-4 text-sm">{{ item.time }}</td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        class="inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5"
                        :class="{
                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                            item.type === 'PORT',
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
                            item.type === 'SERVICE',
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                            item.type === 'VULNERABILITY',
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                            item.type === 'ATTACK',
                          'bg-muted text-muted-foreground': ![
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
                    <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
                      {{ item.target }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        class="inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5"
                        :class="{
                          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
                            item.status === 'open',
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
                            item.status === 'identified',
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200':
                            item.status === 'warning',
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200':
                            item.status === 'critical',
                          'bg-muted text-muted-foreground': ![
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
                    <td class="max-w-xs px-6 py-4 text-sm lg:max-w-md">
                      <div class="table-json-viewer">
                        <json-viewer :value="item.detailsJson" :expand-depth="3" copyable sort />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="view === 'json'" class="max-h-96 overflow-x-auto">
              <json-viewer :value="filteredData" :expand-depth="5" copyable boxed sort />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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
  background: hsl(var(--muted));
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
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
.table-json-viewer :deep(.jv-container) {
  background: hsl(var(--muted) / 0.5);
  border: 1px solid hsl(var(--border));
  border-radius: 6px;
  font-size: 0.75rem;
  padding: 8px;
}

/* 调整JsonViewer内部样式 */
.table-json-viewer :deep(.jv-ellipsis) {
  color: hsl(var(--muted-foreground));
  background-color: transparent;
  display: inline-block;
  line-height: 0.9;
  font-size: 0.75rem;
}

.table-json-viewer :deep(.jv-key) {
  color: hsl(var(--primary));
  margin-right: 4px;
}

.table-json-viewer :deep(.jv-item.jv-string) {
  color: #059669;
}

.dark .table-json-viewer :deep(.jv-item.jv-string) {
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
