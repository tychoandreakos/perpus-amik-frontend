<template lang="pug">
  section#first-wrapper
    PanelComponent.panel
    PanelWarning(v-if="activePanel" :message="messagePanel")
    div.slider(v-for="(info, i) in slider" :key="i")
      div.text
        h3 {{ info.title }}
        span {{ info.desc }}
        a(:href="info.href") {{ link }}
      Test
      div.border
    FooterComponent
</template>

<script>
import PanelComponent from "../../UI/user/Panel";
import Test from "../../UI/user/Test";
import FooterComponent from "../../UI/user/Footer";
import PanelWarning from "../../UI/user/PanelWarning";

export default {
  name: "FirstPage",
  components: {
    PanelComponent,
    Test,
    FooterComponent,
    PanelWarning,
  },
  data() {
    return {
      messagePanel: {
        title: "Waspada Korona",
        icon: 'alert',
        desc: "Penyakit coronavirus (COVID-19) adalah penyakit menular yang disebabkan oleh virus jenis baru yang belum pernah teridentifikasi pada manusia."
      },
      activePanel: true,
      slider: [
        {
          title: "Recommended for You",
          desc: "Based on your history, we think you'll like these titles.",
          href: "#",
        },
        {
          title: "Recenly Added",
          desc: "Understand what's happening now—prepare for what's next",
          href: "#",
        },
        {
          title: "Trending",
          desc: "These titles and classes are our most popular for a reason.",
          href: "#",
        },
      ],
      link: "See More",
    };
  },
  methods: {
    sliderHandler(e) {
      this.$refs.sliderControl.scrollLeft = event.clientY + 50;
      // console.log(this.$refs.sliderControl);
    },
  },
};
</script>
<style lang="scss">
#first-wrapper {
  // $font-size: 600px;
  // @mixin weight {
  //   font-weight: 500;
  // }

  width: 100%;

  .slider {
    margin: 2.9rem 0;

    .border {
      width: 90%;
      border-bottom: 1px solid #ddd;
      margin: 3rem auto 0 auto;
    }

    .text {
      margin-left: 5rem;

      a {
        color: inherit;
        font: {
          family: "Quicksand", sans-serif;
          weight: 500;
        }

        &:hover {
          color: #613ff4;
        }
      }

      span {
        margin: {
          top: 0.2rem;
          bottom: 0.5rem;
        }
        display: block;
        font-weight: 500;
      }

      h3 {
        font: {
          family: "Poppins", sans-serif;
          weight: 400;
          size: 1.6rem;
        }
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .slider .text {
      margin-left: 2rem;
    }
  }
}
</style>
