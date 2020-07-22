import Vue from 'vue';
import Router from 'vue-router';
import Film from '@/views/Film.vue';
import Cinema from '@/views/Cinema.vue';
import Center from '@/views/Center.vue';
import Detail from '@/views/Detail.vue';
import Login from '@/views/Login.vue';
import Nowplaying from '@/views/film/Nowplaying';
import Comingsoon from '@/views/film/Comingsoon';

Vue.use(Router);
// const auth = {
//   isLogin () {
//     return true;
//   }
// };

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
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
    component: Detail,
    props: true
  },
  {
    path: '*',
    redirect: '/film'
  }
];

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

// 全局守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   console.log(to);
//   if (to.path === '/center') {
//     if (auth.isLogin()) {
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
//   next();
// });
export default router;
