import Vue from 'vue';
import Vuex from 'vuex';
// // import * as actions from './actions';
// // import * as getters from './getters';
// // import mutations from './mutations';
import state from './state';
import user from './modules/user';
import registration from './modules/registration';
import search from './modules/search';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  // actions,
  // getters,
  // mutations,
  modules: {
    user,
    registration,
    search,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
