<template lang="pug">
  section#landing
    NavbarComponent //- Navbar
    HeroComponent(:propsButtonEnabled="true" :propsInfo="panelInfo") //- Hero
    MenuComponent //- Menu above HeroComponent
    NewsComponent //- News contain Latest News
    MoreNewsComponent //- Another News
    ScheduleComponent //- Schedule of library
    FooterComponent  //- The greatest footer
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
    FooterComponent,
  },
  data() {
    return {
      panelInfo: {
        title: "Take Your Child to the Library Day!",
        info:
          "On February 1, drop in to the Library, sign up for your very first Greenwich Library card, create a Lunar New Year craft, and pick up a free copy of Dr. Seuss’s Gerald McBoing Boing in the Children’s Room!",
        button: {
          title: "Attend a Program",
          href: "#",
        },
      },
    };
  },
};
</script>
