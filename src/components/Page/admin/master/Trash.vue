<template lang="pug">
  section#recycle-bin
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    h3.info {{ info }}
    PanelActionComponent(:title="title" :restore="database.content.dataCount > 0" :settings="panelAction"
    :search="dataState.search" :breadcrumbsHeader="breadcrumbs" @count="count" :total="total" :button="button")
    TableComponent(:tableProps="database" :disabledCheck="true" delete="we dont")
    //- span() {{ update }}
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
  dataComponent,
  titleComponent,
} from '../../../../store/module/API/type';

export default {
  name: 'RecyleBin',
  components: {
    HeaderComponent,
    TableComponent,
    PanelActionComponent,
  },

  watch: {
    stateTitle() {
      this.getDestroy({
        skip: 0,
        take: 5,
      });
    },
    update() {
      this.getDestroy({
        skip: 0,
        take: 5,
      });
    },
  },
  computed: {
    ...mapGetters({
      view: getDestroy,
      loading: loadingBackdrop,
      message: messageGMD,
      dataComponent: dataComponent,
      titleState: titleComponent,
    }),
    stateTitle() {
      return this.titleState;
    },
    dataState() {
      return this.dataComponent[this.titleState.toLowerCase()][0];
    },
    update() {
      return this.message.message;
    },
    database() {
      return {
        ...this.dataComponent[this.titleState.toLowerCase()][1],
        enabled: {
          checkbox: true,
          edit: false,
          remove: true,
          action: true,
          retrieve: true,
          destroy: true,
        },
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
    if (!this.titleState) {
      this.$router.push({
        name: 'gmd',
      });
    }
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
