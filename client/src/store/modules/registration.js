import jwt from 'jsonwebtoken';
import authApi from '@/api/auth';
import * as types from '../mutation-types';

const initState = {
  auth: null,
};

const getters = {
};

const actions = {
  signUp({ commit, dispatch }, userProfile) {
    console.log('register', userProfile);
    return authApi.register(
      userProfile,
      ({ data }) => {
        const decodeAuth = jwt.decode(data.token);
        const { password, ...restUserInfo } = userProfile;
        const userState = { ...restUserInfo, userId: decodeAuth.userId };
        commit(types.LOG_IN, data.token);
        console.log('Debug registration/signup', userState);
        dispatch('user/fetchState', userState, { root: true });
      },
      (err) => {
        console.error(err);
        return err;
      },
    );
  },

  login({ commit, dispatch }, payload) {
    console.log('login');
    return authApi.login(
      payload,
      ({ auth, ...userProfile }) => {
        commit(types.LOG_IN, auth);
        dispatch('user/fetchState', userProfile);
      },
      err => console.error(err),
    );
  },

  logout({ commit, dispatch }) {
    console.log('logout');
    commit(types.LOG_OUT);
    dispatch('user/userLogout');
  },
};

const mutations = {
  [types.LOG_IN](state, payload) {
    state.auth = payload;
  },
  [types.LOG_OUT](state) {
    state.auth = null;
  },
};

export default {
  namespaced: true,
  state: () => initState,
  getters,
  actions,
  mutations,
};
