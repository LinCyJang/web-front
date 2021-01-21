import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import { i18n } from "./plugins/vue-i18n";
import "github-markdown-css/github-markdown.css"; //引入markdown样式
import "highlight.js/styles/atom-one-dark.css"; // 引入高亮样式
import hljs from "highlight.js";
// import Cookies from 'js-cookie'
import "@/styles/index.scss";
import utils from "./plugins/utils";
import "./permission"; // permission control
import $ from "lodash";
import snackbar from "./components/snackbar/index";
import service from "@/plugins/request.js";
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive("highlight", function(el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
Vue.prototype.$sevice = service;
Vue.prototype.$snackbar = snackbar;

Vue.prototype.$ = $;

Vue.use(utils);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
