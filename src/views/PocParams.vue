<template>
  <Card class="mb-6">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:bug" class="text-2xl text-primary" />
        <CardTitle>POC测试参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- POC路径和名称 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">POC路径 (-pocpath)</label>
          <input
            v-model="params.pocpath"
            type="text"
            placeholder="自定义POC文件路径"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">POC名称 (-pocname)</label>
          <input
            v-model="params.pocname"
            type="text"
            placeholder="指定POC名称"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>

      <!-- POC线程数 -->
      <div class="mb-8">
        <label class="mb-3 flex items-center justify-between text-lg font-medium">
          <span>POC线程数 (-num)</span>
          <span class="text-sm text-muted-foreground">1-100</span>
        </label>
        <div class="flex items-center gap-2">
          <button
            class="rounded-lg border border-input bg-muted px-4 py-3 transition-colors hover:bg-accent"
            @click="decrementPocNum"
          >
            <Icon icon="mdi:minus" class="text-lg" />
          </button>
          <input
            v-model.number="params.num"
            type="number"
            min="1"
            max="100"
            class="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
          />
          <button
            class="rounded-lg border border-input bg-muted px-4 py-3 transition-colors hover:bg-accent"
            @click="incrementPocNum"
          >
            <Icon icon="mdi:plus" class="text-lg" />
          </button>
        </div>
      </div>

      <!-- 选项开关 -->
      <div class="space-y-4">
        <div
          v-for="(option, key) in pocOptions"
          :key="key"
          class="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:bg-muted"
        >
          <div class="flex items-start gap-3">
            <Icon :icon="option.icon" class="mt-1 text-xl text-primary" />
            <div class="flex-1">
              <div class="mb-1 flex items-center gap-2">
                <span class="font-medium">{{ option.name }}</span>
                <code class="rounded bg-muted px-2 py-0.5 text-xs">-{{ option.param }}</code>
              </div>
              <p class="text-sm text-muted-foreground">{{ option.description }}</p>
              <p v-if="option.detail" class="mt-1 text-xs text-muted-foreground">
                {{ option.detail }}
              </p>
            </div>
          </div>
          <button
            type="button"
            class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :class="option.enabled ? 'bg-primary' : 'bg-input'"
            role="switch"
            :aria-checked="option.enabled"
            @click="toggleOptionLocal(key, option)"
          >
            <span
              class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"
              :class="option.enabled ? 'translate-x-5' : 'translate-x-0'"
            ></span>
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
import { inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const params = defineModel('params', {
  type: Object,
  required: true,
})

const props = defineProps({
  pocOptions: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle-option'])

const isDark = inject('isDark')

// POC线程数控制
const incrementPocNum = () => {
  if (params.value.num < 100) {
    params.value.num++
  }
}

const decrementPocNum = () => {
  if (params.value.num > 1) {
    params.value.num--
  }
}

// 切换选项本地方法
const toggleOptionLocal = (key, option) => {
  emit('toggle-option', key, option)
}
</script>
