<template>
  <div>
    你进入了 OTHERS 下的 Index 页。
    <div>
      <ul>
        <li>
          <router-link to="/others/first">FIRST</router-link>
        </li>
        <li>
          <router-link to="/others/second">SECOND</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {}
    }
  }
</script>

<style>
</style>
