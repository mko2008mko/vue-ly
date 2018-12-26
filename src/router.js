import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login';
import Index1 from './views/Index';
import Register from './views/Register';
import Cdetail from './views/Cdetail';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index1,
      children: [
        {
          path: '/',
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/cdetail/:id',
      name: 'Cdetail',
      component: Cdetail,
      props:true,
      // children:[
      //   {
      //     path:'/cdetail/AfterSale',
      //     component:AfterSale
      //   },
      //   {
      //     path:'/cdetail/HowBuy',
      //     component:HowBuy
      //   },
      //   {
      //     path:'/cdetail',
      //     component:ImageDesc
      //   }
      // ]
    }
  ]
});
