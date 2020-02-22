<template>
  <section id="publisher">
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
  name: 'publisher',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Publisher',
      button: {
        title: 'Add New Publisher',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Publisher'
      },
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Publisher Name', 'Last Update'],
        sample: [
          {
            name: 'Apress',
            updated: '2020-02-19'
          },
          {
            name: 'Jhon Wiley',
            updated: '2020-02-19'
          },
          {
            name: 'OReilly',
            updated: '2020-02-19'
          },
          {
            name: 'SAMS',
            updated: '2020-02-19'
          },
          {
            name: 'Crown Publisher',
            updated: '2020-02-19'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#publisher {
  width: 100%;
  height: 100%;
}
</style>
