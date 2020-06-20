<template lang="pug">
    div#insert-data
        Header(:title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
        Form(:dataEdit="Array.isArray(update.result) ? undefined : update.result")
</template>

<script>
import Header from '../../../UI/admin/Header';
import Form from '../../../UI/admin/ThumbnailTable/Insert';

import { updateMemberData } from '../../../../store/module/API/type';
import { mapGetters } from 'vuex';

export default {
  name: 'InsertMembership',
  components: {
    Header,
    Form,
  },
  computed: {
    ...mapGetters({
      update: updateMemberData,
    }),
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
