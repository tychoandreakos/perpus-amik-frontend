<template>
  <section id="checkout">
    <table>
      <thead>
        <th v-for="(head, i) in tableHead" :key="i">{{ head }}</th>
      </thead>
      <tbody>
        <tr v-for="(body, i) in tableData" :key="i">
          <td v-for="(result, i) in body" :key="i">{{ result }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {
  name: 'Checkout',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    tableHead: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
#checkout {
  width: 100%;
  height: auto;
  padding: 1rem;
}

#checkout table {
  width: 100%;
  border-collapse: collapse;
  background: #f8f8f8;
}

#checkout table thead th {
  font-family: 'Quicksand', sans-serif;
  text-transform: capitalize;
  font-size: 0.9rem;
  background: #fff;
}

#checkout table tbody tr {
  transition: transform 0.3s ease;
  cursor: default;
}

#checkout table tbody tr:hover {
  transform: translateY(-3px);
}

#checkout table tbody tr td {
  font-size: 0.9rem;
  padding: 0.8rem 0.7rem;
  background: #fff;
  font-weight: 400;
  font-family: 'Quicksand', sans-serif;
}
</style>
