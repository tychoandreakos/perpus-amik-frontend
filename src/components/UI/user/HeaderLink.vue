<template lang="pug">
    a.link-title(:href="href") {{ title | capitalize }}
</template>
<script>
export default {
  name: "HeaderLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.link-title {
  text-decoration: none;
  color: inherit;
  display: block;
  font: {
    family: "Nunito", sans-serif;
    weight: 400;
    size: 1.2rem;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
