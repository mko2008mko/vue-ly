import axios from 'axios';

const state = {
  nfnbData: null
};

const getters = {
  getNfnbData(state) {
    return state.nfnbData;
  }
};

const actions = {
  requestNfnbData({ commit }) {
    axios
      .get('/api/nfnb.json')
      .then(res => {
        commit('requestNDSuccess', res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const mutations = {
  requestNDSuccess(state, data) {
    state.nfnbData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
