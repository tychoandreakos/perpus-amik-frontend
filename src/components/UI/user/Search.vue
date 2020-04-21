<template lang="pug">
  section#search-user( :style="dropdownData ? { border: '1px solid #613ff4' } : {}" )
    div.icon
      ThemifyIcons(:icon="searchIcon")
    input(:placeholder="placeholder" type="text")
    DropdownComponent(
        v-if="$mq !== 'mobile'"
      @open="dropdownHandler"
      @listValue="listHandler"
      :list="dropdown"
    )
</template>
<script>
import DropdownComponent from "./Dropdown";
import ThemifyIcons from "vue-themify-icons";
export default {
  name: "SearchUser",
  components: {
    DropdownComponent,
    ThemifyIcons
  },
  data() {
    return {
      dropdownData: false,
      searchIcon: "search"
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
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  border: 1px solid #eee;
  width: 100%;
  padding: 0.8rem 1rem;
  display: grid;
  border-radius: 0.4rem;
  background: #fcfcfc;
  font-size: 0.9rem;
  grid-template-columns: 4% 6fr 2fr;
  transition: border 0.2s ease-in-out;
  align-content: center;
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

#search-user .icon {
  margin: auto;
  margin-top: 2px;
}

@media screen and (min-width: 580px) and (max-width: 872px) {
  #search-user {
    grid-template-columns: 4% 5fr 2fr;
  }
}
</style>
