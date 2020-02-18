<template>
  <section id="search">
    <Icon icon="search" />
    <input type="search" :placeholder="search.placeholder" />
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'Search',
  components: {
    Icon
  },
  props: {
    search: {
      required: true,
      type: Object
    }
  }
};
</script>
<style scoped>
#search {
  width: 100%;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: 1px solid #ddd;
}

#search input {
  margin-left: 0.7rem;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.87rem;
  font-weight: 400;
  border: none;
  padding: 0.3rem 0;
}
</style>
