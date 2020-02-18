<template>
  <section id="homepage-admin">
    <div class="sidebar">
      <SidebarComponent />
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/admin/SidebarAdmin';
export default {
  name: 'HomepageAdmin',
  components: {
    SidebarComponent
  }
};
</script>
<style>
#homepage-admin {
  background: #f3f3f3;
  width: 100%;
  height: 100%;
}

#homepage-admin .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 19%;
  box-shadow: 0 15px 25px #f2f2f2;
}
</style>
