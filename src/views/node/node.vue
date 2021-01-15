<template>
  <div class="node">
    <v-card
      v-for="item in articleList"
      :key="item.id"
      class="mb-4"
      :to="`/node/detail?id=${item.id}`"
    >
      <v-card-title>{{ item.title }}</v-card-title>
      <v-card-text>
        {{ item.content_short }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      articleList: []
    };
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
