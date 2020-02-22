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
  font-weight: 600;
  transition: box-shadow 0.3s ease;
}

.mini-button:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
