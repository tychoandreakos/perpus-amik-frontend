<template lang="pug">
  section#navbar-alternate
    h3 {{ title }}
</template>
<script>
export default {
  name: "NavbarAlternate",
  data() {
    return {
      title: "Manisku Library",
    };
  },
};
</script>
<style scoped>
#navbar-alternate {
  height: 30px;
  background: #613ff4;
  width: 100%;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
}

#navbar-alternate h3 {
  font-size: 0.84rem;
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.1px;
}
</style>
