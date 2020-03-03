<template>
  <section id="subject">
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
import { masterSUBJECT } from '../../../../store/types';

export default {
  name: 'Subject',
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
      'setDropdownChoice',
      'setSelectedDropdown'
    ])
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterSUBJECT);
    this.setDropdownChoice({
      type: this.selected
    });
    this.setSelectedDropdown({
      type: this.selected
    });
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Subject',
      button: {
        title: 'Add New Subject',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Subject'
      },
      selected: 'Topic',
      createProp: [
        {
          label: 'Subject',
          id: 'subject',
          placeholder: 'Please type a Subject',
          type: 'text'
        },
        {
          label: 'Subject Type',
          id: 'type',
          dropdown: true,
          dropdownList: [
            'Topic',
            'Geographic',
            'Name',
            'Temporal',
            'Genre',
            'Ocuppation'
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
#subject {
  width: 100%;
  height: 100%;
}
</style>
