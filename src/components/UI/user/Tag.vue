<template lang="pug">
  div#tag
    Icon(:icon="icon") 
    span {{ tag | capitalize }}
</template>

<script>
import Icon from "vue-themify-icons";
export default {
  name: "Tag",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
#tag {
  color: #613ff4;
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  font: {
    family: "Poppins", sans-serif;
    weight: 500;
  }

  i {
    margin-right: 0.3rem;
  }
}
</style>
