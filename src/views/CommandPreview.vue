<template>
  <div class="sticky top-4 z-30 mb-6">
    <Card>
      <CardHeader class="pb-3">
        <div class="flex items-center gap-2">
          <Icon icon="mdi:console" class="text-xl text-primary" />
          <CardTitle class="text-base">命令预览</CardTitle>
        </div>
      </CardHeader>
      <CardContent class="pt-0">
        <div class="relative">
          <!-- 命令预览区域 -->
          <div
            class="min-h-[60px] overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-muted/50 p-4 font-mono text-sm"
          >
            <!-- 无目标时显示提示 -->
            <div
              v-if="!hasTargets"
              class="flex h-full items-center justify-center text-muted-foreground italic"
            >
              <Icon icon="mdi:information-outline" class="mr-2 text-xl" />
              添加目标地址后，命令将显示在这里
            </div>

            <!-- 有目标时显示命令 -->
            <div v-else>
              <span class="text-green-600 dark:text-green-400">./fscan</span>
              <span
                v-for="(part, index) in formattedCommand"
                :key="index"
                :class="
                  part.type === 'param'
                    ? 'text-blue-600 dark:text-blue-400'
                    : part.type === 'value'
                      ? 'text-amber-600 dark:text-amber-400'
                      : ''
                "
              >
                {{ part.text }}
              </span>
            </div>
          </div>

          <!-- 复制成功提示 -->
          <Transition name="fade">
            <div
              v-if="showCopySuccess"
              class="absolute bottom-4 right-4 flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg"
            >
              <Icon icon="mdi:check-circle" class="mr-2 text-base" />
              <span>复制成功!</span>
            </div>
          </Transition>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
  hasTargets: {
    type: Boolean,
    required: true,
  },
  scanMode: {
    type: String,
    default: 'host',
  },
})

const showCopySuccess = inject('showCopySuccess')

// 定义各扫描模式允许的参数
const getModeAllowedParams = () => {
  const commonParams = ['o', 'f', 'log', 'no', 'silent', 'nocolor', 'nopg']

  if (props.scanMode === 'host') {
    return [
      'h',
      'hf',
      'eh',
      'ehf',
      'p',
      'ep',
      'pf',
      'm',
      't',
      'time',
      'mt',
      'gt',
      'retry',
      'np',
      'ao',
      'nobr',
      'rate',
      'maxpkts',
      'user',
      'pwd',
      'usera',
      'pwda',
      'userf',
      'pwdf',
      'upf',
      'hash',
      'hashf',
      'domain',
      'sshkey',
      'rf',
      'rs',
      'noredis',
      'rwp',
      'rwc',
      'rwf',
      ...commonParams,
    ]
  } else if (props.scanMode === 'web') {
    return [
      'u',
      'uf',
      'cookie',
      'wt',
      'max-redirect',
      'proxy',
      'socks5',
      'pocpath',
      'pocname',
      'num',
      'full',
      'dns',
      'nopoc',
      ...commonParams,
    ]
  } else if (props.scanMode === 'local') {
    return [
      'local',
      'rsh',
      'start-socks5',
      'fsh-port',
      'keylog-output',
      'download-url',
      'download-path',
      'persistence-file',
      'win-pe',
      ...commonParams,
    ]
  }
  return []
}

// 格式化命令显示
const formattedCommand = computed(() => {
  if (!props.hasTargets) return []

  const parts = []
  const allowedParams = getModeAllowedParams()

  // 根据扫描模式添加目标参数
  if (props.scanMode === 'host' && props.params.h.length > 0) {
    parts.push({ type: 'param', text: ' -h' })
    parts.push({ type: 'value', text: ` ${props.params.h.join(',')}` })
  } else if (props.scanMode === 'web' && props.params.u) {
    parts.push({ type: 'param', text: ' -u' })
    parts.push({ type: 'value', text: ` ${props.params.u}` })
  } else if (props.scanMode === 'local' && props.params.local) {
    parts.push({ type: 'param', text: ' -local' })
    parts.push({ type: 'value', text: ` ${props.params.local}` })
  }

  // 添加其他允许的参数
  for (const [key, value] of Object.entries(props.params)) {
    // 跳过已处理的目标参数
    if (key === 'h' || key === 'u' || key === 'local') continue

    // 跳过默认值参数
    if (key === 'm' && value === 'all') continue
    if (key === 'o' && value === 'result.txt') continue
    if (key === 'f' && value === 'txt') continue
    if (key === 'log' && value === 'SUCCESS') continue
    if (key === 'p' && value === '21,22,80,443,3306,6379,8080,8443') continue
    if (key === 't' && value === 600) continue
    if (key === 'time' && value === 3) continue
    if (key === 'mt' && value === 20) continue
    if (key === 'gt' && value === 180) continue
    if (key === 'retry' && value === 3) continue
    if (key === 'wt' && value === 5) continue
    if (key === 'max-redirect' && value === 10) continue
    if (key === 'num' && value === 20) continue
    if (key === 'fsh-port' && value === 4444) continue
    if (key === 'keylog-output' && value === 'keylog.txt') continue
    if (key === 'rate' && value === 0) continue
    if (key === 'maxpkts' && value === 0) continue
    if (key === 'start-socks5' && value === 0) continue

    // 只添加当前模式允许的参数
    if (!allowedParams.includes(key)) continue

    // 添加有值的参数
    if (value !== '' && value !== null && value !== undefined) {
      if (typeof value === 'boolean') {
        if (value) parts.push({ type: 'param', text: ` -${key}` })
      } else if (Array.isArray(value)) {
        if (value.length > 0) {
          parts.push({ type: 'param', text: ` -${key}` })
          parts.push({ type: 'value', text: ` ${value.join(',')}` })
        }
      } else if (typeof value === 'number') {
        // 数字类型，跳过0值（通常表示未设置）
        if (value !== 0) {
          parts.push({ type: 'param', text: ` -${key}` })
          parts.push({ type: 'value', text: ` ${value}` })
        }
      } else {
        parts.push({ type: 'param', text: ` -${key}` })
        parts.push({ type: 'value', text: ` ${value}` })
      }
    }
  }

  return parts
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
