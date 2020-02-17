<template>
  <aside id="sidebar-alternate">
    <ul>
      <li v-for="(sidebar, i) in sidebarProperties" :key="i">
        <Icon :icon="sidebar.icon" />
        <router-link :to="sidebar.href">{{ sidebar.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
import Icon from 'vue-themify-icons';

export default {
  name: 'SidebarAlternate',
  components: {
    Icon
  },
  data() {
    return {
      sidebarProperties: [
        {
          title: 'Home',
          icon: 'home',
          href: '#'
        },
        {
          title: 'Account',
          icon: 'user',
          href: '#'
        },
        {
          title: 'Practice',
          icon: 'book',
          href: '#'
        },
        {
          title: 'Kubernetes',
          icon: 'slice',
          href: '#'
        },
        {
          title: 'Settings',
          icon: 'settings',
          href: '#'
        },
        {
          title: 'Logout',
          icon: 'arrow-circle-right',
          href: '#'
        }
      ]
    };
  }
};
</script>
<style scoped>
#sidebar-alternate {
  height: 100%;
  overflow: hidden;
  width: 4%;
  position: relative;
  transition: width 0.3s ease-in-out;
  transition-delay: 0.2s;
}

#sidebar-alternate:hover {
  width: 13%;
}

#sidebar-alternate ul {
  background: #e6e6e6;
  list-style: none;
  height: 100%;
}

#sidebar-alternate ul li {
  padding: 1rem;
  cursor: pointer;
}

#sidebar-alternate ul li:hover {
  background: #fff;
}

#sidebar-alternate ul li i {
  margin-right: 1rem;
  margin-left: 0.1rem;
  font-size: 1.1rem;
}

#sidebar-alternate ul li a {
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: #404040;
  font-size: 0.88rem;
}
</style>
