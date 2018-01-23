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
        <nav-bar-list :navList="navList" />
      </v-navigation-drawer>
    </div>

    <full-screen-modal></full-screen-modal>
  </div>
</template>

<script>
import FullScreenModal from '@/components/modal/FullScreenModal';
import NavBarList from './NavBarList';

export default {
  name: 'navBar',
  components: {
    NavBarList,
    FullScreenModal,
  },
  props: {
    toolbarTitle: {
      type: String,
    },
  },
  data: () => ({
    showDrawer: false,
    isHover: false,
    navList: [
      { title: '刊登資料', icon: 'person_add', action: () => console.log('刊登資料') },
      { title: '個人資料', icon: 'person', action: () => console.log('個人資料') },
    ],
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
  },
};
</script>

