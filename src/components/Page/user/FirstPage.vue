<template>
  <section id="first-wrapper">
    <PanelComponent class="panel" />
    <div class="slider" ref="sliderControl" @click="sliderHandler">
      <template v-for="i in 10">
        <SliderComponent class="slider-user" :key="i" />
      </template>
    </div>
  </section>
</template>
<script>
import PanelComponent from "../../UI/user/Panel";
import SliderComponent from "../../UI/user/Slider";

export default {
  name: "FirstPage",
  components: {
    PanelComponent,
    SliderComponent
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
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  overflow: scroll;
  cursor: pointer;
}

#first-wrapper .slider .slider-user {
  width: 200px;
}
</style>
