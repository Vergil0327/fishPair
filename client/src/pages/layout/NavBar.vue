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
          <v-list-tile @click.stop="showDialog('Register')">
            <v-list-tile-action>
              <v-icon>person_add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>刊登資料</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click.stop="showDialog('Login')">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>個人資料</v-list-tile-title>
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
    isMobile(userAgent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    },
    showDialog(type) {
      this[`shouldShow${type}`] = true;
    },
  },
};
</script>

