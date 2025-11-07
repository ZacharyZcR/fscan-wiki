<template>
  <Card class="mb-6">
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

      <!-- Cookie -->
      <div class="mb-8">
        <label class="mb-3 block text-lg font-medium">Cookie (-cookie)</label>
        <input
          v-model="params.cookie"
          type="text"
          placeholder="HTTP Cookie"
          class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
        />
      </div>

      <!-- 代理配置 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-3 block text-lg font-medium">HTTP 代理 (-proxy)</label>
          <input
            v-model="params.proxy"
            type="text"
            placeholder="http://127.0.0.1:8080"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>

        <div>
          <label class="mb-3 block text-lg font-medium">SOCKS5 代理 (-socks5)</label>
          <input
            v-model="params.socks5"
            type="text"
            placeholder="127.0.0.1:1080"
            class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
          />
        </div>
      </div>

      <!-- Web 超时和重定向 -->
      <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label class="mb-4 flex items-center gap-2 text-lg font-medium">
            <Icon icon="mdi:timer-outline" class="text-xl text-primary" />
            Web 超时 (-wt)
            <span class="text-sm font-normal text-muted-foreground">(当前: {{ params.wt }}秒)</span>
          </label>
          <div class="flex items-center gap-4">
            <input
              v-model.number="params.wt"
              type="range"
              min="1"
              max="60"
              step="1"
              class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted"
            />
            <div class="flex min-w-[80px] items-center justify-center rounded-lg border border-input bg-muted px-3 py-2 text-base font-medium">
              {{ params.wt }}s
            </div>
          </div>
          <div class="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>1秒 (快速)</span>
            <span>60秒 (慢速)</span>
          </div>
        </div>

        <div>
          <label class="mb-3 flex justify-between text-lg font-medium">
            最大重定向次数 (-max-redirect)
            <span class="text-sm text-muted-foreground">1-50</span>
          </label>
          <div class="flex items-center">
            <button
              type="button"
              class="rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="decrementMaxRedirect"
            >
              <Icon icon="mdi:minus" class="text-lg" />
            </button>
            <input
              v-model.number="params['max-redirect']"
              type="number"
              min="1"
              max="50"
              class="w-full border border-input bg-background px-4 py-3 text-center text-base outline-none transition-colors focus:border-ring"
            />
            <button
              type="button"
              class="rounded-r-lg border border-l-0 border-input bg-muted px-4 py-3 transition-colors hover:bg-muted/80"
              @click="incrementMaxRedirect"
            >
              <Icon icon="mdi:plus" class="text-lg" />
            </button>
          </div>
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

// 最大重定向次数控制
const incrementMaxRedirect = () => {
  if (params.value['max-redirect'] < 50) {
    params.value['max-redirect']++
  }
}

const decrementMaxRedirect = () => {
  if (params.value['max-redirect'] > 1) {
    params.value['max-redirect']--
  }
}
</script>
