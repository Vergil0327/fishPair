<template>
  <div>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
    </v-toolbar>

    <div
      @mouseover="isHover = true"
    >
      <v-navigation-drawer
          app
          clipped
          fixed
          temporary
          v-model="showDrawer"
          :mini-variant="shouldMinifyDrawer"
        >
        <v-list two-line>
          <v-list-tile
            v-if="!isLogin"
            @click.stop="showDialog('Register')">
            <v-list-tile-action>
              <v-icon>person_add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Signup</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile 
            v-if="!isLogin"
            @click.stop="showDialog('Login')"
          >
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-if="isLogin"
            @click.stop="logoutHandler"
          >
            <v-list-tile-action>
              <v-icon>person_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>

    <register-modal
      :shouldShowDialog.sync="shouldShowRegister"
    ></register-modal>
    <login-modal
      :shouldShowDialog.sync="shouldShowLogin"
    ></login-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RegisterModal from '@/components/modal/RegisterModal';
import LoginModal from '@/components/modal/LoginModal';

export default {
  name: 'navBar',
  components: {
    RegisterModal,
    LoginModal,
  },
  props: {
    toolbarTitle: {
      type: String,
    },
  },
  data: () => ({
    showDrawer: false,
    isHover: false,
    shouldShowRegister: false,
    shouldShowLogin: false,
  }),
  computed: {
    ...mapGetters('register', [
      'logout',
    ]),
    ...mapGetters('user', [
      'isLogin',
      'userState',
    ]),
    shouldMinifyDrawer() {
      return this.isMobile(window.navigator.userAgent) ? false : !this.isHover;
    },
  },
  watch: {
    showDrawer(val) {
      if (val === false) this.isHover = false;
    },
  },
  methods: {
    ...mapActions('user', [
      'clearState',
    ]),
    isMobile(userAgent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    },
    showDialog(type) {
      if (type === 'Login' && this.isLogin) {
        this[`shouldShow${type}`] = false;
        return;
      }
      this[`shouldShow${type}`] = true;
    },
    logoutHandler() {
      if (!this.isLogin) return;

      Object.keys(this.userState).forEach((key) => {
        this.$cookie.delete(key);
      });
      this.clearState();
      this.$router.push('/');
    },
  },
};
</script>

