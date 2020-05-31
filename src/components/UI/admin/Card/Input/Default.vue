<template lang="pug">
    div.input-card
        label.label-card(:class="active ? 'active' : undefined" :for="property.id") {{ property.label }}
        div.input-wrapper
          transition(name="fade")
            label.placeholder(:style="active ? { marginLeft: '.4rem' } : undefined" :for="property.id" v-if="!checkPlaceholder") Your {{ property.placeholder }}
          input(:id="property.id" :type="property.type" v-model="placeholder" @input="$emit('input', $event.target.value)" @blur="active = false" @focus="active = true")
</template>

<script>
export default {
  name: 'DefaultInputCard',
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  computed: {
    checkPlaceholder() {
      return this.placeholder.length > 0;
    },
  },
  data() {
    return {
      placeholder: '',
      active: false,
    };
  },
};
</script>

<style lang="scss">
.input-card {
  width: 100%;
  display: flex;
  flex-direction: column;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.9s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .active {
    color: #5143eb;
  }

  .input-wrapper {
    padding: 0.4rem;
    background: #fcfcfc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    transition: border 0.4s ease-in-out;
    position: relative;

    .placeholder {
      color: rgba(98, 98, 98, 0.705);
      transition: margin-left 0.2s ease-in;
      cursor: text;
      font: {
        family: 'Poppins', sans-serif;
        size: 0.8rem;
      }
      position: absolute;
      top: 28%;
      left: 2%;
    }

    input {
      width: 100%;
      border: none;
      background: transparent;
      padding: 0.3rem;
    }

    &:focus-within {
      border: 1px solid #5143eb;
    }
  }

  .label-card {
    margin: {
      left: 0.2rem;
      bottom: 0.3rem;
    }
    text-transform: capitalize;
    font: {
      family: 'Quicksand', sans-serif;
      weight: 500;
      size: 0.9rem;
    }
  }
}
</style>
