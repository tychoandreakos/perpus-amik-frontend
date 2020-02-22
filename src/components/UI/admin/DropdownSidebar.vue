<template>
  <section id="dropdown-sidebar">
    <ul>
      <li v-for="(dropdownData, i) in dropdownProps" :key="i">
        <router-link :to="{ name: dropdownData.href }">
          <Icon icon="link" />
          {{ dropdownData.title }}</router-link
        >
      </li>
    </ul>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'DropdownSidebar',
  components: {
    Icon
  },
  props: {
    dropdownProps: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
#dropdown-sidebar {
  width: 100%;
  overflow: hidden;
  transition: height 0.2s ease;
}

#dropdown-sidebar ul {
  list-style: none;
  padding: 0.4rem 1rem;
}

#dropdown-sidebar ul li {
  padding: 0.5rem 0;
}

#dropdown-sidebar ul li a i {
  margin-right: 0.8rem;
}

#dropdown-sidebar ul li a {
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  color: #565656;
  font-weight: 500;
  margin-left: 0.5rem;
  font-size: 0.98rem;
  width: 100%;
  transition: padding-left 0.2s ease;
  display: inline-block;
}

#dropdown-sidebar ul li a:hover {
  padding-left: 0.3rem;
}
</style>
