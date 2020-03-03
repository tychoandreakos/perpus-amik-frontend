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
import { mapGetters } from 'vuex';
import { masterLANGUAGE } from '../../../../store/types';

export default {
  name: 'language',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  created() {
    this.$store.commit('setCountUpdateDefault');
    this.$store.commit('setHeader', this.header);
    this.$store.commit('setCreateInput', this.createProp);
    this.$store.commit('setDefaultParams');
    this.$store.commit('setTableTypes', masterLANGUAGE);
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
      header: 'Language',
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
