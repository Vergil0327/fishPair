<template>
  <v-list two-line>
    <v-list-tile
      v-for="(listTile, i) in navList"
      :key="i"
      @click="listTile.action"
    >
      <v-list-tile-action>
        <v-icon>{{ listTile.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ listTile.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'navBarList',
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },
};
</script>

