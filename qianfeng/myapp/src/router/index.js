import Vue from 'vue';
import Router from 'vue-router';
import Flim from '@/views/Flim.vue';
import Cinema from '@/views/Cinema.vue';
import Center from '@/views/Center.vue';

Vue.use(Router);

const routes = [
  {
    path: '/flim',
    component: Flim
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  }
];

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
});

export default router;
