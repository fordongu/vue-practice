<template>
  <div class="top-nav">
    <div class="left-img">
      <a><img src="./images/logo.png"/></a>
      <div class="title">Vue Practice</div>
    </div>
    <div class="right-btns">
      <div class="btn">
        <router-link to="/home">HOME</router-link>
      </div>
      <div class="btn">
        <router-link to="/others">OTHERS</router-link>
      </div>
      <div class="btn" v-if="!isLogin">
        <router-link to="/login">LOGIN</router-link>
      </div>
      <div class="btn" v-else @click="exit()">
        <router-link to="/exit">EXIT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    },
    computed: {
      isLogin () {
        return this.$store.state.isLogin
      }
    },
    methods: {
      exit: function () {
        this.$store.commit('exit')
        this.$router.push({
          path: '/home'
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .top-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 980px;
    height: 68px;
    background-color: #ffffff;
    .left-img {
      display: flex;
      align-items: center;
      margin-left: 40px;
      height: inherit;
      width: 500px;
      min-width: 500px;
      img {
        height: 48px;
      }
      .title {
        padding-left: 20px;
        color: #41B883;
        font-size: 18px;
      }
    }
    .right-btns {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: stretch;
      height: inherit;
      width: 350px;
      min-width: 350px;
      margin-right: 20px;
      .btn {
        flex-grow: 1;
        line-height: 68px;
        a {
          color: #35495E;
          text-align: center;
          display: block;
          font-size: 18px;
        }
        a.active {
        // background-color: #3E6B89;
          color: #41B883;
        }
      }
    }
  }
</style>
