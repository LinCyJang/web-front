<template>
  <v-card class="jsplumb">
    <v-timeline :articles="articles"></v-timeline>
  </v-card>
</template>

<script>
import VTimeline from "@/components/VTimeline.vue";
export default {
  data: () => {
    return {
      articles: {}
    };
  },
  components: {
    VTimeline
  },
  mounted() {
    this.getdata();
    this.selectAllTitle();
    // this.$snackbar.start('这是一条消息', 'red')
  },
  methods: {
    async getdata() {
      await this.$store
        .dispatch("getArticles", {
          pageIndex: 1,
          pageSize: 10
        })
        .then(res => {
          let _arr = res.articleList.map(i => {
            return i.type;
          });
          let newObj = {};
          _arr.forEach(el => {
            newObj[el] = [];
            res.articleList.forEach(_el => {
              if (el === _el.type) {
                newObj[el].push(_el);
              }
            });
          });
          this.articles = newObj;
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectAllTitle() {
      setTimeout(() => {
        this.$store.commit("SET_ITEMS", this.$utils.selectAllTitle()); // 更新左侧导航
      }, 300);
    }
  }
};
</script>

<style></style>
