<template>
  <v-app id="app" dark>
    <nav-bar toolbarTitle="<>< Fisher Pair" />

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app fixed>
      <span>&copy; 2018 🐟FisherPair🐟</span>
    </v-footer>
  </v-app>
</template>

<script>
import HomePage from '@/pages/homePage/HomePage';
import NavBar from '@/pages/layout/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
    HomePage,
  },
  created() {
    console.log(window.navigator.languages);
    console.log(window.navigator.language);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
}
</style>
