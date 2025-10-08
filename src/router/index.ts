
import { createRouter, createWebHistory } from 'vue-router'
import TDLogin from '@/components/pages/TDLogin.vue'
import TDHome from '@/components/pages/TDHome.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: TDLogin },
  { path: '/home', name: 'Home', component: TDHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router