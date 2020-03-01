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
import { mapState } from 'vuex';

export default {
  name: 'GMD',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  computed: {
    ...mapState(['resultInput']),
    table() {
      return this.$store.state.tableMaster.gmd;
    }
  },
  created() {
    this.$store.commit('setCountUpdateDefault');
    this.$store.commit('setHeader', this.header);
    this.$store.commit('setCreateInput', this.createProp);
    this.$store.commit('setDefaultParams');
  },

  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'GMD ( General Material Designation )',
      button: {
        title: 'Add New GMD',
        icon: 'plus'
      },
      header: 'GMD',
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
