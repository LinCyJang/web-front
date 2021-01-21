<template>
  <v-snackbar
    v-model="open"
    :color="color"
    :class="`${color}--text`"
    :timeout="timeout"
    bottom
    auto-height
  >
    <v-icon :color="color">{{ icon }}</v-icon>
    {{ mes }}
    <template v-slot:action="{ attrs }">
      <v-btn v-bind="attrs" @click="open = false" icon>
        <v-icon size="15">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {},
  components: {},
  data() {
    return {
      icon: "",
      color: "",
      open: null,
      mes: null,
      timeout: 2000
    };
  },
  created() {},
  methods: {
    start(msg, color, timeout, icon) {
      this.open = true;
      this.mes = msg;
      this.color = color;
      this.timeout = timeout;
      this.icon = icon;
    }
  }
};
</script>

<style lang="scss">
.v-snack {
  .v-snack__content {
    justify-content: flex-start;
    i {
      margin-right: 10px;
    }
  }
}
</style>
