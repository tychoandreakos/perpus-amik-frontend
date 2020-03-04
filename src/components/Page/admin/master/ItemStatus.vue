<template>
  <section id="item-status">
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
import { masterITEM } from '../../../../store/types';

export default {
  name: 'itemStatus',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setSelectedDropdown(this.selected);
    this.setDefaultParams();
    this.setTableTypes(masterITEM);
    this.setDropdownChoice({
      name: this.selected
    });
    this.setSelectedDropdown({
      name: this.selected
    });
    this.setGetUpdate(masterITEM);
    this.setClearEditProps();
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
      'setSelectedDropdown',
      'setDefaultParams',
      'setTableTypes',
      'setDropdownChoice',
      'setSelectedDropdown',
      'setGetUpdate',
      'setClearUpdateProps'
    ])
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Item Status',
      button: {
        title: 'Add New Item Status',
        icon: 'plus'
      },
      selected: 'Missing',
      createProp: [
        {
          label: 'Item Status Code',
          id: 'code',
          placeholder: 'Please type a Status Code of Item',
          type: 'text'
        },
        {
          label: 'Item Status Name',
          id: 'name',
          dropdown: true,
          dropdownList: ['Missing', 'No Loan', 'Repair']
        }
      ],
      search: {
        placeholder: 'Search Item Status'
      }
    };
  }
};
</script>
<style scoped>
#item-status {
  width: 100%;
  height: 100%;
}
</style>
