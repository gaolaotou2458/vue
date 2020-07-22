import Vue from 'vue';
import Router from 'vue-router';
import Flim from '@/views/Flim.vue';
import Cinema from '@/views/Cinema.vue';
import Center from '@/views/Center.vue';
import Detail from '@/views/Detail.vue';
import Login from '@/views/Login.vue';
import Mowplaying from '@/views/flim/Nowplaying';
import Comingsoon from '@/views/flim/Comingsoon';

Vue.use(Router);
const auth = {
  isLogin () {
    return false;
  }
};

const routes = [
  {
    path: '/flim',
    component: Flim,
    children: [
      {
        path: '/flim/nowplaying',
        component: Mowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/flim/nowplaying'
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
    path: '/login',
    component: Login
  },
  {
    // 动态路由
    path: '/detail/:myid',
    name: 'kerwindetail',
    component: Detail
  },
  {
    path: '*',
    redirect: '/flim'
  }
];

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

// 全局守卫
router.beforeEach((to, from, next) => {
  // ...
  // console.log(to);
  if (to.path === '/center') {
    if (auth.isLogin()) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});
export default router;
