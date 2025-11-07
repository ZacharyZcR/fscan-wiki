<template>
  <Card class="mb-16">
    <CardHeader>
      <div class="flex items-center gap-3">
        <Icon icon="mdi:key" class="text-2xl text-primary" />
        <CardTitle>认证与凭据参数</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <!-- 标准认证参数 -->
      <div class="mb-10">
        <h3 class="mb-4 text-xl font-medium">
          <Icon icon="mdi:account-key" class="mr-2 inline-block text-xl text-primary" />
          标准认证参数
        </h3>

        <!-- 用户名和密码 -->
        <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">默认用户名 (-user)</label>
            <div class="flex items-center">
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
      </div>

      <!-- 字典文件路径 -->
      <div class="mb-10">
        <h3 class="mb-4 text-xl font-medium">
          <Icon icon="mdi:file-document" class="mr-2 inline-block text-xl text-primary" />
          字典文件路径
        </h3>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">用户名字典 (-userf)</label>
            <div class="flex items-center">
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
      </div>

      <!-- Hash 认证参数 -->
      <div class="mb-10">
        <h3 class="mb-4 text-xl font-medium">
          <Icon icon="mdi:key-chain" class="mr-2 inline-block text-xl text-primary" />
          Hash 认证参数
        </h3>

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
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
      </div>

      <!-- 高级认证参数 -->
      <div class="mb-10">
        <h3 class="mb-4 text-xl font-medium">
          <Icon icon="mdi:shield-key" class="mr-2 inline-block text-xl text-primary" />
          高级认证参数
        </h3>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="mb-3 block text-lg font-medium">域名 (-domain)</label>
            <input
              v-model="params.domain"
              type="text"
              placeholder="SMB 扫描使用的域名"
              class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
            />
          </div>

          <div>
            <label class="mb-3 block text-lg font-medium">SSH 密钥路径 (-sshkey)</label>
            <div class="flex items-center">
              <div class="flex-shrink-0 rounded-l-lg border border-r-0 border-input bg-muted px-4 py-3 text-base">
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
      </div>

      <!-- Redis 专用参数 -->
      <div>
        <h3 class="mb-4 text-xl font-medium">
          <Icon icon="mdi:database" class="mr-2 inline-block text-xl text-primary" />
          Redis 专用参数
        </h3>

        <div class="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-6">
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

// 切换Redis禁用状态
const toggleRedisDisable = () => {
  params.value.noredis = !params.value.noredis
}
</script>
