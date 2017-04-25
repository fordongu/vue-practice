import axios from 'axios'
// u can set axios in here
export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })
  }
}
