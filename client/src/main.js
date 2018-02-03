// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueCookie from 'vue-cookie';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import '../node_modules/vuetify/dist/vuetify.min.css';
import store from './store';

Vue.config.productionTip = false;

/* Vue Plugins */
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueCookie);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
