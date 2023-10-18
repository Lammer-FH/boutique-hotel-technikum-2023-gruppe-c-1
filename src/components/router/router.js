import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/impressum',
        name: 'impressum',
        component: () => import('./views/Impressum.vue') 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;