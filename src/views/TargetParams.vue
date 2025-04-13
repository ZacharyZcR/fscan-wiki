<template>
  <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
       :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
    <div class="px-8 py-6 border-b flex items-center"
         :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
      <Icon icon="mdi:target" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">目标配置参数</h2>
    </div>
    <div class="p-8">
      <!-- 目标参数区域 -->
      <div class="mb-10">
        <label class="block mb-3 text-lg font-medium"
               :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          目标地址
        </label>
        <div class="flex">
          <input type="text" v-model="targetInputValue" @keyup.enter="addTargetLocal"
                 placeholder="IP/域名/IP段 (例如: 192.168.1.1/24)"
                 class="flex-1 px-4 py-3 text-base rounded-l-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          <button @click="addTargetLocal"
                  class="px-6 py-3 rounded-r-lg text-white text-base transition-all duration-200 flex items-center hover:shadow-md"
                  :class="isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'">
            <Icon icon="mdi:plus" class="mr-2 text-lg" />
            添加
          </button>
        </div>

        <!-- 目标标签 -->
        <div v-if="params.h.length > 0" class="mt-5 flex flex-wrap gap-2">
          <div v-for="(target, index) in params.h" :key="index"
               class="text-sm px-3 py-2 rounded-full flex items-center group transition-all duration-200"
               :class="isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
            <span class="mr-2">{{ target }}</span>
            <button @click="removeTargetLocal(index)" class="text-sm p-0.5 rounded-full group-hover:bg-red-500/20">
              <Icon icon="mdi:close-circle" class="text-base transition-colors duration-200"
                    :class="isDark ? 'text-gray-400 group-hover:text-red-400' : 'text-gray-500 group-hover:text-red-500'" />
            </button>
          </div>
        </div>
      </div>

      <!-- 目标配置选项 - 网格布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- 要排除的主机 -->
        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            排除主机 (-eh)
          </label>
          <input type="text" v-model="params.eh" placeholder="要排除的主机，逗号分隔"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>

        <!-- 端口参数 -->
        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            扫描端口 (-p)
          </label>
          <input type="text" v-model="params.p" placeholder="端口 (例如: 80,443,8080)"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />

          <!-- 端口预设选择器 -->
          <div class="mt-4">
            <label class="block mb-2 text-sm font-medium"
                   :class="isDark ? 'text-gray-400' : 'text-gray-600'">
              端口预设
            </label>
            <div class="flex flex-wrap gap-2">
              <button v-for="preset in portPresets" :key="preset.name"
                      @click="applyPortPresetLocal(preset.value)"
                      class="text-sm px-3 py-2 rounded-lg transition-all duration-200 flex items-center hover:scale-105"
                      :class="[
                        params.p === preset.value ?
                          (isDark ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700') :
                          (isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700')
                      ]">
                <Icon :icon="preset.icon" class="mr-2 text-base"
                      :class="params.p === preset.value ?
                        (isDark ? 'text-white' : 'text-blue-600') :
                        (isDark ? 'text-gray-400' : 'text-gray-500')" />
                {{ preset.name }}
                <span v-if="preset.count" class="ml-1 text-xs opacity-70">({{ preset.count }})</span>
              </button>
            </div>
          </div>

          <!-- 端口预设详情提示 -->
          <div v-if="showPortDetails && selectedPortPreset"
               class="mt-3 p-3 text-sm rounded-lg border"
               :class="isDark ? 'bg-gray-750 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'">
            <div class="flex justify-between items-center">
              <span class="font-medium">{{ selectedPortPreset.name }}端口</span>
              <button @click="showPortDetails = false" class="p-1 text-xs rounded-full hover:bg-gray-200 hover:bg-opacity-20">
                <Icon icon="mdi:close" class="text-base" />
              </button>
            </div>
            <div class="mt-1 max-h-24 overflow-y-auto">
              {{ selectedPortPreset.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- 主机文件和端口文件 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            主机文件 (-hf)
          </label>
          <input type="text" v-model="params.hf" placeholder="从文件中读取主机列表的路径"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>

        <div>
          <label class="block mb-3 text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            端口文件 (-pf)
          </label>
          <input type="text" v-model="params.pf" placeholder="从文件中读取端口列表的路径"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { Icon } from '@iconify/vue';

// 定义Fscan内置的端口预设
const mainPorts = "21,22,23,80,81,110,135,139,143,389,443,445,502,873,993,995,1433,1521,3306,5432,5672,6379,7001,7687,8000,8005,8009,8080,8089,8443,9000,9042,9092,9200,10051,11211,15672,27017,61616";
const servicePorts = "21,22,23,25,110,135,139,143,162,389,445,465,502,587,636,873,993,995,1433,1521,2222,3306,3389,5020,5432,5672,5671,6379,8161,8443,9000,9092,9093,9200,10051,11211,15672,15671,27017,61616,61613";
const dbPorts = "1433,1521,3306,5432,5672,6379,7687,9042,9093,9200,11211,27017,61616";
const webPorts = "80,81,82,83,84,85,86,87,88,89,90,91,92,98,99,443,800,801,808,880,888,889,1000,1010,1080,1081,1082,1099,1118,1888,2008,2020,2100,2375,2379,3000,3008,3128,3505,5555,6080,6648,6868,7000,7001,7002,7003,7004,7005,7007,7008,7070,7071,7074,7078,7080,7088,7200,7680,7687,7688,7777,7890,8000,8001,8002,8003,8004,8005,8006,8008,8009,8010,8011,8012,8016,8018,8020,8028,8030,8038,8042,8044,8046,8048,8053,8060,8069,8070,8080,8081,8082,8083,8084,8085,8086,8087,8088,8089,8090,8091,8092,8093,8094,8095,8096,8097,8098,8099,8100,8101,8108,8118,8161,8172,8180,8181,8200,8222,8244,8258,8280,8288,8300,8360,8443,8448,8484,8800,8834,8838,8848,8858,8868,8879,8880,8881,8888,8899,8983,8989,9000,9001,9002,9008,9010,9043,9060,9080,9081,9082,9083,9084,9085,9086,9087,9088,9089,9090,9091,9092,9093,9094,9095,9096,9097,9098,9099,9100,9200,9443,9448,9800,9981,9986,9988,9998,9999,10000,10001,10002,10004,10008,10010,10051,10250,12018,12443,14000,15672,15671,16080,18000,18001,18002,18004,18008,18080,18082,18088,18090,18098,19001,20000,20720,20880,21000,21501,21502,28018";
const allPorts = "1-65535";

// 计算各预设包含的端口数量
const countPorts = (portsStr) => {
  if (portsStr === allPorts) return "全部";

  let count = 0;
  portsStr.split(',').forEach(part => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(num => parseInt(num));
      count += (end - start + 1);
    } else {
      count++;
    }
  });
  return count;
};

const props = defineProps({
  params: {
    type: Object,
    required: true
  },
  portPresets: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:params', 'add-target', 'remove-target', 'apply-port-preset']);

const isDark = inject('isDark');
const targetInput = inject('targetInput');
const targetInputValue = ref('');

// 端口预设详情显示控制
const showPortDetails = ref(false);
const selectedPortPreset = ref(null);

// 使用targetInput注入值与本地值双向绑定
targetInputValue.value = targetInput.value;

// 增强的端口预设列表
const portPresets = [
  { name: '主要端口', value: mainPorts, icon: 'mdi:star', count: countPorts(mainPorts) },
  { name: '服务端口', value: servicePorts, icon: 'mdi:server', count: countPorts(servicePorts) },
  { name: '数据库', value: dbPorts, icon: 'mdi:database', count: countPorts(dbPorts) },
  { name: 'Web服务', value: webPorts, icon: 'mdi:web', count: countPorts(webPorts) },
  { name: '全端口', value: allPorts, icon: 'mdi:dots-horizontal', count: countPorts(allPorts) },
  { name: '自定义', value: '', icon: 'mdi:cog-outline', count: null }
];

// 本地添加目标方法
const addTargetLocal = () => {
  targetInput.value = targetInputValue.value; // 同步到父组件的输入值
  emit('add-target');
  targetInputValue.value = ''; // 清空本地输入框
};

// 本地移除目标方法
const removeTargetLocal = (index) => {
  emit('remove-target', index);
};

// 显示端口详情
const showPortPresetDetails = (preset) => {
  if (preset.name !== '自定义') {
    selectedPortPreset.value = preset;
    showPortDetails.value = true;
  } else {
    showPortDetails.value = false;
  }
};

// 本地应用端口预设方法
const applyPortPresetLocal = (value) => {
  // 查找被选择的预设
  const preset = portPresets.find(p => p.value === value);

  // 如果是自定义，不更改当前值
  if (preset && preset.name === '自定义') {
    showPortDetails.value = false;
    return;
  }

  // 应用预设值
  emit('apply-port-preset', value);

  // 显示详情
  if (preset) {
    showPortPresetDetails(preset);
  }
};
</script>

<style scoped>
/* 自定义滚动条样式 */
.max-h-24::-webkit-scrollbar {
  width: 4px;
}

.max-h-24::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.max-h-24::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.dark .max-h-24::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}
</style>