import axios from 'axios';

const state = {
  qqgData: null
};

const getters = {
  getQggData(state) {
    return state.qqgData;
  }
};

const actions = {
  requestQqgData({ commit }) {
    axios
      .get('/api/qqg.json')
      .then(res => {
        commit('requestQDSuccess', res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const mutations = {
  requestQDSuccess(state, data) {
    state.qqgData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
