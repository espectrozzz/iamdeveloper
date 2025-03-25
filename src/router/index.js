import { createWebHistory, createRouter } from 'vue-router'

import HomeView from "../pages/HomeView.vue";
import AboutMeView from "../pages/AboutMeView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/aboutme', component: AboutMeView },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;