<template>
  <div
    class="transition-colors duration-500"
    :class="isDark ? 'dark text-gray-200' : 'text-gray-800'"
  >
    <!-- 英雄区域 - 视差滚动效果 -->
    <section class="relative overflow-hidden rounded-xl mb-12">
      <!-- 动态背景效果 -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 transform transition-transform duration-10000 animate-gradient-slow"
      >
        <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 animate-pulse-slow"></div>
      </div>

      <!-- 3D悬浮效果的前景内容 -->
      <div class="relative container mx-auto px-4 py-16 md:py-24">
        <div
          class="max-w-3xl mx-auto text-center transform transition-all duration-700 hover:translate-y-[-5px] hover:scale-[1.02]"
        >
          <div
            class="inline-flex items-center px-3 py-1 rounded-full bg-blue-800/30 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6 animate-float"
          >
            <Icon icon="mdi:rocket-launch" class="mr-2 animate-bounce-slow" />
            新版本 2.0.0-build4 现已发布
          </div>

          <h1 class="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Fscan 安全扫描<span class="text-blue-200 animate-pulse-subtle">知识库</span>
          </h1>

          <p class="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fade-in">
            全面的安全扫描工具文档和最佳实践指南，提升你的渗透测试效率与安全分析能力
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/documents"
              class="btn-primary transform transition-all hover:scale-105 hover:rotate-1"
            >
              <Icon icon="mdi:book-open-page-variant" class="mr-2" />
              浏览文档
            </router-link>

            <a
              href="https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4"
              target="_blank"
              class="btn-secondary transform transition-all hover:scale-105 hover:rotate-[-1deg]"
            >
              <Icon icon="mdi:download" class="mr-2" />
              下载最新版
            </a>
          </div>

          <!-- 社交统计部分 - 加入悬浮效果 -->
          <div class="mt-8 flex flex-wrap justify-center gap-6">
            <div
              class="flex items-center text-blue-100 transition-all duration-300 hover:text-white hover:transform hover:translate-y-[-3px]"
            >
              <Icon icon="mdi:github" class="mr-2" />
              <a
                href="https://github.com/shadow1ng/fscan"
                target="_blank"
                class="hover:text-white transition-colors"
              >
                GitHub 项目
              </a>
            </div>
            <div
              class="flex items-center text-blue-100 transition-all duration-300 hover:text-white hover:transform hover:translate-y-[-3px]"
            >
              <Icon icon="mdi:star" class="mr-2 text-yellow-300 animate-pulse-subtle" />
              <span>{{ repoStats.stars }}</span>
            </div>
            <div
              class="flex items-center text-blue-100 transition-all duration-300 hover:text-white hover:transform hover:translate-y-[-3px]"
            >
              <Icon icon="mdi:source-fork" class="mr-2 text-blue-300 animate-pulse-subtle" />
              <span>{{ repoStats.forks }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 波浪动画效果 -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          class="w-full h-auto fill-current"
          :class="isDark ? 'text-gray-900' : 'text-gray-50'"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- 核心功能区域 - 交错动画效果 -->
    <section class="container mx-auto px-4 mb-16 relative">
      <div
        class="absolute -left-40 -top-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[150px] opacity-20 animate-blob"
      ></div>
      <div
        class="absolute -right-40 -bottom-20 w-64 h-64 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-blob animation-delay-2000"
      ></div>

      <h2
        class="text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-24 after:h-1 after:bg-indigo-500 after:rounded-full"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        核心功能
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(feature, index) in coreFeatures"
          :key="index"
          class="flex flex-col md:flex-row items-start gap-4 p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg"
          :class="[
            isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100',
            `animation-delay-${index * 200}`,
          ]"
        >
          <div
            class="w-12 h-12 flex items-center justify-center rounded-lg shrink-0 transition-all duration-500 transform hover:scale-110 hover:rotate-6"
            :class="feature.bgColor"
          >
            <Icon :icon="feature.icon" class="text-2xl" :class="feature.iconColor" />
          </div>

          <div>
            <h3
              class="text-lg font-semibold mb-2 transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-gray-900'"
            >
              {{ feature.title }}
            </h3>
            <p
              class="transition-colors duration-300"
              :class="isDark ? 'text-gray-400' : 'text-gray-600'"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Issues 部分 -->
    <section class="container mx-auto px-4 mb-16">
      <div class="flex justify-between items-center mb-8">
        <h2
          class="text-2xl md:text-3xl font-bold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-24 after:h-1 after:bg-red-500 after:rounded-full"
          :class="isDark ? 'text-white' : 'text-gray-900'"
        >
          GitHub Issues
        </h2>

        <a
          href="https://github.com/shadow1ng/fscan/issues"
          target="_blank"
          class="flex items-center text-sm font-medium transition-all duration-300 group"
          :class="
            isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          "
        >
          所有问题
          <Icon
            icon="mdi:arrow-right"
            class="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      <div
        class="rounded-xl overflow-hidden transition-colors duration-300 shadow-lg transform hover:shadow-2xl"
        :class="isDark ? 'bg-gray-800 shadow-gray-900/30' : 'bg-white'"
      >
        <div v-if="isIssuesLoading" class="p-10 flex justify-center items-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div v-else-if="issuesError" class="p-10 text-center">
          <Icon icon="mdi:alert-circle" class="text-4xl text-red-500 mb-3" />
          <p class="text-red-400">加载 Issues 失败，请稍后再试</p>
        </div>

        <div
          v-else
          class="divide-y transition-colors duration-300"
          :class="isDark ? 'divide-gray-700' : 'divide-gray-100'"
        >
          <div
            v-for="(issue, index) in githubIssues"
            :key="index"
            class="p-6 hover:bg-opacity-50 transition-all duration-300 transform hover:scale-[1.01]"
            :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3
                class="font-semibold transition-colors duration-300 flex items-center"
                :class="isDark ? 'text-white' : 'text-gray-900'"
              >
                <span
                  class="mr-2 px-2 py-0.5 text-xs rounded-full"
                  :class="
                    issue.state === 'open'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                  "
                >
                  {{ issue.state === 'open' ? '开放' : '关闭' }}
                </span>
                {{ issue.title }}
              </h3>

              <div class="flex items-center mt-1 md:mt-0">
                <Icon
                  icon="mdi:calendar"
                  class="mr-1 transition-colors duration-300"
                  :class="isDark ? 'text-gray-500' : 'text-gray-400'"
                />

                <p
                  class="text-sm transition-colors duration-300"
                  :class="isDark ? 'text-gray-400' : 'text-gray-500'"
                >
                  {{ formatDate(issue.created_at) }}
                </p>
              </div>
            </div>

            <p
              class="transition-colors duration-300 line-clamp-2"
              :class="isDark ? 'text-gray-400' : 'text-gray-700'"
            >
              {{ issue.body ? issue.body : '无描述' }}
            </p>

            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="label in issue.labels"
                :key="label.id"
                class="px-2 py-1 text-xs rounded-md"
                :style="{
                  backgroundColor: `#${label.color}20`,
                  color: `#${label.color}`,
                  borderColor: `#${label.color}40`,
                }"
              >
                {{ label.name }}
              </span>
            </div>

            <div class="mt-3">
              <a
                :href="issue.html_url"
                target="_blank"
                class="inline-flex items-center text-sm transition-all duration-300 hover:underline"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'"
              >
                查看详情
                <Icon icon="mdi:open-in-new" class="ml-1 text-xs" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="p-6 flex items-center justify-center border-t transition-colors duration-300"
          :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-100 bg-gray-50'"
        >
          <a
            href="https://github.com/shadow1ng/fscan/issues/new"
            target="_blank"
            class="flex items-center text-sm font-medium transition-colors duration-300 transform hover:scale-105"
            :class="
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            "
          >
            <Icon icon="mdi:bug" class="mr-2" />
            报告问题或请求新功能
          </a>
        </div>
      </div>
    </section>

    <!-- 项目资源 - 卡片翻转效果 -->
    <section class="container mx-auto px-4 mb-16">
      <h2
        class="text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-24 after:h-1 after:bg-green-500 after:rounded-full"
        :class="isDark ? 'text-white' : 'text-gray-900'"
      >
        项目资源
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(resource, index) in projectResources"
          :key="index"
          :href="resource.link"
          target="_blank"
          class="flex items-center p-5 rounded-xl transition-all duration-500 group transform hover:scale-[1.03] hover:-rotate-1"
          :class="
            isDark
              ? 'bg-gray-800 hover:bg-gray-750'
              : 'bg-white hover:bg-blue-50 shadow-md hover:shadow-xl'
          "
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-lg shrink-0 mr-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            :class="[resource.bgColor, isDark ? resource.darkBgColor : '']"
          >
            <Icon :icon="resource.icon" class="text-xl" :class="resource.iconColor" />
          </div>

          <div>
            <h3
              class="font-medium transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-gray-900'"
            >
              {{ resource.title }}
            </h3>
            <p
              class="text-sm transition-colors duration-300"
              :class="isDark ? 'text-gray-400' : 'text-gray-500'"
            >
              {{ resource.description }}
            </p>
          </div>

          <Icon
            icon="mdi:chevron-right"
            class="ml-auto transition-all duration-300 group-hover:translate-x-1"
            :class="isDark ? 'text-gray-600' : 'text-gray-400'"
          />
        </a>
      </div>
    </section>

    <!-- CTA 区域 - 背景动画效果 -->
    <section class="container mx-auto px-4 mb-16">
      <div
        class="rounded-xl overflow-hidden relative transform transition-all duration-500 hover:scale-[1.02]"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-900 animate-gradient"
        >
          <div
            class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pulse-slow"
          ></div>
        </div>

        <div class="relative p-8 md:p-12">
          <div class="max-w-2xl mx-auto text-center">
            <h2
              class="text-2xl md:text-3xl font-bold mb-4 text-white text-shadow-subtle animate-float-subtle"
            >
              准备好开始使用 Fscan 了吗？
            </h2>

            <p class="text-blue-100 mb-8 text-lg animate-fade-in">
              快速、高效的内网综合扫描工具，助力您的安全测试工作
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4"
                target="_blank"
                class="btn-white transform transition-all hover:scale-105 hover:-rotate-1"
              >
                <Icon icon="mdi:download" class="mr-2" />
                下载最新版
              </a>

              <router-link
                to="/documents"
                class="btn-outline transform transition-all hover:scale-105 hover:rotate-1"
              >
                <Icon icon="mdi:book-open-page-variant" class="mr-2" />
                阅读文档
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false))

// 存储仓库统计数据
const repoStats = ref({
  stars: '加载中...',
  forks: '加载中...',
})

// GitHub Issues 数据和状态
const githubIssues = ref([])
const isIssuesLoading = ref(true)
const issuesError = ref(false)

// 核心功能数据
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

// 项目资源数据
const projectResources = [
  {
    title: '开发分支',
    description: '最新开发版本',
    icon: 'mdi:source-branch',
    bgColor: 'bg-blue-100',
    darkBgColor: 'bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-300',
    link: 'https://github.com/shadow1ng/fscan/tree/dev',
  },
  {
    title: '发布分支',
    description: '稳定版本代码',
    icon: 'mdi:source-commit',
    bgColor: 'bg-green-100',
    darkBgColor: 'bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-300',
    link: 'https://github.com/shadow1ng/fscan',
  },
  {
    title: '1.8.4 老版本分支',
    description: '旧版本代码',
    icon: 'mdi:history',
    bgColor: 'bg-gray-100',
    darkBgColor: 'bg-gray-700/30',
    iconColor: 'text-gray-600 dark:text-gray-300',
    link: 'https://github.com/shadow1ng/fscan/tree/1.8.4-bak',
  },
  {
    title: '最新版本下载',
    description: '2.0.0-build4',
    icon: 'mdi:download',
    bgColor: 'bg-purple-100',
    darkBgColor: 'bg-purple-900/20',
    iconColor: 'text-purple-600 dark:text-purple-300',
    link: 'https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4',
  },
  {
    title: '稳定版本下载',
    description: '1.8.4 版本',
    icon: 'mdi:download-box',
    bgColor: 'bg-amber-100',
    darkBgColor: 'bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-300',
    link: 'https://github.com/shadow1ng/fscan/releases/tag/1.8.4',
  },
  {
    title: '问题反馈',
    description: '报告 Bug 或功能建议',
    icon: 'mdi:bug',
    bgColor: 'bg-red-100',
    darkBgColor: 'bg-red-900/20',
    iconColor: 'text-red-600 dark:text-red-300',
    link: 'https://github.com/shadow1ng/fscan/issues',
  },
]

// 格式化日期方法
const formatDate = dateString => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

// 获取GitHub仓库统计数据
const fetchRepoStats = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/shadow1ng/fscan')
    if (response.ok) {
      const data = await response.json()
      repoStats.value = {
        stars: formatNumber(data.stargazers_count),
        forks: formatNumber(data.forks_count),
      }
    } else {
      throw new Error('获取数据失败')
    }
  } catch (error) {
    console.error('获取GitHub仓库数据失败:', error)
    repoStats.value = {
      stars: '3.2k+', // 回退值
      forks: '400+', // 回退值
    }
  }
}

// 获取GitHub最新Issues
const fetchGithubIssues = async () => {
  isIssuesLoading.value = true
  issuesError.value = false

  try {
    const response = await fetch(
      'https://api.github.com/repos/shadow1ng/fscan/issues?per_page=5&state=all'
    )
    if (response.ok) {
      const data = await response.json()
      githubIssues.value = data
    } else {
      throw new Error('获取Issues失败')
    }
  } catch (error) {
    console.error('获取GitHub Issues失败:', error)
    issuesError.value = true
  } finally {
    isIssuesLoading.value = false
  }
}

// 格式化数字（例如：1200 -> 1.2k）
const formatNumber = num => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k+`
  }
  return `${num}+`
}

// 组件挂载时获取数据
onMounted(() => {
  fetchRepoStats()
  fetchGithubIssues()
})
</script>

<style>
/* 按钮样式 */
.btn-primary {
  @apply bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl;
}

.btn-secondary {
  @apply bg-blue-800/30 text-white hover:bg-blue-700/40 backdrop-blur-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center;
}

.btn-white {
  @apply bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl;
}

.btn-outline {
  @apply bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center;
}

/* 文本阴影效果 */
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.text-shadow-subtle {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* 动画效果 */
.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-subtle {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s infinite;
}

.animate-pulse-slow {
  animation: pulse 8s infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 200% 200%;
}

.animate-gradient-slow {
  animation: gradient 20s ease infinite;
  background-size: 400% 400%;
}

.animate-wave {
  animation: wave 15s ease-in-out infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* 动画关键帧定义 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%);
  }
}

@keyframes blob {
  0% {
    transform: scale(1) translate(0px, 0px);
  }
  33% {
    transform: scale(1.1) translate(20px, -20px);
  }
  66% {
    transform: scale(0.9) translate(-20px, 20px);
  }
  100% {
    transform: scale(1) translate(0px, 0px);
  }
}

/* 响应式动画延迟类 */
@media (min-width: 768px) {
  .animation-delay-100 {
    animation-delay: 0.1s;
  }
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  .animation-delay-300 {
    animation-delay: 0.3s;
  }
  .animation-delay-400 {
    animation-delay: 0.4s;
  }
  .animation-delay-500 {
    animation-delay: 0.5s;
  }
  .animation-delay-600 {
    animation-delay: 0.6s;
  }
}

/* 自定义文本截断效果 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 自定义缓动效果 */
.ease-bounce {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
