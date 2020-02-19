<template>
  <section id="homepage-admin">
    <div
      :class="
        metaSidebar
          ? ['sidebar', 'sidebar-active']
          : ['sidebar', 'sidebar-inactive']
      "
      :style="metaSidebar ? { width: '19%' } : { width: '5.3%' }"
    >
      <SidebarComponent @sidebarMetaChild="childHandler" />
    </div>
    <div
      class="main-wrapper"
      :style="
        metaSidebar
          ? { scale: '1' }
          : { scale: '1.5', paddingLeft: '7.4%' }
      "
    >
      <HeaderComponent
        :style="metaSidebar ? { width: '76.2%' } : { width: '90%' }"
      />
      <div class="clearfix"></div>
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/admin/SidebarAdmin';
import HeaderComponent from '../../UI/admin/Navbar';

export default {
  name: 'HomepageAdmin',
  data() {
    return {
      metaSidebar: true
    };
  },
  methods: {
    childHandler(val) {
      this.metaSidebar = val;
    }
  },
  components: {
    SidebarComponent,
    HeaderComponent
  }
};
</script>
<style>
#homepage-admin {
  background: #f3f3f3;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}

#homepage-admin .sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0 15px 25px #f2f2f2;
  transition: width 0.3s ease-in;
  transition-delay: 0.3s;
  z-index: 99;
}

#homepage-admin .sidebar-active {
  width: 19%;
}

#homepage-admin .sidebar-inactive {
  width: 5.3%;
}

#homepage-admin .sidebar-inactive:hover {
  width: 19% !important;
}

#homepage-admin .main-wrapper {
  float: right;
  transition: all 0.7s ease-in-out;
  padding: 1rem 2rem;
  height: 100%;
}

.clearfix {
  margin-top: 4.3rem;
}
</style>
