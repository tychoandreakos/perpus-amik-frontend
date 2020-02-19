<template>
  <section id="header">
    <h3>{{ title }}</h3>
    <BreadCrumbsComponent :breadcrumbs="breadcrumbsHeader" />
  </section>
</template>
<script>
import BreadCrumbsComponent from './Breadcrumbs';

export default {
  name: 'Header',
  props: {
    breadcrumbsHeader: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    BreadCrumbsComponent
  }
};
</script>
<style scoped>
#header {
  display: flex;
  width: 100%;
  margin-bottom: 1.8rem;
  padding-top: 0.5rem;
}

h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  margin-right: 0.8rem;
  padding-right: 0.8rem;
  border-right: 1px solid #dae1e7;
  color: #676363;
}
</style>
