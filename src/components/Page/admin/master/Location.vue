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

export default {
  name: 'location',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  computed: {
    table() {
      return this.$store.state.tableMaster.location;
    }
  },
  watch: {
    table(newVal) {
      return newVal;
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
      title: 'Location',
      button: {
        title: 'Add New Location',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Location'
      },
      header: 'Location',
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
