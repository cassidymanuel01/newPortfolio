<template>
  <div class="app">
    <navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// push test
import navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  components:{navbar,Footer},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

#app {
  font-family: "Caveat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  overflow-x: hidden;
}


*{
    scroll-behavior: smooth;
    font-family: 'Open Sans', sans-serif;
}

</style>
