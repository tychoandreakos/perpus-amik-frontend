<template lang="pug">
  section#first-wrapper
    PanelComponent.panel
    div.slider(v-for="(info, i) in slider" :key="i")
      div.text
        h3 {{ info.title }}
        a(:href="info.href") {{ link }}
      Test
      div.border
    FooterComponent
</template>

<script>
import PanelComponent from "../../UI/user/Panel";
import Test from "../../UI/user/Test";
import FooterComponent from "../../UI/user/Footer";

export default {
  name: "FirstPage",
  components: {
    PanelComponent,
    Test,
    FooterComponent
  },
  data() {
    return {
      slider: [
        {
          title: 'Recenly Added',
          href: '#'
        },
        {
          title: 'Most Popular',
          href: '#'
        }
      ],
      link: 'See More'
    }
  },
  methods: {
    sliderHandler(e) {
      this.$refs.sliderControl.scrollLeft = event.clientY + 50;
      // console.log(this.$refs.sliderControl);
    }
  }
};
</script>
<style scoped>
#first-wrapper {
  width: 100%;
}

#first-wrapper .slider {
  margin: 2.9rem 0;
}

#first-wrapper .slider .border {
  width: 90%;
  border-bottom: 1px solid #ddd;
  margin: 3rem auto 0 auto;
}

#first-wrapper .slider .text {
  margin-left: 5rem;
}

#first-wrapper .slider h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

#first-wrapper .slider .text a {
  color: inherit;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

#first-wrapper .slider .text a:hover {
  color: #613ff4;
}

@media only screen and (max-width: 580px) {
  #first-wrapper .slider .text {
    margin-left: 2rem;
  }
}
</style>
