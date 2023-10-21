<script>
import router from './router/index.js'
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    router
  }
}
</script>

<template>
  
  <Navbar />

  <router-view />

  <Footer></Footer>
  
</template>

<style>
   
</style>
  