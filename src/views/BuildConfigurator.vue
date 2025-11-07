<template>
  <div class="space-y-6">
    <!-- 页面标题 -->
    <div class="mb-8">
      <h1 class="mb-3 text-4xl font-bold text-foreground">构建配置器</h1>
      <p class="text-lg text-muted-foreground">
        选择需要编译的插件模块，生成定制化的 fscan 可执行文件
      </p>
    </div>

    <!-- 构建说明 -->
    <Card class="mb-6">
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:information" class="text-2xl text-primary" />
          <CardTitle>构建约束说明</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-4 text-sm">
          <div>
            <h4 class="mb-2 font-semibold text-foreground">什么是构建约束？</h4>
            <p class="text-muted-foreground">
              构建约束（Build Constraints）允许你在编译时选择性地包含或排除特定功能模块。通过 Go
              的构建标签（build tags），你可以编译出只包含所需功能的精简版本。
            </p>
          </div>
          <div>
            <h4 class="mb-2 font-semibold text-foreground">编译模式</h4>
            <ul class="ml-6 list-disc space-y-1 text-muted-foreground">
              <li><strong>完整编译</strong>：不指定任何标签，包含所有插件（默认）</li>
              <li>
                <strong>选择性编译</strong>：使用
                <code class="rounded bg-muted px-1">plugin_selective</code>
                标签，只包含明确指定的插件
              </li>
            </ul>
          </div>
          <div>
            <h4 class="mb-2 font-semibold text-foreground">体积优化</h4>
            <p class="text-muted-foreground">
              选择性编译可显著减小可执行文件体积。例如，只包含 SSH 和 MySQL
              插件的版本可能比完整版本小 40-60%。
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 编译模式选择 -->
    <Card class="mb-6">
      <CardHeader>
        <CardTitle>编译模式</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div
            class="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors"
            :class="buildMode === 'full' ? 'border-primary bg-primary/5' : 'border-border'"
            @click="buildMode = 'full'"
          >
            <div class="flex items-center gap-3">
              <input type="radio" :checked="buildMode === 'full'" class="h-4 w-4 text-primary" />
              <div>
                <div class="font-semibold">完整编译</div>
                <div class="text-sm text-muted-foreground">包含所有插件模块（约 15-20 MB）</div>
              </div>
            </div>
          </div>

          <div
            class="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors"
            :class="buildMode === 'selective' ? 'border-primary bg-primary/5' : 'border-border'"
            @click="buildMode = 'selective'"
          >
            <div class="flex items-center gap-3">
              <input
                type="radio"
                :checked="buildMode === 'selective'"
                class="h-4 w-4 text-primary"
              />
              <div>
                <div class="font-semibold">选择性编译</div>
                <div class="text-sm text-muted-foreground">
                  只包含选中的插件（可减小 40-60% 体积）
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 插件选择 -->
    <div v-if="buildMode === 'selective'">
      <!-- 目标平台 -->
      <Card class="mb-6">
        <CardHeader>
          <CardTitle>目标平台</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div
              v-for="platform in platforms"
              :key="platform.value"
              class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors"
              :class="
                targetPlatform === platform.value ? 'border-primary bg-primary/5' : 'border-border'
              "
              @click="targetPlatform = platform.value"
            >
              <input
                type="radio"
                :checked="targetPlatform === platform.value"
                class="h-4 w-4 text-primary"
              />
              <div class="flex items-center gap-2">
                <Icon :icon="platform.icon" class="text-xl" />
                <span class="font-medium">{{ platform.label }}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- 服务类插件 -->
      <Card class="mb-6">
        <CardHeader>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon icon="mdi:server-network" class="text-2xl text-primary" />
              <CardTitle>服务类插件</CardTitle>
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="outline" @click="selectAllService">全选</Button>
              <Button size="sm" variant="outline" @click="clearAllService">清空</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="plugin in servicePlugins"
              :key="plugin.tag"
              class="flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-accent"
              :class="selectedPlugins.includes(plugin.tag) ? 'border-primary bg-primary/5' : ''"
              @click="togglePlugin(plugin.tag)"
            >
              <input
                type="checkbox"
                :checked="selectedPlugins.includes(plugin.tag)"
                class="h-4 w-4 text-primary"
              />
              <div class="flex items-center gap-2">
                <Icon :icon="plugin.icon" class="text-lg text-primary" />
                <span class="text-sm font-medium">{{ plugin.name }}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Web插件 -->
      <Card class="mb-6">
        <CardHeader>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon icon="mdi:web" class="text-2xl text-primary" />
              <CardTitle>Web插件</CardTitle>
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="outline" @click="selectAllWeb">全选</Button>
              <Button size="sm" variant="outline" @click="clearAllWeb">清空</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="plugin in webPlugins"
              :key="plugin.tag"
              class="flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-accent"
              :class="selectedPlugins.includes(plugin.tag) ? 'border-primary bg-primary/5' : ''"
              @click="togglePlugin(plugin.tag)"
            >
              <input
                type="checkbox"
                :checked="selectedPlugins.includes(plugin.tag)"
                class="h-4 w-4 text-primary"
              />
              <div class="flex items-center gap-2">
                <Icon :icon="plugin.icon" class="text-lg text-primary" />
                <span class="text-sm font-medium">{{ plugin.name }}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- 本地插件 -->
      <Card class="mb-6">
        <CardHeader>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon icon="mdi:application-cog" class="text-2xl text-primary" />
              <CardTitle>本地插件</CardTitle>
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="outline" @click="selectAllLocal">全选</Button>
              <Button size="sm" variant="outline" @click="clearAllLocal">清空</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <div
              v-for="plugin in filteredLocalPlugins"
              :key="plugin.tag"
              class="flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-accent"
              :class="selectedPlugins.includes(plugin.tag) ? 'border-primary bg-primary/5' : ''"
              @click="togglePlugin(plugin.tag)"
            >
              <input
                type="checkbox"
                :checked="selectedPlugins.includes(plugin.tag)"
                class="h-4 w-4 text-primary"
              />
              <div class="flex items-center gap-2">
                <Icon :icon="plugin.icon" class="text-lg text-primary" />
                <span class="text-sm font-medium">{{ plugin.name }}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- 构建命令输出 -->
    <Card class="mb-6">
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:console" class="text-2xl text-primary" />
          <CardTitle>构建命令</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div>
            <label class="mb-2 block text-sm font-medium">输出文件名</label>
            <input
              v-model="outputName"
              type="text"
              placeholder="fscan"
              class="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-ring"
            />
          </div>

          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 flex items-center justify-between">
              <span class="text-sm font-medium">生成的构建命令：</span>
              <Button size="sm" variant="outline" @click="copyCommand">
                <Icon icon="mdi:content-copy" class="mr-1 text-base" />
                复制
              </Button>
            </div>
            <pre
              class="overflow-x-auto rounded bg-background p-3 text-xs font-mono text-foreground"
              >{{ buildCommand }}</pre
            >
          </div>

          <div v-if="buildMode === 'selective' && selectedPlugins.length > 0" class="text-sm">
            <div class="mb-2 font-medium">已选择插件 ({{ selectedPlugins.length }})：</div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in selectedPlugins"
                :key="tag"
                class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {{ tag.replace('plugin_', '') }}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 使用示例 -->
    <Card>
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:lightbulb" class="text-2xl text-primary" />
          <CardTitle>使用示例</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-4 text-sm">
          <div>
            <h4 class="mb-2 font-semibold">Windows 平台编译：</h4>
            <pre class="overflow-x-auto rounded bg-muted p-3 font-mono text-xs">
GOOS=windows GOARCH=amd64 go build -tags "plugin_selective,plugin_ssh,plugin_mysql" -o fscan.exe</pre
            >
          </div>
          <div>
            <h4 class="mb-2 font-semibold">Linux 平台编译：</h4>
            <pre class="overflow-x-auto rounded bg-muted p-3 font-mono text-xs">
GOOS=linux GOARCH=amd64 go build -tags "plugin_selective,plugin_ssh,plugin_redis" -o fscan</pre
            >
          </div>
          <div>
            <h4 class="mb-2 font-semibold">交叉编译示例：</h4>
            <pre class="overflow-x-auto rounded bg-muted p-3 font-mono text-xs">
# 在 Linux/Mac 上编译 Windows 版本
GOOS=windows GOARCH=amd64 go build -o fscan.exe

# 在 Windows 上编译 Linux 版本
set GOOS=linux
set GOARCH=amd64
go build -o fscan</pre
            >
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const buildMode = ref('full')
const targetPlatform = ref('all')
const selectedPlugins = ref([])
const outputName = ref('fscan')

const platforms = [
  { value: 'all', label: '全平台', icon: 'mdi:earth' },
  { value: 'windows', label: 'Windows', icon: 'mdi:microsoft-windows' },
  { value: 'linux', label: 'Linux', icon: 'mdi:linux' },
]

const servicePlugins = [
  { tag: 'plugin_ssh', name: 'SSH', icon: 'mdi:ssh' },
  { tag: 'plugin_ftp', name: 'FTP', icon: 'mdi:folder-network' },
  { tag: 'plugin_telnet', name: 'Telnet', icon: 'mdi:console-network' },
  { tag: 'plugin_smb', name: 'SMB', icon: 'mdi:folder-network' },
  { tag: 'plugin_smb2', name: 'SMB2', icon: 'mdi:folder-network' },
  { tag: 'plugin_mssql', name: 'MSSQL', icon: 'mdi:database' },
  { tag: 'plugin_oracle', name: 'Oracle', icon: 'mdi:database' },
  { tag: 'plugin_mysql', name: 'MySQL', icon: 'mdi:database' },
  { tag: 'plugin_postgresql', name: 'PostgreSQL', icon: 'mdi:database' },
  { tag: 'plugin_redis', name: 'Redis', icon: 'mdi:database' },
  { tag: 'plugin_mongodb', name: 'MongoDB', icon: 'mdi:database' },
  { tag: 'plugin_rdp', name: 'RDP', icon: 'mdi:remote-desktop' },
  { tag: 'plugin_vnc', name: 'VNC', icon: 'mdi:remote-desktop' },
  { tag: 'plugin_ldap', name: 'LDAP', icon: 'mdi:account-network' },
  { tag: 'plugin_smtp', name: 'SMTP', icon: 'mdi:email' },
  { tag: 'plugin_rsync', name: 'Rsync', icon: 'mdi:sync' },
  { tag: 'plugin_memcached', name: 'Memcached', icon: 'mdi:memory' },
  { tag: 'plugin_rabbitmq', name: 'RabbitMQ', icon: 'mdi:rabbit' },
  { tag: 'plugin_kafka', name: 'Kafka', icon: 'mdi:message' },
  { tag: 'plugin_activemq', name: 'ActiveMQ', icon: 'mdi:message-processing' },
  { tag: 'plugin_cassandra', name: 'Cassandra', icon: 'mdi:database' },
  { tag: 'plugin_neo4j', name: 'Neo4j', icon: 'mdi:graph' },
  { tag: 'plugin_elasticsearch', name: 'Elasticsearch', icon: 'mdi:magnify' },
  { tag: 'plugin_netbios', name: 'NetBIOS', icon: 'mdi:network' },
  { tag: 'plugin_findnet', name: 'FindNet', icon: 'mdi:network-outline' },
  { tag: 'plugin_snmp', name: 'SNMP', icon: 'mdi:network-outline' },
  { tag: 'plugin_smbinfo', name: 'SMB Info', icon: 'mdi:information' },
  { tag: 'plugin_smbghost', name: 'SMB Ghost', icon: 'mdi:ghost' },
  { tag: 'plugin_ms17010', name: 'MS17-010', icon: 'mdi:bug' },
]

const webPlugins = [
  { tag: 'plugin_webtitle', name: 'WebTitle', icon: 'mdi:file-document-outline' },
  { tag: 'plugin_webpoc', name: 'WebPoc', icon: 'mdi:bug-check' },
]

const localPlugins = [
  {
    tag: 'plugin_systeminfo',
    name: 'SystemInfo',
    icon: 'mdi:information',
    platform: 'all',
  },
  { tag: 'plugin_envinfo', name: 'EnvInfo', icon: 'mdi:application-variable', platform: 'all' },
  { tag: 'plugin_fileinfo', name: 'FileInfo', icon: 'mdi:file-document', platform: 'all' },
  { tag: 'plugin_avdetect', name: 'AVDetect', icon: 'mdi:shield-bug', platform: 'all' },
  { tag: 'plugin_downloader', name: 'Downloader', icon: 'mdi:download', platform: 'all' },
  { tag: 'plugin_cleaner', name: 'Cleaner', icon: 'mdi:broom', platform: 'all' },
  {
    tag: 'plugin_reverseshell',
    name: 'ReverseShell',
    icon: 'mdi:console-network',
    platform: 'all',
  },
  {
    tag: 'plugin_forwardshell',
    name: 'ForwardShell',
    icon: 'mdi:console-network',
    platform: 'all',
  },
  { tag: 'plugin_socks5proxy', name: 'SOCKS5', icon: 'mdi:network', platform: 'all' },
  { tag: 'plugin_keylogger', name: 'KeyLogger', icon: 'mdi:keyboard', platform: 'all' },
  { tag: 'plugin_dcinfo', name: 'DCInfo', icon: 'mdi:server', platform: 'windows' },
  { tag: 'plugin_winservice', name: 'WinService', icon: 'mdi:cog', platform: 'windows' },
  { tag: 'plugin_winschtask', name: 'WinSchTask', icon: 'mdi:calendar-clock', platform: 'windows' },
  { tag: 'plugin_winstartup', name: 'WinStartup', icon: 'mdi:rocket-launch', platform: 'windows' },
  { tag: 'plugin_winregistry', name: 'WinRegistry', icon: 'mdi:file-cog', platform: 'windows' },
  { tag: 'plugin_winwmi', name: 'WinWMI', icon: 'mdi:desktop-classic', platform: 'windows' },
  { tag: 'plugin_minidump', name: 'MiniDump', icon: 'mdi:memory', platform: 'windows' },
  { tag: 'plugin_crontask', name: 'CronTask', icon: 'mdi:calendar-clock', platform: 'linux' },
  { tag: 'plugin_shellenv', name: 'ShellEnv', icon: 'mdi:console', platform: 'linux' },
  { tag: 'plugin_ldpreload', name: 'LDPreload', icon: 'mdi:file-code', platform: 'linux' },
  { tag: 'plugin_systemdservice', name: 'SystemdService', icon: 'mdi:cog', platform: 'linux' },
]

const filteredLocalPlugins = computed(() => {
  if (targetPlatform.value === 'all') return localPlugins
  return localPlugins.filter(p => p.platform === 'all' || p.platform === targetPlatform.value)
})

const buildCommand = computed(() => {
  if (buildMode.value === 'full') {
    return `go build -o ${outputName.value}`
  }

  const tags = ['plugin_selective', ...selectedPlugins.value].join(',')
  return `go build -tags "${tags}" -o ${outputName.value}`
})

const togglePlugin = tag => {
  const index = selectedPlugins.value.indexOf(tag)
  if (index > -1) {
    selectedPlugins.value.splice(index, 1)
  } else {
    selectedPlugins.value.push(tag)
  }
}

const selectAllService = () => {
  servicePlugins.forEach(p => {
    if (!selectedPlugins.value.includes(p.tag)) {
      selectedPlugins.value.push(p.tag)
    }
  })
}

const clearAllService = () => {
  selectedPlugins.value = selectedPlugins.value.filter(
    tag => !servicePlugins.find(p => p.tag === tag)
  )
}

const selectAllWeb = () => {
  webPlugins.forEach(p => {
    if (!selectedPlugins.value.includes(p.tag)) {
      selectedPlugins.value.push(p.tag)
    }
  })
}

const clearAllWeb = () => {
  selectedPlugins.value = selectedPlugins.value.filter(
    tag => !webPlugins.find(p => p.tag === tag)
  )
}

const selectAllLocal = () => {
  filteredLocalPlugins.value.forEach(p => {
    if (!selectedPlugins.value.includes(p.tag)) {
      selectedPlugins.value.push(p.tag)
    }
  })
}

const clearAllLocal = () => {
  selectedPlugins.value = selectedPlugins.value.filter(
    tag => !localPlugins.find(p => p.tag === tag)
  )
}

const copyCommand = async () => {
  try {
    await navigator.clipboard.writeText(buildCommand.value)
    // 可以添加一个提示
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>
