<template>
  <div class="mb-16 rounded-xl border overflow-hidden shadow-lg transition-colors duration-300"
       :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
    <div class="px-8 py-6 border-b flex items-center"
         :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'">
      <Icon icon="mdi:tune-vertical" class="mr-3 text-2xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      <h2 class="font-medium text-xl" :class="isDark ? 'text-gray-200' : 'text-gray-700'">扫描控制参数</h2>
    </div>
    <div class="p-8">
      <!-- 扫描插件选择器 -->
      <div class="mb-10">
        <div class="flex justify-between items-center mb-4">
          <label class="text-lg font-medium"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            扫描插件选择 (-m)
          </label>
          <div class="flex space-x-2">
            <button @click="selectAllPlugins"
                    class="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 flex items-center"
                    :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
              <Icon icon="mdi:check-all" class="mr-1 text-base" />
              全选
            </button>
            <button @click="clearPluginSelection"
                    class="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 flex items-center"
                    :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
              <Icon icon="mdi:close-box-multiple-outline" class="mr-1 text-base" />
              清空
            </button>
            <div class="relative">
              <button @click="showPresets = !showPresets"
                      class="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 flex items-center"
                      :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
                <Icon icon="mdi:lightning-bolt" class="mr-1 text-base" />
                预设
                <Icon :icon="showPresets ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="ml-1 text-base" />
              </button>
              <!-- 预设下拉菜单 -->
              <div v-if="showPresets"
                   class="absolute right-0 mt-1 rounded-lg shadow-lg overflow-hidden z-10 w-48 border"
                   :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
                <div class="py-1">
                  <button v-for="preset in pluginPresets" :key="preset.name"
                          @click="applyPluginPreset(preset.value)"
                          class="block w-full text-left px-4 py-2 text-sm transition-colors duration-200"
                          :class="isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'">
                    {{ preset.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 插件搜索 -->
        <div class="mb-4 relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon icon="mdi:magnify" class="text-gray-400 text-lg" />
          </div>
          <input type="text" v-model="pluginSearchQuery" placeholder="搜索插件..."
                 class="pl-10 w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          <button v-if="pluginSearchQuery"
                  @click="pluginSearchQuery = ''"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Icon icon="mdi:close-circle" class="text-gray-400 hover:text-gray-600 text-lg" />
          </button>
        </div>

        <!-- 已选择的插件标签 -->
        <div v-if="selectedPlugins.length > 0" class="mb-4 flex flex-wrap gap-2">
          <div v-for="plugin in selectedPlugins" :key="plugin"
               class="text-sm px-3 py-1.5 rounded-full flex items-center group transition-all duration-200"
               :class="isDark ? 'bg-blue-800/40 text-blue-300 hover:bg-blue-700/40' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'">
            <span class="mr-2">{{ plugin }}</span>
            <button @click="togglePlugin(plugin)" class="text-sm p-0.5 rounded-full group-hover:bg-red-500/20">
              <Icon icon="mdi:close-circle" class="text-base transition-colors duration-200"
                    :class="isDark ? 'text-blue-400 group-hover:text-red-400' : 'text-blue-500 group-hover:text-red-500'" />
            </button>
          </div>
        </div>

        <!-- 分组的插件选择器 -->
        <div class="border rounded-lg overflow-hidden"
             :class="isDark ? 'border-gray-700' : 'border-gray-200'">
          <div v-for="(group, groupName) in filteredPluginGroups" :key="groupName">
            <!-- 分组标题 -->
            <div class="px-4 py-3 flex justify-between items-center cursor-pointer"
                 :class="isDark ? 'bg-gray-750 border-b border-gray-700' : 'bg-gray-50 border-b border-gray-200'"
                 @click="toggleGroup(groupName)">
              <div class="flex items-center">
                <Icon :icon="getGroupIcon(groupName)" class="mr-2 text-xl"
                      :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
                <span class="font-medium" :class="isDark ? 'text-gray-200' : 'text-gray-700'">
                  {{ getGroupDisplayName(groupName) }}
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-sm mr-2" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                  已选 {{ getSelectedCountInGroup(groupName) }}/{{ group.length }}
                </span>
                <Icon :icon="expandedGroups[groupName] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                      :class="isDark ? 'text-gray-400' : 'text-gray-600'" />
              </div>
            </div>

            <!-- 分组内容 -->
            <div v-if="expandedGroups[groupName]"
                 class="px-4 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
                 :class="isDark ? 'bg-gray-800/40 border-b border-gray-700' : 'bg-white border-b border-gray-200'">
              <div v-for="plugin in group" :key="plugin.name"
                   class="flex items-center">
                <label class="flex items-center space-x-2 cursor-pointer"
                       :class="isDark ? 'text-gray-300 hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'">
                  <input type="checkbox"
                         :checked="isPluginSelected(plugin.name)"
                         @change="togglePlugin(plugin.name)"
                         class="form-checkbox h-5 w-5 rounded transition-colors duration-200"
                         :class="isDark ? 'text-blue-500 border-gray-600 bg-gray-700' : 'text-blue-500 border-gray-300 bg-white'" />
                  <span>{{ plugin.name }}</span>
                  <span v-if="plugin.ports && plugin.ports.length" class="text-xs opacity-70"
                        :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                    (端口: {{ formatPorts(plugin.ports) }})
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- 自定义模式输入 -->
        <div class="mt-4">
          <label class="block mb-2 text-sm font-medium"
                 :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            自定义扫描模式 (手动输入，逗号分隔)
          </label>
          <input type="text" v-model.trim="customPluginInput" @input="updateFromCustomInput"
                 placeholder="例如: ssh,ftp,mysql"
                 class="w-full px-4 py-3 text-base rounded-lg border outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
        </div>
      </div>

      <!-- 线程和超时设置 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- 线程数量 -->
        <div>
          <label class="block mb-3 text-lg font-medium flex justify-between"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            扫描线程数 (-t)
            <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-2000</span>
          </label>
          <div class="flex items-center">
            <button @click="decrementThreadNum"
                    class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input type="number" v-model.number="params.t" min="1" max="2000"
                   class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            <button @click="incrementThreadNum"
                    class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- 单次超时时间 -->
        <div>
          <label class="block mb-3 text-lg font-medium flex justify-between"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            单次连接超时时间 (-time)
            <span :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ params.time }} 秒</span>
          </label>
          <input type="range" v-model.number="params.time" min="1" max="30" step="1"
                 class="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-200"
                 :class="isDark ? 'bg-gray-700' : 'bg-gray-200'" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- 模块线程数 -->
        <div>
          <label class="block mb-3 text-lg font-medium flex justify-between"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            模块线程数 (-mt)
            <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-100</span>
          </label>
          <div class="flex items-center">
            <button @click="decrementModuleThreadNum"
                    class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input type="number" v-model.number="params.mt" min="1" max="100"
                   class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            <button @click="incrementModuleThreadNum"
                    class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- 全局超时时间 -->
        <div>
          <label class="block mb-3 text-lg font-medium flex justify-between"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            全局超时时间 (-gt)
            <span :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ params.gt }} 秒</span>
          </label>
          <input type="range" v-model.number="params.gt" min="60" max="600" step="30"
                 class="w-full h-3 rounded-lg appearance-none cursor-pointer transition-all duration-200"
                 :class="isDark ? 'bg-gray-700' : 'bg-gray-200'" />
        </div>
        <!-- 最大重试次数控制 -->
        <div>
          <label class="block mb-3 text-lg font-medium flex justify-between"
                 :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            最大重试次数 (-retry)
            <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-10</span>
          </label>
          <div class="flex items-center">
            <button @click="decrementRetryNum"
                    class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input type="number" v-model.number="params.retry" min="1" max="10"
                   class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                   :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
            <button @click="incrementRetryNum"
                    class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <!-- 存活优先扫描数量 -->
      <div class="mb-8">
        <label class="block mb-3 text-lg font-medium flex justify-between"
               :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          存活优先扫描数量 (-top)
          <span class="text-sm" :class="isDark ? 'text-gray-500' : 'text-gray-500'">1-100</span>
        </label>
        <div class="flex items-center max-w-md mx-auto">
          <button @click="decrementLiveTop"
                  class="px-4 py-3 rounded-l-lg border border-r-0 transition-colors duration-200"
                  :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
            <Icon icon="mdi:minus" class="text-lg" />
          </button>
          <input type="number" v-model.number="params.top" min="1" max="100"
                 class="w-full px-4 py-3 text-base border text-center outline-none transition-colors duration-200"
                 :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-200 focus:border-blue-500' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'" />
          <button @click="incrementLiveTop"
                  class="px-4 py-3 rounded-r-lg border border-l-0 transition-colors duration-200"
                  :class="isDark ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-700'">
            <Icon icon="mdi:plus" class="text-lg" />
          </button>
        </div>
      </div>

      <!-- 扫描控制选项 -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div v-for="(option, key) in scanControlOptions" :key="key"
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
import { ref, inject, computed, watch } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  params: {
    type: Object,
    required: true
  },
  scanControlOptions: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:params', 'toggle-option']);

const isDark = inject('isDark');

// 选择预设下拉菜单控制
const showPresets = ref(false);

// 插件搜索
const pluginSearchQuery = ref('');

// 插件组展开状态
const expandedGroups = ref({
  'network': true,
  'database': true,
  'web': true,
  'vulnerability': true,
  'windows': true,
  'local': false
});

// 自定义插件输入
const customPluginInput = ref('');

// 扫描插件数据
const plugins = ref([
  // 标准网络服务扫描插件
  { name: 'ftp', group: 'network', ports: [21], description: 'FTP服务扫描' },
  { name: 'ssh', group: 'network', ports: [22, 2222], description: 'SSH服务扫描' },
  { name: 'telnet', group: 'network', ports: [23], description: 'Telnet服务扫描' },
  { name: 'findnet', group: 'network', ports: [135], description: 'Windows网络发现' },
  { name: 'netbios', group: 'network', ports: [139], description: 'NetBIOS服务扫描' },
  { name: 'smb', group: 'network', ports: [445], description: 'SMB服务扫描' },
  { name: 'rdp', group: 'network', ports: [3389, 13389, 33389], description: '远程桌面服务扫描' },
  { name: 'vnc', group: 'network', ports: [5900, 5901, 5902], description: 'VNC服务扫描' },
  { name: 'ldap', group: 'network', ports: [389, 636], description: 'LDAP服务扫描' },
  { name: 'smtp', group: 'network', ports: [25, 465, 587], description: 'SMTP服务扫描' },
  { name: 'imap', group: 'network', ports: [143, 993], description: 'IMAP服务扫描' },
  { name: 'pop3', group: 'network', ports: [110, 995], description: 'POP3服务扫描' },
  { name: 'snmp', group: 'network', ports: [161, 162], description: 'SNMP服务扫描' },
  { name: 'modbus', group: 'network', ports: [502, 5020], description: 'Modbus协议扫描' },
  { name: 'rsync', group: 'network', ports: [873], description: 'Rsync服务扫描' },

  // 数据库服务
  { name: 'mssql', group: 'database', ports: [1433, 1434], description: 'MSSQL数据库扫描' },
  { name: 'oracle', group: 'database', ports: [1521, 1522, 1526], description: 'Oracle数据库扫描' },
  { name: 'mysql', group: 'database', ports: [3306, 3307, 13306, 33306], description: 'MySQL数据库扫描' },
  { name: 'postgres', group: 'database', ports: [5432, 5433], description: 'PostgreSQL数据库扫描' },
  { name: 'redis', group: 'database', ports: [6379, 6380, 16379], description: 'Redis数据库扫描' },
  { name: 'memcached', group: 'database', ports: [11211], description: 'Memcached服务扫描' },
  { name: 'mongodb', group: 'database', ports: [27017, 27018], description: 'MongoDB数据库扫描' },
  { name: 'cassandra', group: 'database', ports: [9042], description: 'Cassandra数据库扫描' },
  { name: 'neo4j', group: 'database', ports: [7687], description: 'Neo4j图数据库扫描' },
  { name: 'elasticsearch', group: 'database', ports: [9200, 9300], description: 'Elasticsearch服务扫描' },
  { name: 'rabbitmq', group: 'database', ports: [5672, 5671, 15672, 15671], description: 'RabbitMQ消息队列扫描' },
  { name: 'kafka', group: 'database', ports: [9092, 9093], description: 'Kafka消息队列扫描' },
  { name: 'activemq', group: 'database', ports: [61613], description: 'ActiveMQ消息队列扫描' },

  // Web应用扫描插件
  { name: 'webtitle', group: 'web', ports: [], description: 'Web标题扫描' },
  { name: 'webpoc', group: 'web', ports: [], description: 'Web漏洞检测' },

  // 特殊漏洞扫描插件
  { name: 'ms17010', group: 'vulnerability', ports: [445], description: 'MS17-010永恒之蓝漏洞' },

  // Windows系统专用插件
  { name: 'smb', group: 'windows', ports: [445], description: 'SMB扫描' },
  { name: 'smb2', group: 'windows', ports: [445], description: 'SMB2扫描' },

  // 本地信息收集插件
  { name: 'localinfo', group: 'local', ports: [], description: '本地信息收集' },
  { name: 'dcinfo', group: 'local', ports: [], description: '域控信息收集' },
  { name: 'minidump', group: 'local', ports: [], description: '内存转储' },
]);

// 插件预设
const pluginPresets = [
  { name: '全部模式 (All)', value: 'all' },
  { name: 'Web扫描', value: 'web,webtitle,webpoc' },
  { name: '数据库扫描', value: 'mssql,oracle,mysql,postgres,redis,mongodb,elasticsearch' },
  { name: '网络服务扫描', value: 'ftp,ssh,telnet,smb,rdp,vnc,smtp,pop3,imap' },
  { name: '漏洞检测', value: 'ms17010,webpoc' },
];

// 按分组获取所有插件
const pluginGroups = computed(() => {
  const groups = {};
  plugins.value.forEach(plugin => {
    if (!groups[plugin.group]) {
      groups[plugin.group] = [];
    }
    groups[plugin.group].push(plugin);
  });
  return groups;
});

// 根据搜索过滤插件
const filteredPluginGroups = computed(() => {
  if (!pluginSearchQuery.value) {
    return pluginGroups.value;
  }

  const query = pluginSearchQuery.value.toLowerCase();
  const filtered = {};

  for (const [group, pluginList] of Object.entries(pluginGroups.value)) {
    const matchedPlugins = pluginList.filter(plugin =>
        plugin.name.toLowerCase().includes(query) ||
        plugin.description.toLowerCase().includes(query)
    );

    if (matchedPlugins.length > 0) {
      filtered[group] = matchedPlugins;
    }
  }

  return filtered;
});

// 获取当前选中的插件
const selectedPlugins = computed(() => {
  if (!props.params.m) return [];

  // 如果是预设值，转换成实际插件列表
  if (props.params.m.toLowerCase() === 'all') {
    return plugins.value.map(p => p.name);
  }
  if (props.params.m.toLowerCase() === 'ps') {
    return ['ps'];
  }
  if (props.params.m.toLowerCase() === 'brute') {
    return ['brute'];
  }

  return props.params.m.split(',').map(p => p.trim()).filter(p => p);
});

// 格式化端口显示
const formatPorts = (ports) => {
  if (!ports || ports.length === 0) return '';
  return ports.join(',');
};

// 获取分组图标
const getGroupIcon = (group) => {
  const icons = {
    'network': 'mdi:lan',
    'database': 'mdi:database',
    'web': 'mdi:web',
    'vulnerability': 'mdi:shield-alert',
    'windows': 'mdi:microsoft-windows',
    'local': 'mdi:laptop',
  };
  return icons[group] || 'mdi:folder';
};

// 获取分组显示名称
const getGroupDisplayName = (group) => {
  const names = {
    'network': '网络服务',
    'database': '数据库服务',
    'web': 'Web应用',
    'vulnerability': '漏洞检测',
    'windows': 'Windows专用',
    'local': '本地信息收集',
  };
  return names[group] || group;
};

// 获取分组中选中的插件数量
const getSelectedCountInGroup = (group) => {
  const groupPlugins = pluginGroups.value[group] || [];
  let count = 0;

  groupPlugins.forEach(plugin => {
    if (isPluginSelected(plugin.name)) {
      count++;
    }
  });

  return count;
};

// 检查插件是否被选中
const isPluginSelected = (pluginName) => {
  return selectedPlugins.value.includes(pluginName);
};

// 切换分组展开/收起状态
const toggleGroup = (group) => {
  expandedGroups.value[group] = !expandedGroups.value[group];
};

// 切换插件选择状态
const togglePlugin = (pluginName) => {
  const selected = [...selectedPlugins.value];

  if (selected.includes(pluginName)) {
    // 移除插件
    const index = selected.indexOf(pluginName);
    selected.splice(index, 1);
  } else {
    // 添加插件
    selected.push(pluginName);
  }

  // 更新参数
  props.params.m = selected.join(',');

  // 更新自定义输入
  customPluginInput.value = props.params.m;
};

// 全选插件
const selectAllPlugins = () => {
  props.params.m = plugins.value.map(p => p.name).join(',');
  customPluginInput.value = props.params.m;
};

// 清空插件选择
const clearPluginSelection = () => {
  props.params.m = '';
  customPluginInput.value = '';
};

// 应用插件预设
const applyPluginPreset = (presetValue) => {
  props.params.m = presetValue;
  customPluginInput.value = presetValue;
  showPresets.value = false;
};

// 从自定义输入更新
const updateFromCustomInput = () => {
  props.params.m = customPluginInput.value;
};

// 线程数控制
const incrementThreadNum = () => {
  if (props.params.t < 2000) {
    props.params.t++;
  }
};

const decrementThreadNum = () => {
  if (props.params.t > 1) {
    props.params.t--;
  }
};

// 模块线程数控制
const incrementModuleThreadNum = () => {
  if (props.params.mt < 100) {
    props.params.mt++;
  }
};

const decrementModuleThreadNum = () => {
  if (props.params.mt > 1) {
    props.params.mt--;
  }
};

// 重试次数控制
const incrementRetryNum = () => {
  if (props.params.retry < 10) {
    props.params.retry++;
  }
};

const decrementRetryNum = () => {
  if (props.params.retry > 1) {
    props.params.retry--;
  }
};

// 存活优先扫描数量控制
const incrementLiveTop = () => {
  if (props.params.top < 100) {
    props.params.top++;
  }
};

const decrementLiveTop = () => {
  if (props.params.top > 1) {
    props.params.top--;
  }
};

// 切换选项本地方法
const toggleOptionLocal = (key, option) => {
  emit('toggle-option', key, option);
};

// 初始化时同步自定义输入框
watch(() => props.params.m, (value) => {
  if (value !== customPluginInput.value) {
    customPluginInput.value = value;
  }
}, { immediate: true });
</script>

<style scoped>
/* 滑块样式 */
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #2563eb;
  transform: scale(1.1);
}

.dark input[type="range"]::-webkit-slider-thumb {
  background: #3b82f6;
  box-shadow: 0 0 4px rgba(59, 130, 246, 0.6);
}

/* 自定义复选框样式 */
.form-checkbox {
  appearance: none;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
}

.form-checkbox:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

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