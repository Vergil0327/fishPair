import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/homePage/HomePage';
import Profile from '@/pages/user/Profile';
import SearchResult from '@/pages/searchResult/SearchResult';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/user/:id',
      name: 'UserProfile',
      component: Profile,
      props: true,
    },
    {
      path: '/search/results',
      name: 'SearchResult',
      component: SearchResult,
    },
  ],
});
