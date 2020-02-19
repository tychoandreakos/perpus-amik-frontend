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

export default {
  name: 'itemStatus',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Item Status',
      button: {
        title: 'Add New Item Status',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Item Status'
      },
      table: {
        title: ['Item Status Code', 'Item Status Name', 'Last Update'],
        sample: [
          {
            code: 'MIS',
            name: 'Missing',
            updated: '2020-02-19'
          },
          {
            code: 'NL',
            name: 'No Loan',
            updated: '2020-02-19'
          },
          {
            code: 'R',
            name: 'Repair',
            updated: '2020-02-19'
          }
        ]
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
