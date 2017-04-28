<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from './components/common/top-nav/TopNav.vue'
  export default {
    name: 'app',
    components: {
      TopNav
    },
    created: function () {
      this.libraryTest()
    },
    methods: {
      libraryTest: function () {
        console.log(this.$time ? 'Moment works!' : 'Uh oh..')
        console.log(this.$http ? 'Axios works!' : 'Uh oh..')
        console.log(this.$lodash ? 'Lodash works!' : 'Uh oh..')
        console.log(this.$localStore ? 'LocalStore works!' : 'Uh oh..')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background-color: #E8F1F5;
  }
</style>
