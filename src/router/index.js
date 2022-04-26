import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home-Main',
    component: () => import('../views/Home-main.vue')
  },
  {
    path: '/post/:id',
    name: 'One-Post',
    component: () => import('../views/One-Post.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router