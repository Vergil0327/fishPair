import * as types from '../mutation-types';

const initState = {
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
  userType: 'guest',
  userTags: [],
  address: {
    postalCode: null,
    country: 'TW',
    province: 'taiwan',
    city: null,
    street: null,
  },
  meta: {
    userAgent: window.navigator.userAgent,
    locale: window.navigator.language,
    ipAddress: null,
    geolocation: [null, null], // [latitude, longitude]
  },
  pairStoryId: null,
  isLogin: false,
  loginAt: null,
};

const getters = {
  isLogin: state => state.userId !== null,
  userType: state => state.userType,
};

const actions = {

  userLogout({ commit }, payload) {
    console.log(commit, payload);
    commit(types.CLEAR_USER_STATE);
    // Clear Cookies in component
  },

  fetchState({ commit }, payload) {
    commit(types.PUSH_USER_STATE, payload);
  },
};

const mutations = {
  [types.PUSH_USER_STATE](state, payload) {
    Object.keys(payload).forEach((key) => {
      state[key] = payload[key];
    });
  },

  [types.CLEAR_USER_STATE](state) {
    Object.keys(state).forEach((key) => {
      state[key] = initState[key];
    });
  },
};

export default {
  namespaced: true,
  state: () => initState,
  getters,
  actions,
  mutations,
};
