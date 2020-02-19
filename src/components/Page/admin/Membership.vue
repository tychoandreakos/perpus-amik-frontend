<template>
  <section id="membership">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';

export default {
  name: 'Membership',
  components: {
    HeaderComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Membership'
    };
  }
};
</script>
<style scoped></style>
