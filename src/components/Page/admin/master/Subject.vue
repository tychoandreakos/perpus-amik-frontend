<template>
  <section id="subject">
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
  name: 'Subject',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  created() {
    this.$store.commit('setCountUpdateDefault');
    this.$store.commit('setHeader', this.header);
    this.$store.commit('setCreateInput', this.createProp);
    this.$store.commit('setSelectedDropdown', this.selected);
    this.$store.commit('setDefaultParams');
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Subject',
      button: {
        title: 'Add New Subject',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Subject'
      },
      header: 'Subject',
      selected: 'Topic',
      createProp: [
        {
          label: 'Subject',
          id: 'subject',
          placeholder: 'Please type a Subject',
          type: 'text'
        },
        {
          label: 'Subject Type',
          id: 'stype',
          dropdown: true,
          dropdownList: [
            'Topic',
            'Geographic',
            'Name',
            'Temporal',
            'Genre',
            'Ocuppation'
          ]
        }
      ],
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Subject Name', 'Subject Type', 'Last Update'],
        sample: [
          {
            name: 'Computer',
            type: 'Topic',
            updated: '2020-02-19'
          },
          {
            name: 'Database',
            type: 'Topic',
            updated: '2020-02-19'
          },
          {
            name: 'Corruption',
            type: 'Topic',
            updated: '2020-02-19'
          },
          {
            name: 'Design',
            type: 'Topic',
            updated: '2020-02-19'
          },
          {
            name: 'Development',
            type: 'Topic',
            updated: '2020-02-19'
          },
          {
            name: 'Information',
            type: 'Topic',
            updated: '2020-02-19'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#subject {
  width: 100%;
  height: 100%;
}
</style>
