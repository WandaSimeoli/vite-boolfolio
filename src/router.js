import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ContactPage from './pages/ContactPage.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: HomePage
},
 {
 path: '/project/:slug',
 name: 'project',
 component: ProjectComponent
 },
 {
    path: '/:pathMatch(.*)*',
    name: '404NotFound',
    component: NotFoundPage
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactPage
        }
]
});
export { router };