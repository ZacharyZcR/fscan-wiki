<template>
  <div class="max-w-5xl mx-auto px-4 transition-colors duration-300"
       :class="isDark ? 'text-gray-300' : 'text-gray-700'">
    <!-- 页面标题区 - 保持不变 -->
    <div class="mb-12 text-center">
      <div class="inline-flex items-center justify-center p-3 rounded-full mb-5 bg-opacity-10"
           :class="isDark ? 'bg-blue-500' : 'bg-blue-100'">
        <Icon icon="mdi:shield-search" class="text-4xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-4xl font-bold mb-4 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">关于 Fscan-wiki</h1>
      <p class="text-xl max-w-2xl mx-auto transition-colors duration-300"
         :class="isDark ? 'text-gray-400' : 'text-gray-500'">
        全面的内网综合扫描工具知识库与使用指南
      </p>
    </div>

    <!-- 项目介绍卡片 - 保持不变 -->
    <div class="rounded-xl border shadow-lg overflow-hidden mb-10 transition-all duration-300 transform hover:shadow-xl"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="p-6 md:p-8">
        <div class="flex items-start">
          <div class="p-3 rounded-lg mr-5 flex-shrink-0"
               :class="isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'">
            <Icon icon="mdi:information-outline" class="text-3xl" />
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4 transition-colors duration-300"
                :class="isDark ? 'text-white' : 'text-gray-800'">项目介绍</h2>
            <div class="space-y-4" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
              <p>Fscan 是一款内网综合扫描工具，由 shadow1ng 开发并在 GitHub 上开源。该工具采用主动和被动扫描相结合的方式，能够高效地发现内网存活主机、常见漏洞以及弱口令等安全问题。</p>
              <p>Fscan-wiki 旨在为安全研究人员和渗透测试工程师提供全面的 Fscan 使用指南、参数说明以及最佳实践，帮助用户更高效地进行内网安全评估。</p>

              <div v-if="repoInfo" class="mt-4 flex items-center flex-wrap gap-4">
                <div class="inline-flex items-center px-3 py-1.5 rounded-full text-sm"
                     :class="isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'">
                  <Icon icon="mdi:star" class="mr-1 text-yellow-500" />
                  <span>{{ repoInfo.stargazers_count.toLocaleString() }} 星标</span>
                </div>
                <div class="inline-flex items-center px-3 py-1.5 rounded-full text-sm"
                     :class="isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'">
                  <Icon icon="mdi:source-fork" class="mr-1" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
                  <span>{{ repoInfo.forks_count.toLocaleString() }} 复刻</span>
                </div>
                <div class="inline-flex items-center px-3 py-1.5 rounded-full text-sm"
                     :class="isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'">
                  <Icon icon="mdi:eye-outline" class="mr-1" :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
                  <span>{{ repoInfo.watchers_count.toLocaleString() }} 关注</span>
                </div>
                <div class="inline-flex items-center px-3 py-1.5 rounded-full text-sm"
                     :class="isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'">
                  <Icon icon="mdi:calendar-clock" class="mr-1" />
                  <span>更新于 {{ formatDate(repoInfo.updated_at) }}</span>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-6">
                <a href="https://github.com/shadow1ng/fscan" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                   :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
                  <Icon icon="mdi:github" class="mr-2 text-lg" />
                  访问 GitHub 仓库
                </a>
                <a href="https://github.com/shadow1ng/fscan/releases" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                   :class="isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'">
                  <Icon icon="mdi:download" class="mr-2 text-lg" />
                  下载最新版本
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 团队与许可证信息 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <!-- 贡献者卡片 - 完全重新设计 -->
      <div class="rounded-xl border shadow-lg overflow-hidden transition-all duration-300 h-full"
           :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="px-6 py-5 border-b flex items-center justify-between"
             :class="isDark ? 'border-gray-700' : 'border-gray-200'">
          <div class="flex items-center">
            <Icon icon="mdi:account-group" class="mr-3 text-2xl"
                  :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
            <h2 class="font-bold text-xl transition-colors duration-300"
                :class="isDark ? 'text-white' : 'text-gray-800'">项目贡献者</h2>
          </div>
          <span v-if="contributors.length > 0" class="px-2.5 py-1 text-xs rounded-full"
                :class="isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-700'">
            {{ contributors.length }} 位贡献者
          </span>
        </div>

        <!-- 加载状态 -->
        <div v-if="loadingContributors" class="p-8 flex flex-col items-center justify-center">
          <div class="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'">加载贡献者信息...</p>
        </div>

        <!-- 错误提示 -->
        <div v-else-if="contributorsError" class="p-8 text-center">
          <div class="p-3 rounded-full bg-red-100 text-red-500 inline-flex items-center justify-center mb-4">
            <Icon icon="mdi:alert-circle" class="text-3xl" />
          </div>
          <p class="text-red-500 mb-2">无法加载贡献者信息</p>
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">{{ contributorsError }}</p>
          <button @click="fetchContributors" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
            重试
          </button>
        </div>

        <!-- 贡献者展示 - 重新设计的部分 -->
        <div v-else class="p-6">
          <!-- 主要贡献者 - 显示前3位 -->
          <div class="mb-6" v-if="contributors.length > 0">
            <h3 class="text-sm uppercase tracking-wider mb-4 opacity-70"
                :class="isDark ? 'text-gray-400' : 'text-gray-500'">主要贡献者</h3>

            <div class="space-y-4">
              <!-- 作者/首要贡献者 -->
              <div class="flex items-center p-3 rounded-lg transition-all duration-200 group"
                   :class="isDark ? 'bg-blue-900/10 hover:bg-blue-900/20' : 'bg-blue-50 hover:bg-blue-100'">
                <div class="relative">
                  <div class="w-12 h-12 overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                       :class="isDark ? 'border-blue-500/50' : 'border-blue-300'">
                    <img :src="contributors[0].avatar_url" alt="Author Avatar" class="w-full h-full object-cover" />
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2"
                       :class="isDark ? 'bg-amber-600 text-white border-gray-800' : 'bg-amber-400 text-amber-900 border-white'">
                    作者
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <div class="font-medium transition-colors duration-300"
                       :class="isDark ? 'text-white' : 'text-gray-800'">{{ contributors[0].login }}</div>
                  <div class="flex justify-between items-center mt-1">
                    <a :href="contributors[0].html_url" target="_blank" rel="noopener noreferrer"
                       class="text-sm transition-colors duration-200 flex items-center hover:underline"
                       :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                      <Icon icon="mdi:github" class="mr-1" />
                      查看 GitHub
                    </a>
                    <span class="text-xs px-2 py-1 rounded-full"
                          :class="isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'">
                      {{ contributors[0].contributions }}次提交
                    </span>
                  </div>
                </div>
              </div>

              <!-- 其他主要贡献者 (显示排名2-3位) -->
              <div v-for="(contributor, index) in contributors.slice(1, 3)" :key="contributor.id"
                   class="flex items-center p-3 rounded-lg transition-all duration-200 group"
                   :class="isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'">
                <div class="relative">
                  <div class="w-10 h-10 overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                       :class="isDark ? 'border-gray-600' : 'border-gray-200'">
                    <img :src="contributor.avatar_url" alt="Contributor Avatar" class="w-full h-full object-cover" />
                  </div>
                </div>
                <div class="ml-3 flex-1">
                  <div class="font-medium transition-colors duration-300"
                       :class="isDark ? 'text-white' : 'text-gray-800'">{{ contributor.login }}</div>
                  <div class="flex justify-between items-center">
                    <a :href="contributor.html_url" target="_blank" rel="noopener noreferrer"
                       class="text-sm transition-colors duration-200 hover:underline"
                       :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
                      @{{ contributor.login }}
                    </a>
                    <span class="text-xs px-2 py-0.5 rounded-full"
                          :class="isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'">
                      {{ contributor.contributions }}次提交
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 更多贡献者 - 头像网格 -->
          <div v-if="contributors.length > 3">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm uppercase tracking-wider opacity-70"
                  :class="isDark ? 'text-gray-400' : 'text-gray-500'">更多贡献者</h3>
              <a href="https://github.com/shadow1ng/fscan/graphs/contributors"
                 target="_blank" rel="noopener noreferrer"
                 class="text-xs hover:underline"
                 :class="isDark ? 'text-blue-400' : 'text-blue-600'">
                查看全部
              </a>
            </div>

            <!-- 贡献者头像网格 -->
            <div class="grid grid-cols-6 gap-2">
              <div v-for="contributor in contributors.slice(3, showAllContributors ? undefined : 15)"
                   :key="contributor.id"
                   class="group relative">
                <a :href="contributor.html_url" target="_blank" rel="noopener noreferrer"
                   class="block w-full pb-[100%] rounded-lg overflow-hidden transition-all duration-200 transform hover:scale-110 hover:shadow-md"
                   :title="`${contributor.login} (${contributor.contributions}次提交)`">
                  <img :src="contributor.avatar_url" :alt="contributor.login"
                       class="absolute top-0 left-0 w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center p-1">
                    <span class="text-[10px] text-white truncate w-full text-center">{{ contributor.login }}</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- 显示更多按钮 -->
            <button v-if="contributors.length > 15 && !showAllContributors"
                    @click="showAllContributors = true"
                    class="w-full mt-4 py-2 text-sm rounded-lg transition-colors duration-200"
                    :class="isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'">
              显示全部 {{ contributors.length - 15 }} 位贡献者
            </button>
          </div>
        </div>
      </div>

      <!-- 许可与联系信息 - 保持不变 -->
      <div class="space-y-8">
        <!-- 许可证信息 -->
        <div class="rounded-xl border shadow-lg overflow-hidden transition-all duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="px-6 py-5 border-b flex items-center"
               :class="isDark ? 'border-gray-700' : 'border-gray-200'">
            <Icon icon="mdi:license" class="mr-3 text-2xl"
                  :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
            <h2 class="font-bold text-xl transition-colors duration-300"
                :class="isDark ? 'text-white' : 'text-gray-800'">开源许可</h2>
          </div>

          <!-- 加载状态 -->
          <div v-if="loadingLicense" class="p-8 flex flex-col items-center justify-center">
            <div class="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-500'">加载许可证信息...</p>
          </div>

          <!-- 许可证内容 -->
          <div v-else class="p-6">
            <div class="p-4 rounded-lg border border-dashed flex items-start"
                 :class="isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-300 bg-gray-50'">
              <Icon icon="mdi:scale-balance" class="text-2xl mr-3 flex-shrink-0 mt-0.5"
                    :class="isDark ? 'text-purple-400' : 'text-purple-600'" />
              <div>
                <h3 class="font-medium text-lg transition-colors duration-300"
                    :class="isDark ? 'text-white' : 'text-gray-800'">
                  {{ license ? license.name : 'MIT 许可证' }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed"
                   :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                  {{ license ? license.description : 'Fscan 基于 MIT 许可证开源，这是一种宽松的软件许可协议，允许您自由地使用、修改、分发和私有使用该软件，但需要在所有副本中包含原始许可证和版权声明。' }}
                </p>
                <a href="https://github.com/shadow1ng/fscan/blob/master/LICENSE.txt" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center mt-4 text-sm font-medium hover:underline"
                   :class="isDark ? 'text-blue-400' : 'text-blue-600'">
                  <Icon icon="mdi:text-box-outline" class="mr-1" />
                  查看完整许可证
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 联系信息 -->
        <div class="rounded-xl border shadow-lg overflow-hidden transition-all duration-300"
             :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <div class="px-6 py-5 border-b flex items-center"
               :class="isDark ? 'border-gray-700' : 'border-gray-200'">
            <Icon icon="mdi:at" class="mr-3 text-2xl"
                  :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
            <h2 class="font-bold text-xl transition-colors duration-300"
                :class="isDark ? 'text-white' : 'text-gray-800'">联系方式</h2>
          </div>
          <div class="p-6">
            <ul class="space-y-4">
              <li class="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-opacity-80"
                  :class="isDark ? 'bg-gray-750 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'">
                <div class="p-2 rounded-lg mr-4"
                     :class="isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'">
                  <Icon icon="mdi:github" class="text-xl" />
                </div>
                <div>
                  <a href="https://github.com/shadow1ng/fscan/issues" target="_blank" rel="noopener noreferrer"
                     class="font-medium hover:underline"
                     :class="isDark ? 'text-white' : 'text-gray-800'">GitHub Issues</a>
                  <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    报告问题或提交改进建议
                  </p>
                </div>
              </li>
              <li class="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-opacity-80"
                  :class="isDark ? 'bg-gray-750 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'">
                <div class="p-2 rounded-lg mr-4"
                     :class="isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'">
                  <Icon icon="mdi:star" class="text-xl" />
                </div>
                <div>
                  <a :href="repoInfo ? repoInfo.html_url + '/stargazers' : 'https://github.com/shadow1ng/fscan/stargazers'"
                     target="_blank" rel="noopener noreferrer"
                     class="font-medium hover:underline"
                     :class="isDark ? 'text-white' : 'text-gray-800'">
                    给项目点星
                  </a>
                  <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
                    如果您觉得 Fscan 有用，请给项目点个星
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 版本历史 - 保持不变 -->
    <div class="rounded-xl border shadow-lg overflow-hidden mb-14 transition-all duration-300"
         :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="px-6 py-5 border-b flex items-center justify-between"
           :class="isDark ? 'border-gray-700' : 'border-gray-200'">
        <div class="flex items-center">
          <Icon icon="mdi:history" class="mr-3 text-2xl"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <h2 class="font-bold text-xl transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-gray-800'">版本历史</h2>
        </div>
        <a href="https://github.com/shadow1ng/fscan/releases" target="_blank" rel="noopener noreferrer"
           class="text-sm hover:underline"
           :class="isDark ? 'text-blue-400' : 'text-blue-600'">
          查看全部
        </a>
      </div>

      <!-- 加载状态 -->
      <div v-if="loadingReleases" class="p-8 flex flex-col items-center justify-center">
        <div class="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mb-4"></div>
        <p :class="isDark ? 'text-gray-400' : 'text-gray-500'">加载版本历史...</p>
      </div>

      <!-- 错误提示 -->
      <div v-else-if="releasesError" class="p-8 text-center">
        <div class="p-3 rounded-full bg-red-100 text-red-500 inline-flex items-center justify-center mb-4">
          <Icon icon="mdi:alert-circle" class="text-3xl" />
        </div>
        <p class="text-red-500 mb-2">无法加载版本历史</p>
        <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">{{ releasesError }}</p>
        <button @click="fetchReleases" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
          重试
        </button>
      </div>

      <!-- 版本列表 -->
      <div v-else class="p-6">
        <div class="space-y-6">
          <div v-for="(version, index) in releases" :key="version.id"
               class="relative pl-8 border-l-2 pb-6 last:pb-0 group"
               :class="index === 0 ?
                      (isDark ? 'border-blue-500 text-white' : 'border-blue-500 text-gray-800') :
                      (isDark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-700')">
            <!-- 版本点 -->
            <div class="absolute -left-2.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                 :class="index === 0 ?
                        (isDark ? 'bg-blue-500 text-blue-900' : 'bg-blue-500 text-white') :
                        (isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-300 text-gray-600')">
              <Icon icon="mdi:tag" class="text-xs" />
            </div>

            <!-- 版本内容 -->
            <div class="ml-2">
              <h3 class="text-lg font-medium flex items-center flex-wrap gap-x-3 gap-y-1.5"
                  :class="isDark ? 'text-white' : 'text-gray-800'">
                <span :class="index === 0 ? 'text-blue-400' : ''">{{ version.tag_name }}</span>
                <span class="px-2 py-0.5 text-xs rounded-full"
                      :class="index === 0 ?
                             (isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700') :
                             (isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600')">
                  {{ formatDate(version.published_at) }}
                </span>
                <span v-if="index === 0" class="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">最新版本</span>
              </h3>

              <!-- GitHub API 返回的发布说明是 Markdown 格式，这里简单处理 -->
              <div class="mt-4 space-y-2">
                <div v-if="version.body" class="prose prose-sm max-w-none"
                     :class="isDark ? 'prose-invert' : ''">
                  <div v-html="formatReleaseNotes(version.body)"></div>
                </div>
                <div v-else class="text-sm italic"
                     :class="isDark ? 'text-gray-500' : 'text-gray-500'">
                  此版本没有详细说明
                </div>
              </div>

              <div class="mt-4">
                <a :href="version.html_url" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center text-sm font-medium hover:underline mr-4"
                   :class="isDark ? 'text-blue-400' : 'text-blue-600'">
                  <Icon icon="mdi:github" class="mr-1" />
                  查看详情
                </a>
                <a :href="version.zipball_url" class="inline-flex items-center text-sm font-medium hover:underline"
                   :class="isDark ? 'text-green-400' : 'text-green-600'">
                  <Icon icon="mdi:download" class="mr-1" />
                  下载 ZIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, inject, onMounted} from 'vue';
import {Icon} from '@iconify/vue';
import {marked} from 'marked';

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false));

// 控制贡献者显示
const showAllContributors = ref(false);

// GitHub 仓库信息
const REPO_OWNER = 'shadow1ng';
const REPO_NAME = 'fscan';
const GITHUB_API_BASE = 'https://api.github.com/repos';

// 数据状态
const repoInfo = ref(null);
const loadingRepo = ref(false);
const repoError = ref(null);

const contributors = ref([]);
const loadingContributors = ref(false);
const contributorsError = ref(null);

const license = ref(null);
const loadingLicense = ref(false);
const licenseError = ref(null);

const releases = ref([]);
const loadingReleases = ref(false);
const releasesError = ref(null);

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

// 格式化 Markdown 发布说明
const formatReleaseNotes = (markdown) => {
  if (!markdown) return '';

  try {
    return marked(markdown);
  } catch (e) {
    // 简单的回退处理
    return markdown
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
        .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
        .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
        .replace(/- (.*?)$/gm, '• $1<br>');
  }
};

// 获取仓库基本信息
const fetchRepoInfo = async () => {
  loadingRepo.value = true;
  repoError.value = null;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}`);

    if (!response.ok) {
      throw new Error(`获取仓库信息失败：${response.status} ${response.statusText}`);
    }

    repoInfo.value = await response.json();
  } catch (error) {
    console.error('获取仓库信息出错:', error);
    repoError.value = error.message;
  } finally {
    loadingRepo.value = false;
  }
};

// 获取贡献者信息
const fetchContributors = async () => {
  loadingContributors.value = true;
  contributorsError.value = null;

  try {
    // 使用 per_page 参数获取更多贡献者
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`);

    if (!response.ok) {
      throw new Error(`获取贡献者信息失败：${response.status} ${response.statusText}`);
    }

    contributors.value = await response.json();

    // 按贡献数量排序
    contributors.value.sort((a, b) => b.contributions - a.contributions);
  } catch (error) {
    console.error('获取贡献者信息出错:', error);
    contributorsError.value = error.message;
  } finally {
    loadingContributors.value = false;
  }
};

// 获取许可证信息
const fetchLicense = async () => {
  loadingLicense.value = true;
  licenseError.value = null;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/license`);

    if (!response.ok) {
      // 许可证可能不存在，处理为异常但不显示错误
      console.warn('许可证信息不可用:', response.status);
      return;
    }

    const data = await response.json();
    license.value = data.license;
  } catch (error) {
    console.error('获取许可证信息出错:', error);
    licenseError.value = error.message;
  } finally {
    loadingLicense.value = false;
  }
};

// 获取版本历史
const fetchReleases = async () => {
  loadingReleases.value = true;
  releasesError.value = null;

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${REPO_OWNER}/${REPO_NAME}/releases`);

    if (!response.ok) {
      throw new Error(`获取版本信息失败：${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    releases.value = data.slice(0, 5); // 只显示最近5个版本
  } catch (error) {
    console.error('获取版本历史出错:', error);
    releasesError.value = error.message;
  } finally {
    loadingReleases.value = false;
  }
};

// 组件挂载时获取数据
onMounted(async () => {
  // 并行获取各种数据
  fetchRepoInfo();
  fetchContributors();
  fetchLicense();
  fetchReleases();
});
</script>

<style scoped>
/* 微妙的鼠标悬停效果 */
.transition-all {
  transition-property: all;
  transition-duration: 0.3s;
}

/* 鼠标悬停时轻微缩放 */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* 版本历史时间线渐变效果 */
.border-l-2 {
  position: relative;
}

.border-l-2::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 20px;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, currentColor, transparent);
  opacity: 0.3;
}

/* Markdown 渲染样式 */
:deep(.prose) {
  color: inherit;
}

:deep(.prose h1, .prose h2, .prose h3) {
  color: inherit;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

:deep(.prose a) {
  color: #3b82f6;
  text-decoration: none;
}

:deep(.prose a:hover) {
  text-decoration: underline;
}

:deep(.prose ul) {
  list-style-type: disc;
  padding-left: 1.5em;
}

:deep(.prose-invert a) {
  color: #60a5fa;
}

/* 加载动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* 贡献者头像网格的悬停效果 */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>