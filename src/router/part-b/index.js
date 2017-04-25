module.exports = [{
  path: '/others',
  component: resolve => System.import('@/components/page/Others'),
  meta: {
    requiresAuth: true
  },
  children: [{
    // 设置路径为空，父组件会默认加载该组件
    path: '',
    name: 'index',
    component: resolve => System.import('@/components/page/Index')
  }, {
    path: 'first',
    component: resolve => System.import('@/components/page/First')
  }, {
    path: 'second',
    component: resolve => System.import('@/components/page/Second')
  }]
}]
