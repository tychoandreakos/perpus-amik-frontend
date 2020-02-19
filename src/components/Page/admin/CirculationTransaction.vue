<template>
  <section id="circulation-transaction">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
export default {
  name: 'CirculationTransaction',
  components: {
    HeaderComponent
  },
  data() {
    return {
      breadcrumbs: ['1702018 - Elang Indra'],
      title: 'Circulation'
    };
  }
};
</script>
<style scoped></style>
