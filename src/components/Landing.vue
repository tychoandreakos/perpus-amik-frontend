<template>
  <section id="landing">
    <NavbarComponent />
    <HeroComponent />
    <MenuComponent />
    <NewsComponent />
    <MoreNewsComponent />
    <ScheduleComponent />
    <FooterComponent />
  </section>
</template>
<script>
import NavbarComponent from "./UI/Navbar.vue";
import HeroComponent from "./UI/Hero.vue";
import MenuComponent from "./Menu.vue";
import NewsComponent from "./UI/News";
import MoreNewsComponent from "./UI/NewsMore";
import ScheduleComponent from "./UI/Schedule";
import FooterComponent from "./UI/Footer";

export default {
  name: "Landing",
  components: {
    NavbarComponent,
    HeroComponent,
    MenuComponent,
    NewsComponent,
    MoreNewsComponent,
    ScheduleComponent,
    FooterComponent
  }
};
</script>
<style scoped></style>
