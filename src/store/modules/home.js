import axios from "axios";

const state = {
    homeData: null
}

const getters = {
    getHomeData(state) {
        return state.homeData;
    }
}

const actions = {
    getHomeData({ commit, state }) {
        console.log(state)
        axios.get('/api/home.json')
            .then(res => {
                commit('getHDSuccess', res.data.data)
            })
            .catch(e => {
                console.log(e);
            })
    }
}

const mutations = {
    getHDSuccess(state, data) {
        state.homeData = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

