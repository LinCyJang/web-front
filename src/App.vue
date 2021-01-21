<template>
  <v-app>
    <v-index> </v-index>
    <v-main>
      <v-row class="ma-0">
        <v-col md="3" class="pr-0">
          <v-left :items="$store.state.items"></v-left>
        </v-col>
        <v-col md="6" class="pr-0 ">
          <transition name="slide-left" mode="out-in">
            <router-view />
          </transition>
        </v-col>
        <v-col md="3" class="pl-0">
          <VSide></VSide>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import VIndex from "./layout/index.vue";
import VSide from "./layout/side.vue";
import VLeft from "./layout/left.vue";
export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    VIndex,
    VSide,
    VLeft
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped>
.slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-enter-active {
  transition: all 0.3s ease;
}
.slide-left-leave-to {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.slide-left-leave-active {
  transition: all 0.1s ease;
}
</style>
