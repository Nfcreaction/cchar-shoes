<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import $ from 'jquery'
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"

  export default {
    components: {
      Header, Footer
    }
  }

</script>
<style></style>