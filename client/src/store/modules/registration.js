import * as types from '../mutation-types';
import authApi from '../../api/auth';

const initState = {
  auth: false,
};

const getters = {
};

const actions = {
  register({ commit, dispatch }, payload) {
    console.log('register', payload);
    return authApi.register(
      payload,
      () => {
        commit(types.REGISTER);
        dispatch('registration/login');
      },
      err => console.error(err),
    );
  },

  login({ commit, dispatch }, payload) {
    console.log('login');
    return authApi.login(
      payload,
      () => {
        commit(types.REGISTER);
        dispatch('user/userLogin');
      },
      err => console.error(err),
    );
  },

  logout({ dispatch }, payload) {
    console.log('logout');
    return authApi.logout(
      payload,
      () => {
        dispatch('user/userLogout');
      },
      err => console.error(err),
    );
  },
};

const mutations = {
  [types.REGISTER](state) {
    state.auth = true;
  },
};

export default {
  namespaced: true,
  state: () => initState,
  getters,
  actions,
  mutations,
};
