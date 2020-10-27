<template>
    <v-toolbar height="48" :elevation="1">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  computed: {},
};
</script>

<style lang="scss" scoped>
.v-sheet:not(.v-sheet--outlined){
    box-shadow: none;
    border-bottom: 1px solid rgb(138, 138, 138);
}
</style>
