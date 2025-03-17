import {createRouter, createWebHistory} from 'vue-router'

import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
// import SurveyView from "@/views/SurveyView.vue";
// import DashboardView from "@/views/DashboardViewOld.vue";
// import FinishedSurveyView from "@/views/FinishedSurveyView.vue";

const router = createRouter( {
    history: createWebHistory(""),
    routes: [
        { path: '/', name: 'login', component: LoginView },
        { path: '/about', name: 'about', component: AboutView },
    ]
} )
// const routes = [
//     { path: '/', component: LoginView },
//     { path: '/about', component: AboutView },
//     { path: '/survey', component: SurveyView },
//     { path: '/dashboard', component: DashboardView },
//     { path: '/finished', component: FinishedSurveyView },
// ]

// export const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
// })

export default router;