import Vue from 'vue';
import Router from 'vue-router';
import Flim from '@/views/Flim.vue';
import Cinema from '@/views/Cinema.vue';
import Center from '@/views/Center.vue';
import Mowplaying from '@/views/flim/Nowplaying';
import Comingsoon from '@/views/flim/Comingsoon';

Vue.use(Router);

const routes = [
  {
    path: '/flim',
    component: Flim,
    children: [
      {
        path: 'nowplaying',
        component: Mowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '*',
    redirect: '/flim'
  }
];

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
});

export default router;
