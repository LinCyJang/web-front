import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/styles/index.scss'
import './plugins/styles/variables.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
