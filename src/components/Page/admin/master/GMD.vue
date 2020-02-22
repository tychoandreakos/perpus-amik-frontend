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

export default {
  name: 'GMD',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'GMD ( General Material Designation )',
      button: {
        title: 'Add New GMD',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search GMD'
      },
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['GMD CODE', 'GMD NAME', 'Last Update'],
        sample: [
          {
            code: 'AR',
            name: 'Art Original',
            updated: '2020-02-19'
          },
          {
            code: 'CA',
            name: 'Cartongraphic Material',
            updated: '2020-02-19'
          },
          {
            code: 'CD',
            name: 'CD-ROM',
            updated: '2020-02-19'
          },
          {
            code: 'CH',
            name: 'Chart',
            updated: '2020-02-19'
          }
        ]
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
