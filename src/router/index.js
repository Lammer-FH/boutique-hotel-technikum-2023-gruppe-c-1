import { createRouter, createWebHistory } from 'vue-router'

// import von views (components) nur hier im router notwendig!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../views/Impressum.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
  ]
})

export default router
