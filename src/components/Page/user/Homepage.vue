<template>
  <section id="homepage">
    <NavbarComponent placeholder="Cari buku disini .." />
    <div class="main-page">
      <SidebarComponent />
      <div class="main-wrapper">
        <router-view />
      </div>
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
  background: #fff;
}

#homepage .main-page .main-wrapper {
  margin-left: 10.5rem;
  width: 86.6vw;
  overflow: hidden;
}
</style>
