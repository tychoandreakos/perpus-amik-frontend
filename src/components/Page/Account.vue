<template>
  <section id="account">
    <NavbarComponent />
    <HeroComponent
      :propsInfo="panelInfo"
      :propsButtonEnabled="false"
      :propsHero="hero"
      :propsPanel="panel"
    />
  </section>
</template>
<script>
import NavbarComponent from "../UI/Navbar";
import HeroComponent from "../UI/Hero";

export default {
  name: "Account",
  components: {
    NavbarComponent,
    HeroComponent
  },
  data() {
    return {
      panel: {
        width: "55%",
        padding: "4rem",
        height: "58%"
      },
      hero: {
        height: "60vh",
        background:
          "url('https://wallpapersmug.com/download/2560x1024/d00534/facade-building-architecture.jpg') center/cover no-repeat fixed"
      },
      panelInfo: {
        title: "Sign in to your Account"
      }
    };
  }
};
</script>
<style></style>
