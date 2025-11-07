<template>
  <div>
    <!-- 标准认证参数 -->
    <Card v-if="showStandardAuth" class="mb-6">
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:account-key" class="text-2xl text-primary" />
          <CardTitle>标准认证参数</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <!-- 用户名和密码 -->
        <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">默认用户名 (-user)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:account" class="text-lg" />
              </div>
              <input
                v-model="params.user"
                type="text"
                placeholder="设置默认用户名"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">默认密码 (-pwd)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:key-variant" class="text-lg" />
              </div>
              <input
                v-model="params.pwd"
                type="text"
                placeholder="设置默认密码"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>
        </div>

        <!-- 附加的用户名和密码 -->
        <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">附加用户名 (-usera)</label>
            <input
              v-model="params.usera"
              type="text"
              placeholder="附加的用户名，逗号分隔"
              class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            />
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">附加密码 (-pwda)</label>
            <input
              v-model="params.pwda"
              type="text"
              placeholder="附加的密码，逗号分隔"
              class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            />
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 字典文件路径 -->
    <Card v-if="showStandardAuth" class="mb-6">
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:file-document" class="text-2xl text-primary" />
          <CardTitle>字典文件路径</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">用户名字典 (-userf)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:file-account" class="text-lg" />
              </div>
              <input
                v-model="params.userf"
                type="text"
                placeholder="用户名字典文件路径"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">密码字典 (-pwdf)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:file-key" class="text-lg" />
              </div>
              <input
                v-model="params.pwdf"
                type="text"
                placeholder="密码字典文件路径"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">用户密码对文件 (-upf)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:file-account-outline" class="text-lg" />
              </div>
              <input
                v-model="params.upf"
                type="text"
                placeholder="用户名:密码格式的文件路径"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Hash 认证参数 -->
    <Card v-if="showHashAuth" class="mb-6">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon icon="mdi:key-chain" class="text-2xl text-primary" />
            <CardTitle>Hash 认证参数</CardTitle>
          </div>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="plugin in getRelevantPlugins('hash')"
              :key="plugin"
              class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {{ plugin }}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">Hash 值 (-hash)</label>
            <input
              v-model="params.hash"
              type="text"
              placeholder="指定单个 Hash 值进行认证"
              class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            />
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">Hash 文件 (-hashf)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:file-lock" class="text-lg" />
              </div>
              <input
                v-model="params.hashf"
                type="text"
                placeholder="Hash 字典文件路径"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 高级认证参数 -->
    <Card v-if="showDomainAuth || showSshKeyAuth" class="mb-6">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon icon="mdi:shield-key" class="text-2xl text-primary" />
            <CardTitle>高级认证参数</CardTitle>
          </div>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="plugin in [...getRelevantPlugins('domain'), ...getRelevantPlugins('sshkey')]"
              :key="plugin"
              class="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {{ plugin }}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div v-if="showDomainAuth">
            <label class="mb-3 block text-lg font-medium">域名 (-domain)</label>
            <input
              v-model="params.domain"
              type="text"
              placeholder="SMB 扫描使用的域名"
              class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            />
          </div>

          <div v-if="showSshKeyAuth">
            <label class="mb-3 block text-lg font-medium">SSH 密钥路径 (-sshkey)</label>
            <div class="flex items-center">
              <div
                class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base"
              >
                <Icon icon="mdi:file-certificate" class="text-lg" />
              </div>
              <input
                v-model="params.sshkey"
                type="text"
                placeholder="SSH 私钥文件路径"
                class="flex-1 rounded-r-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Redis 专用参数 -->
    <Card v-if="showRedisAuth" class="mb-6">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon icon="mdi:database" class="text-2xl text-primary" />
            <CardTitle>Redis 专用参数</CardTitle>
          </div>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="plugin in getRelevantPlugins('redis')"
              :key="plugin"
              class="rounded bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive"
            >
              {{ plugin }}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          class="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-6"
        >
          <div class="flex-1">
            <div class="mb-1 flex items-center gap-2">
              <Icon icon="mdi:block-helper" class="text-xl text-destructive" />
              <span class="text-lg font-medium">禁用 Redis 扫描 (-noredis)</span>
            </div>
            <p class="text-sm text-muted-foreground">关闭 Redis 未授权访问检测</p>
          </div>
          <button
            type="button"
            class="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
            :class="params.noredis ? 'bg-primary' : 'bg-input'"
            role="switch"
            :aria-checked="params.noredis"
            @click="toggleRedisDisable"
          >
            <span
              class="pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform"
              :class="params.noredis ? 'translate-x-7' : 'translate-x-0'"
            ></span>
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const params = defineModel('params', {
  type: Object,
  required: true,
})

const props = defineProps({
  selectedPlugins: {
    type: Array,
    default: () => [],
  },
})

// 插件和参数区域的映射关系（数据驱动）
const PLUGIN_AUTH_MAP = {
  // 需要标准认证的插件（大部分服务）
  standard: [
    'ssh',
    'ftp',
    'telnet',
    'smb',
    'smb2',
    'mssql',
    'oracle',
    'mysql',
    'postgresql',
    'redis',
    'mongodb',
    'rdp',
    'vnc',
    'ldap',
    'smtp',
    'rsync',
    'memcached',
    'rabbitmq',
    'kafka',
    'activemq',
    'cassandra',
    'neo4j',
    'elasticsearch',
  ],

  // 需要 Hash 认证的插件
  hash: ['smb', 'smb2', 'rdp', 'ldap', 'mssql'],

  // 需要域名参数的插件
  domain: ['smb', 'smb2', 'ldap', 'mssql'],

  // 需要 SSH 密钥的插件
  sshkey: ['ssh'],

  // Redis 专用参数
  redis: ['redis'],
}

// 检查是否需要显示某个参数区域
const needsAuthType = (authType, selectedList) => {
  // 如果没有选择插件，显示所有区域（Web 模式或未选择插件）
  if (selectedList.length === 0) return true

  // 如果选择了 'all'，显示所有区域
  if (selectedList.includes('all')) return true

  // 检查是否有任何选中的插件需要该认证类型
  const requiredPlugins = PLUGIN_AUTH_MAP[authType] || []
  return selectedList.some(plugin => requiredPlugins.includes(plugin))
}

// 计算各区域可见性
const showStandardAuth = computed(() => needsAuthType('standard', props.selectedPlugins))
const showHashAuth = computed(() => needsAuthType('hash', props.selectedPlugins))
const showDomainAuth = computed(() => needsAuthType('domain', props.selectedPlugins))
const showSshKeyAuth = computed(() => needsAuthType('sshkey', props.selectedPlugins))
const showRedisAuth = computed(() => needsAuthType('redis', props.selectedPlugins))

// 获取相关插件列表（用于显示标签）
const getRelevantPlugins = authType => {
  const allPlugins = PLUGIN_AUTH_MAP[authType] || []

  // 如果没有选择插件或选择了 'all'，显示所有相关插件（最多5个）
  if (props.selectedPlugins.length === 0 || props.selectedPlugins.includes('all')) {
    return allPlugins.slice(0, 5)
  }

  // 只显示已选中且相关的插件
  return props.selectedPlugins.filter(plugin => allPlugins.includes(plugin))
}

// 切换Redis禁用状态
const toggleRedisDisable = () => {
  params.value.noredis = !params.value.noredis
}
</script>
