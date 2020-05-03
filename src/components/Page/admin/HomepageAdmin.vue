<template>
  <section id="homepage-admin">
    <CreateComponent />
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
    <div class="backdrop"></div>
    <HeaderComponent
      :style="metaSidebar ? { width: '76.6%' } : { width: '91%' }"
    />
    <div
      class="main-wrapper"
      :style="
        metaSidebar
          ? { width: '80.8%', transform: 'scale(0.98)' }
          : { width: '100%', paddingLeft: '7.4%', transform: 'scale(1)' }
      "
    >
      <div class="clearfix"></div>
      <router-view></router-view>
    </div>
  </section>
</template>
<template lang="pug">
  section#homepage-admin
    CreateComponent
    div(
    :class="metaSidebar ? ['sidebar', 'sidebar-active']: ['sidebar', 'sidebar-inactive']"
    :style="metaSidebar ? { width: '19%' } : { width: '5.3%' }"
    )
      SidebarComponent(@sidebarMetaChild="childHandler")
    div.backdrop
    HeaderComponent(
       :style="metaSidebar ? { width: '76.6%' } : { width: '91%' }"
    )
    div.main-wrapper(
       :style="metaSidebar ? { width: '80.8%', transform: 'scale(0.98)' } : { width: '100%', paddingLeft: '7.4%', transform: 'scale(1)' }"
    )
      router-view
</template>
<script>
import SidebarComponent from '../../UI/admin/SidebarAdmin';
import HeaderComponent from '../../UI/admin/Navbar';
import CreateComponent from '../../UI/admin/Create';

export default {
  name: 'HomepageAdmin',
  data() {
    return {
      metaSidebar: true,
    };
  },
  methods: {
    childHandler(val) {
      this.metaSidebar = val;
    },
  },
  components: {
    SidebarComponent,
    HeaderComponent,
    CreateComponent,
  },
};
</script>
<style lang="scss">
#homepage-admin {
  background: #f8f8f8;
  margin-bottom: 4rem;
  width: 100%;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 15px 25px #f2f2f2;
    transition: all 0.3s ease-in;
    transition-delay: 0.3s;
    z-index: 77;
  }

  .backdrop {
    width: 100%;
    position: fixed;
    background: #f2f2f2;
    left: 0;
    right: 0;
    top: 0;
    height: 30px;
    z-index: 8;
  }

  .sidebar-active {
    width: 19%;
  }

  .sidebar-inactive {
    width: 5.3%;
  }

  .sidebar-inactive:hover {
    width: 19% !important;
  }

  .main-wrapper {
    float: right;
    transition: width 0.7s ease-in-out, transform 0.8s ease;
    padding: 1rem 2rem;
    height: 100%;
  }
}
</style>
