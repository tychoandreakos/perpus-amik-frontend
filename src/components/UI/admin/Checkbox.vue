<template>
  <section
    :class="['checkbox', checkbox ? 'checkbox--clicked' : '']"
    @click="checkbox = !checkbox"
  >
    <Icon v-if="checkbox" icon="check" />
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'Checkbox',
  props: {
    checkbox: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Icon
  }
};
</script>
<style scoped>
.checkbox {
  width: 15px;
  height: 15px;
  border: 2px solid #b4b4b4;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  transition: transform 0.3s ease, background 0.2s ease-in;
}

.checkbox--clicked {
  background: #28c76f !important;
  color: #fff;
  border: none;
  transform: rotate(90deg);
}

.checkbox i {
  font-size: 0.7rem;
  font-weight: bold;
  transform: rotate(-90deg);
}
</style>
