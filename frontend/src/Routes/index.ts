import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/home.vue'
import ItSupport from '../Pages/it-support.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/it-support',
    name: 'ItSupport',
    component: ItSupport
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router