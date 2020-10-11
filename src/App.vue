<template>
  <div id="app">
    <!-- when login is ready add function to remove nav -->
    <Navbar v-if="isAuthenticated" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/general/Navbar.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated
    }
  } 
}
</script>

