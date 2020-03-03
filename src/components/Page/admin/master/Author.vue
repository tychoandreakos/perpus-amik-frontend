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
import { mapGetters } from 'vuex';

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
  created() {
    this.$store.commit('setCountUpdateDefault');
    this.$store.commit('setHeader', this.header);
    this.$store.commit('setCreateInput', this.createProp);
    this.$store.commit('setDefaultParams');
    this.$store.commit('setTableTypes', masterAUTHOR);
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
