<template lang="pug">
  div.panel-top-warning(:style="stylePanel")
    div(v-html="panel.title")
    div.close
        p(@click="closeHandler") #[Icon(icon="close")]
</template>

<script>
import Icon from "vue-themify-icons";
export default {
  name: "PanelTopWarning",
  components: {
    Icon,
  },
  methods: {
    closeHandler() {
      this.$emit("closeHandler", false);
    },
  },
  data() {
    return {
      panel: {
        title: "<h3 style='text-transform: capitalize'>waspada corona</h3>",
      },
      stylePanel: {
        background: `#ed5267${"b4"}`,
        marginBottom: "25px",
      },
    };
  },
};
</script>

<style lang="scss">
.panel-top-warning {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.3rem 0;
  color: #fff;

  h3 {
    font: {
      family: "Poppins", sans-serif;
      size: 0.9rem;
      weight: 500;
    }

    text-align: center;
  }

  .close p {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 3rem;
    font: {
      size: 0.9rem;
    }
    justify-content: center;
    left: 0;
    cursor: pointer;
    transition: 0.6s background ease-in;

    &:hover {
      background: #ed52678f;
    }
  }
}
</style>
