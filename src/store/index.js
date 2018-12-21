import Vue from "vue";
import Vuex from "vuex";
import homes from "./modules/home";
import counts from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        homes,
        counts
    }
})