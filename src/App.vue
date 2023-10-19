<script>
import router from './router/index.js'
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
import Impressum from './views/Impressum.vue'
import About from './views/About.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    router,
    Impressum,
    About
  }
}
</script>

<template>
  
  <Navbar />

  <About />

  <Footer />
  
</template>

<style>
   
</style>
  