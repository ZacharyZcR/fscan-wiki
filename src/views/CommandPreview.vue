<template>
  <div class="sticky top-20 z-30 mb-16">
    <div class="rounded-xl overflow-hidden shadow-xl transition-all duration-300 border"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-8 py-6 border-b flex justify-between items-center"
           :class="isDark ? 'border-gray-700 bg-gray-800/90 backdrop-blur-sm' : 'border-gray-200 bg-white/90 backdrop-blur-sm'">
        <div class="flex items-center">
          <Icon icon="mdi:console" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <span class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">命令预览</span>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="$emit('reset')"
                  class="text-sm px-5 py-3 rounded-lg transition-all duration-200 flex items-center hover:scale-105"
                  :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'">
            <Icon icon="mdi:refresh" class="mr-2 text-base" />
            重置
          </button>
          <button @click="$emit('copy')"
                  :disabled="!hasTargets"
                  class="text-sm px-5 py-3 rounded-lg transition-all duration-200 flex items-center hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'">
            <Icon icon="mdi:content-copy" class="mr-2 text-base" />
            复制命令
          </button>
        </div>
      </div>
      <div class="relative">
        <!-- 命令预览区域 -->
        <div class="p-8 overflow-x-auto font-mono text-base whitespace-pre-wrap break-all min-h-[80px]"
             :class="isDark ? 'text-gray-300 bg-gray-800/95 backdrop-blur-sm' : 'text-gray-800 bg-white/95 backdrop-blur-sm'">
          <!-- 无目标时显示提示 -->
          <div v-if="!hasTargets" class="text-gray-500 italic flex items-center justify-center h-full">
            <Icon icon="mdi:information-outline" class="mr-2 text-xl" />
            添加目标地址后，命令将显示在这里
          </div>

          <!-- 有目标时显示命令 -->
          <div v-else>
            <span class="text-green-500 dark:text-green-400">./fscan</span>
            <span v-for="(part, index) in formattedCommand" :key="index"
                  :class="part.type === 'param' ? 'text-blue-600 dark:text-blue-400' :
                          part.type === 'value' ? 'text-yellow-600 dark:text-yellow-400' : ''">
              {{ part.text }}
            </span>
          </div>
        </div>

        <!-- 复制成功提示 -->
        <Transition name="fade">
          <div v-if="showCopySuccess"
               class="absolute bottom-4 right-4 py-2 px-4 rounded-full text-sm font-medium flex items-center shadow-lg"
               :class="isDark ? 'bg-green-600/90 text-white' : 'bg-green-100 text-green-800 border border-green-200'">
            <Icon icon="mdi:check-circle" class="mr-2 text-base" />
            <span>复制成功!</span>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  params: {
    type: Object,
    required: true
  },
  hasTargets: {
    type: Boolean,
    required: true
  }
});

defineEmits(['reset', 'copy']);

const isDark = inject('isDark');
const showCopySuccess = inject('showCopySuccess');

// 格式化命令，用于着色显示
const formattedCommand = computed(() => {
  // 如果没有目标，返回空数组
  if (!props.hasTargets) {
    return [];
  }

  const parts = [];

  // 添加目标
  if (props.params.h.length > 0) {
    parts.push({ type: 'param', text: ' -h' });
    parts.push({ type: 'value', text: ' ' + props.params.h.join(',') });
  }

  // 添加其他参数
  for (const [key, value] of Object.entries(props.params)) {
    if (key === 'h') continue; // 已处理
    if (value && value !== '') {
      if (typeof value === 'boolean') {
        if (value) parts.push({ type: 'param', text: ' -' + key });
      } else {
        parts.push({ type: 'param', text: ' -' + key });
        parts.push({ type: 'value', text: ' ' + value });
      }
    }
  }

  return parts;
});
</script>

<style scoped>
/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>