<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/login" v-if="!isLogin">请登录</router-link>
    <a @click="exit" v-else>退出</a>
    <router-link to="/others">其他</router-link>
    <p>-------------------------------------------------------------------------</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created: function () {
      this.libraryTest()
    },
    computed: {
      isLogin () {
        // 动态获取登录状态
        return this.$store.state.isLogin
      }
    },
    methods: {
      exit: function () {
        this.$store.commit('exit')
        this.$router.push({
          path: '/login'
        })
      },
      libraryTest: function () {
        console.log(this.$time ? 'Moment works!' : 'Uh oh..')
        console.log(this.$http ? 'Axios works!' : 'Uh oh..')
        console.log(this.$lodash ? 'Lodash works!' : 'Uh oh..')
        console.log(this.$localStore ? 'LocalStore works!' : 'Uh oh..')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
