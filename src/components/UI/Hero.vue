<template>
  <section :style="propsHero ? propsHero : heroStyle" id="hero">
    <div :style="propsPanel ? propsPanel : defaultPanel" class="panel">
      <h1 :style="propsTitle ? propsTitle : ''" v-html="propsInfo.title"></h1>
      <p v-if="propsInfo.info">{{ propsInfo.info }}</p>
      <template v-if="propsButtonEnabled">
        <Button class="btn-position" :link="propsInfo.button" />
      </template>
    </div>
  </section>
</template>
<script>
import Button from "./ButtonSimple.vue";

export default {
  name: "Hero",
  props: {
    propsTitle: {
      type: Object,
      required: false
    },
    propsPanel: {
      type: Object,
      required: false
    },
    propsButtonEnabled: {
      type: Boolean,
      required: true
    },
    propsInfo: {
      type: Object,
      required: true
    },
    propsHero: {
      type: Object,
      required: false
    }
  },
  components: {
    Button
  },
  data() {
    return {
      defaultPanel: {
        width: "55%",
        padding: "4rem",
        height: "58%"
      },

      heroStyle: {
        height: "77vh",
        background:
          "url('https://wallpapersmug.com/download/2560x1024/d00534/facade-building-architecture.jpg') center/cover no-repeat fixed"
      }
    };
  }
};
</script>
<style scoped>
#hero {
  width: 100%;
}

#hero .panel {
  background: rgba(255, 255, 255, 0.92);
  position: relative;
}

#hero .panel h1 {
  font-family: "Quicksand", sans-serif;
  font-size: 3.8rem;
  font-weight: 400;
  border-bottom: 2px solid #eb9532;
  display: inline-block;
  color: #494949;
  padding-bottom: 0.5rem;
  line-height: 85px;
  margin: 0 !important;
  letter-spacing: 2px;
}

#hero .panel p {
  margin-top: 1.9rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-size: 1rem;
}

#hero .panel .btn-position {
  position: absolute;
  right: 30px;
  bottom: 17px;
}
</style>
