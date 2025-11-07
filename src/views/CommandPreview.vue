<template>
  <div class="sticky top-4 z-30 mb-6">
    <Card>
      <CardHeader class="pb-3">
        <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="flex items-center gap-2">
            <Icon icon="mdi:console" class="text-xl text-primary" />
            <CardTitle class="text-base">命令预览</CardTitle>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <!-- 服务器地址输入 -->
            <input
              v-model="serverAddress"
              type="text"
              placeholder="服务器地址"
              class="w-32 md:w-40 rounded-lg border border-input bg-background px-3 py-1.5 text-sm outline-none transition-colors focus:border-ring"
            />
            <!-- 秘钥输入 -->
            <input
              v-model="serverKey"
              type="password"
              placeholder="服务器秘钥"
              class="w-32 md:w-40 rounded-lg border border-input bg-background px-3 py-1.5 text-sm outline-none transition-colors focus:border-ring"
            />
          </div>
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
  <!-- 仅当服务器地址存在时渲染 ScanResultCard -->
  <ScanResultCard v-if="serverAddress" />
</template>

<script setup>
import { computed, inject, ref, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import ScanResultCard from './ScanResultCard.vue'

const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
  hasTargets: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['reset', 'copy'])

const isDark = inject('isDark')
const showCopySuccess = inject('showCopySuccess')
const serverAddress = ref('')
const serverKey = ref('')

onMounted(() => {
  serverAddress.value = localStorage.getItem('serverAddress') || ''
  serverKey.value = localStorage.getItem('serverKey') || ''
})

// 实时保存到 localStorage
watch(serverAddress, newVal => {
  localStorage.setItem('serverAddress', newVal)
})

watch(serverKey, newVal => {
  localStorage.setItem('serverKey', newVal)
})

// 格式化命令显示
const formattedCommand = computed(() => {
  if (!props.hasTargets) return []

  const parts = []

  if (props.params.h.length > 0) {
    parts.push({ type: 'param', text: ' -h' })
    parts.push({ type: 'value', text: ` ${props.params.h.join(',')}` })
  }

  for (const [key, value] of Object.entries(props.params)) {
    if (key === 'h') continue
    if (key === 'm' && value === 'all') continue // fscan默认为all不需要显示
    if (value && value !== '') {
      if (typeof value === 'boolean') {
        if (value) parts.push({ type: 'param', text: ` -${key}` })
      } else {
        parts.push({ type: 'param', text: ` -${key}` })
        parts.push({ type: 'value', text: ` ${value}` })
      }
    }
  }

  localStorage.setItem('formattedCommand', parts.map(p => p.text).join(''))
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
