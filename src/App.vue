<template>
  <div id="app">
  <div class="welcome">
    <NavbarComponent />
    <HeroComponent />
    <MenuComponent />

    <Panel />
   </div>
  </div>
</template>

<script>
import NavbarComponent from './components/UI/Navbar.vue';
import HeroComponent from './components/UI/Hero.vue';
import MenuComponent from './components/UI/Menu.vue';

import Panel from './components/UI/Panel.vue';

export default {
  name: 'app',
  components: {
    NavbarComponent,
    HeroComponent,
    MenuComponent,
    Panel
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    height: 550vh;
}


* {
margin: 0;
padding: 0;
}

.welcome {
    max-width: 100%;
    height: 110vh;
}
</style>
