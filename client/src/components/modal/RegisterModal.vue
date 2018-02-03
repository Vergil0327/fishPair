<template>
   <v-layout row justify-center>
    <v-dialog v-model="shouldShowDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
               <v-flex
                  xs12 class="py-2"
                >
                  <v-btn-toggle v-model="type">
                    <v-btn flat value="fisher" @click="chooseUserType('fisher')">
                      Fisher
                    </v-btn>
                    <v-btn flat value="consultant" @click="chooseUserType('consultant')">
                      Consultant
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  :error-messages="errors.collect('First Name')"
                  v-validate="'required'"
                  data-vv-name="First Name"
                  autofocus
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  :error-messages="errors.collect('Last Name')"
                  v-validate="'required'"
                  data-vv-name="Last Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  :error-messages="errors.collect('E-mail')"
                  v-validate="'required|email'"
                  data-vv-name="E-mail"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  :error-messages="errors.collect('Password')"
                  v-validate="'required'"
                  data-vv-name="Password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  v-if="type === 'consultant'"
                  v-model="userTags"
                  label="Feature Tags"
                  multiple
                  autocomplete
                  chips
                  :items="[
                    'sustainability assessment',
                    'fisheries management',
                    'environmental assessment',
                    'fisheries policy development',
                    'fisheries economics',
                    'fisheries resource assessment',
                    'fisheries resource survey',
                    'fisheries strategic planning',
                    'data collection',
                    'bycatch management',
                    'harvest strategies',
                    'third-party certification',
                    'fishery improvement gap analysis',
                    'environmental impacts',
                    'industrial fisheries',
                    'data sampling programs',
                    'marine consultancy',
                    'ecosystem modelling',
                  ]"
                ></v-select>
              </v-flex>
            </v-layout>
            <small>* indicates required field</small>
            <v-alert v-model="alert" outline color="error" icon="warning" :value="true">
              {{ errorMessage }}
            </v-alert>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeModal">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="registerHandler">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  $_veeValidate: {
    validator: 'new', // give me a new validator each time.
  },
  name: 'registerModal',
  props: {
    shouldShowDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    type: null,
    userTags: [],
    alert: false,
    errorMessage: '',
  }),
  watch: {
    userType(nextValue, prevValue) {
      if (nextValue !== prevValue) this.type = nextValue;
    },
  },
  computed: {
    ...mapGetters('user', [
      'userType',
      'userState',
      'isLogin',
    ]),
  },
  methods: {
    ...mapActions('registration', [
      'signUp',
    ]),
    ...mapActions('user', [
      'fetchState',
    ]),
    closeModal() {
      this.alert = false;
      this.errorMessage = '';
      this.$emit('update:shouldShowDialog', false);
    },
    registerHandler() {
      const userSignUpData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        userType: this.type,
        userTags: this.userTags,
      };

      this.signUp(userSignUpData)
        .then((err) => {
          if (err) throw err;

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
    chooseUserType(userType) {
      this.fetchState({ userType });
    },
    clearState() {
      Object.keys(this.$data).forEach((field) => {
        this[field] = '';
      });
    },
  },
};
</script>

