<template>
  <section id="language">
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
  name: 'language',
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
      title: 'Language',
      button: {
        title: 'Add New Language',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Language'
      },
      header: 'Language',
      createProp: [
        {
          label: 'Language Code',
          id: 'code',
          placeholder: 'Please type a Language Code',
          type: 'text'
        },
        {
          label: 'Language Name',
          id: 'name',
          placeholder: 'Please type a Language Name',
          type: 'text'
        }
      ],
      table: {
        enabled: {
          checkbox: true,
          edit: true,
          remove: true,
          action: true
        },
        title: ['Language', 'Last Update'],
        sample: [
          {
            name: 'English',
            updated: '2020-02-19'
          },
          {
            name: 'Indonesia',
            updated: '2020-02-19'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#language {
  width: 100%;
  height: 100%;
}
</style>
