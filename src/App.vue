<template>
  <v-app>
    <v-index></v-index>
    <v-main>
      <v-row class="ma-0">
        <v-col md="10" class="pr-0 ">
          <transition name="slide-left" mode="out-in">
            <router-view />
          </transition>
        </v-col>
        <v-col md="2" class="pl-0">
          <VRight></VRight>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import VIndex from "./layout/index.vue";
import VRight from "./layout/right.vue";
export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    VIndex,
    VRight
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
