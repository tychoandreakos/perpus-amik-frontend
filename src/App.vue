<template>
  <div id="app">
    <div class="welcome">
      <NavbarComponent />
      <HeroComponent />
      <MenuComponent />
      <NewsComponent />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./components/UI/Navbar.vue";
import HeroComponent from "./components/UI/Hero.vue";
import MenuComponent from "./components/Menu.vue";
import NewsComponent from './components/UI/News';

export default {
  name: "app",
  components: {
    NavbarComponent,
    HeroComponent,
    MenuComponent,
    NewsComponent
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 550vh;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

.welcome {
  width: 100%;
  height: 110vh;
}
</style>
