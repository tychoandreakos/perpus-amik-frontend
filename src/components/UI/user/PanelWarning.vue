<template lang="pug">
    div#warning
        h1 #[Icon(:icon="message.icon")] {{ message.title }}
        span {{ message.desc }}
</template>

<script>
import Icon from "vue-themify-icons";

export default {
  name: "PanelWarning",
  components: {
    Icon,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
#warning {
  background: #ed5267;
  margin: 1rem 2rem;
  border-radius: 0.2rem;
  padding: 1.3rem 4rem;
  color: #fff;
  animation: pulse 2s infinite;

  h1 {
    font: {
      family: "Nunito", sans-serif;
      weight: 400;
      size: 1.6rem;
    }
    margin-bottom: 0.7rem;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(237, 82, 103, 0.7);
    }

    70% {
      box-shadow: 0 0 0 10px rgba(237, 82, 103, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(237, 82, 103, 0);
    }
  }
}
</style>
