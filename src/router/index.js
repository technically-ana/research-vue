import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from "@/components/LoginView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        // Lazy loading the dashboard component
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
    },
    // Redirect any unknown routes to login
    {
        path: '*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router