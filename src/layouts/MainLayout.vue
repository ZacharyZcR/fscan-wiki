<template>
  <div class="min-h-screen bg-background text-foreground transition-colors duration-300">
    <!-- 顶部导航栏 -->
    <nav class="sticky top-0 z-50 backdrop-blur-lg border-b border-border bg-background/90">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <router-link
            to="/"
            class="text-xl font-bold flex items-center transition-all duration-300 hover:scale-105 text-primary"
          >
            <div class="p-1.5 rounded-lg mr-2 bg-primary/10">
              <Icon icon="mdi:shield-search" class="text-2xl" />
            </div>
            <span class="hidden sm:inline">Fscan-wiki</span>
          </router-link>

          <!-- 桌面导航 -->
          <div class="hidden md:flex space-x-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="px-3 py-2 rounded-lg flex items-center transition-all duration-200 font-medium"
              :class="
                $route.path === item.path
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              "
            >
              <Icon :icon="item.icon" class="mr-2" />
              {{ item.title }}
            </router-link>
          </div>

          <!-- 右侧功能区 -->
          <div class="flex items-center space-x-3">
            <!-- 深色模式切换 -->
            <Button variant="ghost" size="icon" class="group" @click="toggleDarkMode">
              <Icon
                :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'"
                class="text-xl transition-transform duration-200 group-hover:rotate-12"
              />
            </Button>

            <!-- 移动端菜单按钮 -->
            <Button variant="ghost" size="icon" class="md:hidden" @click="toggleMobileMenu">
              <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <Transition name="slide-down">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background/95 backdrop-blur-md shadow-lg"
      >
        <div class="container mx-auto px-4 py-3">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block py-3 px-4 rounded-lg flex items-center my-2 transition-all duration-200"
            :class="
              $route.path === item.path
                ? 'bg-primary/10 text-primary font-medium'
                : 'hover:bg-accent hover:text-accent-foreground'
            "
            @click="isMobileMenuOpen = false"
          >
            <Icon :icon="item.icon" class="mr-3 text-lg" />
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </Transition>

    <!-- 主要内容区 -->
    <main class="container mx-auto px-4 py-10">
      <Transition name="fade" mode="out-in">
        <router-view />
      </Transition>
    </main>

    <!-- 页脚 -->
    <footer class="py-6 mt-auto bg-background">
      <div class="container mx-auto px-4">
        <!-- 波浪分隔线 -->
        <div class="w-full h-8 mb-6 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="w-full h-full text-border">
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <!-- 版权信息 -->
        <div
          class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-2"
        >
          <div class="p-2 rounded-full bg-primary/10">
            <Icon icon="mdi:shield-search" class="text-xl text-primary" />
          </div>
          <span class="text-sm font-medium text-muted-foreground">
            &copy; {{ new Date().getFullYear() }} Fscan-wiki
          </span>
        </div>
      </div>
    </footer>

    <!-- 返回顶部按钮 -->
    <Transition name="scale">
      <Button
        v-if="showBackToTop"
        size="icon"
        class="fixed bottom-6 right-6 shadow-lg z-40 hover:scale-110"
        @click="scrollToTop"
      >
        <Icon icon="mdi:arrow-up" class="text-xl" />
      </Button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, provide } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

const route = useRoute()
const isDark = ref(false)
const isMobileMenuOpen = ref(false)
const showBackToTop = ref(false)
const scrollY = ref(0)

provide('isDark', isDark)

const navItems = [
  { title: '首页', path: '/', icon: 'mdi:home' },
  { title: '参数', path: '/parameters', icon: 'mdi:console' },
  { title: '构建', path: '/build', icon: 'mdi:hammer-wrench' },
  { title: '文档', path: '/docs', icon: 'mdi:book-open-variant' },
  { title: '关于', path: '/about', icon: 'mdi:information' },
]

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', isDark.value ? 'true' : 'false')

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  scrollY.value = window.scrollY
  showBackToTop.value = scrollY.value > 300
}

const checkSystemPreference = () => {
  const storedPreference = localStorage.getItem('darkMode')

  if (storedPreference !== null) {
    isDark.value = storedPreference === 'true'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
}

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)

onMounted(() => {
  checkSystemPreference()
  window.addEventListener('scroll', handleScroll)
  document.title = 'Fscan-wiki | 安全扫描知识库'
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.scale-enter-active,
.scale-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

html {
  scroll-behavior: smooth;
}
</style>
