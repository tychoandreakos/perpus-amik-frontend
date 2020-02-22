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
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Location Code', 'Location Name', 'Last Update'],
        sample: [
          {
            code: 'SL',
            name: 'Manisku Library',
            updated: '2020-02-19'
          },
          {
            code: 'XL',
            name: 'Manisku Library',
            updated: '2020-02-19'
          },
          {
            code: 'AB',
            name: 'Manisku Library',
            updated: '2020-02-19'
          }
        ]
      }
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
