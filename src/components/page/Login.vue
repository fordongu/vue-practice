<template>
  <div class="login">
    你进入了 LOGIN 页。

    <input type="text" placeholder="请输入账号" v-model="user.username"></input>

    <input type="password" placeholder="请输入密码" v-model="user.password"></input>

    <button @click="toLogin">登陆</button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      toLogin: function () {
        // 设置登录状态
        this.$store.commit('login', this.user)
        // 重定向到之前的页面
        if (this.$route.query.redirect) {
          this.$router.push({
            path: this.$route.query.redirect
          })
        } else {
          this.$router.push({path: '/home'})
        }
      }
    }
  }
</script>

<style>
</style>
