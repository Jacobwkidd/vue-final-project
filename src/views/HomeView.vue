<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <i class="bi bi-house"></i>
    <h1>Find your property TODAY!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//url('https://fonts.googleapis.com/css?family=Trirong');
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
body{
  background_image: url("@/assets/homepage.jpg");
  background: cover;
  background-size: cover;
  background: no-repeat;
}
/* h1 {
  font-family: "Trirong", serif;
} */
</style>

