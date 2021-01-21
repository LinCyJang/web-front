<template>
  <div class="index">
    <v-card v-for="item in hots" :key="item.createtime" class="mb-4">
      <v-card-title>{{
        $utils.formatTime("yyyy-MM-dd", item.createtime / 1)
      }}</v-card-title>
      <v-card-text class="px-0">
        <v-list two-line>
          <v-list-item-group>
            <template v-for="(_item, index) in item.hots_list_json">
              <v-list-item
                :key="_item.title"
                @click.stop="handlerHref('https://s.weibo.com' + _item.href)"
              >
                <template v-slot:default="{}">
                  <v-list-item-content>
                    <v-list-item-title v-text="_item.title"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary">
                      <span class="red--text text--lighten-1 sub_title"
                        >🔥 {{ _item.hotRank }}</span
                      >
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="'https://s.weibo.com' + _item.href"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < item.hots_list_json.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      hots: []
    };
  },
  mounted() {
    this.getlist();
    setTimeout(() => {
      this.selectAllTitle();
    }, 300);
  },
  methods: {
    getlist() {
      this.$axios
        .post("/api/wb/WB-hots-list", { time: "1609986941611" })
        .then(res => {
          this.hots = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlerHref(url) {
      window.open(url);
    },
    selectAllTitle() {
      let title = document.querySelectorAll(".v-list-item__title");
      let navList = Array.from(title);
      navList.forEach(item => {
        item.name = item.innerHTML;
      });
      navList.forEach(el => {
        let index = el.localName.indexOf("h");
        el.lev = "lev" + el.localName.substring(index + 1, el.localName.length);
      });
      this.$store.commit("SET_ITEMS", navList);
    }
  }
};
</script>

<style>
.sub_title {
  font-size: 0.725rem !important ;
  margin: 5px 0;
  display: block;
}
</style>
