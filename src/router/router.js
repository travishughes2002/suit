import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import UiTest from '../pages/UiTest.vue';
import Roadmap from '../pages/Roadmap.vue';
import Demo from '../pages/Demo.vue';

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
    },
    {
        path: '/roadmap',
        component: Roadmap
    },
    {
        path: '/demo',
        component: Demo
    }
];

const router = createRouter({
    history: createWebHashHistory(), // Provide the history implementation to use. We are using the hash history for simplicity here.
    routes,
})

export default router;