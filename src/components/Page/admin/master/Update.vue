<template lang="pug">
  section#update
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    CardComponent
</template>

<script>
import HeaderComponent from '../../../UI/admin/Header';
import CardComponent from '../../../UI/admin/Card/Default';

export default {
  name: 'Update',
  components: {
    HeaderComponent,
    CardComponent,
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Edit / Update GMD',
    };
  },
};
</script>

<style lang="scss"></style>
