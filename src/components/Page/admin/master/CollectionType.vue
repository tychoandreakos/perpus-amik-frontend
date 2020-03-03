<template>
  <section id="collection-type">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <PanelActionComponent :search="search" :button="button" />
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../../UI/admin/Header';
import PanelActionComponent from '../../../UI/admin/PanelAction';
import TableComponent from '../../../UI/admin/TableAdmin';
import { mapMutations, mapGetters } from 'vuex';
import { masterCOLLECTION } from '../../../../store/types';

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
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.header);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterCOLLECTION);
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
  data() {
    return {
      enabled: {
        checkbox: true,
        edit: true,
        remove: true,
        action: true
      },
      breadcrumbs: ['Data List'],
      title: 'Collection',
      button: {
        title: 'Add New Collection',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Collection'
      },
      header: 'Collection Type',
      createProp: [
        {
          label: 'Collection Type',
          id: 'type',
          placeholder: 'Please type a Collection Type',
          type: 'text'
        }
      ]
    };
  }
};
</script>
<style scoped>
#collection-type {
  width: 100%;
  height: 100%;
}
</style>
