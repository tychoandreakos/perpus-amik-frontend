<template lang="pug">
  section#gmd(:class="loading ? 'blur' : ''")
    HeaderComponent(:title="dataState.title" :breadcrumbsHeader="dataState.breadcrumbs")
    PanelActionComponent(:title="dataState.title" :settings="dataState.panelAction"
    :search="dataState.search" :breadcrumbsHeader="dataState.breadcrumbs" @count="count" :total="total" :button="dataState.button")
    TableComponent(:tableProps="database" delete="we dont")
    span(style="visibility: hidden") {{ update }}
  
</template>
<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/TableAdmin';

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { gmdState } from './dataComponent';
import { masterGMD } from '../../../../store/types';
import {
  getGMD,
  getType,
  postGMD,
  messageGMD,
  loadingBackdrop,
  updateOrEditGmd,
  cleanCheckBox,
  titleComponent,
  dataComponent,
} from '../../../../store/module/API/type';

export default {
  name: 'GMD',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      if (from.name != 'gmd.update') {
        vm.cleanCheckBox();
      }

      switch (vm.$route.name) {
        case 'gmd':
          vm.titleComponent('GMD');
          break;

        case 'author':
          vm.titleComponent('Author');
          break;

        case 'publisher':
          vm.titleComponent('Publisher');
          break;

        default:
          console.log('not set');
          break;
      }
    });
  },
  computed: {
    ...mapState(['resultInput']),
    ...mapGetters({
      view: getGMD,
      message: messageGMD,
      loading: loadingBackdrop,
      dataComponent: dataComponent,
      titleState: titleComponent,
    }),
    dataState() {
      return this.dataComponent[this.$route.path.split('/')[3]][0];
    },
    update() {
      if (this.message.message) {
        this[getGMD]({
          skip: 0,
          take: 5,
        });
      }
      return this.message;
    },
    database() {
      return {
        ...this.dataComponent[this.$route.path.split('/')[3]][1],
        content: this.view.result,
      };
    },
    total() {
      return this.database.content.dataCount || 0;
    },
  },
  methods: {
    ...mapMutations([
      'setCountUpdateDefault',
      'setHeader',
      'setCreateInput',
      'setDefaultParams',
      'setTableTypes',
      'setGetUpdate',
      'setClearEditProps',
      getType,
    ]),
    ...mapMutations({
      updateOrEditGmd: updateOrEditGmd,
      cleanCheckBox: cleanCheckBox,
      titleComponent: titleComponent,
    }),
    ...mapActions(['getGmd', getGMD]),
    count(e) {
      this[getGMD]({
        skip: e,
        take: 5,
      });
    },
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.dataState.button.title);
    this.setCreateInput(this.dataState.createProp);
    this.updateOrEditGmd(this.dataState.createProp);
    this.setDefaultParams();
    // this.setGetUpdate(masterGMD);
    // this.setTableTypes(masterGMD);
    this[getType](postGMD); // setting the title or type to GMD
    this.setClearEditProps();
    //get data from API
    this[getGMD]({
      skip: 0,
      take: 5,
    });
  },
};
</script>
<style lang="scss">
#gmd {
  width: 100%;
  height: 100%;

  &.blur {
    filter: blur(3px);
  }
}
</style>
