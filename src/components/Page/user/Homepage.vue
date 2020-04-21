<template lang="pug">
  section#homepage
    NavbarComponent(placeholder="Cari buku disini ..")
    div.main-page(:style="showSearch ? '' : { paddingTop: $mq === 'mobile' ? '3.4rem' : '' }")
      SidebarComponent
      div.main-wrapper
        router-view
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

@media only screen and (min-width: 580px) and (max-width: 870px) {
  #homepage .main-page {
    display: block;
    padding-top: 10rem;
  }

  #homepage .main-page .main-wrapper {
    margin-left: 0;
    width: 100vw;
  }
}

@media only screen and (max-width: 580px) {
  #homepage .main-page .main-wrapper {
    margin-left: 0;
    width: 100vw;
  }
}
</style>
