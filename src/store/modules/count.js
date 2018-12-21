
const state = {
    count: 0
}

const getters = {
    getCount(state) {
        if (state.count >= 0) {
            return state.count;
        } else {
            state.count = 0;
            return 0;
        }

    }
}

const mutations = {
    add(state) {
        state.count++;
    },
    min(state) {
        state.count--;
    }
}

const actions = {
    add({ commit, state }) {
        commit('add');
    },
    min(context) {
        context.commit('min');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}