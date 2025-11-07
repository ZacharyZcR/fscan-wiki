<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-blue-600 p-12 text-white">
      <div class="relative z-10 mx-auto max-w-3xl text-center">
        <div class="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
          <Icon icon="mdi:rocket-launch" class="mr-2" />
          新版本 2.0.0-build4 现已发布
        </div>

        <h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">
          Fscan 安全扫描工具
        </h1>

        <p class="mb-8 text-lg text-blue-100">
          快速、高效的内网综合扫描工具，助力您的安全测试工作
        </p>

        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button as-child size="lg">
            <router-link to="/parameters">
              <Icon icon="mdi:console" class="mr-2" />
              参数配置
            </router-link>
          </Button>

          <Button as-child variant="outline" size="lg" class="border-white/30 text-white hover:bg-white/10">
            <a href="https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4" target="_blank">
              <Icon icon="mdi:download" class="mr-2" />
              下载最新版
            </a>
          </Button>
        </div>

        <!-- Stats -->
        <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <a href="https://github.com/shadow1ng/fscan" target="_blank" class="flex items-center hover:text-blue-100">
            <Icon icon="mdi:github" class="mr-2" />
            GitHub 项目
          </a>
          <div class="flex items-center">
            <Icon icon="mdi:star" class="mr-2" />
            {{ repoStats.stars }} Stars
          </div>
          <div class="flex items-center">
            <Icon icon="mdi:source-fork" class="mr-2" />
            {{ repoStats.forks }} Forks
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section>
      <h2 class="mb-6 text-3xl font-bold">核心功能</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card v-for="feature in coreFeatures" :key="feature.title" class="transition-shadow hover:shadow-lg">
          <CardHeader>
            <div class="flex items-start gap-4">
              <div :class="['flex h-12 w-12 shrink-0 items-center justify-center rounded-lg', feature.bgColor]">
                <Icon :icon="feature.icon" :class="['text-2xl', feature.iconColor]" />
              </div>
              <div>
                <CardTitle class="text-lg">{{ feature.title }}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">{{ feature.description }}</p>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- GitHub Issues -->
    <section>
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-3xl font-bold">最近问题</h2>
        <Button as-child variant="ghost" size="sm">
          <a href="https://github.com/shadow1ng/fscan/issues" target="_blank">
            查看全部
            <Icon icon="mdi:arrow-right" class="ml-1" />
          </a>
        </Button>
      </div>

      <Card>
        <div v-if="isIssuesLoading" class="flex items-center justify-center p-12">
          <div class="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        </div>

        <div v-else-if="issuesError" class="p-12 text-center text-muted-foreground">
          <Icon icon="mdi:alert-circle" class="mb-2 text-4xl text-destructive" />
          <p>加载失败</p>
        </div>

        <div v-else class="divide-y">
          <div v-for="issue in githubIssues" :key="issue.id" class="p-6 transition-colors hover:bg-muted/50">
            <div class="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div class="flex items-center gap-2">
                <span :class="[
                  'rounded-full px-2 py-0.5 text-xs',
                  issue.state === 'open'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                ]">
                  {{ issue.state === 'open' ? '开放' : '关闭' }}
                </span>
                <h3 class="font-semibold">{{ issue.title }}</h3>
              </div>
              <span class="text-sm text-muted-foreground">{{ formatDate(issue.created_at) }}</span>
            </div>

            <p v-if="issue.body" class="mb-3 line-clamp-2 text-muted-foreground">{{ issue.body }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="label in issue.labels.slice(0, 3)"
                :key="label.id"
                class="rounded-md px-2 py-1 text-xs"
                :style="{
                  backgroundColor: `#${label.color}20`,
                  color: `#${label.color}`,
                }"
              >
                {{ label.name }}
              </span>
              <Button as-child variant="link" size="sm" class="h-auto p-0">
                <a :href="issue.html_url" target="_blank">
                  查看详情
                  <Icon icon="mdi:open-in-new" class="ml-1 text-xs" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div class="border-t bg-muted/50 p-4 text-center">
          <Button as-child variant="ghost" size="sm">
            <a href="https://github.com/shadow1ng/fscan/issues/new" target="_blank">
              <Icon icon="mdi:bug" class="mr-2" />
              报告问题或请求新功能
            </a>
          </Button>
        </div>
      </Card>
    </section>

    <!-- Project Resources -->
    <section>
      <h2 class="mb-6 text-3xl font-bold">项目资源</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Button
          v-for="resource in projectResources"
          :key="resource.title"
          as-child
          variant="outline"
          class="h-auto justify-start p-4 transition-shadow hover:shadow-md"
        >
          <a :href="resource.link" target="_blank">
            <div :class="['mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg', resource.bgColor]">
              <Icon :icon="resource.icon" :class="['text-xl', resource.iconColor]" />
            </div>
            <div class="text-left">
              <div class="font-semibold">{{ resource.title }}</div>
              <div class="text-xs text-muted-foreground">{{ resource.description }}</div>
            </div>
          </a>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const repoStats = ref({
  stars: '...',
  forks: '...',
})

const githubIssues = ref([])
const isIssuesLoading = ref(true)
const issuesError = ref(false)

const coreFeatures = [
  {
    title: '端口扫描',
    description: '快速扫描主机开放端口，支持自定义端口范围和多线程扫描',
    icon: 'mdi:radar',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-300',
  },
  {
    title: '漏洞检测',
    description: '内置多种漏洞检测模块，可检测常见的Web应用和系统漏洞',
    icon: 'mdi:shield-bug',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
    iconColor: 'text-red-600 dark:text-red-300',
  },
  {
    title: '服务识别',
    description: '自动识别目标主机运行的服务类型和版本信息',
    icon: 'mdi:fingerprint',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-300',
  },
  {
    title: '口令爆破',
    description: '支持多种协议的口令爆破，包括SSH、FTP、SMB、MSSQL等',
    icon: 'mdi:key',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-300',
  },
  {
    title: '内网穿透',
    description: '支持通过代理进行扫描，便于内网环境下的渗透测试',
    icon: 'mdi:lan-connect',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-300',
  },
  {
    title: '结果导出',
    description: '扫描结果可导出为多种格式，便于分析和报告生成',
    icon: 'mdi:file-export',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-300',
  },
]

const projectResources = [
  {
    title: '开发分支',
    description: '最新开发版本',
    icon: 'mdi:source-branch',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-300',
    link: 'https://github.com/shadow1ng/fscan/tree/dev',
  },
  {
    title: '稳定版本',
    description: '1.8.4 版本代码',
    icon: 'mdi:source-commit',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-300',
    link: 'https://github.com/shadow1ng/fscan/tree/1.8.4-bak',
  },
  {
    title: '最新版本下载',
    description: '2.0.0-build4',
    icon: 'mdi:download',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-300',
    link: 'https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4',
  },
  {
    title: '稳定版本下载',
    description: '1.8.4 版本',
    icon: 'mdi:download-box',
    bgColor: 'bg-amber-100 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-300',
    link: 'https://github.com/shadow1ng/fscan/releases/tag/1.8.4',
  },
  {
    title: '问题反馈',
    description: '报告 Bug 或功能建议',
    icon: 'mdi:bug',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
    iconColor: 'text-red-600 dark:text-red-300',
    link: 'https://github.com/shadow1ng/fscan/issues',
  },
  {
    title: 'GitHub 仓库',
    description: '查看源代码',
    icon: 'mdi:github',
    bgColor: 'bg-gray-100 dark:bg-gray-700/30',
    iconColor: 'text-gray-600 dark:text-gray-300',
    link: 'https://github.com/shadow1ng/fscan',
  },
]

const formatDate = dateString => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const fetchRepoStats = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/shadow1ng/fscan')
    if (response.ok) {
      const data = await response.json()
      repoStats.value = {
        stars: data.stargazers_count.toLocaleString(),
        forks: data.forks_count.toLocaleString(),
      }
    }
  } catch (error) {
    console.error('获取GitHub仓库数据失败:', error)
    repoStats.value = { stars: '3.2k+', forks: '400+' }
  }
}

const fetchGithubIssues = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/shadow1ng/fscan/issues?per_page=5&state=all'
    )
    if (response.ok) {
      githubIssues.value = await response.json()
    } else {
      issuesError.value = true
    }
  } catch (error) {
    console.error('获取GitHub Issues失败:', error)
    issuesError.value = true
  } finally {
    isIssuesLoading.value = false
  }
}

onMounted(() => {
  fetchRepoStats()
  fetchGithubIssues()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
