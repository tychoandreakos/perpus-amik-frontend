<template>
  <section id="in-search">
    <template v-for="(book, i) in items">
      <ListComponent :item="book" :key="i" />
    </template>
    <FooterComponent class="footer" />
  </section>
</template>
<script>
import ListComponent from "../../UI/user/ListBook";
import FooterComponent from "../../UI/user/Footer";

export default {
  name: "InSearch",
  components: {
    ListComponent,
    FooterComponent
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

.footer {
    margin-top: 2.5rem;
}
</style>
