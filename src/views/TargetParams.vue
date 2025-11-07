<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:target" class="text-2xl text-primary" />
        <CardTitle>目标配置参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 目标参数区域 -->
      <div class="mb-10">
        <label class="mb-3 block text-lg font-medium">目标地址</label>
        <div class="flex">
          <input
            v-model="targetInputValue"
            type="text"
            placeholder="IP/域名/IP段 (例如: 192.168.1.1/24)"
            class="flex-1 rounded-l-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            @keyup.enter="addTargetLocal"
          />
          <Button
            class="rounded-l-none"
            @click="addTargetLocal"
          >
            <Icon icon="mdi:plus" class="mr-2 text-lg" />
            添加
          </Button>
        </div>

        <!-- 目标标签 -->
        <div v-if="params.h.length > 0" class="mt-5 flex flex-wrap gap-2">
          <div
            v-for="(target, index) in params.h"
            :key="index"
            class="group flex items-center rounded-full bg-muted px-3 py-2 text-sm transition-all hover:bg-muted/80"
          >
            <span class="mr-2">{{ target }}</span>
            <button
              class="rounded-full p-0.5 text-sm transition-colors hover:text-destructive"
              @click="removeTargetLocal(index)"
            >
              <Icon icon="mdi:close-circle" class="text-base" />
            </button>
          </div>
        </div>
      </div>

      <!-- 目标配置选项 - 网格布局 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- 要排除的主机 -->
        <div>
          <label class="mb-3 block text-lg font-medium">排除主机 (-eh)</label>
          <input
            v-model="params.eh"
            type="text"
            placeholder="要排除的主机，逗号分隔"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <!-- 端口参数 -->
        <div>
          <label class="mb-3 block text-lg font-medium">扫描端口 (-p)</label>
          <input
            v-model="params.p"
            type="text"
            placeholder="端口 (例如: 80,443,8080)"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />

          <!-- 端口预设选择器 -->
          <div class="mt-4">
            <label class="mb-2 block text-sm font-medium text-muted-foreground">端口预设</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="preset in portPresets"
                :key="preset.name"
                type="button"
                class="flex items-center rounded-lg px-3 py-2 text-sm transition-all hover:scale-105"
                :class="
                  params.p === preset.value
                    ? 'bg-primary/10 text-primary'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                "
                @click="applyPortPresetLocal(preset.value)"
              >
                <Icon
                  :icon="preset.icon"
                  class="mr-2 text-base"
                />
                {{ preset.name }}
                <span v-if="preset.count" class="ml-1 text-xs opacity-70">({{ preset.count }})</span>
              </button>
            </div>
          </div>

          <!-- 端口预设详情提示 -->
          <div
            v-if="showPortDetails && selectedPortPreset"
            class="mt-3 rounded-lg border border-border bg-muted/50 p-3 text-sm"
          >
            <div class="flex items-center justify-between">
              <span class="font-medium">{{ selectedPortPreset.name }}端口</span>
              <button
                type="button"
                class="rounded-full p-1 text-xs hover:bg-muted"
                @click="showPortDetails = false"
              >
                <Icon icon="mdi:close" class="text-base" />
              </button>
            </div>
            <div class="mt-1 max-h-24 overflow-y-auto text-muted-foreground">
              {{ selectedPortPreset.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- 主机文件和端口文件 -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">主机文件 (-hf)</label>
          <input
            v-model="params.hf"
            type="text"
            placeholder="从文件中读取主机列表的路径"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">端口文件 (-pf)</label>
          <input
            v-model="params.pf"
            type="text"
            placeholder="从文件中读取端口列表的路径"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// 定义Fscan内置的端口预设
const mainPorts =
  '21,22,23,80,81,110,135,139,143,389,443,445,502,873,993,995,1433,1521,3306,5432,5672,6379,7001,7687,8000,8005,8009,8080,8089,8443,9000,9042,9092,9200,10051,11211,15672,27017,61616'
const servicePorts =
  '21,22,23,25,110,135,139,143,162,389,445,465,502,587,636,873,993,995,1433,1521,2222,3306,3389,5020,5432,5672,5671,6379,8161,8443,9000,9092,9093,9200,10051,11211,15672,15671,27017,61616,61613'
const dbPorts = '1433,1521,3306,5432,5672,6379,7687,9042,9093,9200,11211,27017,61616'
const webPorts =
  '80,81,82,83,84,85,86,87,88,89,90,91,92,98,99,443,800,801,808,880,888,889,1000,1010,1080,1081,1082,1099,1118,1888,2008,2020,2100,2375,2379,3000,3008,3128,3505,5555,6080,6648,6868,7000,7001,7002,7003,7004,7005,7007,7008,7070,7071,7074,7078,7080,7088,7200,7680,7687,7688,7777,7890,8000,8001,8002,8003,8004,8005,8006,8008,8009,8010,8011,8012,8016,8018,8020,8028,8030,8038,8042,8044,8046,8048,8053,8060,8069,8070,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095,8096,8097,8098,8099,8100,8101,8108,8118,8161,8172,8180,8181,8200,8222,8244,8258,8280,8288,8300,8360,8443,8448,8484,8800,8834,8838,8848,8858,8868,8879,8880,8881,8888,8899,8983,8989,9000,9001,9002,9008,9010,9043,9060,9080,9081,9082,9083,9084,9085,9086,9087,9088,9089,9090,9091,9092,9093,9094,9095,9096,9097,9098,9099,9100,9200,9443,9448,9800,9981,9986,9988,9998,9999,10000,10001,10002,10004,10008,10010,10051,10250,12018,12443,14000,15672,15671,16080,18000,18001,18002,18004,18008,18080,18082,18088,18090,18098,19001,20000,20720,20880,21000,21501,21502,28018'
const allPorts = '1-65535'

// 计算各预设包含的端口数量
const countPorts = portsStr => {
  if (portsStr === allPorts) return '全部'

  let count = 0
  portsStr.split(',').forEach(part => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(num => parseInt(num))
      count += end - start + 1
    } else {
      count++
    }
  })
  return count
}

const params = defineModel('params', {
  type: Object,
  required: true,
})

const emit = defineEmits(['add-target', 'remove-target', 'apply-port-preset'])

const isDark = inject('isDark')
const targetInput = inject('targetInput')
const targetInputValue = ref('')

// 端口预设详情显示控制
const showPortDetails = ref(false)
const selectedPortPreset = ref(null)

// 使用targetInput注入值与本地值双向绑定
targetInputValue.value = targetInput.value

// 增强的端口预设列表
const portPresets = [
  { name: '主要端口', value: mainPorts, icon: 'mdi:star', count: countPorts(mainPorts) },
  { name: '服务端口', value: servicePorts, icon: 'mdi:server', count: countPorts(servicePorts) },
  { name: '数据库', value: dbPorts, icon: 'mdi:database', count: countPorts(dbPorts) },
  { name: 'Web服务', value: webPorts, icon: 'mdi:web', count: countPorts(webPorts) },
  { name: '全端口', value: allPorts, icon: 'mdi:dots-horizontal', count: countPorts(allPorts) },
  { name: '自定义', value: '', icon: 'mdi:cog-outline', count: null },
]

// 本地添加目标方法
const addTargetLocal = () => {
  targetInput.value = targetInputValue.value // 同步到父组件的输入值
  emit('add-target')
  targetInputValue.value = '' // 清空本地输入框
}

// 本地移除目标方法
const removeTargetLocal = index => {
  emit('remove-target', index)
}

// 显示端口详情
const showPortPresetDetails = preset => {
  if (preset.name !== '自定义') {
    selectedPortPreset.value = preset
    showPortDetails.value = true
  } else {
    showPortDetails.value = false
  }
}

// 本地应用端口预设方法
const applyPortPresetLocal = value => {
  // 查找被选择的预设
  const preset = portPresets.find(p => p.value === value)

  // 如果是自定义，不更改当前值
  if (preset && preset.name === '自定义') {
    showPortDetails.value = false
    return
  }

  // 应用预设值
  emit('apply-port-preset', value)

  // 显示详情
  if (preset) {
    showPortPresetDetails(preset)
  }
}
</script>

<style scoped>
/* 自定义滚动条样式 */
.max-h-24::-webkit-scrollbar {
  width: 4px;
}

.max-h-24::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 10px;
}

.max-h-24::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 10px;
}
</style>
