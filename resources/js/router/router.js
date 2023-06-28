import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import UiTest from '../pages/UiTest.vue';

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/ui-test',
        component: UiTest
    }
];

const router = createRouter({
    history: createWebHashHistory(), // Provide the history implementation to use. We are using the hash history for simplicity here.
    routes,
})

export default router;