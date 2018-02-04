<template>
  <v-app id="app">
    <nav-bar :didClientChooseType.sync="didClientChooseType" toolbarTitle="<>< FisherPair" />

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view :didClientChooseType.sync="didClientChooseType"></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; 2018 🐟FisherPair🐟</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HomePage from '@/pages/homePage/HomePage';
import NavBar from '@/pages/layout/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
    HomePage,
  },
  data: () => ({
    didClientChooseType: false,
  }),
  computed: {
    ...mapGetters('user', [
      'userState',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'fetchState',
    ]),
    getUserStateField() {
      return Object.keys(this.userState);
    },
  },
  created() {
    console.log(window.navigator.languages);
    console.log(window.navigator.language);
    const userStateFields = this.getUserStateField();

    const isUserLogin = this.$cookie.get('isLogin');
    if (isUserLogin) {
      const loginUserState =
        userStateFields
          .map(field => [field, JSON.parse(this.$cookie.get(field))])
          .reduce((rslt, [field, value]) => ({ ...rslt, [field]: value }), {});

      console.log(loginUserState);
      this.fetchState(loginUserState);
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  background: #e9eff1;
}

footer.footer {
  background: #00bcd4 !important;
  display: flex;
  justify-content: center;
  color: #F2F7F2;
  font-weight: 500;
}
</style>
