import Vue from 'vue'
import Cube ,{ Toast, createAPI,Dialog }from 'cube-ui'

Vue.use(Cube,Toast,Dialog)

// Vue.use(Toast);
createAPI(Vue, Toast, ["click"], true);
createAPI(Vue, Dialog, ["confirm","cancel"], true);
