<template>
  <div
    class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
    :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'"
  >
    <div
      class="px-8 py-6 border-b flex items-center"
      :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'"
    >
      <Icon
        icon="mdi:file-document-outline"
        class="mr-3 text-2xl"
        :class="isDark ? 'text-blue-400' : 'text-blue-600'"
      />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">
        输出与显示控制参数
      </h2>
    </div>
    <div class="p-8">
      <!-- 输出文件和格式 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            输出文件 (-o)
          </label>
          <div class="flex items-center">
            <div
              class="flex-shrink-0 px-4 py-3 text-base border-y border-l rounded-l-lg"
              :class="
                isDark
                  ? 'bg-gray-700 border-gray-600 text-gray-400'
                  : 'bg-gray-100 border-gray-300 text-gray-600'
              "
            >
              <Icon icon="mdi:file-document-outline" class="text-lg" />
            </div>
            <input
              v-model="params.o"
              type="text"
              placeholder="结果输出文件名 (默认: result.txt)"
              class="flex-1 px-4 py-3 text-base border rounded-r-lg outline-none transition-colors duration-200"
              :class="[
                outputOptions.no.enabled
                  ? isDark
                    ? 'bg-gray-700/50 border-gray-600 text-gray-400'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
                  : isDark
                    ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500',
              ]"
              :disabled="outputOptions.no.enabled"
            />
          </div>
          <div
            v-if="outputOptions.no.enabled"
            class="mt-2 text-xs"
            :class="isDark ? 'text-amber-400' : 'text-amber-600'"
          >
            <Icon icon="mdi:alert-circle-outline" class="inline-block mr-1" />
            已启用禁用保存选项，输出文件设置将被忽略
          </div>
        </div>

        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            输出格式 (-f)
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:format-list-bulleted" class="text-gray-400 text-lg" />
            </div>
            <select
              v-model="params.f"
              class="pl-10 w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200 appearance-none"
              :class="[
                outputOptions.no.enabled
                  ? isDark
                    ? 'bg-gray-700/50 border-gray-600 text-gray-400'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
                  : isDark
                    ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                    : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500',
              ]"
              :disabled="outputOptions.no.enabled"
            >
              <option value="txt">文本格式 (txt)</option>
              <option value="json">JSON格式 (json)</option>
              <option value="csv">CSV格式 (csv)</option>
            </select>
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Icon icon="mdi:chevron-down" class="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
      </div>

      <!-- 日志级别 -->
      <div class="mb-8">
        <label
          class="block mb-3 text-lg font-medium"
          :class="isDark ? 'text-gray-300' : 'text-gray-700'"
        >
          日志级别 (-log)
        </label>
        <div class="grid grid-cols-5 gap-2">
          <button
            v-for="level in logLevels"
            :key="level.value"
            class="flex flex-col items-center justify-center py-3 px-2 rounded-lg border transition-all duration-200"
            :class="[
              params.log === level.value
                ? isDark
                  ? 'bg-blue-900/30 border-blue-500/40 text-blue-300'
                  : 'bg-blue-50 border-blue-200 text-blue-700'
                : isDark
                  ? 'bg-gray-750 border-gray-700 text-gray-400 hover:bg-gray-700'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100',
            ]"
            @click="setLogLevel(level.value)"
          >
            <Icon
              :icon="level.icon"
              class="text-xl mb-1"
              :class="
                params.log === level.value
                  ? isDark
                    ? 'text-blue-400'
                    : 'text-blue-600'
                  : isDark
                    ? 'text-gray-500'
                    : 'text-gray-500'
              "
            />
            <span class="text-sm font-medium">{{ level.label }}</span>
            <span class="text-xs mt-1 opacity-70">{{ level.description }}</span>
          </button>
        </div>
      </div>

      <!-- 输出控制选项 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(option, key) in outputOptions"
          :key="key"
          class="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
          :class="[
            option.enabled
              ? isDark
                ? 'bg-blue-900/30 border border-blue-500/20'
                : 'bg-blue-50 border border-blue-100'
              : isDark
                ? 'bg-gray-750 border border-gray-700'
                : 'bg-gray-50 border border-gray-200',
          ]"
        >
          <div class="flex-1">
            <div
              class="font-medium text-base flex items-center"
              :class="isDark ? 'text-gray-200' : 'text-gray-700'"
            >
              <Icon
                :icon="option.icon"
                class="mr-2 text-xl"
                :class="
                  option.enabled
                    ? isDark
                      ? 'text-blue-400'
                      : 'text-blue-600'
                    : isDark
                      ? 'text-gray-500'
                      : 'text-gray-400'
                "
              />
              {{ option.name }}
            </div>
            <div class="text-sm mt-1.5 ml-7" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
              {{ option.description }}
            </div>
          </div>
          <!-- 开关样式 -->
          <button class="flex-shrink-0 ml-4" @click="toggleOptionLocal(key, option)">
            <div
              class="w-14 h-7 rounded-full transition-colors duration-200 flex items-center px-0.5"
              :class="option.enabled ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'"
            >
              <div
                class="w-6 h-6 rounded-full bg-white transform transition-transform duration-200 shadow-md"
                :class="option.enabled ? 'translate-x-7' : 'translate-x-0'"
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { Icon } from '@iconify/vue'

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

  // 如果启用了禁用保存，禁用输出文件和格式设置
  if (key === 'no' && option.enabled) {
    // 这里不重置值，只是UI上显示禁用状态
  }
}
</script>

<style scoped>
/* 自定义下拉选择器样式 */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.dark select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}
</style>
