<template>
  <section :style="cardProperties" class="card-admin">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'CardAdmin',
  props: {
    cardProperties: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.card-admin {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  box-shadow: 0 7px 25px #e9e9e9;
  font-family: 'Poppins', sans-serif;
}
</style>
