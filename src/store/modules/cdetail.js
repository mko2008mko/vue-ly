import axios from 'axios';

const state = {
  commodityDetailData: null,
  cityList2: [],
  city1: '',
  city2: '',
  commodity: null
};

const getters = {
  getCDData(state) {
    return state.commodityDetailData;
  },
  getCity2Data(state) {
    return state.cityList2;
  },
  getimglist(state) {
    if (state.commodityDetailData) {
      return state.commodityDetailData.imgDescList;
    } else {
      return [];
    }
  },
  getCommodity(state) {
    return state.commodity;
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
  },
  getCity2Data({ commit }, city) {
    // console.log(city);
    setTimeout(() => {
      const data = [
        {
          addrid: '1',
          addrname: '2级城市1'
        },
        {
          addrid: '2',
          addrname: '2级城市2'
        },
        {
          addrid: '3',
          addrname: '2级城市3'
        },
        {
          addrid: '4',
          addrname: '2级城市4'
        },
        {
          addrid: '5',
          addrname: '2级城市5'
        },
        {
          addrid: '6',
          addrname: '2级城市6'
        },
        {
          addrid: '8',
          addrname: '2级城市7'
        },
        {
          addrid: '9',
          addrname: '2级城市8'
        },
        {
          addrid: '10',
          addrname: '2级城市9'
        }
      ];
      commit('getCITY2Sucess', data);
    }, 1000);
  },
  setCity({ commit }, city) {
    commit('setCity', city);
  },
  modifyCount({ commit }, count) {
    commit('modifyCount', count);
  }
};

const mutations = {
  getCDDSucess(state, data) {
    state.commodityDetailData = data;
    state.commodity = { ...state.commodity, ...data.commodityDetail, size: 1, isCheck: true };
  },
  setCity(state, city) {
    console.log(city);
    if (parseInt(city.type)) {
      state.city2 = city.addrname;
    } else {
      state.city1 = city.addrname;
    }
  },
  getCITY2Sucess(state, data) {
    state.cityList2 = data;
  },
  modifyCount(state, count) {
    state.commodity = { ...state.commodity, size: count };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
