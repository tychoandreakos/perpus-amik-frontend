<template>
  <section id="language">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <PanelActionComponent :search="search" :button="button" />
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/TableAdmin';
import { mapGetters, mapMutations } from 'vuex';
import { masterLANGUAGE } from '../../../../store/types';

export default {
  name: 'language',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  methods: {
    ...mapMutations([
      'setCountUpdateDefault',
      'setHeader',
      'setCreateInput',
      'setDefaultParams',
      'setTableTypes',
      'setGetUpdate',
      'setClearUpdateProps'
    ])
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterLANGUAGE);
    this.setGetUpdate(masterLANGUAGE);
    this.setClearEditProps();
  },
  computed: {
    ...mapGetters({
      table: 'table'
    })
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Language',
      button: {
        title: 'Add New Language',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Language'
      },
      createProp: [
        {
          label: 'Language Name',
          id: 'name',
          placeholder: 'Please type a Language Name',
          type: 'text'
        }
      ]
    };
  }
};
</script>
<style scoped>
#language {
  width: 100%;
  height: 100%;
}
</style>
