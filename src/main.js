// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

// use vuex
import Vuex from 'vuex'
import store from './store/index.js'
Vue.use(Vuex)

// use moment
import Time from './library/time.js'
Vue.use(Time)

// use axios
import Http from './library/http.js'
Vue.use(Http)

// use lodash
import Lodash from './library/lodash.js'
Vue.use(Lodash)

// use localStore
import LocalStore from './library/localStore.js'
Vue.use(LocalStore)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
