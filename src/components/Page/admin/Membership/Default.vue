<template lang="pug">
    div#membership
        Header(:envState="true" :title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
        PanelAction(:title="dataState.title" :settings="dataState.PanelAction" :search="dataState.search" :breadcrumbsHeader="dataState.breadcrumbs" @count="count" :total="total" :button="dataState.button")
        ThumbnailTable(:tableProps="database")
</template>

<script>
import ThumbnailTable from '../../../UI/admin/ThumbnailTable/Default';
import Header from '../../../UI/admin/Header';
import PanelAction from '../../../UI/admin/PanelAction';

import { getGMD } from '../../../../store/module/API/type';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Membership',
  components: {
    ThumbnailTable,
    Header,
    PanelAction,
  },
  created() {
    this.getData({
      skip: 0,
      take: 5,
    });
  },
  computed: {
    ...mapGetters({
      getMember: getGMD,
    }),
    database() {
      if (!Array.isArray(this.getMember.result)) {
        return {
          // ...this.dataComponent[this.titleState.toLowerCase()][1],
          content: this.getMember.result,
        };
      }

      return false;
    },
    total() {
      return 5;
    },
  },
  methods: {
    ...mapActions({
      getData: getGMD,
    }),
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
          title: 'Add New Membership',
          icon: 'plus',
          type: 'membership',
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
