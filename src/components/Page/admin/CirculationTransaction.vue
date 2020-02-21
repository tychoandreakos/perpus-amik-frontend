<template>
  <section id="circulation-transaction"></section>
</template>
<script>
export default {
  name: 'CirculationTransaction',
  components: {},
  mounted() {
    this.$store.commit('setCirculation', {
      title: this.title,
      breadcrumbs: this.breadcrumbs
    });
  },
  data() {
    return {
      breadcrumbs: ['Search Member ID', '1702018 - Elang Indra'],
      title: 'Circulation'
    };
  }
};
</script>
<style scoped></style>
