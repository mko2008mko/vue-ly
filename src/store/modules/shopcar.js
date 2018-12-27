const state = {
  scCommodityList: [
    {
      id: 233,
      imgUrl: 'http://leyouimage.leyou.com.cn/images_newdb/f2/9e/f29ee368c680d576e1bb64a39e5ac481_360_360.JPG',
      linkUrl: 'http://app.leyou.com.cn/activity/vipCheck',
      title: '歌瑞家A类圣诞系列灰男夹裤',
      pirce: '89.0',
      size: 3,
      isCheck: true
    }
  ],
  count: 1,
  totalPrice: 0
};

const getters = {};

const actions = {
  addShopCar({ commit }, commodity) {
    commit('addShopCar', commodity);
  }
};

const mutations = {
  test(state, commodity) {
    state.totalPrice = jisuanTotalPrice(state.scCommodityList);
  },

  addShopCar(state, commodity) {
    if (!state.scCommodityList.length) {
      state.scCommodityList.push({ ...commodity });
      state.totalPrice = jisuanTotalPrice(state.scCommodityList);
    } else {
      //   state = {
      //     ...state,
      //     ...(() => {
      //       let commoditylist = state.scCommodityList;
      //       let flag = true;
      //       commoditylist.map(item => {
      //         if (item.id === commodity.id) {
      //           flag = false;
      //           //   console.log(commodity.size)
      //           item.size += commodity.size;
      //         }
      //       });

      //       if (flag) {
      //         commoditylist.push({ ...commodity });
      //         return {
      //           scCommodityList: commoditylist,
      //           count: state.count++,
      //           totalPrice: jisuanTotalPrice(commoditylist)
      //         };
      //       } else {
      //         return { scCommodityList: commoditylist, totalPrice: jisuanTotalPrice(commoditylist) };
      //       }
      //     })()
      //   };

      let commoditylist = state.scCommodityList;
      let flag = true;
      commoditylist.map(item => {
        if (item.id === commodity.id) {
          flag = false;
          //   console.log(commodity.size)
          item.size += commodity.size;
        }
      });

      if (flag) {
        commoditylist.push({ ...commodity });

        (state.scCommodityList = commoditylist), state.count++, (state.totalPrice = jisuanTotalPrice(commoditylist));
      } else {
        (state.scCommodityList = commoditylist), (state.totalPrice = jisuanTotalPrice(commoditylist));

        // return { scCommodityList: commoditylist, totalPrice: jisuanTotalPrice(commoditylist) };
      }
    }
  }
};

const jisuanTotalPrice = clist => {
  // console.log(clist);
  return clist.reduce((result, curr) => {
    if (curr.isCheck) {
      result += curr.size * parseFloat(curr.pirce);
    }
    return result;
  }, 0);
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
