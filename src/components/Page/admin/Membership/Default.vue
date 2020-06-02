<template lang="pug">
    div#membership
        Header(:title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
        PanelAction(:title="dataState.title" :settings="dataState.PanelAction" :search="dataState.search" :breadcrumbsHeader="dataState.breadcrumbs" @count="count" :total="total" :button="dataState.button")
        ThumbnailTable
</template>

<script>
import ThumbnailTable from '../../../UI/admin/ThumbnailTable/Default';
import Header from '../../../UI/admin/Header';
import PanelAction from '../../../UI/admin/PanelAction';

export default {
  name: 'Membership',
  components: {
    ThumbnailTable,
    Header,
    PanelAction,
  },
  computed: {
    total() {
      return 5;
    },
  },
  methods: {
    count(e) {},
  },
  data() {
    return {
      dataState: {
        title: 'Membership',
        breadcrumbs: ['data list'],
        PanelAction: {
          detail: false,
          edit: true,
          delete: true,
          recycle: true,
          setting: true,
          destroy: false,
          restore: false,
          restoreAll: false,
        },
        search: {
          placeholder: 'Search Member',
        },
        button: {
          purpose: 'member',
          title: 'Add New Membership',
          icon: 'plus',
          type: 'add',
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
