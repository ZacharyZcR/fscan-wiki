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
        icon="mdi:web"
        class="mr-3 text-2xl"
        :class="isDark ? 'text-blue-400' : 'text-blue-600'"
      />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">
        Web扫描参数
      </h2>
    </div>
    <div class="p-8">
      <!-- 目标URL和URLs文件 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            目标URL (-u)
          </label>
          <input
            v-model="params.u"
            type="text"
            placeholder="指定单个目标URL"
            class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
            :class="
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'
            "
          />
        </div>

        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            URLs文件 (-uf)
          </label>
          <input
            v-model="params.uf"
            type="text"
            placeholder="URLs列表文件路径"
            class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
            :class="
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'
            "
          />
        </div>
      </div>

      <!-- Cookie和Web超时 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            Cookie (-cookie)
          </label>
          <input
            v-model="params.cookie"
            type="text"
            placeholder="自定义Cookie"
            class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
            :class="
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'
            "
          />
        </div>

        <div>
          <label
            class="block mb-3 text-lg font-medium flex justify-between"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            Web超时 (-wt)
            <span :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ params.wt }} 秒</span>
          </label>
          <input
            v-model.number="params.wt"
            type="range"
            min="1"
            max="30"
            step="1"
            class="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-200"
            :class="isDark ? 'bg-gray-700' : 'bg-gray-200'"
          />
        </div>
      </div>

      <!-- 代理设置 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            HTTP代理 (-proxy)
          </label>
          <input
            v-model="params.proxy"
            type="text"
            placeholder="HTTP代理地址 (例如: http://127.0.0.1:8080)"
            class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
            :class="
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'
            "
          />
        </div>

        <div>
          <label
            class="block mb-3 text-lg font-medium"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'"
          >
            Socks5代理 (-socks5)
          </label>
          <input
            v-model="params.socks5"
            type="text"
            placeholder="Socks5代理地址 (例如: 127.0.0.1:1080)"
            class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
            :class="
              isDark
                ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500'
                : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'
            "
          />
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

const isDark = inject('isDark')
</script>

<style scoped>
/* 滑块样式 */
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type='range']::-webkit-slider-thumb:hover {
  background: #2563eb;
  transform: scale(1.1);
}

.dark input[type='range']::-webkit-slider-thumb {
  background: #3b82f6;
  box-shadow: 0 0 4px rgba(59, 130, 246, 0.6);
}
</style>
