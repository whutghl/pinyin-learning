import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/exam',
      name: 'exam',
      component: () => import('../views/Exam.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ExamResult.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History.vue'),
    },
  ],
})

export default router
