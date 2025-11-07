<template>
  <Card class="mb-6">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:information-outline" class="text-2xl text-primary" />
        <CardTitle>命令详情</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p class="mb-8 text-2xl font-medium">当前命令将执行以下操作：</p>

      <!-- 未添加目标时的提示 -->
      <div
        v-if="!hasTargets"
        class="mb-8 flex items-center rounded-lg border border-destructive/20 bg-destructive/10 p-8 text-center text-destructive"
      >
        <Icon icon="mdi:alert-circle-outline" class="mr-5 flex-shrink-0 text-3xl" />
        <p class="text-lg">
          请添加目标地址以开始构建命令。您可以添加单个IP、域名或CIDR格式的IP段（例如：192.168.1.1/24）。
        </p>
      </div>

      <!-- 已添加目标时的详情列表 -->
      <div v-else>
        <ul class="mb-8 space-y-6">
          <li
            class="flex items-start rounded-xl p-6 transition-colors duration-200 hover:bg-accent/50"
          >
            <div
              class="mr-5 mt-0.5 flex-shrink-0 rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            >
              <Icon icon="mdi:target" class="text-2xl" />
            </div>
            <div>
              <div class="text-xl font-medium">扫描目标</div>
              <div v-if="params.h.length > 0" class="mt-2 text-lg text-muted-foreground">
                {{ params.h.join(', ') }}
                <span v-if="params.h.length > 1" class="ml-2 text-sm opacity-70">(多个目标)</span>
              </div>
              <div v-else-if="params.u" class="mt-2 text-lg text-muted-foreground">
                {{ params.u }}
                <span class="ml-2 text-sm opacity-70">(URL)</span>
              </div>
              <div v-else-if="params.uf" class="mt-2 text-lg text-muted-foreground">
                从文件加载: {{ params.uf }}
                <span class="ml-2 text-sm opacity-70">(URLs文件)</span>
              </div>
              <div v-else-if="params.hf" class="mt-2 text-lg text-muted-foreground">
                从文件加载: {{ params.hf }}
                <span class="ml-2 text-sm opacity-70">(主机文件)</span>
              </div>
            </div>
          </li>

          <li
            v-if="scanMode === 'host' && params.p"
            class="flex items-start rounded-xl p-6 transition-colors duration-200 hover:bg-accent/50"
          >
            <div
              class="mr-5 mt-0.5 flex-shrink-0 rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
            >
              <Icon icon="mdi:lan-connect" class="text-2xl" />
            </div>
            <div>
              <div class="text-xl font-medium">扫描端口</div>
              <div class="mt-2 text-lg text-muted-foreground">
                {{ params.p }}
              </div>
            </div>
          </li>

          <li
            v-if="scanMode === 'host'"
            class="flex items-start rounded-xl p-6 transition-colors duration-200 hover:bg-accent/50"
          >
            <div
              class="mr-5 mt-0.5 flex-shrink-0 rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400"
            >
              <Icon icon="mdi:speedometer" class="text-2xl" />
            </div>
            <div>
              <div class="text-xl font-medium">扫描性能</div>
              <div class="mt-2 text-lg text-muted-foreground">
                使用 <span class="font-medium">{{ params.t }}</span> 个线程进行扫描， 单次连接超时
                <span class="font-medium">{{ params.time }}</span> 秒， 全局超时
                <span class="font-medium">{{ params.gt }}</span> 秒
              </div>
            </div>
          </li>

          <li
            v-if="params.o"
            class="flex items-start rounded-xl p-6 transition-colors duration-200 hover:bg-accent/50"
          >
            <div
              class="mr-5 mt-0.5 flex-shrink-0 rounded-xl bg-amber-100 p-3 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
            >
              <Icon icon="mdi:file-document-outline" class="text-2xl" />
            </div>
            <div>
              <div class="text-xl font-medium">结果输出</div>
              <div class="mt-2 text-lg text-muted-foreground">
                扫描结果将保存到 <span class="font-medium">{{ params.o }}</span> 文件中
                <span v-if="params.f && params.f !== 'txt'">({{ params.f }}格式)</span>
              </div>
            </div>
          </li>

          <!-- 已启用的特殊选项 -->
          <li
            v-for="option in enabledOptions"
            :key="option.param"
            class="flex items-start rounded-xl p-6 transition-colors duration-200 hover:bg-accent/50"
          >
            <div
              class="mr-5 mt-0.5 flex-shrink-0 rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
            >
              <Icon :icon="option.icon || 'mdi:check-circle'" class="text-2xl" />
            </div>
            <div>
              <div class="text-xl font-medium">{{ option.name }}</div>
              <div class="mt-2 text-lg text-muted-foreground">
                {{ option.detail || option.description }}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 提示信息 -->
      <div class="rounded-xl border border-dashed border-border bg-muted/30 p-8">
        <div class="flex items-start">
          <div
            class="mr-5 flex-shrink-0 rounded-full bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
          >
            <Icon icon="mdi:lightbulb-outline" class="text-2xl" />
          </div>
          <div>
            <p class="mb-4 text-xl font-medium">安全使用提示</p>
            <p class="text-lg leading-relaxed text-muted-foreground">
              Fscan
              是一款内网综合扫描工具，支持端口扫描、服务识别、漏洞检测等功能。在高安全环境下使用时，请合理设置线程数和超时时间，避免触发安全设备告警。建议在非生产环境先行测试，确保扫描不会对目标系统造成负面影响。
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

defineProps({
  params: {
    type: Object,
    required: true,
  },
  hasTargets: {
    type: Boolean,
    required: true,
  },
  enabledOptions: {
    type: Array,
    required: true,
  },
  scanMode: {
    type: String,
    default: 'host',
  },
})
</script>
