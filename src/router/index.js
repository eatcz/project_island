import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import LoginVue from '@/views/Login.vue'

// 定义路由关系
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('@/views/Attractions.vue')
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('@/views/Line.vue')
  },
  {
    path: '/line1',
    name: 'line1',
    component: () => import('@/views/hot_lines/Line1.vue')
  },
  {
    path: '/line2',
    name: 'line2',
    component: () => import('@/views/hot_lines/Line2.vue')
  },
  {
    path: '/line3',
    name: 'line3',
    component: () => import('@/views/hot_lines/Line3.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/geo',
    name: 'geo',
    component: () => import('@/views/Geo.vue')
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('@/views/Food.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/views/Messages.vue')
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: LoginVue,
  },
  {
    path: '/user/login',
    name: 'login',
    component: LoginVue,
  },
  {
    path: '/user/userInfo',
    name: 'userInfo',
    component: () => import('@/views/user/UserInfo.vue')
  },

  // 海岛信息
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/info/index.vue')
  },
  // 推荐
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('@/views/recommend/index.vue')
  },
  //热门
  {
    path: '/hot',
    name: 'hot',
    component: () => import('@/views/hot/index.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/center/index.vue')
  }

]

// 创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// 导出路由
export default router
