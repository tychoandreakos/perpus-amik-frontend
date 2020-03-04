<template>
  <section id="gmd">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <PanelActionComponent :search="search" :button="button" />
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/TableAdmin';
import { mapState, mapGetters, mapMutations } from 'vuex';

import { masterGMD } from '../../../../store/types';

export default {
  name: 'GMD',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  computed: {
    ...mapState(['resultInput']),
    ...mapGetters({
      table: 'table'
    })
  },
  watch: {
    table(newVal) {
      return newVal;
    }
  },
  methods: {
    ...mapMutations([
      'setCountUpdateDefault',
      'setHeader',
      'setCreateInput',
      'setDefaultParams',
      'setTableTypes',
      'setGetUpdate',
      'setClearEditProps'
    ])
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterGMD);
    this.setGetUpdate(masterGMD);
    this.setClearEditProps();
  },

  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'GMD ( General Material Designation )',
      button: {
        title: 'Add New GMD',
        icon: 'plus'
      },
      createProp: [
        {
          label: 'GMD Code',
          id: 'code',
          placeholder: 'Please type a GMD Code',
          type: 'text'
        },
        {
          label: 'GMD Name',
          id: 'name',
          placeholder: 'Please type a GMD Name',
          type: 'text'
        }
      ],
      search: {
        placeholder: 'Search GMD'
      }
    };
  }
};
</script>
<style scoped>
#gmd {
  width: 100%;
  height: 100%;
}
</style>
