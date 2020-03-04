<template>
  <section id="location">
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
import { masterLOCATION } from '../../../../store/types';

export default {
  name: 'location',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  computed: {
    ...mapGetters({
      table: 'table'
    })
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
    this.setTableTypes(masterLOCATION);
    this.setGetUpdate(masterLOCATION);
    this.setClearEditProps();
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Location',
      button: {
        title: 'Add New Location',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Location'
      },
      createProp: [
        {
          label: 'Location Code',
          id: 'code',
          placeholder: 'Please type a Location Code',
          type: 'text'
        },
        {
          label: 'Location Name',
          id: 'name',
          placeholder: 'Please type a Location Name',
          type: 'text'
        }
      ]
    };
  }
};
</script>
<style scoped>
#location {
  width: 100%;
  height: 100%;
}
</style>
