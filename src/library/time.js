import moment from 'moment'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$time', { value: moment })
  }
}
