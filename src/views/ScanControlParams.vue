<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:tune-vertical" class="text-2xl text-primary" />
        <CardTitle>扫描控制参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 扫描插件选择器 -->
      <div class="mb-10">
        <div class="mb-4 flex items-center justify-between">
          <label class="text-lg font-medium">扫描插件选择 (-m)</label>
          <div class="flex space-x-2">
            <Button variant="outline" size="sm" @click="selectAllPlugins">
              <Icon icon="mdi:check-all" class="mr-1 text-base" />
              全选
            </Button>
            <Button variant="outline" size="sm" @click="clearPluginSelection">
              <Icon icon="mdi:close-box-multiple-outline" class="mr-1 text-base" />
              清空
            </Button>
            <div class="relative">
              <Button variant="outline" size="sm" @click="showPresets = !showPresets">
                <Icon icon="mdi:lightning-bolt" class="mr-1 text-base" />
                预设
                <Icon
                  :icon="showPresets ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                  class="ml-1 text-base"
                />
              </Button>
              <!-- 预设下拉菜单 -->
              <div
                v-if="showPresets"
                class="absolute right-0 z-10 mt-1 w-48 overflow-hidden rounded-lg border border-border bg-card shadow-lg"
              >
                <div class="py-1">
                  <button
                    v-for="preset in pluginPresets"
                    :key="preset.name"
                    type="button"
                    class="block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-accent"
                    @click="applyPluginPreset(preset.value)"
                  >
                    {{ preset.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 插件搜索 -->
        <div class="relative mb-4">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon icon="mdi:magnify" class="text-lg text-muted-foreground" />
          </div>
          <input
            v-model="pluginSearchQuery"
            type="text"
            placeholder="搜索插件..."
            class="w-full rounded-lg border border-input bg-background px-4 py-3 pl-10 text-base outline-none transition-colors focus:border-ring"
          />
          <button
            v-if="pluginSearchQuery"
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
            @click="pluginSearchQuery = ''"
          >
            <Icon icon="mdi:close-circle" class="text-lg text-muted-foreground hover:text-foreground" />
          </button>
        </div>

        <!-- 已选择的插件标签 -->
        <div v-if="selectedPlugins.length > 0" class="mb-4 flex flex-wrap gap-2">
          <div
            v-for="plugin in selectedPlugins"
            :key="plugin"
            class="group flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary transition-all hover:bg-primary/20"
          >
            <span class="mr-2">{{ plugin }}</span>
            <button
              type="button"
              class="rounded-full p-0.5 text-sm transition-colors group-hover:text-destructive"
              @click="togglePlugin(plugin)"
            >
              <Icon icon="mdi:close-circle" class="text-base" />
            </button>
          </div>
        </div>

        <!-- 分组的插件选择器 -->
        <div class="overflow-hidden rounded-lg border border-border">
          <div v-for="(group, groupName) in filteredPluginGroups" :key="groupName">
            <!-- 分组标题 -->
            <div
              class="flex cursor-pointer items-center justify-between border-b border-border bg-muted/50 px-4 py-3"
              @click="toggleGroup(groupName)"
            >
              <div class="flex items-center">
                <Icon :icon="getGroupIcon(groupName)" class="mr-2 text-xl text-primary" />
                <span class="font-medium">
                  {{ getGroupDisplayName(groupName) }}
                </span>
              </div>
              <div class="flex items-center">
                <span class="mr-2 text-sm text-muted-foreground">
                  已选 {{ getSelectedCountInGroup(groupName) }}/{{ group.length }}
                </span>
                <Icon
                  :icon="expandedGroups[groupName] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                  class="text-muted-foreground"
                />
              </div>
            </div>

            <!-- 分组内容 -->
            <div
              v-if="expandedGroups[groupName]"
              class="grid grid-cols-1 gap-2 border-b border-border bg-background px-4 py-3 md:grid-cols-2 lg:grid-cols-3"
            >
              <div v-for="plugin in group" :key="plugin.name" class="flex items-center">
                <label class="flex cursor-pointer items-center space-x-2 hover:text-primary">
                  <input
                    type="checkbox"
                    :checked="isPluginSelected(plugin.name)"
                    class="form-checkbox h-5 w-5 rounded border-input bg-background text-primary transition-colors"
                    @change="togglePlugin(plugin.name)"
                  />
                  <span>{{ plugin.name }}</span>
                  <span
                    v-if="plugin.ports && plugin.ports.length"
                    class="text-xs text-muted-foreground opacity-70"
                  >
                    (端口: {{ formatPorts(plugin.ports) }})
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- 自定义模式输入 -->
        <div class="mt-4">
          <label class="mb-2 block text-sm font-medium text-muted-foreground">
            自定义扫描模式 (手动输入，逗号分隔)
          </label>
          <input
            v-model.trim="customPluginInput"
            type="text"
            placeholder="例如: ssh,ftp,mysql"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            @input="updateFromCustomInput"
          />
        </div>
      </div>

      <!-- 线程和超时设置 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- 线程数量 -->
        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            扫描线程数 (-t)
            <span class="text-sm text-muted-foreground">1-2000</span>
          </label>
          <div class="flex items-center">
            <button
              type="button"
              class="rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="decrementThreadNum"
            >
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input
              v-model.number="params.t"
              type="number"
              min="1"
              max="2000"
              class="w-full border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
            />
            <button
              type="button"
              class="rounded-r-lg border border-l-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="incrementThreadNum"
            >
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- 单次超时时间 -->
        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            单次连接超时时间 (-time)
            <span class="text-muted-foreground">{{ params.time }} 秒</span>
          </label>
          <input
            v-model.number="params.time"
            type="range"
            min="1"
            max="30"
            step="1"
            class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted"
          />
        </div>
      </div>

      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- 模块线程数 -->
        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            模块线程数 (-mt)
            <span class="text-sm text-muted-foreground">1-100</span>
          </label>
          <div class="flex items-center">
            <button
              type="button"
              class="rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="decrementModuleThreadNum"
            >
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input
              v-model.number="params.mt"
              type="number"
              min="1"
              max="100"
              class="w-full border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
            />
            <button
              type="button"
              class="rounded-r-lg border border-l-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="incrementModuleThreadNum"
            >
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>

        <!-- 全局超时时间 -->
        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            全局超时时间 (-gt)
            <span class="text-muted-foreground">{{ params.gt }} 秒</span>
          </label>
          <input
            v-model.number="params.gt"
            type="range"
            min="60"
            max="600"
            step="30"
            class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted"
          />
        </div>

        <!-- 最大重试次数控制 -->
        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            最大重试次数 (-retry)
            <span class="text-sm text-muted-foreground">1-10</span>
          </label>
          <div class="flex items-center">
            <button
              type="button"
              class="rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="decrementRetryNum"
            >
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input
              v-model.number="params.retry"
              type="number"
              min="1"
              max="10"
              class="w-full border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
            />
            <button
              type="button"
              class="rounded-r-lg border border-l-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="incrementRetryNum"
            >
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <!-- 存活优先扫描数量 -->
      <div class="mb-8">
        <label class="mb-3 flex justify-between text-lg font-medium">
          存活优先扫描数量 (-top)
          <span class="text-sm text-muted-foreground">1-100</span>
        </label>
        <div class="mx-auto flex max-w-md items-center">
          <button
            type="button"
            class="rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
            @click="decrementLiveTop"
          >
            <Icon icon="mdi:minus" class="text-lg" />
          </button>
          <input
            v-model.number="params.top"
            type="number"
            min="1"
            max="100"
            class="w-full border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
          />
          <button
            type="button"
            class="rounded-r-lg border border-l-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
            @click="incrementLiveTop"
          >
            <Icon icon="mdi:plus" class="text-lg" />
          </button>
        </div>
      </div>

      <!-- 扫描控制选项 -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(option, key) in scanControlOptions"
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
import { ref, inject, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const params = defineModel('params', {
  type: Object,
  required: true,
})

const props = defineProps({
  scanControlOptions: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle-option'])

const isDark = inject('isDark')

// 选择预设下拉菜单控制
const showPresets = ref(false)

// 插件搜索
const pluginSearchQuery = ref('')

// 插件组展开状态
const expandedGroups = ref({
  network: true,
  database: true,
  web: true,
  vulnerability: true,
  windows: true,
  local: false,
})

// 自定义插件输入
const customPluginInput = ref('')

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
  {
    name: 'mysql',
    group: 'database',
    ports: [3306, 3307, 13306, 33306],
    description: 'MySQL数据库扫描',
  },
  { name: 'postgres', group: 'database', ports: [5432, 5433], description: 'PostgreSQL数据库扫描' },
  { name: 'redis', group: 'database', ports: [6379, 6380, 16379], description: 'Redis数据库扫描' },
  { name: 'memcached', group: 'database', ports: [11211], description: 'Memcached服务扫描' },
  { name: 'mongodb', group: 'database', ports: [27017, 27018], description: 'MongoDB数据库扫描' },
  { name: 'cassandra', group: 'database', ports: [9042], description: 'Cassandra数据库扫描' },
  { name: 'neo4j', group: 'database', ports: [7687], description: 'Neo4j图数据库扫描' },
  {
    name: 'elasticsearch',
    group: 'database',
    ports: [9200, 9300],
    description: 'Elasticsearch服务扫描',
  },
  {
    name: 'rabbitmq',
    group: 'database',
    ports: [5672, 5671, 15672, 15671],
    description: 'RabbitMQ消息队列扫描',
  },
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
])

// 插件预设
const pluginPresets = [
  { name: '全部模式 (All)', value: 'all' },
  { name: 'Web扫描', value: 'web,webtitle,webpoc' },
  { name: '数据库扫描', value: 'mssql,oracle,mysql,postgres,redis,mongodb,elasticsearch' },
  { name: '网络服务扫描', value: 'ftp,ssh,telnet,smb,rdp,vnc,smtp,pop3,imap' },
  { name: '漏洞检测', value: 'ms17010,webpoc' },
]

// 按分组获取所有插件
const pluginGroups = computed(() => {
  const groups = {}
  plugins.value.forEach(plugin => {
    if (!groups[plugin.group]) {
      groups[plugin.group] = []
    }
    groups[plugin.group].push(plugin)
  })
  return groups
})

// 根据搜索过滤插件
const filteredPluginGroups = computed(() => {
  if (!pluginSearchQuery.value) {
    return pluginGroups.value
  }

  const query = pluginSearchQuery.value.toLowerCase()
  const filtered = {}

  for (const [group, pluginList] of Object.entries(pluginGroups.value)) {
    const matchedPlugins = pluginList.filter(
      plugin =>
        plugin.name.toLowerCase().includes(query) ||
        plugin.description.toLowerCase().includes(query)
    )

    if (matchedPlugins.length > 0) {
      filtered[group] = matchedPlugins
    }
  }

  return filtered
})

// 获取当前选中的插件
const selectedPlugins = computed(() => {
  if (!params.value.m) return []

  // 如果是预设值，转换成实际插件列表
  if (params.value.m.toLowerCase() === 'all') {
    return plugins.value.map(p => p.name)
  }
  if (params.value.m.toLowerCase() === 'ps') {
    return ['ps']
  }
  if (params.value.m.toLowerCase() === 'brute') {
    return ['brute']
  }

  return params.value.m
    .split(',')
    .map(p => p.trim())
    .filter(p => p)
})

// 格式化端口显示
const formatPorts = ports => {
  if (!ports || ports.length === 0) return ''
  return ports.join(',')
}

// 获取分组图标
const getGroupIcon = group => {
  const icons = {
    network: 'mdi:lan',
    database: 'mdi:database',
    web: 'mdi:web',
    vulnerability: 'mdi:shield-alert',
    windows: 'mdi:microsoft-windows',
    local: 'mdi:laptop',
  }
  return icons[group] || 'mdi:folder'
}

// 获取分组显示名称
const getGroupDisplayName = group => {
  const names = {
    network: '网络服务',
    database: '数据库服务',
    web: 'Web应用',
    vulnerability: '漏洞检测',
    windows: 'Windows专用',
    local: '本地信息收集',
  }
  return names[group] || group
}

// 获取分组中选中的插件数量
const getSelectedCountInGroup = group => {
  const groupPlugins = pluginGroups.value[group] || []
  let count = 0

  groupPlugins.forEach(plugin => {
    if (isPluginSelected(plugin.name)) {
      count++
    }
  })

  return count
}

// 检查插件是否被选中
const isPluginSelected = pluginName => {
  return selectedPlugins.value.includes(pluginName)
}

// 切换分组展开/收起状态
const toggleGroup = group => {
  expandedGroups.value[group] = !expandedGroups.value[group]
}

// 切换插件选择状态
const togglePlugin = pluginName => {
  const selected = [...selectedPlugins.value]

  if (selected.includes(pluginName)) {
    // 移除插件
    const index = selected.indexOf(pluginName)
    selected.splice(index, 1)
  } else {
    // 添加插件
    selected.push(pluginName)
  }

  // 更新参数
  params.value.m = selected.join(',')

  // 更新自定义输入
  customPluginInput.value = params.value.m
}

// 全选插件
const selectAllPlugins = () => {
  params.value.m = plugins.value.map(p => p.name).join(',')
  customPluginInput.value = params.value.m
}

// 清空插件选择
const clearPluginSelection = () => {
  params.value.m = ''
  customPluginInput.value = ''
}

// 应用插件预设
const applyPluginPreset = presetValue => {
  params.value.m = presetValue
  customPluginInput.value = presetValue
  showPresets.value = false
}

// 从自定义输入更新
const updateFromCustomInput = () => {
  params.value.m = customPluginInput.value
}

// 线程数控制
const incrementThreadNum = () => {
  if (params.value.t < 2000) {
    params.value.t++
  }
}

const decrementThreadNum = () => {
  if (params.value.t > 1) {
    params.value.t--
  }
}

// 模块线程数控制
const incrementModuleThreadNum = () => {
  if (params.value.mt < 100) {
    params.value.mt++
  }
}

const decrementModuleThreadNum = () => {
  if (params.value.mt > 1) {
    params.value.mt--
  }
}

// 重试次数控制
const incrementRetryNum = () => {
  if (params.value.retry < 10) {
    params.value.retry++
  }
}

const decrementRetryNum = () => {
  if (params.value.retry > 1) {
    params.value.retry--
  }
}

// 存活优先扫描数量控制
const incrementLiveTop = () => {
  if (params.value.top < 100) {
    params.value.top++
  }
}

const decrementLiveTop = () => {
  if (params.value.top > 1) {
    params.value.top--
  }
}

// 切换选项本地方法
const toggleOptionLocal = (key, option) => {
  emit('toggle-option', key, option)
}

// 初始化时同步自定义输入框
watch(
  () => params.value.m,
  value => {
    if (value !== customPluginInput.value) {
      customPluginInput.value = value
    }
  },
  { immediate: true }
)
</script>

<style scoped>
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

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
