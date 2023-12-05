<template>
  <div class="container-fluid bg-dark text-white"> 
    <nav-bar></nav-bar>
  </div>
    <div class="container-fluid ">
  <div class="container-lg pt-3 text-white d-flex justify-content-center">
    <router-view/>
  </div>
  </div>
   <div class="container-fluid bg-dark fixed-bottom text-white">
    <div class="container-lg">
      <footer class="fs-6 py-2 text-center">&copy; 2023 Jacob Kidd</footer>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    components: { NavBar } // you have register what you imported and thats why this is here
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #3a2daa;
}
</style>
