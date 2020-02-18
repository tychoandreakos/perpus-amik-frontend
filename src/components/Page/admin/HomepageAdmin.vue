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
        metaSidebar ? { width: '80.8%' } : { width: '100%', paddingLeft: '7.4%' }
      "
    >
      <router-view></router-view>
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/admin/SidebarAdmin';
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
  box-shadow: 0 15px 25px #f2f2f2;
  transition: width 0.2s ease;
  transition-delay: 0.3s;
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
  transition: width 0.2s ease;
  padding: 1.5rem 2rem;
}
</style>
