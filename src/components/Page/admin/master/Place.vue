<template>
  <section id="place">
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
import { masterPLACE } from '../../../../store/types';

export default {
  name: 'place',
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
      'setTableTypes'
    ])
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.header);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterGMD);
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Place',
      button: {
        title: 'Add New Place',
        icon: 'plus'
      },
      header: 'Place',
      createProp: [
        {
          label: 'Place Name',
          id: 'name',
          placeholder: 'Please type a Place Name',
          type: 'text'
        }
      ],
      search: {
        placeholder: 'Search Place'
      }
    };
  }
};
</script>
<style scoped>
#place {
  width: 100%;
  height: 100%;
}
</style>
