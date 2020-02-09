<template>
  <section id="first-wrapper">
    <PanelComponent class="panel" />
    <Test class="slider" />
  </section>
</template>
<script>
import PanelComponent from "../../UI/user/Panel";
import Test from "../../UI/user/Test";

export default {
  name: "FirstPage",
  components: {
    PanelComponent,
    Test
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
</style>
