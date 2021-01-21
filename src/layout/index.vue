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
      <!-- @click="logout()" -->
      <div
        v-if="$store.state.token"
        @mouseover="expand = true"
        @mouseleave="expand = false"
      >
        <v-avatar size="48" class="mb-1">
          <img
            :src="$store.state.data.avatar"
            :alt="$store.state.data.username"
          />
        </v-avatar>
        <v-expand-transition>
          <v-card
            flat
            v-if="expand"
            @click="logout()"
            color="priamry"
            height="28"
            width="48"
          >
            <span class="t-logout">{{ $t("m.logOut") }}</span>
          </v-card>
        </v-expand-transition>
      </div>
      <login-form v-if="!$store.state.token"></login-form>
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
import loginForm from "@/components/loginForm.vue";
export default {
  data: () => {
    return {
      tab: localStorage.getItem("tabId"),
      expand: false
    };
  },
  components: {
    loginForm
  },
  mounted() {
    if (localStorage.getItem("lang"))
      this.$i18n.locale = localStorage.getItem("lang");
  },
  methods: {
    handlerChangeT() {
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

    // 上传七牛
    changeAvatar(e) {
      this.$axios.get("/api/article/upload", { bucket: "" }).then(res => {
        const uploadToken = res.data.qiniuToken;
        var data = new FormData();
        data.append("token", uploadToken);
        data.append("file", e.target.files[0]);
        this.$axios({
          method: "POST",
          url: "https://upload-z2.qiniup.com",
          data: data,
          onUploadProgress: function() {
            // var percentCompleted = Math.round(
            //   (progressEvent.loaded * 100) / progressEvent.total
            // );
          }
        }).then(res => {
          //  `http://publicimage.xq5.com/${response.data.key}`; （若bucket 参数为public-image则不需要下一步的图片地址获取可直接使用http://publicimage.xq5.com/ + ‘res.data.key’，拼接图片地址）
          console.log(res.data.key);
        });
      });
    },
    async logout() {
      await this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-index {
  & {
    font-size: 0.725rem;
  }
  .t-logout {
    font-size: 0.725rem;
    text-align: center;
    display: flex;
    align-items: center;
    /* width: 100%; */
    height: 100%;
    justify-content: center;
  }
}
</style>
