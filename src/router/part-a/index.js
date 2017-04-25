module.exports = [{
  path: '/home',
  component: resolve => System.import('@/components/page/Home')
}, {
  path: '/login',
  component: resolve => System.import('@/components/page/Login')
}]
