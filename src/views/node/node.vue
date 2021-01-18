<template>
  <v-container>
    <v-timeline dense clipped v-for="(item, index) in articles" :key="index">
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="primary"
        icon="mdi-book-variant"
      >
        <v-card flat>
          <v-container>
            <h1>{{ index }}</h1>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        v-for="event in item"
        :key="event.id"
        class="mb-4"
        :color="
          item.importance === 1
            ? 'green lighten-1'
            : item.importance === 2
            ? 'primary'
            : 'pink lighten-1'
        "
        slot
        small
      >
        <v-card :to="`/Pigeonhole/detail?id=${event.id}`" flat>
          <v-container>
            {{ $utils.formatTime("MM-dd", event.createtime / 1) }}
            {{ event.title }}
          </v-container>
        </v-card>
        <v-divider></v-divider>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      articles: {},
      events: [],
      input: null,
      nonce: 0
    };
  },
  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
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
          let _arr = res.data.data.articleList.map(i =>
            this.$utils.formatTime("yyyy-MM-dd", i.createtime / 1)
          );
          let newObj = {};
          _arr.forEach(item => {
            newObj[item] = [];
            res.data.data.articleList.forEach(_item => {
              if (
                item ===
                this.$utils.formatTime("yyyy-MM-dd", _item.createtime / 1)
              ) {
                newObj[item].push(_item);
              }
            });
          });
          this.articles = newObj;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
