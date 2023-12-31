import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CourseView from '../views/CourseView.vue';
import CourseDetail from '../views/CourseDetail.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView, 
  },
  {
        path: '/cousrse/:courseid',
        name: 'course-detail',
        component: CourseDetail,
        props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
