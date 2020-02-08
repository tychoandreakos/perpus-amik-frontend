<template>
  <section id="homepage">
    <NavbarComponent placeholder="Cari buku disini .." />
    <div class="main-page">
      <SidebarComponent />
    </div>
  </section>
</template>
<script>
import NavbarComponent from "../../UI/user/Navbar";
import SidebarComponent from "../../UI/user/Sidebar";

export default {
  name: "Homepage",
  components: {
    NavbarComponent,
    SidebarComponent
  }
};
</script>
<style scoped>
#homepage .main-page {
  padding-top: 6.5rem;
  display: grid;
  grid-template-columns: 15% 1fr;
}
</style>
