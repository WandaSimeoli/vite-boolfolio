import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: HomePage
},
 {
 path: '/project',
 name: 'project',
 component: ProjectComponent
 },
 {
    path: '/:pathMatch(.*)*',
    name: '404NotFound',
    component: NotFoundPage
    },
]
});
export { router };