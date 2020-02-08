<template>
  <section
    :style="dropdownData ? { border: '1px solid #613ff4' } : {}"
    id="search-user"
  >
    <div class="icon">x</div>
    <input :placeholder="placeholder" type="text" />
    <DropdownComponent
      @open="dropdownHandler"
      @listValue="listHandler"
      :list="dropdown"
    />
  </section>
</template>
<script>
import DropdownComponent from "./Dropdown";
export default {
  name: "SearchUser",
  components: {
    DropdownComponent
  },
  data() {
    return {
      dropdownData: false
    };
  },
  methods: {
    listHandler(val) {
      this.$emit("valueList", val);
    },
    dropdownHandler(val) {
      this.dropdownData = val;
    }
  },
  props: {
    placeholder: {
      required: true,
      type: String
    },
    dropdown: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
#search-user {
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  border: 1px solid #eee;
  width: 100%;
  padding: 0.8rem 1rem;
  display: grid;
  border-radius: 0.4rem;
  background: #fcfcfc;
  font-size: 0.9rem;
  grid-template-columns: 4% 6fr 2fr;
  transition: border 0.2s ease-in-out;
}

#search-user input {
  width: 100%;
  border: none;
  margin-left: 0.9rem;
  font-family: "Quicksand", sans-serif;
  font-size: inherit;
  background: inherit;
  font-weight: 500;
}
</style>
