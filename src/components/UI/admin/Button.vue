<template>
  <button class="btn">
    <Icon :icon="buttonProp.icon" />
    <span>{{ buttonProp.title }}</span>
  </button>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    buttonProp: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.btn {
  padding: 0.7rem 1rem;
  background: none;
  border: 1px solid #7367f0;
  color: #7367f0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  display: flex;
  font-size: 0.83rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.7rem;
  cursor: pointer;
  position: relative;
  transition: background 0.4s ease;
}

.btn:hover {
  background: #7367f0;
  color: #fff;
}

.btn i {
  margin-right: 0.7rem;
}
</style>
