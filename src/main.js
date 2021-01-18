import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { i18n } from "./plugins/vue-i18n";
import axios from "axios";
import "github-markdown-css/github-markdown.css"; //引入markdown样式
import "highlight.js/styles/atom-one-dark.css"; // 引入高亮样式
import hljs from "highlight.js";
import "@/styles/index.scss";
import utils from "./plugins/utils";

Vue.use(utils);

// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive("highlight", function(el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

Vue.prototype.$axios = axios.create({
  baseURL: "http://localhost:3000"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
