<template>
  <div class="min-h-screen transition-colors duration-300" :class="isDark ? 'dark bg-gray-900' : 'bg-gray-50'">
    <!-- 顶部导航栏 - 更现代化设计 -->
    <nav class="sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg border-b"
         :class="isDark ? 'bg-gray-900/90 border-gray-800/30 shadow-gray-900/30' : 'bg-white/90 border-gray-200/30 shadow-lg'">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo - 更精致的设计 -->
          <router-link to="/" class="text-xl font-bold flex items-center transition-all duration-300 hover:scale-105"
                       :class="isDark ? 'text-blue-400' : 'text-blue-600'">
            <div class="p-1.5 rounded-lg mr-2" :class="isDark ? 'bg-blue-500/20' : 'bg-blue-100'">
              <Icon icon="mdi:shield-search" class="text-2xl" />
            </div>
            <span class="hidden sm:inline">Fscan-wiki</span>
          </router-link>

          <!-- 桌面导航 - 更直观的活动状态 -->
          <div class="hidden md:flex space-x-2">
            <router-link v-for="item in navItems" :key="item.path"
                         :to="item.path"
                         class="px-3 py-2 rounded-lg flex items-center transition-all duration-200 font-medium"
                         :class="[$route.path === item.path ?
                                (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600') :
                                (isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600')]">
              <Icon :icon="item.icon" class="mr-2" />
              {{ item.title }}
            </router-link>
          </div>

          <!-- 右侧功能区 - 简化交互 -->
          <div class="flex items-center space-x-3">
            <!-- 深色模式切换 - 增强视觉反馈 -->
            <button @click="toggleDarkMode"
                    class="p-2 rounded-lg transition-all duration-200 group"
                    :class="isDark ? 'hover:bg-gray-800 text-gray-300 hover:text-blue-400' : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'">
              <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'"
                    class="text-xl transition-transform duration-200 group-hover:rotate-12" />
            </button>

            <!-- 移动端菜单按钮 - 更好的触摸目标 -->
            <button @click="toggleMobileMenu"
                    class="md:hidden p-2.5 rounded-lg transition-colors duration-200"
                    :class="isDark ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-gray-100 text-gray-700'">
              <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 - 更流畅的动画 -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen"
           class="md:hidden fixed inset-x-0 top-[57px] z-40 border-b shadow-lg"
           :class="isDark ? 'bg-gray-800/95 backdrop-blur-md text-white border-gray-700' : 'bg-white/95 backdrop-blur-md text-gray-800 border-gray-200'">
        <div class="container mx-auto px-4 py-3">
          <router-link v-for="item in navItems" :key="item.path"
                       :to="item.path"
                       @click="isMobileMenuOpen = false"
                       class="block py-3 px-4 rounded-lg flex items-center my-2 transition-all duration-200"
                       :class="[$route.path === item.path ?
                              (isDark ? 'bg-blue-500/20 text-blue-400 font-medium' : 'bg-blue-50 text-blue-600 font-medium') :
                              (isDark ? 'hover:bg-gray-700 hover:text-blue-400' : 'hover:bg-gray-100 hover:text-blue-600')]">
            <Icon :icon="item.icon" class="mr-3 text-lg" />
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </Transition>

    <!-- 主要内容区 - 更舒适的内容布局 -->
    <main class="container mx-auto px-4 py-10">
      <Transition name="fade" mode="out-in">
        <router-view />
      </Transition>
    </main>

    <!-- 全新设计的简约页脚 -->
    <footer class="transition-colors duration-300 py-6 mt-auto"
            :class="isDark ? 'bg-gray-900' : 'bg-gray-50'">
      <div class="container mx-auto px-4">
        <!-- 波浪分隔线 -->
        <div class="w-full h-8 mb-6 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="w-full h-full" :class="isDark ? 'text-gray-800' : 'text-gray-200'">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  :fill="isDark ? 'currentColor' : 'currentColor'"></path>
          </svg>
        </div>

        <!-- 简约版权信息 -->
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-2">
          <!-- Logo小图标 -->
          <div class="p-2 rounded-full" :class="isDark ? 'bg-blue-500/20' : 'bg-blue-100'">
            <Icon icon="mdi:shield-search" class="text-xl" :class="isDark ? 'text-blue-400' : 'text-blue-600'" />
          </div>

          <!-- 版权文本 -->
          <span class="text-sm font-medium" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            &copy; {{ new Date().getFullYear() }} Fscan-wiki
          </span>
        </div>
      </div>
    </footer>

    <!-- 返回顶部按钮 - 更精致的交互 -->
    <Transition name="scale">
      <button v-if="showBackToTop"
              @click="scrollToTop"
              class="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110"
              :class="isDark ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400' : 'bg-white hover:bg-gray-50 text-blue-600 shadow-blue-200/50'">
        <Icon icon="mdi:arrow-up" class="text-xl" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed, watch, provide} from 'vue';
import {useRoute} from 'vue-router';
import {Icon} from '@iconify/vue';

const route = useRoute();
const isDark = ref(false);
const isMobileMenuOpen = ref(false);
const showBackToTop = ref(false);
const scrollY = ref(0);

provide('isDark', isDark);

// 导航项
const navItems = [
  {title: '首页', path: '/', icon: 'mdi:home'},
  {title: '文档', path: '/documents', icon: 'mdi:file-document-multiple'},
  {title: '参数', path: '/parameters', icon: 'mdi:console'},
  {title: '关于', path: '/about', icon: 'mdi:information'}
];

// 切换深色模式
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('darkMode', isDark.value ? 'true' : 'false');

  // 添加或移除 dark 类到 document
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// 切换移动菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 监听滚动事件
const handleScroll = () => {
  scrollY.value = window.scrollY;
  showBackToTop.value = scrollY.value > 300;
};

// 检查系统颜色模式
const checkSystemPreference = () => {
  const storedPreference = localStorage.getItem('darkMode');

  if (storedPreference !== null) {
    isDark.value = storedPreference === 'true';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isDark.value) {
    document.documentElement.classList.add('dark');
  }
};

// 路由变化时关闭移动菜单
watch(() => route.path, () => {
  isMobileMenuOpen.value = false;
});

// 生命周期钩子
onMounted(() => {
  checkSystemPreference();
  window.addEventListener('scroll', handleScroll);

  // 设置页面标题
  document.title = "Fscan-wiki | 安全扫描知识库";
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* 返回顶部按钮动画 */
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* 移动菜单下滑动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 深色模式 */
:deep(.dark) {
  color-scheme: dark;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style>
