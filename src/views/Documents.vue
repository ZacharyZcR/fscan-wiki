<template>
  <div class="transition-colors duration-300" :class="isDark ? 'dark text-gray-200' : 'text-gray-800'">
    <!-- 顶部标题区域 - 更现代化设计 -->
    <div class="mb-10 relative">
      <h1 class="text-4xl font-bold transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Fscan 文档中心
      </h1>
      <p class="mt-3 text-lg transition-colors duration-300 max-w-3xl"
         :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        全面了解 Fscan 的使用方法、功能特性与高级技巧
      </p>
      <!-- 背景装饰元素 -->
      <div class="absolute right-0 bottom-0 w-32 h-32 -z-10 opacity-5">
        <Icon icon="mdi:book-open-variant" class="w-full h-full" :class="isDark ? 'text-blue-300' : 'text-blue-600'" />
      </div>
    </div>

    <!-- 主要内容区 - 优化布局与间距 -->
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- 左侧导航 - 提升导航体验 -->
      <div class="lg:w-80 order-2 lg:order-1">
        <div class="sticky top-24 transition-all duration-300 rounded-xl overflow-hidden shadow-lg border"
             :class="isDark ? 'bg-gray-800/90 backdrop-blur-sm border-gray-700/30' : 'bg-white border-gray-100'">
          <div class="p-4 transition-colors duration-300 border-b flex items-center justify-between"
               :class="isDark ? 'border-gray-700/70' : 'border-gray-100'">
            <h2 class="text-lg font-bold transition-colors duration-300 flex items-center"
                :class="isDark ? 'text-white' : 'text-gray-900'">
              <Icon icon="mdi:view-list" class="mr-2" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
              文档导航
            </h2>
            <button class="lg:hidden p-2 rounded-lg"
                    :class="isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'">
              <Icon icon="mdi:menu" class="text-xl" />
            </button>
          </div>

          <div class="p-4 max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
            <div v-for="(section, sectionIndex) in docSections" :key="section.title" class="mb-6 last:mb-0">
              <div class="flex items-center mb-3">
                <Icon :icon="section.icon" class="mr-2 text-lg"
                      :class="isDark ? 'text-gray-300' : 'text-gray-600'" />
                <h3 class="font-semibold transition-colors duration-300"
                    :class="isDark ? 'text-gray-200' : 'text-gray-800'">
                  {{ section.title }}
                </h3>
              </div>

              <ul class="space-y-1 pl-6">
                <li v-for="doc in section.docs" :key="doc.id">
                  <router-link :to="`/documents/${doc.id}`"
                               class="block py-2 px-3 rounded-lg transition-all duration-200 text-sm flex items-center group"
                               :class="activeDoc === doc.id ?
                                      (isDark ? 'bg-blue-900/40 text-blue-300 font-medium' : 'bg-blue-50 text-blue-700 font-medium') :
                                      (isDark ? 'hover:bg-gray-700/70 text-gray-300' : 'hover:bg-gray-100 text-gray-600')">
                    <span class="w-1.5 h-1.5 rounded-full mr-2 transition-all duration-200"
                          :class="activeDoc === doc.id ?
                                 (isDark ? 'bg-blue-400 scale-125' : 'bg-blue-600 scale-125') :
                                 (isDark ? 'bg-gray-600 group-hover:bg-gray-400' : 'bg-gray-400 group-hover:bg-gray-500')"></span>
                    {{ doc.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- 文档版本 - 增强底部设计 -->
          <div class="p-4 border-t transition-colors duration-300 flex items-center justify-between"
               :class="isDark ? 'border-gray-700/70' : 'border-gray-100'">
            <div class="flex items-center">
              <Icon icon="mdi:bookmark" class="mr-2" :class="isDark ? 'text-gray-400' : 'text-gray-500'" />
              <span class="text-sm transition-colors duration-300"
                    :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                文档版本: v2.0.0
              </span>
            </div>
            <a href="#" class="p-1.5 rounded-md transition-colors duration-200 group"
               :class="isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'">
              <Icon icon="mdi:github" class="text-lg group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      <!-- 右侧内容区 - 优化内容展示 -->
      <div class="flex-1 order-1 lg:order-2">
        <div v-if="!activeDoc || activeDoc === 'index'">
          <!-- 快速入门卡片 - 提升至更突出位置 -->
          <div class="transition-all duration-300 rounded-xl overflow-hidden shadow-lg relative mb-10 border"
               :class="isDark ? 'bg-blue-900/20 border-blue-800/30' : 'bg-blue-50 border-blue-100'">
            <div class="absolute top-0 right-0 w-40 h-40 transform translate-x-8 -translate-y-8 opacity-10">
              <Icon icon="mdi:rocket-launch" class="w-full h-full" :class="isDark ? 'text-blue-300' : 'text-blue-600'" />
            </div>

            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 shadow-sm">
                  <Icon icon="mdi:rocket-launch" class="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h2 class="text-2xl font-bold ml-4 transition-colors duration-300"
                    :class="isDark ? 'text-blue-300' : 'text-blue-800'">
                  快速入门
                </h2>
              </div>

              <p class="mb-5 transition-colors duration-300 relative max-w-2xl text-lg"
                 :class="isDark ? 'text-blue-200' : 'text-blue-800'">
                Fscan 是一款内网综合扫描工具，您可以通过以下命令快速开始使用：
              </p>

              <div class="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto mb-5 relative shadow-inner">
                <div class="absolute top-3 right-3 flex space-x-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre class="text-sm font-mono pt-2"><code>./fscan -h 192.168.1.1/24 -p 22,80,3306,6379,9200 -o result.txt</code></pre>
              </div>

              <router-link to="/documents/quick-start"
                           class="inline-flex items-center transition-all duration-300 font-medium text-sm px-4 py-2 rounded-lg group"
                           :class="isDark ? 'bg-blue-900/40 text-blue-300 hover:bg-blue-900/60' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'">
                <span>查看完整文档</span>
                <Icon icon="mdi:arrow-right" class="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </router-link>
            </div>
          </div>

          <!-- 文档卡片网格 - 增强视觉层次和交互 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div v-for="section in docSections" :key="section.title"
                 class="transition-all duration-300 rounded-xl overflow-hidden shadow-lg group hover:-translate-y-1 border"
                 :class="isDark ? 'bg-gray-800 hover:shadow-blue-900/20 border-gray-700/30' : 'bg-white hover:shadow-xl border-gray-100'">
              <div class="p-6">
                <div class="flex items-center mb-5">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                       :class="section.bgColor">
                    <Icon :icon="section.icon" class="text-2xl" :class="section.iconColor" />
                  </div>
                  <h2 class="text-xl font-bold ml-4 transition-colors duration-300"
                      :class="isDark ? 'text-white' : 'text-gray-900'">
                    {{ section.title }}
                  </h2>
                </div>

                <ul class="space-y-2.5 pl-1">
                  <li v-for="doc in section.docs" :key="doc.id">
                    <router-link :to="`/documents/${doc.id}`"
                                 class="transition-all duration-200 block py-2 px-3 rounded-lg flex items-center hover:pl-4"
                                 :class="isDark ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'">
                      <span class="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 transition-all duration-200"
                            :class="isDark ? 'bg-gray-600 group-hover:bg-blue-500' : 'bg-gray-300 group-hover:bg-blue-500'"></span>
                      {{ doc.title }}
                      <Icon icon="mdi:chevron-right" class="ml-auto text-lg transition-transform duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                            :class="isDark ? 'text-gray-500' : 'text-gray-400'" />
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 热门文档 - 设计升级 -->
          <div class="transition-colors duration-300 rounded-xl overflow-hidden shadow-lg border"
               :class="isDark ? 'bg-gray-800 border-gray-700/30' : 'bg-white border-gray-100'">
            <div class="px-6 py-4 border-b transition-colors duration-300"
                 :class="isDark ? 'border-gray-700' : 'border-gray-100'">
              <h2 class="text-lg font-bold transition-colors duration-300 flex items-center"
                  :class="isDark ? 'text-white' : 'text-gray-900'">
                <Icon icon="mdi:fire" class="mr-2 text-amber-500" />
                热门文档
              </h2>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <router-link v-for="doc in popularDocs" :key="doc.id" :to="`/documents/${doc.id}`"
                             class="flex items-center p-3 rounded-lg transition-all duration-200 border group"
                             :class="isDark ? 'hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-gray-600' : 'hover:bg-gray-50 text-gray-700 border-gray-100 hover:border-gray-200'">
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-transform duration-200 group-hover:scale-110"
                       :class="doc.bgColor">
                    <Icon :icon="doc.icon" class="text-xl" :class="doc.iconColor" />
                  </div>
                  <div>
                    <div class="font-medium transition-colors duration-200"
                         :class="isDark ? 'group-hover:text-white' : 'group-hover:text-gray-900'">{{ doc.title }}</div>
                    <div class="text-xs mt-0.5" :class="isDark ? 'text-gray-500' : 'text-gray-500'">
                      {{ doc.category }}
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 文档内容区 - 改进阅读体验 -->
        <div v-else>
          <!-- 导航路径 - 更清晰的面包屑 -->
          <div class="mb-5 text-sm flex items-center py-2">
            <router-link to="/documents"
                         class="transition-colors duration-200 flex items-center"
                         :class="isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'">
              <Icon icon="mdi:home" class="mr-1" />
              文档主页
            </router-link>
            <Icon icon="mdi:chevron-right" class="mx-2" :class="isDark ? 'text-gray-600' : 'text-gray-400'" />
            <span class="transition-colors duration-300 font-medium"
                  :class="isDark ? 'text-gray-200' : 'text-gray-800'">
              {{ getDocTitle(activeDoc) }}
            </span>
          </div>

          <!-- 文档内容容器 - 更舒适的阅读空间 -->
          <div class="transition-colors duration-300 rounded-xl overflow-hidden shadow-lg p-8 mb-8 border"
               :class="isDark ? 'bg-gray-800 border-gray-700/30' : 'bg-white border-gray-100'">
            <component :is="currentDocComponent" />
          </div>

          <!-- 文档底部导航 - 增强可见性和交互 -->
          <div class="flex justify-between items-center">
            <router-link v-if="prevDoc" :to="`/documents/${prevDoc.id}`"
                         class="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 border group"
                         :class="isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white border-gray-700 hover:border-gray-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-gray-200 hover:border-gray-300'">
              <Icon icon="mdi:arrow-left" class="mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>{{ prevDoc.title }}</span>
            </router-link>
            <div v-else></div>

            <router-link v-if="nextDoc" :to="`/documents/${nextDoc.id}`"
                         class="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 border group"
                         :class="isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white border-gray-700 hover:border-gray-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-gray-200 hover:border-gray-300'">
              <span>{{ nextDoc.title }}</span>
              <Icon icon="mdi:arrow-right" class="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </router-link>
            <div v-else></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, markRaw, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

// 从父组件获取暗黑模式状态
const isDark = inject('isDark', ref(false));
const route = useRoute();

// 文档分类和列表
const docSections = [
  {
    title: '入门指南',
    icon: 'mdi:book-open-page-variant',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    docs: [
      { id: 'quick-start', title: '快速入门' },
      { id: 'installation', title: '安装指南' },
      { id: 'basic-config', title: '基础配置' },
      { id: 'command-line', title: '命令行参数' },
      { id: 'faq', title: '常见问题' }
    ]
  },
  {
    title: '功能指南',
    icon: 'mdi:tools',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    docs: [
      { id: 'port-scanning', title: '端口扫描' },
      { id: 'vulnerability-detection', title: '漏洞检测' },
      { id: 'fingerprinting', title: '指纹识别' },
      { id: 'brute-force', title: '爆破攻击' },
      { id: 'report-generation', title: '扫描报告生成' }
    ]
  },
  {
    title: '高级主题',
    icon: 'mdi:rocket-launch-outline',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    docs: [
      { id: 'ssh-scan', title: 'SSH扫描' },
      { id: 'redis-scan', title: 'Redis扫描' },
      { id: 'activemq-scan', title: 'ActiveMQ扫描' },
      { id: 'elasticsearch-scan', title: 'ElasticSearch扫描' },
      { id: 'ftp-scan', title: 'FTP扫描' },
      { id: 'imap-scan', title: 'IMAP扫描' },
      { id: 'kafka-scan', title: 'Kafka扫描' },
      { id: 'ldap-scan', title: 'LDAP扫描' },
      { id: 'memcached-scan', title: 'Memcached扫描' },
      { id: 'modbus-scan', title: 'Modbus扫描' },
      { id: 'mongodb-scan', title: 'MongoDB扫描' },
      { id: 'mssql-scan', title: 'MSSQL扫描' },
      { id: 'mysql-scan', title: 'MySQL扫描' },
      { id: 'neo4j-scan', title: 'Neo4j扫描' },
      { id: 'oracle-scan', title: 'Oracle扫描' },
      { id: 'pop3-scan', title: 'POP3扫描' },
      { id: 'postgre-scan', title: 'Postgre扫描' },
      { id: 'rabbitmq-scan', title: 'RabbitMQ扫描' },
      { id: 'rdp-scan', title: 'RDP扫描' },
      { id: 'rsync-scan', title: 'Rsync扫描' },
      { id: 'smb-scan', title: 'Smb扫描' },
      { id: 'smtp-scan', title: 'SMTP扫描' },
      { id: 'telnet-scan', title: 'Telnet扫描' },
      { id: 'vnc-scan', title: 'VNC扫描' },
      { id: 'custom-rules', title: '自定义扫描规则' },
      { id: 'plugin-development', title: '插件开发' },
      { id: 'api-integration', title: 'API 集成' },
      { id: 'distributed-scanning', title: '分布式扫描' },
      { id: 'performance-optimization', title: '性能优化' }
    ]
  }
];

// 热门文档
const popularDocs = [
  {
    id: 'quick-start',
    title: '快速入门',
    category: '入门指南',
    icon: 'mdi:rocket-launch',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'port-scanning',
    title: '端口扫描',
    category: '功能指南',
    icon: 'mdi:radar',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 'vulnerability-detection',
    title: '漏洞检测',
    category: '功能指南',
    icon: 'mdi:shield-bug',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  {
    id: 'plugin-development',
    title: '插件开发',
    category: '高级主题',
    icon: 'mdi:puzzle',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  }
];

// 获取当前活动文档ID
const activeDoc = computed(() => {
  const pathParts = route.path.split('/');
  return pathParts.length > 2 ? pathParts[2] : 'index';
});

// 查找当前文档所在的分类和索引
const docLocation = computed(() => {
  for (let sectionIndex = 0; sectionIndex < docSections.length; sectionIndex++) {
    const section = docSections[sectionIndex];
    for (let docIndex = 0; docIndex < section.docs.length; docIndex++) {
      if (section.docs[docIndex].id === activeDoc.value) {
        return { sectionIndex, docIndex };
      }
    }
  }
  return { sectionIndex: -1, docIndex: -1 };
});

// 上一个文档
const prevDoc = computed(() => {
  const { sectionIndex, docIndex } = docLocation.value;
  if (sectionIndex === -1) return null;

  // 同一分类中的上一个文档
  if (docIndex > 0) {
    return docSections[sectionIndex].docs[docIndex - 1];
  }

  // 上一个分类的最后一个文档
  if (sectionIndex > 0) {
    const prevSection = docSections[sectionIndex - 1];
    return prevSection.docs[prevSection.docs.length - 1];
  }

  return null;
});

// 下一个文档
const nextDoc = computed(() => {
  const { sectionIndex, docIndex } = docLocation.value;
  if (sectionIndex === -1) return null;

  const section = docSections[sectionIndex];

  // 同一分类中的下一个文档
  if (docIndex < section.docs.length - 1) {
    return section.docs[docIndex + 1];
  }

  // 下一个分类的第一个文档
  if (sectionIndex < docSections.length - 1) {
    return docSections[sectionIndex + 1].docs[0];
  }

  return null;
});

// 获取文档标题
const getDocTitle = (docId) => {
  for (const section of docSections) {
    for (const doc of section.docs) {
      if (doc.id === docId) {
        return doc.title;
      }
    }
  }
  return '未知文档';
};

// 动态导入文档组件
const currentDocComponent = computed(() => {
  // 匹配文档ID
  if (activeDoc.value && activeDoc.value !== 'index') {
    // 异步加载组件，使用错误处理
    return markRaw(defineAsyncComponent({
      loader: () => import(`../docs/${activeDoc.value}.vue`)
          .catch(() => import('../docs/NotFound.vue')),
      loadingComponent: DocLoading,
      errorComponent: DocNotFound
    }));
  }
  return null;
});

// 加载中组件 - 更现代的加载状态
const DocLoading = {
  template: `
    <div class="py-12 text-center">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-b-transparent"
           :class="isDark ? 'border-blue-500' : 'border-blue-600'"></div>
      <p class="mt-4 text-gray-400 dark:text-gray-300">正在加载文档...</p>
    </div>
  `
};

// 文档未找到组件 - 优化的错误页面
const DocNotFound = {
  template: `
    <div class="py-12 text-center">
      <div class="mx-auto w-24 h-24 text-gray-300 dark:text-gray-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">文档未找到</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-6">抱歉，您请求的文档不存在或正在开发中。</p>
      <router-link to="/documents" class="inline-flex items-center px-5 py-2.5 rounded-lg transition-all duration-300 group"
                   :class="isDark ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'">
        <svg class="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        返回文档中心
      </router-link>
    </div>
  `
};
</script>

<style scoped>
/* 自定义滚动条 - 更加精致美观 */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.5);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.4);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(75, 85, 99, 0.6);
}

/* 添加平滑过渡效果 */
.router-link-active {
  transition: all 0.3s ease;
}

/* 添加页面淡入效果 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

component {
  animation: fadeIn 0.3s ease-out;
}
</style>