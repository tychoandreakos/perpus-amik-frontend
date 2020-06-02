<template lang="pug">
  section#recycle-bin
    HeaderComponent(:title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
    h3.info {{ info }}
    PanelActionComponent(:title="dataState.title" :restore="database.content.dataCount > 0" :settings="dataState.panelAction"
    :search="dataState.search" :breadcrumbsHeader="dataState.breadcrumbs" @count="count" :total="total" :button="dataState.button")
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
      if (this.message.message) {
        this.getDestroy({
          skip: 0,
          take: 5,
        });
      }
      return this.message;
    },
    database() {
      console.log(this.view);
      return {
        ...this.dataComponent[this.titleState.toLowerCase()][1],
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
