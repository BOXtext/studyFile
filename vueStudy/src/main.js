// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/index.js'
import http from 'vue-resource'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'

// import store from './vuex/index'

Vue.use(ElementUI)
Vue.use(http)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
