<template>
   <v-layout row justify-center>
    <v-parallax
      height="100%"
      jumbotron
    >
      <v-flex class="text-xs-center">
        <h1>{{ title }}</h1>
      </v-flex>
      <slot>
        Slot Goes Here
      </slot>
    </v-parallax>
  </v-layout>
</template>

<script>
export default {
  name: 'jumbotron',
  props: {
    title: {
      type: String,
      default: 'Are you a giver or a taker ?',
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:shouldShowDialog', false);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #0D2C54;
}
</style>
