<template>
  <div id="app">
    <!-- when login is ready add function to remove nav -->
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/general/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  
}
</style>
