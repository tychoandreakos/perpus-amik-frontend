<template>
  <div class="dropdown-panel">
    <a :href="list.href">{{ list.title }}</a>
  </div>
</template>
<script>
export default {
  name: "DropdownSidebar",
  props: {
    list: {
      required: true,
      type: Object
    }
  }
};
</script>
<style scoped>
.dropdown-panel {
  background: #27262f;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dropdown-panel a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 0;
  padding: 0.9rem;
}

.dropdown-panel a:hover {
  background: #613ff4;
}
</style>
