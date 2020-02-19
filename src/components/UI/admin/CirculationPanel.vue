<template>
  <section id="circulation-panel">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'CirculationPanel'
};
</script>
<style scoped>
#circulation-panel {
  width: 100%;
  height: 65%;
  background: url('https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/cover.21a4037c.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
