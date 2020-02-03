<template>
  <div id="app">
    <NavbarComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/UI/Navbar.vue';

export default {
  name: 'app',
  components: {
    NavbarComponent
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
margin: 0;
padding: 0;
}
</style>
