import Snackbar from "./index.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
Vue.use(Snackbar, { appendTo: ".v-application--wrap" });
const v = new Vue({
  vuetify: new Vuetify(),
  render(createElement) {
    return createElement(Snackbar);
  }
});
v.$mount();
document.body.appendChild(v.$el);
const snackbar = v.$children[0];
function start(msg, color, timeout) {
  snackbar.start(msg, color, timeout);
}
export default {
  start
};
