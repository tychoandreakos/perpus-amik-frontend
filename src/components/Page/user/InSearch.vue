<template lang="pug">
  section#in-search
    p.found #[strong 1 - 10 of 12541] search results for 
      strong php
    div.advanced
      AdvancedSearch(v-for="(labels, i) in labelsSearch" :key="i" :label="labels")
    template(v-for="(book, i) in items")
      ListComponent(:item="book" :key="i")
    FooterComponent.footer
</template>
<script>
import ListComponent from "../../UI/user/ListBook";
import FooterComponent from "../../UI/user/Footer";
import AdvancedSearch from "../../UI/user/AdvancedSearch";

export default {
  name: "InSearch",
  components: {
    ListComponent,
    FooterComponent,
    AdvancedSearch,
  },
  data() {
    return {
      labelsSearch: ["formats", "topic", "publisher", "rating"],
    };
  },
  computed: {
    items() {
      return this.$store.state.book;
    },
  },
};
</script>
<style lang="scss">
#in-search {
  margin-top: 2rem;

  .advanced {
    justify-content: center;
    margin: 1rem 1.2rem 0 0;
    width: 100%;
    display: flex;
  }

  p.found {
    margin-left: 4rem;
    display: inline;
    font: {
      size: 0.9rem;
      family: "Poppins", sans-serif;
      weight: 400;
    }
  }

  .footer {
    margin-top: 2.5rem;
  }
}
</style>
