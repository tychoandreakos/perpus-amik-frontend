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

export default {
  name: 'place',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
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
      table: {
        title: ['Collection Type', 'Last Update'],
        sample: [
          {
            name: 'Fiction',
            updated: '2020-02-19'
          },
          {
            name: 'Reference',
            updated: '2020-02-19'
          },
          {
            name: 'Textbook',
            updated: '2020-02-19'
          }
        ]
      }
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
