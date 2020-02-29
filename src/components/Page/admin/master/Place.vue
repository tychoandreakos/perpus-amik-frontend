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

export default {
  name: 'place',
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
        },
      ],
      search: {
        placeholder: 'Search Place'
      },
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Place Name', 'Last Update'],
        sample: [
          {
            name: 'Indianapolis',
            updated: '2020-02-19'
          },
          {
            name: 'London',
            updated: '2020-02-19'
          },
          {
            name: 'New York',
            updated: '2020-02-19'
          }
        ]
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
