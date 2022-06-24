import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes: any[] = [
  {
    path: '/',
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;