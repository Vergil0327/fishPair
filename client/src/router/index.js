import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/register',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/user/:id',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'profile',
          component: Hello,
        },
        {
          path: 'profile/edit',
          component: Hello,
        },
      ],
    },
  ],
});
