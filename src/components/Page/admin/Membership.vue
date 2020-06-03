<template>
  <section id="membership">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <PanelActionComponent :search="search" :button="button" />
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
import PanelActionComponent from '../../UI/admin/PanelAction';
import TableComponent from '../../UI/admin/TableAdmin';

export default {
  name: 'Membership',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent,
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Membership',
      button: {
        title: 'Add New Member',
        icon: 'plus',
      },
      search: {
        placeholder: 'Search Member',
      },
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true,
        },
        title: [
          'MEMBER ID',
          'MEMBER NAME',
          'MEMBER TYPE',
          'EMAIL',
          'Last Update',
        ],
        sample: [
          {
            id: 1702018,
            name: 'Elang Indra',
            type: 'Mahasiswa',
            email: 'elangindra15@gmail.com',
            updated: '2020-02-19',
          },
          {
            id: 1702014,
            name: 'Rani Mulyani',
            type: 'Mahasiswa',
            email: 'elangindra15@gmail.com',
            updated: '2020-02-19',
          },
          {
            id: 1702015,
            name: 'Suhendri',
            type: 'Dosen',
            email: 'elangindra15@gmail.com',
            updated: '2020-02-19',
          },
          {
            id: 1702017,
            name: 'Ridwan Ganteng',
            type: 'Mahasiswa',
            email: 'elangindra15@gmail.com',
            updated: '2020-02-19',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
#membership {
  height: 100%;
  width: 100%;
}
</style>
