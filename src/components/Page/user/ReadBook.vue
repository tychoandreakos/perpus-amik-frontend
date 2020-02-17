<template>
  <section id="read-book">
    <SidebarComponent />
    <div class="main-wrapper">
      <h3>assdsdssdas</h3>
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/user/SidebarAlternate';

export default {
  name: 'ReadBook',
  components: {
    SidebarComponent
  }
};
</script>
<style scoped>
#read-book {
  height: 100%;
  width: 100%;
}

#read-book .main-wrapper {
  margin-left: 3rem;
  padding: 1rem;
}
</style>
