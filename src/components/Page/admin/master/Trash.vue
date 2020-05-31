<template lang="pug">
  section#recycle-bin
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    h3.info {{ info }}
    TableComponent(:tableProps="database" delete="we dont")
    //- span(style="visibility: hidden") {{ update }}
</template>

<script>
import HeaderComponent from '../../../UI/admin/Header';
import TableComponent from '../../../UI/admin/TableAdmin';

import { mapGetters, mapActions } from 'vuex';

import { loadingBackdrop, getDestroy } from '../../../../store/module/API/type';

export default {
  name: 'RecyleBin',
  components: {
    HeaderComponent,
    TableComponent,
  },
  computed: {
    ...mapGetters({
      view: getDestroy,
      loading: loadingBackdrop,
    }),
    database() {
      return {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: ['GMD CODE', 'GMD NAME', 'Last Update'],
        field: ['gmd_code', 'gmd_name', 'updated_at'],
        content: this.view.result,
      };
    },
    total() {
      return this.database.content.dataCount || 0;
    },
  },
  methods: {
    ...mapActions({
      getDestroy: getDestroy,
    }),
  },
  created() {
    this.getDestroy({
      skip: 0,
      take: 10,
    });
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Recycle Bin',
      info:
        'Themify Icons is a complete set of icons for use in web design and apps, consisting of 320+ pixel-perfect, hand-crafted icons that draw inspiration from Apple iOS 7 - available to the public.',
    };
  },
};
</script>

<style lang="scss">
#recycle-bin {
  .info {
    font: {
      weight: 400;
      size: 0.9rem;
    }
  }
}
</style>
