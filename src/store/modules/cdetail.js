import axios from 'axios';

const state = {
  commodityDetailData: null
};

const getters = {
  getCDData(state) {
    return state.commodityDetailData;
  }
};

const actions = {
  getCDetailData({ commit }, productID) {
    if (!productID) {
      throw '参数错误';
    }
    axios
      .get('/api/cdetail.json?productID=' + productID)
      .then(res => {
        // console.log("------", res);
        commit('getCDDSucess', res.data.data);
      })
      .catch(e => {});
  }
};

const mutations = {
  getCDDSucess(state, data) {
    state.commodityDetailData = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
