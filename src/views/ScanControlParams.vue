<template>
  <Card class="mb-6">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:tune-vertical" class="text-2xl text-primary" />
        <CardTitle>扫描控制参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 扫描插件选择器 - 仅在主机扫描模式显示 -->
      <div v-if="scanMode === 'host'" class="mb-10">
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
            <Icon
              icon="mdi:close-circle"
              class="text-lg text-muted-foreground hover:text-foreground"
            />
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
      <!-- 扫描控制参数 - 仅在主机扫描模式显示 -->
      <div v-if="scanMode === 'host'" class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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

      <div v-if="scanMode === 'host'" class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
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

      <!-- 本地插件配置 - 仅在本地扫描模式显示 -->
      <div v-if="scanMode === 'local'" class="mb-8">
        <!-- 本地插件名称 -->
        <div>
          <label class="mb-3 block text-lg font-medium">本地插件 (-local)</label>
          <input
            v-model="params.local"
            type="text"
            placeholder="指定本地插件名称（只能指定单个插件）"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
          <div class="mt-2 text-sm text-muted-foreground">
            本地插件用于本地主机的后渗透操作，通过 -local 参数指定单个插件
          </div>

          <!-- 本地插件快速选择 -->
          <div class="mt-4">
            <label class="mb-2 block text-sm font-medium text-muted-foreground"
              >可用本地插件（点击选择）</label
            >
            <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
              <button
                v-for="plugin in localPlugins"
                :key="plugin.name"
                type="button"
                class="rounded-lg px-3 py-2 text-sm transition-all hover:scale-105"
                :class="
                  params.local === plugin.name
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                "
                :title="plugin.description"
                @click="selectLocalPlugin(plugin.name)"
              >
                <Icon :icon="plugin.icon" class="mr-1 inline-block text-base" />
                {{ plugin.name }}
              </button>
            </div>
          </div>

          <!-- 本地插件配置参数 -->
          <div v-if="params.local" class="mt-6">
            <div class="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <!-- 插件标题和简介 -->
              <div class="mb-4">
                <h3 class="mb-2 flex items-center text-lg font-medium">
                  <Icon
                    :icon="getLocalPluginInfo(params.local)?.icon || 'mdi:cog'"
                    class="mr-2 text-xl text-primary"
                  />
                  {{ params.local }} - {{ getLocalPluginInfo(params.local)?.description }}
                </h3>
                <p class="text-sm text-muted-foreground">
                  {{ getLocalPluginInfo(params.local)?.detail }}
                </p>
              </div>

              <!-- reverseshell 配置 -->
              <div v-if="params.local === 'reverseshell'" class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >反弹Shell目标地址 (-rsh) <span class="text-destructive">*</span></label
                  >
                  <input
                    v-model="params.rsh"
                    type="text"
                    placeholder="例如: 192.168.1.100:4444"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                  <p class="mt-1 text-xs text-muted-foreground">格式: IP:PORT</p>
                </div>
              </div>

              <!-- socks5proxy 配置 -->
              <div v-if="params.local === 'socks5proxy'" class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >SOCKS5代理监听端口 (-start-socks5)
                    <span class="text-destructive">*</span></label
                  >
                  <input
                    v-model.number="params['start-socks5']"
                    type="number"
                    min="1"
                    max="65535"
                    placeholder="例如: 1080"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                  <p class="mt-1 text-xs text-muted-foreground">端口范围: 1-65535</p>
                </div>
              </div>

              <!-- forwardshell 配置 -->
              <div v-if="params.local === 'forwardshell'" class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >正向Shell监听端口 (-fsh-port)</label
                  >
                  <input
                    v-model.number="params['fsh-port']"
                    type="number"
                    min="1"
                    max="65535"
                    placeholder="默认: 4444"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                  <p class="mt-1 text-xs text-muted-foreground">端口范围: 1-65535，默认 4444</p>
                </div>
              </div>

              <!-- keylogger 配置 -->
              <div v-if="params.local === 'keylogger'" class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >键盘记录输出文件 (-keylog-output)</label
                  >
                  <input
                    v-model="params['keylog-output']"
                    type="text"
                    placeholder="默认: keylog.txt"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                  <p class="mt-1 text-xs text-muted-foreground">默认保存到 keylog.txt</p>
                </div>
              </div>

              <!-- downloader 配置 -->
              <div v-if="params.local === 'downloader'" class="space-y-4">
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >下载文件URL (-download-url) <span class="text-destructive">*</span></label
                  >
                  <input
                    v-model="params['download-url']"
                    type="text"
                    placeholder="例如: http://example.com/file.exe"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >下载保存路径 (-download-path) <span class="text-destructive">*</span></label
                  >
                  <input
                    v-model="params['download-path']"
                    type="text"
                    placeholder="例如: /tmp/file.exe"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                </div>
              </div>

              <!-- 持久化插件配置 -->
              <div
                v-if="
                  [
                    'winregistry',
                    'winschtask',
                    'winservice',
                    'winstartup',
                    'winwmi',
                    'ldpreload',
                    'systemdservice',
                    'crontask',
                  ].includes(params.local)
                "
                class="space-y-4"
              >
                <div>
                  <label class="mb-2 block text-sm font-medium"
                    >持久化目标文件 (-persistence-file)
                    <span class="text-destructive">*</span></label
                  >
                  <input
                    v-model="params['persistence-file']"
                    type="text"
                    placeholder="例如: /tmp/backdoor.sh"
                    class="w-full rounded-lg border border-input bg-background px-4 py-2 text-base outline-none transition-colors focus:border-ring"
                  />
                  <p class="mt-1 text-xs text-muted-foreground">要持久化执行的文件路径</p>
                </div>
              </div>

              <!-- 无需额外配置的插件提示 -->
              <div
                v-if="
                  [
                    'avdetect',
                    'dcinfo',
                    'envinfo',
                    'fileinfo',
                    'systeminfo',
                    'cleaner',
                    'shellenv',
                    'minidump',
                  ].includes(params.local)
                "
                class="text-sm text-muted-foreground"
              >
                <Icon
                  icon="mdi:information-outline"
                  class="mr-1 inline-block text-base text-primary"
                />
                该插件无需额外配置参数，直接执行即可
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 发包控制 - 仅在主机扫描模式显示 -->
      <div v-if="scanMode === 'host'" class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- 发包速率限制 -->
        <div>
          <label class="mb-3 block text-lg font-medium">发包速率 (-rate)</label>
          <input
            v-model.number="params.rate"
            type="number"
            min="0"
            placeholder="每分钟最大发包数"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
          <div class="mt-2 text-sm text-muted-foreground">0 表示无限制</div>
        </div>

        <!-- 最大发包总数 -->
        <div>
          <label class="mb-3 block text-lg font-medium">最大发包数 (-maxpkts)</label>
          <input
            v-model.number="params.maxpkts"
            type="number"
            min="0"
            placeholder="整个程序最大发包总数"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
          <div class="mt-2 text-sm text-muted-foreground">0 表示无限制</div>
        </div>
      </div>

      <!-- 扫描控制选项 - 仅在主机扫描模式显示 -->
      <div v-if="scanMode === 'host'" class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="(option, key) in scanControlOptions"
          :key="key"
          class="flex items-center justify-between rounded-xl border p-5 transition-all"
          :class="
            option.enabled
              ? 'border-primary/20 bg-primary/10'
              : 'border-border bg-muted/50 hover:bg-muted'
          "
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
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const params = defineModel('params', {
  type: Object,
  required: true,
})

defineProps({
  scanControlOptions: {
    type: Object,
    required: true,
  },
  scanMode: {
    type: String,
    default: 'host',
  },
})

const emit = defineEmits(['toggle-option'])

// 选择预设下拉菜单控制
const showPresets = ref(false)

// 插件搜索
const pluginSearchQuery = ref('')

// 插件组展开状态
const expandedGroups = ref({
  network: true,
  database: true,
  messagequeue: true,
  vulnerability: true,
})

// 自定义插件输入
const customPluginInput = ref('')

// 扫描插件数据 - 基于 fscan/Plugins/services/ 实际插件
const plugins = ref([
  // 网络服务扫描插件
  { name: 'ftp', group: 'network', ports: [21], description: 'FTP服务扫描' },
  { name: 'ssh', group: 'network', ports: [22, 2222], description: 'SSH服务扫描' },
  { name: 'telnet', group: 'network', ports: [23], description: 'Telnet服务扫描' },
  { name: 'findnet', group: 'network', ports: [135], description: 'Windows网络发现' },
  { name: 'netbios', group: 'network', ports: [139], description: 'NetBIOS服务扫描' },
  { name: 'smb', group: 'network', ports: [445], description: 'SMB服务扫描' },
  { name: 'smb2', group: 'network', ports: [445], description: 'SMB2服务扫描' },
  { name: 'smbghost', group: 'network', ports: [445], description: 'SMB Ghost漏洞扫描' },
  { name: 'smbinfo', group: 'network', ports: [445], description: 'SMB信息收集' },
  { name: 'ldap', group: 'network', ports: [389, 636], description: 'LDAP服务扫描' },
  { name: 'smtp', group: 'network', ports: [25, 465, 587], description: 'SMTP服务扫描' },
  { name: 'snmp', group: 'network', ports: [161, 162], description: 'SNMP服务扫描' },
  { name: 'rsync', group: 'network', ports: [873], description: 'Rsync服务扫描' },
  { name: 'rdp', group: 'network', ports: [3389], description: '远程桌面服务扫描' },
  { name: 'vnc', group: 'network', ports: [5900, 5901, 5902], description: 'VNC服务扫描' },

  // 数据库服务
  { name: 'mssql', group: 'database', ports: [1433, 1434], description: 'MSSQL数据库扫描' },
  { name: 'oracle', group: 'database', ports: [1521, 1522, 1526], description: 'Oracle数据库扫描' },
  {
    name: 'mysql',
    group: 'database',
    ports: [3306, 3307, 13306, 33306],
    description: 'MySQL数据库扫描',
  },
  {
    name: 'postgresql',
    group: 'database',
    ports: [5432, 5433],
    description: 'PostgreSQL数据库扫描',
  },
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

  // 消息队列
  {
    name: 'rabbitmq',
    group: 'messagequeue',
    ports: [5672, 5671, 15672, 15671],
    description: 'RabbitMQ消息队列扫描',
  },
  { name: 'kafka', group: 'messagequeue', ports: [9092, 9093], description: 'Kafka消息队列扫描' },
  { name: 'activemq', group: 'messagequeue', ports: [61613], description: 'ActiveMQ消息队列扫描' },

  // 漏洞扫描
  { name: 'ms17010', group: 'vulnerability', ports: [445], description: 'MS17-010永恒之蓝漏洞' },
])

// 本地插件列表 - 基于 fscan/Plugins/local/ 实际插件
const localPlugins = ref([
  // 信息收集类
  {
    name: 'avdetect',
    icon: 'mdi:shield-search',
    description: 'AV/EDR 检测',
    detail: '检测目标系统上安装的杀毒软件和端点检测响应(EDR)产品，帮助评估安全防护水平',
  },
  {
    name: 'dcinfo',
    icon: 'mdi:domain',
    description: '域控信息收集',
    detail: '收集域控制器相关信息，包括域名、域控IP、域用户等关键Active Directory信息',
  },
  {
    name: 'envinfo',
    icon: 'mdi:information-outline',
    description: '环境信息收集',
    detail: '收集系统环境变量、路径配置、运行时环境等信息，用于了解目标系统配置',
  },
  {
    name: 'fileinfo',
    icon: 'mdi:file-search',
    description: '文件信息收集',
    detail: '搜索并收集目标系统中的敏感文件信息，如配置文件、密钥文件、数据库文件等',
  },
  {
    name: 'systeminfo',
    icon: 'mdi:information',
    description: '系统信息收集',
    detail: '收集目标系统的详细信息，包括操作系统版本、补丁级别、硬件配置、网络接口等',
  },

  // 后渗透工具类
  {
    name: 'cleaner',
    icon: 'mdi:broom',
    description: '清理痕迹',
    detail: '清理渗透测试过程中留下的日志、临时文件等痕迹，用于规避检测和取证分析',
  },
  {
    name: 'downloader',
    icon: 'mdi:download',
    description: '文件下载器',
    detail: '从指定URL下载文件到目标系统，支持HTTP/HTTPS协议，用于投递后续工具或载荷',
  },
  {
    name: 'forwardshell',
    icon: 'mdi:console',
    description: '正向Shell',
    detail: '在目标系统上启动正向Shell监听服务，等待攻击者主动连接以执行命令',
  },
  {
    name: 'keylogger',
    icon: 'mdi:keyboard',
    description: '键盘记录',
    detail: '记录目标系统的键盘输入，可用于捕获密码、敏感信息等用户输入内容',
  },
  {
    name: 'minidump',
    icon: 'mdi:memory',
    description: '内存转储',
    detail: '转储目标进程的内存数据（如lsass.exe），可用于离线提取凭据和敏感信息',
  },
  {
    name: 'reverseshell',
    icon: 'mdi:console-network',
    description: '反弹Shell',
    detail: '目标系统主动连接到攻击者指定的地址，建立反向Shell用于远程命令执行',
  },
  {
    name: 'shellenv',
    icon: 'mdi:application-cog',
    description: 'Shell环境设置',
    detail: '配置Shell运行环境，设置必要的环境变量和路径，为后续操作提供稳定环境',
  },
  {
    name: 'socks5proxy',
    icon: 'mdi:proxy',
    description: 'SOCKS5代理服务器',
    detail: '在目标系统上启动SOCKS5代理服务，用于流量转发和内网穿透访问',
  },

  // Linux持久化类
  {
    name: 'ldpreload',
    icon: 'mdi:linux',
    description: 'LD_PRELOAD持久化',
    detail: '利用Linux的LD_PRELOAD机制实现持久化，通过预加载恶意动态库在进程启动时执行代码',
  },
  {
    name: 'systemdservice',
    icon: 'mdi:cog',
    description: 'Systemd服务持久化',
    detail: '创建Systemd服务单元实现持久化，在Linux系统启动时自动运行指定程序',
  },
  {
    name: 'crontask',
    icon: 'mdi:clock-outline',
    description: '计划任务持久化',
    detail: '通过添加Cron计划任务实现持久化，定期或在特定时间自动执行指定命令',
  },

  // Windows持久化类
  {
    name: 'winregistry',
    icon: 'mdi:file-cog',
    description: 'Windows注册表持久化',
    detail: '修改Windows注册表Run键实现持久化，在用户登录或系统启动时自动运行程序',
  },
  {
    name: 'winschtask',
    icon: 'mdi:calendar-clock',
    description: 'Windows计划任务',
    detail: '创建Windows计划任务实现持久化，支持定时执行、触发器执行等多种启动方式',
  },
  {
    name: 'winservice',
    icon: 'mdi:cog-outline',
    description: 'Windows服务持久化',
    detail: '创建Windows系统服务实现持久化，以SYSTEM权限在后台运行，重启后自动启动',
  },
  {
    name: 'winstartup',
    icon: 'mdi:rocket-launch',
    description: 'Windows启动项持久化',
    detail: '在Windows启动文件夹中添加快捷方式实现持久化，用户登录时自动执行',
  },
  {
    name: 'winwmi',
    icon: 'mdi:database-cog',
    description: 'Windows WMI持久化',
    detail: '利用Windows Management Instrumentation事件订阅实现持久化，隐蔽性强',
  },
])

// 插件预设
const pluginPresets = [
  { name: '全部模式 (All)', value: 'all' },
  { name: '数据库扫描', value: 'mssql,oracle,mysql,postgresql,redis,mongodb,elasticsearch' },
  { name: '网络服务扫描', value: 'ftp,ssh,telnet,smb,smb2,rdp,vnc,smtp,ldap,netbios' },
  { name: '消息队列扫描', value: 'rabbitmq,kafka,activemq' },
  { name: '漏洞检测', value: 'ms17010,smbghost' },
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
    messagequeue: 'mdi:message-processing',
    vulnerability: 'mdi:shield-alert',
  }
  return icons[group] || 'mdi:folder'
}

// 获取分组显示名称
const getGroupDisplayName = group => {
  const names = {
    network: '网络服务',
    database: '数据库服务',
    messagequeue: '消息队列',
    vulnerability: '漏洞检测',
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

// 选择本地插件
const selectLocalPlugin = pluginName => {
  // 如果点击已选中的插件，则清空选择
  if (params.value.local === pluginName) {
    params.value.local = ''
  } else {
    params.value.local = pluginName
  }
}

// 获取本地插件信息
const getLocalPluginInfo = pluginName => {
  return localPlugins.value.find(p => p.name === pluginName)
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
