import store from 'store'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$localStore', { value: store })
  }
}
