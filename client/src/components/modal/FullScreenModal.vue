<template>
  <v-layout row justify-center>
    <v-dialog v-model="showDialog" max-width="75%">
      <v-btn></v-btn>
    <div>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
    </div>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'fullScreenModal',
  data: () => ({
    showDialog: false,
  }),
};
</script>

