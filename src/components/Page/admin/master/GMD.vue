<template lang="pug">
  section#gmd(:class="loading ? 'blur' : ''")
    HeaderComponent(:title="title" :breadcrumbsHeader="breadcrumbs")
    PanelActionComponent(:title="title" :settings="panelAction"
    :search="search" :breadcrumbsHeader="breadcrumbs" @count="count" :total="total" :button="button")
    TableComponent(:tableProps="database" delete="we dont")
    span(style="visibility: hidden") {{ update }}
  
</template>
<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/TableAdmin';

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
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
} from '../../../../store/module/API/type';

export default {
  name: 'GMD',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  beforeRouteEnter: (to, from, next) => {
    // console.log('from', from);
    next((vm) => {
      if (from.name != 'gmd.update') {
        vm.cleanCheckBox();
      }
    });
  },
  computed: {
    ...mapState(['resultInput']),
    ...mapGetters({
      view: getGMD,
      message: messageGMD,
      loading: loadingBackdrop,
    }),
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
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
          retrieve: false,
          destroy: false,
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
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.updateOrEditGmd(this.createProp);
    this.setDefaultParams();
    this.titleComponent('GMD');
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
  data() {
    return {
      panelAction: {
        detail: false,
        edit: true,
        delete: true,
        recycle: true,
        setting: true,
        destroy: false,
        restore: false,
        restoreAll: false,
      },
      breadcrumbs: ['Data List'],
      title: 'GMD ( General Material Designation )',
      button: {
        title: 'Add New GMD',
        icon: 'plus',
        type: 'add',
      },
      createProp: [
        {
          label: 'GMD Code',
          id: 'gmd_code',
          placeholder: 'Please type a GMD Code',
          type: 'text',
        },
        {
          label: 'GMD Name',
          id: 'gmd_name',
          placeholder: 'Please type a GMD Name',
          type: 'text',
        },
      ],
      search: {
        placeholder: 'Search GMD',
      },
    };
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
