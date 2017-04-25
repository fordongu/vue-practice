import Vue from 'vue'
import Vuex from 'vuex'
import LocalStore from 'store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: LocalStore.get('user')
  },
  mutations: {
    login (states, obj) {
      LocalStore.set('user', obj)
      states.isLogin = true
    },
    exit (states) {
      LocalStore.remove('user')
      states.isLogin = false
    }
  }
})
