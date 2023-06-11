import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */'../views/Index.vue')
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: () => import(/* webpackChunkName: "catalogo" */'../views/Catalogo.vue')
  },
  {
    path: '/nosotros',
    name: 'about',
    component: () => import(/* webpackChunkName: "catalogo" */'../views/Nosotros.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
