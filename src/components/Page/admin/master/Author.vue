<template>
  <section id="author">
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

import { masterAUTHOR } from '../../../../store/types';

export default {
  name: 'Author',
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
    this.setTableTypes(masterAUTHOR);
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Author',
      button: {
        title: 'Add New Author',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Author'
      },
      header: 'Author',
      createProp: [
        {
          label: 'Author Name',
          id: 'name',
          placeholder: 'Please type a Author Name',
          type: 'text'
        }
      ]
    };
  }
};
</script>
<style scoped>
#author {
  width: 100%;
  height: 100%;
}
</style>
