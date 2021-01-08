import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/styles/index.scss'
import './plugins/styles/variables.scss'
import './styles/element-variables.scss'
import router from './router'
import store from './store/index'
import Cookies from 'js-cookie'
// import './permission' // permission control
import Element from 'element-ui'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import './utils/error-log' // error log
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
