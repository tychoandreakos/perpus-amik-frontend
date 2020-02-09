<template>
  <section id="in-search">
    <template v-for="(book, i) in items">
      <ListComponent :item="book" :key="i" />
    </template>
  </section>
</template>
<script>
import ListComponent from "../../UI/user/ListBook";
export default {
  name: "InSearch",
  components: {
    ListComponent
  },
  computed: {
    items() {
      return this.$store.state.book;
    }
  }
};
</script>
<style scoped>
#in-search {
  margin-top: 2rem;
}
</style>
