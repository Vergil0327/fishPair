<template>
  <v-container
    class="text-xs-center" fluid
  >
    <h1>{{ msg }}</h1>
    <v-layout v-if="didClientChooseType" row>
      <v-flex xs9>
        <v-text-field
          v-model="searchInput"
          label="Search All You Need"
          class="input-group--focused"
          prepend-icon="search"
          single-line
          dark
        ></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-select
          :items="[{ text: 'Mobile' }]"
          label="Mobile"
          dark
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
    </v-layout>
      <jumbotron v-if="!didClientChooseType" :title="slogan">
        <v-container fill-height fluid>
          <v-layout row wrap>
            <v-flex d-flex xs6 @click.stop="choose('fisher')">
              <v-card d-flex hover class="py-2 mr-1">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline text-xs-center mb-0">Fisher</h3>
                    <div class="text-xs-left">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I need MSC certificate assistance</span>
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
            <v-flex d-flex xs6 @click.stop="choose('consultant')">
              <v-card d-flex hover class="py-2 mr-1">
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline text-xs-center mb-0">Consultant</h3>
                    <div class="text-xs-left">
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I do research on fishery</span>
                      </v-flex>
                      <v-flex xs12>
                        <v-icon>check</v-icon><span>I can offer MSC certificate assistance</span>
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
  </v-container>
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
      msg: 'Search All You Need',
      slogan: 'Are You A Fisher, or A Consultant ?',
      searchInput: '',
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

