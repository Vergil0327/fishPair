<template>
  <div class="hello">
    <div v-if="didClientChooseType" class="text-xs-center">
      <h1>{{ msg }}</h1>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
    </div>
    <jumbotron v-if="!didClientChooseType" :title="slogan">
      <v-container fill-height fluid>
        <v-layout row wrap>
          <v-flex xs6 @click.stop="choose('fisher')">
            <v-card hover class="py-2 mr-2">
              <v-card-media height="100%"></v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline text-xs-center mb-0">Fisher</h3>
                  <div>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I need MSC certificate application assistance</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I need suggestion on fishery practice</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I can offer fishery experience</span>
                    </v-flex>
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs6 @click.stop="choose('consultant')">
            <v-card hover class="py-2 mr-2">
              <v-card-media height="100%"></v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline text-xs-center mb-0">Consultant</h3>
                  <div>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I do research on fishery</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I can offer MSC certificate application assistance</span>
                    </v-flex>
                    <v-flex xs12>
                      <v-icon>check</v-icon><span>I participate in FIP</span>
                    </v-flex>
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </jumbotron>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Jumbotron from '@/components/parallax/Jumbotron';

export default {
  name: 'HomePage',
  components: {
    Jumbotron,
  },
  props: {
    didClientChooseType: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      msg: 'Search Bar Goes Here',
      slogan: 'Are You A Fisher, or A Consultant ?',
      // didClientChooseType: false,
    };
  },
  coumputed: {
    ...mapGetters('user', [
      'isLogin',
    ]),
  },
  watch: {
    isLogin(value) {
      this.didClientChooseType = !value;
    },
  },
  methods: {
    ...mapActions('user', [
      'fetchState',
    ]),
    choose(clientType) {
      this.fetchState({ userType: clientType });
      // this.didClientChooseType = true;
      this.$emit('update:didClientChooseType', true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toggleBtn__large {
  height: 100%;
}
</style>

