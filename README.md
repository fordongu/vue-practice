# Practice

## 2017-04-25 [Use Any Javascript Library With Vue.js](http://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/?jsdojo_id=reddit_lip&utm_content=bufferf1f60&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)
 
- 安装一些 JavaScript 库

  ```
  npm i vuex --save
  npm i lodash --save
  npm i axios --save
  npm i moment --save
  npm i store --save
  ```
  
- 直接引入
    
  - 在 main.js 中声明
  
    ```
    import moment from 'moment'
    Vue.prototype.$time = moment
    ```
    
  - 在 .vue 中使用
  
    `this.$time().format('YYYY')`
  
- 插件引入 

  - 插件
  
    ```
    import axios from 'axios'
    // u can set axios in here
    export default {
      install: function (Vue) {
        Object.defineProperty(Vue.prototype, '$http', { value: axios })
      }
    }
    ```
    
  - 在 main.js 中声明
  
    ```
    // use axios
    import Axios from './library/axios'
    Vue.use(Axios)
    ```
    
  - 在 .vue 中使用
  
    `this.$http...`

## 2017-04-25 分块 Router

- 在 router/ 下新建块目录 part-a 与其下的 index.js 文件
  
  ```
  module.exports = [{
    path: '/home',
    component: resolve => System.import('@/components/Home')
  }]
  ```
  
- 在 router/index.js 中引入 ./part-a/index.js 文件，命名为 A

  `import A from './part-a'`
  
- 使用 AllRoutes.concatRoutes(A) 将分块的 Router 合并在一起

  ```
  var AllRoutes = {}
  AllRoutes.routes = [{
    // 首页
    path: '/',
    component: resolve => System.import('@/components/Hello')
  }]
  AllRoutes.concatRoutes = function (routes) {
    AllRoutes.routes = AllRoutes.routes.concat(routes)
  }
  // concat router
  AllRoutes.concatRoutes(A)
  ```

## 2017-04-25 Router 使用钩子导航，预处理路由跳转

- 对 route 设置元信息，填加标志
  
  ```
  meta: {
      requiresAuth: true
    }
  ```
  
- 使用导航钩子

  ```
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLogin) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
  ```


