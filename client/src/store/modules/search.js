import searchApi from '@/api/search';
import * as types from '../mutation-types';

const initState = () => ({
  searchResults: {},
});

const getters = {
  searchResults: state => state.searchResults,
};

const actions = {

  searchUser({ commit }, searchQuery) {
    return searchApi.searchUser(
      searchQuery,
      ({ data }) => {
        console.log('searchUser response', data);
        commit(types.FETCH_SEARCH_RESULTS, data);
        return data;
      },
      (err) => {
        console.error(err);
        console.log(err.response);
        return err;
      },
    );
  },

};

const mutations = {
  [types.FETCH_SEARCH_RESULTS](state, payload) {
    state.searchResults = payload;
  },
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
