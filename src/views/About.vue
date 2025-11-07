<template>
  <div class="space-y-12">
    <!-- 页面标题 -->
    <section class="text-center">
      <div class="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
        <Icon icon="mdi:shield-search" class="text-5xl text-primary" />
      </div>
      <h1 class="mb-4 text-5xl font-bold">关于 Fscan-wiki</h1>
      <p class="mx-auto max-w-3xl text-xl text-muted-foreground">
        全面的内网综合扫描工具知识库与使用指南
      </p>
    </section>

    <!-- 项目介绍 -->
    <Card>
      <CardHeader>
        <div class="flex items-start gap-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon icon="mdi:information-outline" class="text-3xl text-primary" />
          </div>
          <div class="flex-1">
            <CardTitle>项目介绍</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div class="space-y-4 text-muted-foreground">
          <p>
            Fscan 是一款内网综合扫描工具，由 shadow1ng 开发并在 GitHub
            上开源。该工具采用主动和被动扫描相结合的方式，能够高效地发现内网存活主机、常见漏洞以及弱口令等安全问题。
          </p>
          <p>
            Fscan-wiki 旨在为安全研究人员和渗透测试工程师提供全面的 Fscan
            使用指南、参数说明以及最佳实践，帮助用户更高效地进行内网安全评估。
          </p>

          <div v-if="repoInfo" class="flex flex-wrap gap-3 pt-2">
            <div class="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <Icon icon="mdi:star" class="text-xl text-yellow-500" />
              <span>{{ repoInfo.stargazers_count.toLocaleString() }} 星标</span>
            </div>
            <div class="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <Icon icon="mdi:source-fork" class="text-xl text-primary" />
              <span>{{ repoInfo.forks_count.toLocaleString() }} 复刻</span>
            </div>
            <div class="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <Icon icon="mdi:eye-outline" class="text-xl text-primary" />
              <span>{{ repoInfo.watchers_count.toLocaleString() }} 关注</span>
            </div>
            <div
              class="inline-flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2 dark:bg-green-900/30"
            >
              <Icon icon="mdi:calendar-clock" class="text-xl" />
              <span>更新于 {{ formatDate(repoInfo.updated_at) }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 pt-4">
            <Button as-child>
              <a
                href="https://github.com/shadow1ng/fscan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:github" class="mr-2" />
                访问 GitHub 仓库
              </a>
            </Button>
            <Button as-child variant="default">
              <a
                href="https://github.com/shadow1ng/fscan/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:download" class="mr-2" />
                下载最新版本
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 贡献者 -->
    <Card>
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon icon="mdi:account-group" class="text-2xl text-primary" />
            <CardTitle>项目贡献者</CardTitle>
          </div>
          <span
            v-if="contributors.length > 0"
            class="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            {{ contributors.length }} 位贡献者
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <!-- 加载状态 -->
        <div v-if="loadingContributors" class="flex flex-col items-center justify-center py-12">
          <div
            class="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"
          ></div>
          <p class="text-muted-foreground">加载贡献者信息...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="contributorsError" class="py-12 text-center">
          <Icon icon="mdi:alert-circle" class="mb-4 text-4xl text-destructive" />
          <p class="mb-2 text-xl text-destructive">无法加载贡献者信息</p>
          <p class="mb-4 text-sm text-muted-foreground">{{ contributorsError }}</p>
          <Button @click="fetchContributors">重试</Button>
        </div>

        <!-- 贡献者列表 -->
        <div v-else-if="contributors.length > 0" class="space-y-6">
          <!-- 主要贡献者 -->
          <div>
            <h3 class="mb-4 text-lg font-semibold">主要贡献者</h3>
            <div class="grid gap-4 sm:grid-cols-2">
              <a
                v-for="contributor in contributors.slice(0, 4)"
                :key="contributor.id"
                :href="contributor.html_url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <img
                  :src="contributor.avatar_url"
                  :alt="contributor.login"
                  class="h-14 w-14 rounded-full"
                />
                <div class="flex-1">
                  <div class="font-medium">{{ contributor.login }}</div>
                  <div class="text-sm text-muted-foreground">
                    {{ contributor.contributions }} 次贡献
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- 其他贡献者 -->
          <div v-if="contributors.length > 4">
            <h3 class="mb-4 text-lg font-semibold">其他贡献者</h3>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="contributor in contributors.slice(4)"
                :key="contributor.id"
                :href="contributor.html_url"
                target="_blank"
                rel="noopener noreferrer"
                :title="`${contributor.login} - ${contributor.contributions} 次贡献`"
                class="transition-opacity hover:opacity-80"
              >
                <img
                  :src="contributor.avatar_url"
                  :alt="contributor.login"
                  class="h-12 w-12 rounded-full border-2 border-background"
                />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 开源许可 -->
    <Card>
      <CardHeader>
        <div class="flex items-center gap-3">
          <Icon icon="mdi:scale-balance" class="text-2xl text-primary" />
          <CardTitle>开源许可</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <!-- 加载状态 -->
        <div v-if="loadingLicense" class="flex flex-col items-center justify-center py-12">
          <div
            class="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"
          ></div>
          <p class="text-muted-foreground">加载许可证信息...</p>
        </div>

        <!-- 许可证内容 -->
        <div v-else class="rounded-lg border border-dashed bg-muted/50 p-6">
          <div class="flex items-start gap-4">
            <Icon icon="mdi:scale-balance" class="mt-1 shrink-0 text-3xl text-primary" />
            <div>
              <h3 class="mb-2 text-xl font-medium">
                {{ license ? license.name : 'MIT 许可证' }}
              </h3>
              <p class="mb-4 leading-relaxed text-muted-foreground">
                {{
                  license
                    ? license.description
                    : 'Fscan 基于 MIT 许可证开源，这是一种宽松的软件许可协议，允许您自由地使用、修改、分发和私有使用该软件，但需要在所有副本中包含原始许可证和版权声明。'
                }}
              </p>
              <Button as-child variant="link" class="h-auto p-0">
                <a
                  href="https://github.com/shadow1ng/fscan/blob/master/LICENSE.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看完整许可证
                  <Icon icon="mdi:open-in-new" class="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- 版本历史 -->
    <Card>
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Icon icon="mdi:timeline-clock" class="text-2xl text-primary" />
            <CardTitle>版本历史</CardTitle>
          </div>
          <Button as-child variant="ghost" size="sm">
            <a href="https://github.com/shadow1ng/fscan/releases" target="_blank">
              查看全部
              <Icon icon="mdi:arrow-right" class="ml-1" />
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <!-- 加载状态 -->
        <div v-if="loadingReleases" class="flex flex-col items-center justify-center py-12">
          <div
            class="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"
          ></div>
          <p class="text-muted-foreground">加载版本信息...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="releasesError" class="py-12 text-center">
          <Icon icon="mdi:alert-circle" class="mb-4 text-4xl text-destructive" />
          <p class="mb-2 text-xl text-destructive">无法加载版本信息</p>
          <p class="mb-4 text-sm text-muted-foreground">{{ releasesError }}</p>
          <Button @click="fetchReleases">重试</Button>
        </div>

        <!-- 版本列表 -->
        <div v-else-if="releases.length > 0" class="space-y-6">
          <div
            v-for="(release, index) in releases"
            :key="release.id"
            class="relative border-l-2 border-primary/20 pl-6"
          >
            <!-- 时间线圆点 -->
            <div
              class="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"
            ></div>

            <!-- 版本信息 -->
            <div class="mb-2 flex flex-wrap items-center gap-2">
              <h3 class="text-lg font-semibold">{{ release.tag_name }}</h3>
              <span
                v-if="index === 0"
                class="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300"
              >
                最新
              </span>
              <span
                v-if="release.prerelease"
                class="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
              >
                预发布
              </span>
            </div>

            <p class="mb-2 text-sm text-muted-foreground">{{ formatDate(release.published_at) }}</p>

            <div v-if="release.body" class="mb-3 line-clamp-3 text-sm text-muted-foreground">
              {{ release.body }}
            </div>

            <div class="flex gap-2">
              <Button as-child variant="outline" size="sm">
                <a :href="release.html_url" target="_blank" rel="noopener noreferrer">
                  查看详情
                  <Icon icon="mdi:open-in-new" class="ml-1" />
                </a>
              </Button>
              <Button
                v-if="release.assets && release.assets.length > 0"
                as-child
                variant="outline"
                size="sm"
              >
                <a :href="release.assets[0].browser_download_url" target="_blank">
                  <Icon icon="mdi:download" class="mr-1" />
                  下载
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const GITHUB_API_BASE = 'https://api.github.com/repos'
const REPO_OWNER = 'shadow1ng'
const REPO_NAME = 'fscan'

const repoInfo = ref(null)
const contributors = ref([])
const license = ref(null)
const releases = ref([])

const loadingContributors = ref(true)
const contributorsError = ref(null)
const loadingLicense = ref(true)
const licenseError = ref(null)
const loadingReleases = ref(true)
const releasesError = ref(null)

const formatDate = dateString => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const fetchRepoInfo = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}`)
    if (response.ok) {
      repoInfo.value = await response.json()
    }
  } catch (error) {
    console.error('获取仓库信息出错:', error)
  }
}

const fetchContributors = async () => {
  loadingContributors.value = true
  contributorsError.value = null

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`
    )

    if (!response.ok) {
      throw new Error(`获取贡献者信息失败：${response.status} ${response.statusText}`)
    }

    contributors.value = await response.json()
    contributors.value.sort((a, b) => b.contributions - a.contributions)
  } catch (error) {
    console.error('获取贡献者信息出错:', error)
    contributorsError.value = error.message
  } finally {
    loadingContributors.value = false
  }
}

const fetchLicense = async () => {
  loadingLicense.value = true
  licenseError.value = null

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/license`)

    if (response.ok) {
      const data = await response.json()
      license.value = data.license
    }
  } catch (error) {
    console.error('获取许可证信息出错:', error)
  } finally {
    loadingLicense.value = false
  }
}

const fetchReleases = async () => {
  loadingReleases.value = true
  releasesError.value = null

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/releases`)

    if (!response.ok) {
      throw new Error(`获取版本信息失败：${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    releases.value = data.slice(0, 5)
  } catch (error) {
    console.error('获取版本历史出错:', error)
    releasesError.value = error.message
  } finally {
    loadingReleases.value = false
  }
}

onMounted(() => {
  fetchRepoInfo()
  fetchContributors()
  fetchLicense()
  fetchReleases()
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
