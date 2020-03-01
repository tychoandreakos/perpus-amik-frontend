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
  computed: {
    table() {
      return this.$store.state.tableMaster.subject;
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
    this.$store.commit('setSelectedDropdown', {
      type: this.selected
    });
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
          id: 'type',
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
      ]
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
