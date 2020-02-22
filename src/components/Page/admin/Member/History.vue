<template>
  <section id="history">
    <TableComponent :tableProps="table" />
  </section>
</template>
<script>
import TableComponent from '../../../UI/admin/TableAdmin';
export default {
  name: 'History',
  components: {
    TableComponent
  },
  data() {
    return {
      table: {
        enabled: {
          checkbox: false,
          edit: false,
          remove: false,
          action: false,
          slot: false,
          normal: true
        },
        title: ['code', 'Title', 'Loan Date', 'Due Date'],
        sample: [
          {
            code: 'B0002',
            title:
              'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
            loan: '2020-02-19',
            due: 'Not Returned'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#history {
  width: 100%;
  margin-top: -2rem;
}
</style>
