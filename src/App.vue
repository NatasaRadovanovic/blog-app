<template>
  <div>
    <NavBar/>
      <div class="container">
      <div class="col-sm-10 offset-sm-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
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
