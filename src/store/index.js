import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import blogList from './modules/blogList';
import passage from './modules/passage';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    blogList,
    passage,
  },
  strict: debug,
  plugins: [createLogger()],
});
