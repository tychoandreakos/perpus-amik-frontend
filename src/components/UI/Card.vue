<template lang="pug">
  div#card-box
    h3(:style="fontSize") {{ title }}
    span {{ description }}
    Button(:style="{ float: 'right' }" :link="button")
</template>
<script>
import Button from "./ButtonSimple";

export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    button: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
#card-box {
  background: #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  font-family: "Quicksand", sans-serif;
  overflow: auto;
}

#card-box h3 {
  font-size: 1.8rem;
  font-weight: 400;
  width: 80%;
}

#card-box span {
  display: block;
  margin: 0.4rem 0 1.5rem 0;
}
</style>
