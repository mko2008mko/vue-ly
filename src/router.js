import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nfnb',
      name: 'nfnb',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Nfnb.vue')
    },
    {
      path: '/qqg',
      name: 'qqg',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Qqg.vue')
    },
    {
      path: '/tz',
      name: 'tz',
      component: () => import(/* webpackChunkName: "about" */ './views/Tz.vue')
    },
    {
      path: '/sp',
      name: 'sp',
      component: () => import(/* webpackChunkName: "about" */ './views/Sp.vue')
    },
    {
      path: '/yp',
      name: 'yp',
      component: () => import(/* webpackChunkName: "about" */ './views/Yp.vue')
    }
  ]
});
