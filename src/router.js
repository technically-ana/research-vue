import { createRouter, createWebHistory } from 'vue-router'

import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import RedirectView from "@/views/RedirectView.vue";

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/dashboard/:id', name: 'dashboard', component: DashboardView},
        { path: '/r/:id', name: 'redirect', component: RedirectView},
    ]
} )

export default router;