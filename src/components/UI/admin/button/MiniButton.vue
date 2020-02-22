<template>
  <button :style="btn.style" class="mini-button">
    {{ btn.title }}
  </button>
</template>
<script>
export default {
  name: 'miniButton',
  props: {
    btn: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.mini-button {
  color: #fff;
  border: none;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
