import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    add(state) {
      state.count++;
    },
    min(state) {
      state.count--;
    }
  },
  actions: {
    add(context) {
      setTimeout(() => {
        context.commit("add");
      }, 2000);

    },
    min(context) {
      context.commit("min");
    },
    getHomeData(context) {
      console.log("----")
      axios.get('/api/home.json')
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  getters: {
    getState(state) {
      if (state.count >= 0) {
        return state.count;
      } else {
        state.couont = 0;
        return state.couont;
      }
    }
  }
})
