<template>
  <div class="layout-index">
    <v-app-bar
      app
      color="#F06292"
      prominent
      dark
      fade-img-on-scroll
      elevation="2"
      shrink-on-scroll
      sroll-target="#scrolling-techniques-2"
      src="../assets/px_city.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>
      <v-toolbar-title>{{ $t("m.title") }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click.stop="handlerChangeT()">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" center-active centered>
          <v-tab
            v-for="item in $router.options.routes.filter(i => i.show)"
            :key="item.id"
            :to="item.path"
          >
            {{ $t(`m.${item.name}`) }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tab: localStorage.getItem("tabId"),
      tabs: [
        { name: "tab1", href: "/", id: 1 },
        { name: "jsplumb", href: "/jsplumb", id: 2 },
        { name: "tab3", href: "/", id: 3 },
        { name: "tab4", href: "/", id: 4 }
      ]
    };
  },
  methods: {
    handlerChangeT() {
      // this.$i18n.locale = 'zh-CN'
      let lang = localStorage.getItem("lang");
      if (!lang) {
        localStorage.setItem("lang", "en-US");
        this.$i18n.locale = "en-US";
      } else {
        switch (lang) {
          case "en-US":
            localStorage.setItem("lang", "zh-CN");
            this.$i18n.locale = "zh-CN";
            break;
          case "zh-CN":
            localStorage.setItem("lang", "en-US");
            this.$i18n.locale = "en-US";
        }
      }
    },

    handlerTab(item) {
      localStorage.setItem("tabId", item.id);
      this.$router.push({ path: item.href });
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-index {
  & {
    font-size: 0.725rem;
  }
}
</style>
