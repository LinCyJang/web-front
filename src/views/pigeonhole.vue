<template>
  <v-card>
    <v-timeline :articles="articles"></v-timeline>
  </v-card>
</template>

<script>
import { getArticles } from "@/api/article";
import VTimeline from "@/components/VTimeline.vue";
export default {
  data: () => {
    return {
      articles: {},
      events: [],
      input: null,
      nonce: 0
    };
  },
  components: {
    VTimeline
  },
  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },
  async mounted() {
    await this.getArticleList();
    setTimeout(() => {
      this.$store.commit("SET_ITEMS", this.$utils.selectAllTitle()); // 更新左侧导航
    }, 300);
  },
  methods: {
    async getArticleList() {
      await getArticles({
        pageIndex: 1,
        pageSize: 10
      })
        .then(res => {
          let _arr = res.data.articleList.map(i =>
            this.$utils.formatTime("yyyy-MM-dd", i.createtime / 1)
          );
          let newObj = {};
          _arr.forEach(item => {
            newObj[item] = [];
            res.data.articleList.forEach(_item => {
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
