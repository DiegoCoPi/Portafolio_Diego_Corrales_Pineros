import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/home.vue'
import ItSupport from '../Pages/it-support.vue'
import FullStack from '../Pages/fullstack.vue'

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
  },
  {
    path: '/fullstack',
    name: 'FullStack',
    component: FullStack
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router