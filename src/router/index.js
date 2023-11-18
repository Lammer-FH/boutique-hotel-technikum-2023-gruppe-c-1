import { createRouter, createWebHistory } from 'vue-router'

// import von views (components) nur hier im router notwendig!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('../views/Landing.vue')
    },
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
    {
      path: '/zimmer',
      name: 'Zimmer',
      component: () => import('../views/Zimmer.vue')
    },
    {
      path: '/zimmer-2',
      name: 'Zimmer-2',
      component: () => import('../views/Zimmer-2.vue')
    },
    {
      path: '/zimmer-3',
      name: 'Zimmer-3',
      component: () => import('../views/Zimmer-3.vue')
    },
    {
      path: '/zimmer-4',
      name: 'Zimmer-4',
      component: () => import('../views/Zimmer-4.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/Account.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('../views/Logout.vue')
    },
    {
      path: '/registrierung',
      name: 'Registrierung',
      component: () => import('../views/Registrierung.vue')
    },
    {
      path: '/verfuegbarkeit',
      name: 'Verfuegbarkeit',
      component: () => import('../views/Verfuegbarkeit.vue')
    },
    {
      path: '/karussell',
      name: 'Karussell',
      component: () => import('../components/carousel/Karussell.vue')
    },
  ]
})

export default router
