import Vue from 'vue';
import Vuex from 'vuex';
import homes from './modules/home';
import counts from './modules/count';
import users from './modules/user';
import nfnbs from './modules/nfnb';
import qqgs from './modules/qqg';
import cdetails from './modules/cdetail';
import shopcars from './modules/shopcar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homes,
    counts,
    users,
    nfnbs,
    qqgs,
    cdetails,
    shopcars
  }
});
