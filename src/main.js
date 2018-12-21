import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VueAwesomSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

import './axiosconfig';
import 'amfe-flexible'
Vue.use(VueAwesomSwiper);
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
