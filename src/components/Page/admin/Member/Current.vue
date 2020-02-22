<template>
  <section id="current">
    <TableComponent />
  </section>
</template>
<script>
import TableComponent from '../../../UI/admin/TableAdmin';

export default {
  name: 'Current',
  components: {
    TableComponent
  }
};
</script>
<style scoped>
#section {
  width: 100%;
}
</style>
