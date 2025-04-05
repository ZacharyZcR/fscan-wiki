import { createRouter, createWebHistory } from 'vue-router'

// 页面组件
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/documents',
        name: 'Documents',
        // 使用懒加载
        component: () => import('../views/Documents.vue')
    },
    {
        path: '/documents/:id',
        name: 'DocumentDetail',
        component: () => import('../views/Documents.vue')
    },
    {
        path: '/parameters',
        name: 'Parameters',
        component: () => import('../views/Parameters.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router