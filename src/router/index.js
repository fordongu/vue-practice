import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

// 模块
import A from './part-a'
import B from './part-b'

Vue.use(Router)

/**
 * 分块 Router
 * 在 router/ 下新建块目录 dirName 与其下的 index.js 文件
 * 在 router/index.js 中引入 ./dirName/index.js 文件，命名为 comeRouter
 * 使用 AllRouters.concatRoutes(comeRouter) 将分块的 Router 合并在一起
 * 最后输出 Router 到 main.js
 */
var AllRoutes = {}
AllRoutes.routes = [{
  path: '/',
  redirect: '/home'
}]
AllRoutes.concatRoutes = function (routes) {
  AllRoutes.routes = AllRoutes.routes.concat(routes)
}
// concat router
AllRoutes.concatRoutes(A)
AllRoutes.concatRoutes(B)

// 路由
const router = new Router({
  linkActiveClass: 'active',
  routes: AllRoutes.routes
})

// 导航钩子
// to/from 都是路由信息对象
// next 是一个函数，用于释放导航钩子
router.beforeEach((to, from, next) => {
  // route.matched 返回一个数组，包含当前路由对象的所有嵌套路径片段的路由记录
  // .some() 方法测试数组中的某些元素是否通过了指定函数的测试
  // 此处查看是否有路由记录的 meta.requiresAuth 返回 true ，返回 true 则进入 if
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 查看登陆状态
    var isLogin = store.state.isLogin
    if (!isLogin) {
      next({
        path: '/login',
        query: {
          // 使用 query 可在登陆成功后跳转到 to
          // 重定向到 to 的路径
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    // 必须要有一个 next 释放导航钩子
    next()
  }
})

export default router
