<template>
   <v-layout row justify-center>
    <v-dialog v-model="shouldShowDialog" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="userAuthInfo.email"
                  label="Email"
                  autofocus
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="userAuthInfo.password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>* indicates required field</small>
          <v-alert v-model="alert" outline color="error" icon="warning" :value="true">
            {{ errorMessage }}
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeModal">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="loginHandler">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'fullScreenModal',
  props: {
    shouldShowDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userAuthInfo: {
      email: '',
      password: '',
    },
    alert: false,
    errorMessage: '',
  }),
  computed: {
    ...mapGetters('user', [
      'isLogin',
      'userState',
    ]),
  },
  methods: {
    ...mapActions('registration', [
      'login',
    ]),
    closeModal() {
      this.$emit('update:shouldShowDialog', false);
    },
    loginHandler() {
      this.login(this.userAuthInfo)
        .then((err) => {
          if (err) throw err;

          console.log(this.userState);
          Object.entries(this.userState).forEach(([k, v]) => {
            this.$cookie.set(k, JSON.stringify(v), { expires: 1 });
          });
        })
        .then(() => {
          this.clearState();
          this.$emit('update:shouldShowDialog', false);
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
          this.alert = true;
          this.errorMessage = err.message;
        });
    },
    clearState() {
      this.userAuthInfo = {
        email: '',
        password: '',
      };
      this.alert = false;
      this.errorMessage = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #e9eff1;
  color: #0D2C54;

  .headline {
    font-weight: 500;
  }
}
</style>
