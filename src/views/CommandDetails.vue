<template>
  <div class="rounded-xl border overflow-hidden shadow-lg transition-colors duration-300 mb-16"
       :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
    <div class="px-8 py-6 border-b flex items-center"
         :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
      <Icon icon="mdi:information-outline" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">命令详情</h2>
    </div>
    <div class="p-8">
      <div :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        <p class="text-2xl font-medium mb-8">当前命令将执行以下操作：</p>

        <!-- 未添加目标时的提示 -->
        <div v-if="!hasTargets"
             class="p-8 rounded-lg mb-8 flex items-center border text-center"
             :class="isDark ? 'bg-red-900/10 text-red-300 border-red-800/20' : 'bg-red-50 text-red-600 border-red-100'">
          <Icon icon="mdi:alert-circle-outline" class="text-3xl mr-5 flex-shrink-0" />
          <p class="text-lg">请添加目标地址以开始构建命令。您可以添加单个IP、域名或CIDR格式的IP段（例如：192.168.1.1/24）。</p>
        </div>

        <!-- 已添加目标时的详情列表 -->
        <div v-else>
          <ul class="space-y-6 mb-8">
            <li class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
              <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                   :class="isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'">
                <Icon icon="mdi:target" class="text-2xl" />
              </div>
              <div>
                <div class="font-medium text-xl">扫描目标</div>
                <div v-if="params.h.length > 0" class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  {{ params.h.join(', ') }}
                  <span v-if="params.h.length > 1" class="text-sm ml-2 opacity-70">(多个目标)</span>
                </div>
                <div v-else-if="params.u" class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  {{ params.u }}
                  <span class="text-sm ml-2 opacity-70">(URL)</span>
                </div>
                <div v-else-if="params.uf" class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  从文件加载: {{ params.uf }}
                  <span class="text-sm ml-2 opacity-70">(URLs文件)</span>
                </div>
                <div v-else-if="params.hf" class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  从文件加载: {{ params.hf }}
                  <span class="text-sm ml-2 opacity-70">(主机文件)</span>
                </div>
              </div>
            </li>

            <li v-if="params.p" class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
              <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                   :class="isDark ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-50 text-purple-600'">
                <Icon icon="mdi:lan-connect" class="text-2xl" />
              </div>
              <div>
                <div class="font-medium text-xl">扫描端口</div>
                <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  {{ params.p }}
                </div>
              </div>
            </li>

            <li class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
              <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                   :class="isDark ? 'bg-green-900/20 text-green-400' : 'bg-green-50 text-green-600'">
                <Icon icon="mdi:speedometer" class="text-2xl" />
              </div>
              <div>
                <div class="font-medium text-xl">扫描性能</div>
                <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  使用 <span class="font-medium">{{ params.t }}</span> 个线程进行扫描，
                  单次连接超时 <span class="font-medium">{{ params.time }}</span> 秒，
                  全局超时 <span class="font-medium">{{ params.gt }}</span> 秒
                </div>
              </div>
            </li>

            <li v-if="params.o" class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
              <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                   :class="isDark ? 'bg-amber-900/20 text-amber-400' : 'bg-amber-50 text-amber-600'">
                <Icon icon="mdi:file-document-outline" class="text-2xl" />
              </div>
              <div>
                <div class="font-medium text-xl">结果输出</div>
                <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  扫描结果将保存到 <span class="font-medium">{{ params.o }}</span> 文件中
                  <span v-if="params.f && params.f !== 'txt'">({{ params.f }}格式)</span>
                </div>
              </div>
            </li>

            <!-- 已启用的特殊选项 -->
            <li v-for="option in enabledOptions" :key="option.param"
                class="flex items-start p-6 rounded-xl transition-colors duration-200 hover:bg-opacity-50"
                :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
              <div class="p-3 rounded-xl mr-5 flex-shrink-0 mt-0.5"
                   :class="isDark ? 'bg-indigo-900/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'">
                <Icon :icon="option.icon || 'mdi:check-circle'" class="text-2xl" />
              </div>
              <div>
                <div class="font-medium text-xl">{{ option.name }}</div>
                <div class="text-lg mt-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  {{ option.detail || option.description }}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 提示信息 - 更宽敞 -->
        <div class="p-8 rounded-xl border border-dashed"
             :class="isDark ? 'border-gray-700 bg-gray-700/30' : 'border-gray-300 bg-gray-50'">
          <div class="flex items-start">
            <div class="p-3 rounded-full mr-5 flex-shrink-0"
                 :class="isDark ? 'bg-yellow-900/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'">
              <Icon icon="mdi:lightbulb-outline" class="text-2xl" />
            </div>
            <div>
              <p class="font-medium mb-4 text-xl">安全使用提示</p>
              <p class="text-lg leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                Fscan 是一款内网综合扫描工具，支持端口扫描、服务识别、漏洞检测等功能。在高安全环境下使用时，请合理设置线程数和超时时间，避免触发安全设备告警。建议在非生产环境先行测试，确保扫描不会对目标系统造成负面影响。
              </p>
            </div>
          </div>
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
  hasTargets: {
    type: Boolean,
    required: true
  },
  enabledOptions: {
    type: Array,
    required: true
  }
});

const isDark = inject('isDark');
</script>