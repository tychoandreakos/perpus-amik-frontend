<template>
  <section :class="['checkbox', check ? 'checkbox--clicked' : '']">
    <Icon v-if="check" icon="check" />
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'Checkbox',
  props: {
    check: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>
<style lang="scss">
.checkbox {
  width: 17.5px;
  height: 17.5px;
  border: 2px solid #b4b4b4;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  transition: border-color 0.4s ease, transform 0.3s ease,
    background 0.2s ease-in;

  &:hover {
    border-color: #888;
  }

  &--clicked {
    background: #7367f0 !important;
    color: #fff;
    border: none;
    transform: rotate(90deg);

    &:hover {
      border: none;
    }
  }

  i {
    font-size: 0.7rem;
    font-weight: bold;
    transform: rotate(-90deg);
  }
}
</style>
