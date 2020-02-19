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
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 10px 25px #e9e9e9;
  flex-direction: column;
  border-radius: 15px;
}
</style>
