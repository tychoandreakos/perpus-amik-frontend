<template>
  <aside id="sidebar-admin">
    <div class="logo">
      <h2>{{ metaSidebar.title }}</h2>
      <button @click="bulletHandler">
        <div v-if="bullet" class="bullet">x</div>
      </button>
    </div>
    <ul>
      <li v-for="(data, i) in sidebarData" :key="i">
        <router-link to="#">
          <Icon :icon="data.icon" />
          {{ data.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'SidebarAdmin',
  components: {
    Icon
  },
  methods: {
    bulletHandler() {
      this.bullet = !this.bullet;
      this.$emit('sidebarMetaChild', this.bullet);
    }
  },
  data() {
    return {
      bullet: false,
      sidebarData: [
        {
          title: 'Dashboard',
          icon: 'home'
        },
        {
          title: 'Bibliobigrafi',
          icon: 'receipt'
        },
        {
          title: 'Circulation',
          icon: 'reload'
        },
        {
          title: 'Membership',
          icon: 'id-badge'
        },
        {
          title: 'Master File',
          icon: 'file'
        },
        {
          title: 'Settings',
          icon: 'settings'
        },
        {
          title: 'Reporting',
          icon: 'stats-up'
        },
        {
          title: 'Serial Control',
          icon: 'layers-alt'
        },
        {
          title: 'Logout',
          icon: 'arrow-circle-right'
        }
      ],
      metaSidebar: {
        title: 'Vuexy'
      }
    };
  }
};
</script>
<style scoped>
#sidebar-admin {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}

#sidebar-admin .logo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
}

#sidebar-admin .logo h2 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #5143eb;
  letter-spacing: 2px;
}

#sidebar-admin .logo button {
  border-radius: 50%;
  height: 17px;
  width: 17px;
  background: none;
  border: 2px solid #7c71f1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: unset;
}

#sidebar-admin .logo button .bullet {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 2px solid #7c71f1;
  font-size: 0;
}

#sidebar-admin ul {
  padding: 1rem 2rem;
  list-style: none;
}

#sidebar-admin ul li a {
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #565656;
  font-size: 1rem;
  transition: padding-left 0.2s ease;
  font-weight: 500;
  font-size: 0.99rem;
  padding: 0.8rem 0;
}

#sidebar-admin ul li a:hover {
  padding-left: 0.3rem;
}

#sidebar-admin ul li a i {
  margin-right: 1.6rem;
  font-size: 1.1rem;
}
</style>
