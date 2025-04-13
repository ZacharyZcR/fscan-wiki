<template>
  <div>
    <!-- 文档头部区域 -->
    <div class="flex items-center mb-6">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg mr-3 flex items-center justify-center"
           :class="isDark ? 'bg-blue-900/30' : 'bg-blue-100'">
        <Icon icon="mdi:rocket-launch" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
      </div>
      <h1 class="text-2xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        快速入门
      </h1>
    </div>

    <!-- 内容概览 -->
    <div class="mb-6 rounded-lg p-3 transition-colors duration-300"
         :class="isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'">
      <div class="flex items-center mb-2">
        <Icon icon="mdi:format-list-bulleted" class="mr-2" :class="isDark ? 'text-gray-400' : 'text-gray-500'" />
        <h3 class="font-medium text-sm transition-colors duration-300"
            :class="isDark ? 'text-gray-200' : 'text-gray-700'">
          内容概览
        </h3>
      </div>
      <ul class="pl-4 space-y-1">
        <li v-for="(section, index) in contentSections" :key="index"
            class="transition-colors duration-200 text-sm font-normal"
            :class="isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'">
          <a :href="`#section-${index}`" class="hover:underline">{{ section }}</a>
        </li>
      </ul>
    </div>

    <!-- 主要内容 -->
    <div class="doc-content transition-colors duration-300"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      <p class="mb-4">Fscan 是一款内网综合扫描工具，包含端口扫描、服务识别、网络资产探测、密码爆破等功能。本指南将帮助您快速开始使用 Fscan。</p>

      <h2 id="section-0" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        下载与安装
      </h2>

      <p class="mb-4">Fscan 是一个跨平台的工具，支持 Windows、Linux 和 MacOS 系统。您可以从 GitHub 下载最新版本：</p>

      <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="https://github.com/shadow1ng/fscan/releases/tag/2.0.0-build4" target="_blank"
           class="flex items-center p-3 rounded-lg transition-all duration-200 border hover:-translate-y-1"
           :class="isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
               :class="isDark ? 'bg-blue-900/20' : 'bg-blue-100'">
            <Icon icon="mdi:tag" class="text-lg" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          </div>
          <div>
            <div class="font-medium text-sm" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Fscan 2.0.0-build4</div>
            <div class="text-xs" :class="isDark ? 'text-gray-400' : 'text-gray-500'">最新版</div>
          </div>
        </a>

        <a href="https://github.com/shadow1ng/fscan/releases/tag/1.8.4" target="_blank"
           class="flex items-center p-3 rounded-lg transition-all duration-200 border hover:-translate-y-1"
           :class="isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
               :class="isDark ? 'bg-green-900/20' : 'bg-green-100'">
            <Icon icon="mdi:shield-check" class="text-lg" :class="isDark ? 'text-green-400' : 'text-green-600'" />
          </div>
          <div>
            <div class="font-medium text-sm" :class="isDark ? 'text-gray-200' : 'text-gray-800'">Fscan 1.8.4</div>
            <div class="text-xs" :class="isDark ? 'text-gray-400' : 'text-gray-500'">稳定版</div>
          </div>
        </a>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-blue-900/10 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'">
        <div class="flex">
          <Icon icon="mdi:information" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-blue-300' : 'text-blue-700'">简易安装</p>
            <p class="mt-1" :class="isDark ? 'text-blue-200' : 'text-blue-800'">
              下载后直接运行可执行文件，无需安装其他依赖。Linux/MacOS 中需要执行权限 (<code>chmod +x fscan</code>)。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-1" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        基本用法
      </h2>

      <p class="mb-4">Fscan 的基本命令格式如下：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan [选项] [参数]</code></pre>
        </div>
      </div>

      <p class="mb-4">例如，扫描指定 IP 范围的常见端口：</p>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.1/24</code></pre>
        </div>
      </div>

      <h2 id="section-2" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        常用命令示例
      </h2>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描指定 IP 和端口
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.1 -p 22,80,3306</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        扫描 IP 范围并指定输出文件
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.1/24 -o result.txt</code></pre>
        </div>
      </div>

      <h3 class="text-lg font-semibold mt-5 mb-3 transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-800'">
        使用内置字典进行密码爆破
      </h3>

      <!-- 优化后的代码块，移除灰色背景 -->
      <div class="mb-4">
        <div class="rounded-lg overflow-hidden border transition-colors duration-300"
             :class="isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'">
          <pre class="p-3 text-sm font-mono overflow-x-auto"><code class="transition-colors duration-300"
                                                                   :class="isDark ? 'text-gray-100' : 'text-gray-800'">./fscan -h 192.168.1.1 -m ssh</code></pre>
        </div>
      </div>

      <h2 id="section-3" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        参数说明
      </h2>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full rounded-lg overflow-hidden text-sm font-normal"
               :class="isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
          <thead :class="isDark ? 'bg-gray-850' : 'bg-gray-50'">
          <tr>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              参数
            </th>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              说明
            </th>
            <th class="py-3 px-4 text-left font-medium border-b"
                :class="isDark ? 'text-gray-300 border-gray-700' : 'text-gray-700 border-gray-200'">
              示例
            </th>
          </tr>
          </thead>
          <tbody class="divide-y" :class="isDark ? 'divide-gray-700' : 'divide-gray-200'">
          <tr v-for="param in parameters" :key="param.name"
              :class="isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'">
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-blue-400' : 'text-blue-600'">
              {{ param.name }}
            </td>
            <td class="py-2 px-4"
                :class="isDark ? 'text-gray-300' : 'text-gray-700'">
              {{ param.description }}
            </td>
            <td class="py-2 px-4 font-mono"
                :class="isDark ? 'text-gray-400' : 'text-gray-500'">
              {{ param.example }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="p-3 rounded-lg mb-6 text-sm font-normal"
           :class="isDark ? 'bg-amber-900/10 border border-amber-900/20' : 'bg-amber-50 border border-amber-100'">
        <div class="flex">
          <Icon icon="mdi:lightbulb" class="text-lg flex-shrink-0 mt-0.5 mr-2" :class="isDark ? 'text-amber-400' : 'text-amber-600'" />
          <div>
            <p class="font-medium" :class="isDark ? 'text-amber-300' : 'text-amber-700'">提示</p>
            <p class="mt-1" :class="isDark ? 'text-amber-200' : 'text-amber-800'">
              使用 <code class="px-1.5 py-0.5 rounded text-xs" :class="isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'">./fscan -h</code> 命令可以查看完整的参数列表和帮助信息。
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-4" class="text-xl font-bold mt-8 mb-4 pb-2 border-b transition-colors duration-300"
          :class="isDark ? 'text-white border-gray-700' : 'text-gray-800 border-gray-200'">
        后续步骤
      </h2>

      <p class="mb-4">完成快速入门后，您可以查看以下文档深入了解 Fscan 的功能：</p>

      <ul class="pl-5 list-disc space-y-2 mb-6">
        <li>
          <router-link to="/documents/port-scanning"
                       class="transition-colors duration-200"
                       :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
            端口扫描
          </router-link>
          - 了解如何配置高效的端口扫描策略
        </li>
        <li>
          <router-link to="/documents/vulnerability-detection"
                       class="transition-colors duration-200"
                       :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
            漏洞检测
          </router-link>
          - 学习使用 Fscan 检测常见安全漏洞
        </li>
        <li>
          <router-link to="/documents/brute-force"
                       class="transition-colors duration-200"
                       :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
            爆破攻击
          </router-link>
          - 深入了解密码爆破功能与自定义字典
        </li>
      </ul>
    </div>

    <!-- 简化的文档反馈 -->
    <div class="mt-8 pt-4 border-t transition-colors duration-300 text-sm"
         :class="isDark ? 'border-gray-700' : 'border-gray-200'">
      <a href="https://github.com/shadow1ng/fscan/issues" target="_blank"
         class="inline-flex items-center transition-colors duration-200"
         :class="isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'">
        <Icon icon="mdi:github" class="mr-1.5" />
        <span>在 GitHub 上反馈问题</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { Icon } from '@iconify/vue';

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false));

// 内容章节标题（用于目录）
const contentSections = [
  '下载与安装',
  '基本用法',
  '常用命令示例',
  '参数说明',
  '后续步骤'
];

// 参数表格数据
const parameters = [
  { name: '-h', description: '指定主机或 IP 范围', example: '-h 192.168.1.1/24' },
  { name: '-p', description: '指定端口，多个端口用逗号分隔', example: '-p 80,443,3389' },
  { name: '-m', description: '指定爆破模式', example: '-m ssh,mysql,mssql' },
  { name: '-o', description: '指定输出文件', example: '-o result.txt' },
  { name: '-user', description: '指定爆破用户名', example: '-user admin' },
  { name: '-pwd', description: '指定爆破密码', example: '-pwd 123456' },
  { name: '-t', description: '指定线程数', example: '-t 1000' },
  { name: '-time', description: '指定超时时间', example: '-time 3' }
];
</script>

<style scoped>
/* 添加 bg-gray-750 和 bg-gray-850 兼容性 */
.bg-gray-750 {
  background-color: rgb(38, 42, 51);
}
.bg-gray-850 {
  background-color: rgb(30, 34, 43);
}

/* 主要内容样式调整 */
.doc-content p {
  line-height: 1.6;
}

/* 代码样式优化 */
.doc-content code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.1);
}

.dark .doc-content code {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 代码块强化样式 */
pre code {
  display: block;
  background: transparent !important;
  padding: 0 !important;
}

/* 代码高亮优化 */
.code-keyword { color: #569cd6; }
.code-string { color: #ce9178; }
.code-comment { color: #6a9955; font-style: italic; }

/* 字体优化 */
h1, h2, h3, h4, h5, h6, p, li, a, span, div, td, th {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

pre, code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/* 代码块左侧边框指示器 */
pre {
  position: relative;
  border-left: 3px solid rgba(66, 153, 225, 0.4);
}

.dark pre {
  border-left: 3px solid rgba(66, 153, 225, 0.6);
  filter: brightness(1.1);
}

/* 代码块复制按钮 */
pre::after {
  content: "复制";
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  background-color: rgba(255, 255, 255, 0.1);
  color: inherit;
}

pre:hover::after {
  opacity: 1;
}

/* 改进内容可读性 */
.doc-content {
  line-height: 1.7;
  font-size: 1rem;
}

/* 表格行间距优化 */
tbody tr {
  transition: background-color 0.15s ease-in-out;
}

/* 链接交互效果 */
a {
  transition: all 0.2s ease;
}
</style>
