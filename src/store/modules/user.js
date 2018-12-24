import axios from 'axios';

const state = {
  userData: null
};

const getters = {
  getUserName(state) {
    return state.userData.username;
  }
};

const actions = {
  getLogin({ commit, state }, phone) {
    // console.log(phone,pwd,vcode);
    axios
      .get('/api/user.json')
      .then(res => {
        commit('getLoginSuccess', res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getLogout({ commit }) {
    setTimeout(() => {
      commit('getLogoutSuccess');
    }, 1000);
  }
};

const mutations = {
  getLoginSuccess(state, data) {
    state.userData = data;
  },
  getLogoutSuccess(state) {
    state.userData = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
