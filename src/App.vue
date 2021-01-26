<template>
  <v-app>
    <v-main>
      <!-- <v-row class="ma-0">
        <v-col md="3" class="pr-0">
          <v-left :items="$store.state.items"></v-left>
        </v-col>
        <v-col md="6" class="pr-0 "> -->
      <router-view />
      <!-- </v-col>
        <v-col md="3" class="pl-0">
          <VSide></VSide>
        </v-col> -->
      <!-- </v-row> -->
    </v-main>
  </v-app>
</template>

<script>
// import VSide from "./layout/side.vue";
// import VLeft from "./layout/left.vue";
export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    // VSide,
    // VLeft
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped></style>
