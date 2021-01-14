<template>
  <div class="aboat">
    <v-card v-for="item in articleList" :key="item.id" class="my-4">
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        {{ item.content_short }}
        <div class="markdown-body">
          <VueMarkdown :source="item.content" v-highlight> </VueMarkdown>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  data() {
    return {
      articleList: []
    };
  },
  components: {
    VueMarkdown
  },
  async mounted() {
    await this.getArticleList();
    // JSON.parse
  },
  methods: {
    async getArticleList() {
      await this.$axios
        .post("/api/article/query", {
          pageIndex: 1,
          pageSize: 10,
          keywords: "node"
        })
        .then(res => {
          this.articleList = res.data.data.articleList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.theme--light.v-application code {
  background-color: transparent !important;
}
</style>
