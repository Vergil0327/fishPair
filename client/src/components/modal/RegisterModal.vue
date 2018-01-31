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
                label="First Name"
                required
              ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Last Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" hint="example of persistent helper text" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  v-if="userType === 'consultant'"
                  label="Feature Tags"
                  multiple
                  autocomplete
                  chips
                  :items="['Certificate', 'Law', 'Government-related', 'Finance', 'Equipment', 'International Law']"
                ></v-select>
                <v-select
                  v-else-if="userType === 'fisher'"
                  label="Feature Tags"
                  multiple
                  autocomplete
                  chips
                  :items="['Need Certificate', 'Law Help', 'Government-related', 'Finance', 'Equipment', 'International Law']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeModal">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="onRegister">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'registerModal',
  props: {
    shouldShowDialog: {
      type: Boolean,
      default: false,
    },
    onRegister: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    type: 'guest',
  }),
  watch: {
    userType(nextValue, prevValue) {
      if (nextValue !== prevValue) this.type = nextValue;
    },
  },
  computed: {
    ...mapGetters('user', [
      'userType',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'fetchState',
    ]),
    closeModal() {
      this.$emit('update:shouldShowDialog', false);
    },
    chooseUserType(userType) {
      this.fetchState({ userType });
    },
  },
};
</script>

