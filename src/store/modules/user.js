import axios from 'axios';

const state = {
  userData: null,
  pcode: ''
};

const getters = {
  getUserName(state) {
    if (state.userData) {
      return state.userData.username;
    } else {
      return null;
    }
  },
  getCode(state) {
    return state.pcode;
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
  },
  getRegister({ commit }, register) {
    console.log(register);
    axios
      .get('/api/user.json')
      .then(res => {
        commit('getRegisterSuccess', res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  getPcCode({ commit }, phone) {
    console.log(phone);
    axios
      .get('/api/user.json')
      .then(res => {
        commit('getPCSuccess', res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const mutations = {
  getLoginSuccess(state, data) {
    state.userData = data;
  },
  getLogoutSuccess(state) {
    state.userData = null;
  },
  getRegisterSuccess(state, data) {
    state.userData = data;
  },
  getPCSuccess(state, data) {
    state.pcode = data.pcode;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
