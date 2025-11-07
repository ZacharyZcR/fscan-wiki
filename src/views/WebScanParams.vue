<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:web" class="text-2xl text-primary" />
        <CardTitle>Web扫描参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 目标URL和URLs文件 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">目标URL (-u)</label>
          <input
            v-model="params.u"
            type="text"
            placeholder="指定单个目标URL"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">URLs文件 (-uf)</label>
          <input
            v-model="params.uf"
            type="text"
            placeholder="URLs列表文件路径"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>

      <!-- POC文件和Cookie -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">POC文件 (-pocf)</label>
          <input
            v-model="params.pocf"
            type="text"
            placeholder="POC文件路径"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">Cookie (-cookie)</label>
          <input
            v-model="params.cookie"
            type="text"
            placeholder="HTTP Cookie"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>

      <!-- 请求配置 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">代理 (-proxy)</label>
          <input
            v-model="params.proxy"
            type="text"
            placeholder="http://127.0.0.1:8080"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">User-Agent (-ua)</label>
          <input
            v-model="params.ua"
            type="text"
            placeholder="自定义User-Agent"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>

      <!-- 超时设置 -->
      <div>
        <label class="mb-4 flex items-center gap-2 text-lg font-medium">
          <Icon icon="mdi:timer-outline" class="text-xl text-primary" />
          Web超时 (-webtimeout)
          <span class="text-sm font-normal text-muted-foreground">(当前: {{ params.webtimeout }}秒)</span>
        </label>
        <div class="flex items-center gap-4">
          <input
            v-model.number="params.webtimeout"
            type="range"
            min="1"
            max="60"
            step="1"
            class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted"
          />
          <div class="flex min-w-[80px] items-center justify-center rounded-lg border border-input bg-muted px-3 py-2 text-base font-medium">
            {{ params.webtimeout }}s
          </div>
        </div>
        <div class="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>1秒 (快速)</span>
          <span>60秒 (慢速)</span>
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

const isDark = inject('isDark')
</script>
