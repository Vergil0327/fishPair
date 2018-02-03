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
    return authApi.register(
      userProfile,
      ({ data }) => {
        const decodeAuth = jwt.decode(data.token);
        const { password, ...restUserInfo } = userProfile;
        const userState = {
          ...restUserInfo,
          userId: decodeAuth.userId,
          isLogin: true,
          loginAt: new Date(),
        };

        commit(types.LOG_IN, data.token);
        dispatch('user/fetchState', userState, { root: true });
      },
      (err) => {
        console.error(err);
        console.log(err.response);
        return err;
      },
    );
  },

  login({ commit, dispatch }, payload) {
    return authApi.login(
      payload,
      ({ data: { token, data: { ...userData } } }) => {
        const decodeAuth = jwt.decode(token);
        const userState = {
          ...userData,
          userId: decodeAuth.userId,
          isLogin: true,
          loginAt: new Date(),
        };

        // console.log('login userState', userState);
        commit(types.LOG_IN, token);
        dispatch('user/fetchState', userState, { root: true });
      },
      (err) => {
        console.error(err);
        return err;
      },
    );
  },

  logout({ commit, dispatch }) {
    commit(types.LOG_OUT);
    dispatch('user/clearState');
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
