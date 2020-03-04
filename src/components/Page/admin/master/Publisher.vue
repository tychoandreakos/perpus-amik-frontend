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
import { mapGetters, mapMutations } from 'vuex';
import { masterPUBLISHER } from '../../../../store/types';

export default {
  name: 'publisher',
  components: {
    HeaderComponent,
    PanelActionComponent,
    TableComponent
  },
  computed: {
    ...mapGetters({
      table: 'table'
    })
  },
  methods: {
    ...mapMutations([
      'setCountUpdateDefault',
      'setHeader',
      'setCreateInput',
      'setDefaultParams',
      'setTableTypes',
      'setGetUpdate'
    ])
  },
  created() {
    this.setCountUpdateDefault();
    this.setHeader(this.button.title);
    this.setCreateInput(this.createProp);
    this.setDefaultParams();
    this.setTableTypes(masterPUBLISHER);
    this.setGetUpdate(masterPUBLISHER);
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Publisher',
      button: {
        title: 'Add New Publisher',
        icon: 'plus'
      },
      createProp: [
        {
          label: 'Publisher Name',
          id: 'name',
          placeholder: 'Please type a Publisher Name',
          type: 'text'
        }
      ],
      search: {
        placeholder: 'Search Publisher'
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
