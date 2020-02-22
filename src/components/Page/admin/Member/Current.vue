<template>
  <section id="current">
    <TableComponent :tableProps="table">
      <td v-for="(btnMeta, i) in btn" :key="i">
        <ButtonComponent :btn="btnMeta" />
      </td>
    </TableComponent>
  </section>
</template>
<script>
import TableComponent from '../../../UI/admin/TableAdmin';
import ButtonComponent from '../../../UI/admin/button/MiniButton';

export default {
  name: 'Current',
  components: {
    TableComponent,
    ButtonComponent
  },
  data() {
    return {
      btn: [
        {
          title: 'Return',
          style: {
            background: '#7367f0'
          }
        },
        {
          title: 'Extends',
          style: {
            background: '#28c76f'
          }
        }
      ],
      table: {
        enabled: {
          checkbox: false,
          edit: false,
          remove: false,
          action: false,
          slot: true
        },
        title: ['return', 'extends', 'code', 'Title', 'Loan Date', 'Due Date'],
        sample: [
          {
            code: 'B0002',
            title:
              'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
            loan: '2020-02-19',
            due: '2020-02-26'
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#current {
  width: 100%;
  margin-top: -2rem;
}
</style>
