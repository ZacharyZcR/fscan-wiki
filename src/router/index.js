import { createRouter, createWebHashHistory } from 'vue-router'

// 页面组件
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/parameters',
    name: 'Parameters',
    component: () => import('../views/Parameters.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(), // 使用哈希模式，URL会变成 #/about 形式
  routes,
})

export default router
