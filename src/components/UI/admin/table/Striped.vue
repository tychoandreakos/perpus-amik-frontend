<template>
  <section class="striped">
    <table>
      <slot></slot>
    </table>
  </section>
</template>
<script>
export default {
  name: 'Striped'
};
</script>
<style scoped>
.striped {
  width: 100%;
  height: 100%;
}

.striped table {
  border: 1px solid #f8f8f8;
  font-family: 'Quicksand', sans-serif;
  width: 100%;
  border-collapse: separate;
}

.striped table th {
  text-transform: capitalize;
  font-size: 0.9rem;
  padding: 0.7rem 0;
}

.striped table tr:nth-child(odd) {
  background: #f8f8f8;
}

.striped table tr {
  transition: transform 0.3s ease;
}

.striped table tr:hover {
  transform: translateX(5px);
}

.striped table tr td {
  padding: 0.8rem 0.5rem;
  font-size: 0.94rem;
}
</style>
