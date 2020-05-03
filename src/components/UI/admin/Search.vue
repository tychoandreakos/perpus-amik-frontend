<template lang="pug">
  section#search
    Icon(icon="search")
    Form(@submit.prevent="submit")
      input(
      type="search" 
      v-model="searchText" 
      :placeholder="search.placeholder"
    )
</template>
<script>
import Icon from 'vue-themify-icons';
import { searchPOST, getGMD } from '../../../store/module/API/type';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Search',
  components: {
    Icon,
  },
  methods: {
    ...mapActions([searchPOST, getGMD]),
    submit() {
      this[searchPOST](this.searchText);
    },
  },
  data() {
    return {
      searchText: '',
    };
  },
  watch: {
    searchText(val) {
      if (val < 1) {
        this[getGMD]({
          skip: 0,
          take: 5,
        });
      }
      this.searchText = val;
    },
  },
  props: {
    search: {
      required: true,
      type: Object,
    },
  },
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
  background: inherit;
}
</style>
