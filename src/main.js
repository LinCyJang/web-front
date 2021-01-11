import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { i18n } from "./plugins/vue-i18n";
import axios from "axios";
import jsPlumb from "jsplumb";

Vue.prototype.$jsPlumb = jsPlumb.jsPlumb;

Vue.prototype.$axios = axios.create({
  baseURL: "http://192.168.1.31:3000"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
