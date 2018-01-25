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
          <v-list-tile @click.stop="showDialog">
            <v-list-tile-action>
              <v-icon>person_add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>刊登資料</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
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

    <full-screen-modal
      :shouldShowDialog="shouldShowDialog"
      :onClose="closeDialog"
      :onSave="closeDialog"
    ></full-screen-modal>
  </div>
</template>

<script>
import FullScreenModal from '@/components/modal/FullScreenModal';

export default {
  name: 'navBar',
  components: {
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
    shouldShowDialog: false,
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
    showDialog() {
      this.shouldShowDialog = true;
    },
    closeDialog() {
      this.shouldShowDialog = false;
    },
  },
};
</script>

