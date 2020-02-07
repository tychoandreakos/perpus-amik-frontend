<template>
  <section id="landing">
    <NavbarComponent />
    <HeroComponent :propsButtonEnabled="true" :propsInfo="panelInfo" />
    <MenuComponent />
    <NewsComponent />
    <MoreNewsComponent />
    <ScheduleComponent />
    <FooterComponent />
  </section>
</template>
<script>
import NavbarComponent from "../UI/Navbar.vue";
import HeroComponent from "../UI/Hero.vue";
import MenuComponent from "./Menu.vue";
import NewsComponent from "../UI/News";
import MoreNewsComponent from "../UI/NewsMore";
import ScheduleComponent from "../UI/Schedule";
import FooterComponent from "../UI/Footer";

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
  },
  data() {
    return {
      panelInfo: {
        title: "Take Your Child to the Library Day!",
        info:
          "On February 1, drop in to the Library, sign up for your very first Greenwich Library card, create a Lunar New Year craft, and pick up a free copy of Dr. Seuss’s Gerald McBoing Boing in the Children’s Room!",
        buttonTitle: "Attend a Program"
      }
    };
  }
};
</script>
<style scoped></style>
