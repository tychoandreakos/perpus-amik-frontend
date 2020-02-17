<template>
  <section id="result">
    <Sidebar />
  </section>
</template>
<script>
import Sidebar from '../../UI/user/SidebarAlternate';
export default {
  name: 'Result',
  components: {
    Sidebar
  }
};
</script>
<style scoped>
#result {
  height: 100%;
}
</style>
