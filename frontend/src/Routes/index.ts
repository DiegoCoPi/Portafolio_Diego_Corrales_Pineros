import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/home.vue'
import ItSupport from '../Pages/it-support.vue'
import FullStack from '../Pages/fullstack.vue'
import Mecatronic from '../Pages/mecatronic.vue'
import NotFound from '../Pages/[...pathMatch].vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: {title:"Diego Alexander Corrales Piñeros"}
  },
  {
    path: '/it-support',
    name: 'ItSupport',
    component: ItSupport,
    meta: {title:"Especialista Soporte IT"}
  },
  {
    path: '/fullstack',
    name: 'FullStack',
    component: FullStack,
    meta: {title:"Desarrolaldor FullStack"}
  },
  {
    path: '/mecatronic',
    name: 'Mecatronic',
    component: Mecatronic,
    meta: {title:"Ingeneiro mecatrónico"}
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404 error',
    component: NotFound,
    meta: {title:"No encontrado"}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})


export default router