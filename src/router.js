import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from './views/AboutView.vue'
import LoginView from "@/views/LoginView.vue";
import SurveyView from "@/views/SurveyView.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
    { path: '/', component: LoginView },
    { path: '/about', component: AboutView },
    { path: '/survey', component: SurveyView },
    { path: '/dashboard', component: DashboardView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})