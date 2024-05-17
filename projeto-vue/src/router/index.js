import { createRouter, createWebHistory } from 'vue-router'
import TelaLogin from '../components/Tela Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TelaLogin
    },
  ]
})

export default router
