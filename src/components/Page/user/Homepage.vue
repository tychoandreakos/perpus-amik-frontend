<template>
  <section id="homepage">
    <NavbarComponent placeholder="Cari buku disini .." />
    <div class="main-page" :style="showSearch ? '' : { paddingTop: '3.4rem' }">
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
  },
  computed: {
    showSearch() {
      return this.$store.state.showSearch;
    }
  }
};
</script>
<style scoped>
#homepage .main-page {
  padding-top: 6.5rem;
  display: grid;
  grid-template-columns: 15% 1fr;
  background: #fff;
  width: 100%;
}

#homepage .main-page .main-wrapper {
  margin-left: 10.5rem;
  width: 86.6vw;
  overflow: hidden;
}

@media only screen and (min-width: 200px) and (max-width: 800px) {
  #homepage .main-page {
    display: block;
    padding-top: 9rem;
  }

  #homepage .main-page .main-wrapper {
    margin-left: 0;
    width: 100%;
  }
}
</style>
