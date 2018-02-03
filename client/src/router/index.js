import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/homePage/HomePage';
import Profile from '@/pages/user/Profile';

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
  ],
});
