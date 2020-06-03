<template lang="pug">
    div#insert-data
        Header(:title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
        Form
</template>

<script>
import Header from '../../../UI/admin/Header';
import Form from '../../../UI/admin/ThumbnailTable/Insert';

export default {
  name: 'InsertMembership',
  components: {
    Header,
    Form,
  },
  data() {
    return {
      dataState: {
        title: 'Add New Membership',
        breadcrumbs: ['membership', 'insert data'],
      },
    };
  },
};
</script>

<style lang="scss">
#insert-data {
  width: 100%;
}
</style>
