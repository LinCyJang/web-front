<template>
  <v-card>
    <v-card-title class="flex-x-center">{{ articleInfo.title }}</v-card-title>
    <v-card-subtitle class="flex-x-center ma-0">
      <span class="mr-2">
        <v-icon size="14">mdi-calendar-clock</v-icon>
        {{ $t("m.issueDated") }}:
        {{ (articleInfo.display_time / 1) | dateFormat }} </span
      >|
      <span class="mx-2">
        <v-icon size="14">mdi-calendar-check</v-icon>
        {{ $t("m.updateTime") }}:
        {{ (articleInfo.display_time / 1) | dateFormat }} </span
      >|
      <span class="mx-2">
        <v-icon size="14">mdi-folder-outline</v-icon>
        {{ $t("m.classification") }}: {{ articleInfo.type }} </span
      >|
      <span class="mx-2">
        <v-icon size="14">mdi-eye-outline</v-icon>
        {{ $t("m.hits") }}: {{ articleInfo.PV }}
      </span>
    </v-card-subtitle>
    <v-card-subtitle class="flex-x-center pt-0">
      <span class="mx-2">
        <v-icon size="14">mdi-file-code-outline</v-icon>
        {{ $t("m.NumberOfWords") }}:
        {{
          articleInfo.content.replace(/[^\w^\s^\u4e00-\u9fa5]/gi, "").length
        }} </span
      >|
      <span class="mx-2">
        <v-icon size="14">mdi-account-outline</v-icon>
        {{ $t("m.author") }}: {{ articleInfo.auth }}
      </span>
      <span class="mx-2 v-flex">
        {{ $t("m.level") }}:
        <v-rating
          v-model="articleInfo.importance"
          small
          readonly
          background-color="grey lighten-1"
          color="grey lighten-1"
          :length="3"
          class="ml-2"
        ></v-rating>
      </span>
    </v-card-subtitle>
    <v-card-subtitle class="flex-x-center pt-0">
      {{ articleInfo.content_short }}
    </v-card-subtitle>
    <div class="article markdown-body pa-4">
      <VueMarkdown :source="articleInfo.content" v-highlight> </VueMarkdown>
    </div>
  </v-card>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  data: () => {
    return {
      articleInfo: {}
    };
  },
  components: {
    VueMarkdown
  },
  async mounted() {
    await this.getdetail();
  },
  methods: {
    async getdetail() {
      await this.$axios
        .post("/api/article/articleDetail", {
          id: this.$route.query.id
        })
        .then(res => {
          this.articleInfo = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
