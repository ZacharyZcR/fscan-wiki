<template>
  <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
       :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
    <div class="px-8 py-6 border-b flex items-center"
         :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
      <Icon icon="mdi:bug" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">POC测试参数</h2>
    </div>
    <div class="p-8">
      <!-- POC路径和名称 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            POC路径 (-pocpath)
          </label>
          <input type="text" v-model="params.pocpath" placeholder="自定义POC文件路径"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>

        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            POC名称 (-pocname)
          </label>
          <input type="text" v-model="params.pocname" placeholder="指定POC名称"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>
      </div>

      <!-- POC线程数 -->
      <div class="mb-8">
        <label class="block mb-3 text-lg font-medium flex justify-between"
               :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          POC线程数 (-num)
          <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-100</span>
        </label>
        <div class="flex items-center">
          <button @click="decrementPocNum"
                  class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                  :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
            <Icon icon="mdi:minus" class="text-lg" />
          </button>
          <input type="number" v-model.number="params.num" min="1" max="100"
                 class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          <button @click="incrementPocNum"
                  class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                  :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
            <Icon icon="mdi:plus" class="text-lg" />
          </button>
        </div>
      </div>

      <!-- POC测试选项 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(option, key) in pocOptions" :key="key"
             class="flex items-center justify-between p-5 rounded-xl transition-all duration-200 hover:shadow-md"
             :class="[option.enabled ?
                     (isDark ? 'bg-blue-900/30 border border-blue-500/20' : 'bg-blue-50 border border-blue-100') :
                     (isDark ? 'bg-gray-750 border border-gray-700' : 'bg-gray-50 border border-gray-200')]">
          <div class="flex-1">
            <div class="font-medium text-base flex items-center"
                 :class="isDark ? 'text-gray-200' : 'text-gray-700'">
              <Icon :icon="option.icon" class="mr-2 text-xl"
                    :class="option.enabled ? (isDark ? 'text-blue-400' : 'text-blue-600') : (isDark ? 'text-gray-500' : 'text-gray-400')" />
              {{ option.name }}
            </div>
            <div class="text-sm mt-1.5 ml-7"
                 :class="isDark ? 'text-gray-400' : 'text-gray-500'">
              {{ option.description }}
            </div>
          </div>
          <!-- 开关样式 -->
          <button @click="toggleOptionLocal(key, option)" class="flex-shrink-0 ml-4">
            <div class="w-14 h-7 rounded-full transition-colors duration-200 flex items-center px-0.5"
                 :class="option.enabled ? 'bg-blue-600' : (isDark ? 'bg-gray-600' : 'bg-gray-300')">
              <div class="w-6 h-6 rounded-full bg-white transform transition-transform duration-200 shadow-md"
                   :class="option.enabled ? 'translate-x-7' : 'translate-x-0'"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  params: {
    type: Object,
    required: true
  },
  pocOptions: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:params', 'toggle-option']);

const isDark = inject('isDark');

// POC线程数控制
const incrementPocNum = () => {
  if (props.params.num < 100) {
    props.params.num++;
  }
};

const decrementPocNum = () => {
  if (props.params.num > 1) {
    props.params.num--;
  }
};

// 切换选项本地方法
const toggleOptionLocal = (key, option) => {
  emit('toggle-option', key, option);
};
</script>

<style scoped>
/* 修复 input number 箭头样式 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>