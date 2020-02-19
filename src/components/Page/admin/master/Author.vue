<template>
  <section id="author">
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
  name: 'Author',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Author',
      button: {
        title: 'Add New Author',
        icon: 'plus'
      },
      search: {
        placeholder: 'Search Author'
      },
      table: {
        title: ['Author Name', 'Last Update'],
        sample: [
          {
            name: 'Valade, Janet',
            updated: '2020-02-19'
          },
          {
            name: 'Rosen, Richart',
            updated: '2020-02-19'
          },
          {
            name: 'Woychowsky, Edmond',
            updated: '2020-02-19'
          },
          {
            name: 'Taylor, Arlene G.',
            updated: '2020-02-19'
          },
          {
            name: 'Stueart, Robert D.',
            updated: '2020-02-19'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#author {
  width: 100%;
  height: 100%;
}
</style>
