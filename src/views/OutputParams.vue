<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:file-document-outline" class="text-2xl text-primary" />
        <CardTitle>输出与显示控制参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 输出文件和格式 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">输出文件 (-o)</label>
          <div class="flex items-center">
            <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
              <Icon icon="mdi:file-document-outline" class="text-lg" />
            </div>
            <input
              v-model="params.o"
              type="text"
              placeholder="结果输出文件名 (默认: result.txt)"
              class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              :class="{ 'opacity-50': outputOptions.no.enabled }"
              :disabled="outputOptions.no.enabled"
            />
          </div>
          <div v-if="outputOptions.no.enabled" class="mt-2 flex items-center gap-1 text-xs text-amber-500">
            <Icon icon="mdi:alert-circle-outline" />
            <span>已启用禁用保存选项，输出文件设置将被忽略</span>
          </div>
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">输出格式 (-f)</label>
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon icon="mdi:format-list-bulleted" class="text-lg text-muted-foreground" />
            </div>
            <select
              v-model="params.f"
              class="w-full appearance-none rounded-lg border border-input bg-background px-4 py-3 pl-10 pr-10 text-base outline-none transition-colors focus:border-ring"
              :class="{ 'opacity-50': outputOptions.no.enabled }"
              :disabled="outputOptions.no.enabled"
            >
              <option value="txt">文本格式 (txt)</option>
              <option value="json">JSON格式 (json)</option>
              <option value="csv">CSV格式 (csv)</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Icon icon="mdi:chevron-down" class="text-lg text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <!-- 日志级别 -->
      <div class="mb-8">
        <label class="mb-4 block text-lg font-medium">日志级别 (-log)</label>
        <div class="grid grid-cols-5 gap-2">
          <button
            v-for="level in logLevels"
            :key="level.value"
            type="button"
            class="flex flex-col items-center justify-center rounded-lg border px-2 py-3 transition-all"
            :class="
              params.log === level.value
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border bg-muted/50 text-muted-foreground hover:bg-muted'
            "
            @click="setLogLevel(level.value)"
          >
            <Icon :icon="level.icon" class="mb-1 text-xl" />
            <span class="text-sm font-medium">{{ level.label }}</span>
            <span class="mt-1 text-xs opacity-70">{{ level.description }}</span>
          </button>
        </div>
      </div>

      <!-- 输出控制选项 -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(option, key) in outputOptions"
          :key="key"
          class="flex items-center justify-between rounded-xl border p-5 transition-all"
          :class="option.enabled ? 'border-primary/20 bg-primary/10' : 'border-border bg-muted/50 hover:bg-muted'"
        >
          <div class="flex-1">
            <div class="flex items-center text-base font-medium">
              <Icon
                :icon="option.icon"
                class="mr-2 text-xl"
                :class="option.enabled ? 'text-primary' : 'text-muted-foreground'"
              />
              {{ option.name }}
            </div>
            <div class="ml-7 mt-1.5 text-sm text-muted-foreground">
              {{ option.description }}
            </div>
          </div>
          <!-- Toggle Switch -->
          <button
            type="button"
            class="relative ml-4 inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :class="option.enabled ? 'bg-primary' : 'bg-input'"
            role="switch"
            :aria-checked="option.enabled"
            @click="toggleOptionLocal(key, option)"
          >
            <span
              class="pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform"
              :class="option.enabled ? 'translate-x-7' : 'translate-x-0'"
            ></span>
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
import { inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const params = defineModel('params', {
  type: Object,
  required: true,
})

const props = defineProps({
  outputOptions: {
    type: Object,
    default: () => ({
      no: {
        name: '禁用结果保存',
        description: '不保存扫描结果到文件中',
        param: 'no',
        enabled: false,
        icon: 'mdi:content-save-off',
        detail: '不将扫描结果保存到文件中，仅在控制台显示',
      },
      silent: {
        name: '静默模式',
        description: 'ICMP探测过程不输出信息',
        param: 'silent',
        enabled: false,
        icon: 'mdi:volume-off',
        detail: '在ICMP探测过程中不输出信息，减少控制台输出',
      },
      nocolor: {
        name: '禁用彩色输出',
        description: '禁用控制台彩色输出',
        param: 'nocolor',
        enabled: false,
        icon: 'mdi:palette-outline',
        detail: '禁用控制台的彩色文本输出，适用于不支持ANSI颜色的终端',
      },
      pg: {
        name: '显示进度条',
        description: '显示扫描进度条',
        param: 'pg',
        enabled: false,
        icon: 'mdi:progress-helper',
        detail: '在控制台显示扫描过程的进度条',
      },
      sp: {
        name: '显示扫描计划',
        description: '扫描前显示详细的扫描计划',
        param: 'sp',
        enabled: false,
        icon: 'mdi:clipboard-list',
        detail: '在开始扫描前显示详细的扫描执行计划',
      },
      slow: {
        name: '慢速日志输出',
        description: '使用慢速日志输出模式',
        param: 'slow',
        enabled: false,
        icon: 'mdi:timer-sand',
        detail: '使用慢速日志输出模式，减轻屏幕刷新压力',
      },
    }),
  },
})

const emit = defineEmits(['toggle-option'])

const isDark = inject('isDark')

// 日志级别选项
const logLevels = [
  { value: 'DEBUG', label: '调试', icon: 'mdi:bug-outline', description: '最详细' },
  { value: 'ALL', label: '全部', icon: 'mdi:text-box-outline', description: '完整信息' },
  { value: 'INFO', label: '信息', icon: 'mdi:information-outline', description: '一般信息' },
  { value: 'SUCCESS', label: '成功', icon: 'mdi:check-circle-outline', description: '仅成功' },
  { value: 'ERROR', label: '错误', icon: 'mdi:alert-circle-outline', description: '仅错误' },
]

// 设置日志级别
const setLogLevel = level => {
  params.value.log = level
}

// 切换选项本地方法
const toggleOptionLocal = (key, option) => {
  emit('toggle-option', key, option)
}
</script>
