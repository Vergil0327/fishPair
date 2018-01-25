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
              <v-flex xs12 sm6 md4>
                <v-text-field
                label="Legal first name"
                required
              ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Feature Tags"
                  multiple
                  autocomplete
                  chips
                  :items="['Certificate', 'Law', 'Government-related', 'Finance', 'Equipment', 'International Law']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="onClose">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="onSave">Save</v-btn>
          <!-- <v-btn color="blue darken-1" flat @click.native="$emit('closeDialog')">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="$emit('closeDialog')">Save</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'fullScreenModal',
  props: {
    shouldShowDialog: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
    onSave: {
      type: Function,
      required: true,
    },
  },
};
</script>

