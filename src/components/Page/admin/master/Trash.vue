<template lang="pug">
  section#recycle-bin
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    h3.info {{ info }}
    PanelActionComponent(:title="title" :settings="panelAction"
    :search="search" :breadcrumbsHeader="breadcrumbs" @count="count" :total="total" :button="button")
    TableComponent(:tableProps="database" :disabledCheck="true" delete="we dont")
    span(style="visibility: hidden") {{ update }}
</template>

<script>
import HeaderComponent from '../../../UI/admin/Header';
import TableComponent from '../../../UI/admin/TableAdmin';
import PanelActionComponent from '../../../UI/admin/PanelAction';

import { mapGetters, mapActions } from 'vuex';

import {
  loadingBackdrop,
  getDestroy,
  messageGMD,
} from '../../../../store/module/API/type';

export default {
  name: 'RecyleBin',
  components: {
    HeaderComponent,
    TableComponent,
    PanelActionComponent,
  },
  computed: {
    ...mapGetters({
      view: getDestroy,
      loading: loadingBackdrop,
      message: messageGMD,
    }),
    update() {
      if (this.message.message) {
        this.getDestroy({
          skip: 0,
          take: 5,
        });
      }
      return this.message;
    },
    database() {
      return {
        enabled: {
          checkbox: true,
          edit: false,
          remove: true,
          action: true,
          retrieve: true,
          destroy: true,
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
    count(e) {
      this.getDestroy({
        skip: e,
        take: 5,
      });
    },
  },
  created() {
    this.getDestroy({
      skip: 0,
      take: 10,
    });
  },
  data() {
    return {
      panelAction: {
        detail: false,
        edit: false,
        delete: false,
        recycle: false,
        setting: true,
        destroy: true,
        restore: true,
        restoreAll: true,
      },
      breadcrumbs: ['Data List'],
      title: 'Recycle Bin',
      button: {
        title: 'Clean / Delete All Data',
        icon: 'trash',
        type: 'delete',
      },
      search: {
        placeholder: 'Search GMD',
      },
      info:
        'Themify Icons is a complete set of icons for use in web design and apps, consisting of 320+ pixel-perfect, hand-crafted icons that draw inspiration from Apple iOS 7 - available to the public.',
    };
  },
};
</script>

<style lang="scss">
#recycle-bin {
  .info {
    margin-bottom: 1rem;
    font: {
      weight: 400;
      size: 0.9rem;
    }
  }
}
</style>
