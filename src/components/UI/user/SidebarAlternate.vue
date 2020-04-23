<template lang="pug">
  aside#sidebar-alternate
    ul
      li(v-for="(sidebar, i) in sidebarProperties" :key="i" @click="redirect(sidebar.name)")
        Icon(:icon="sidebar.icon")
        router-link(:to="{ name: sidebar.name }") {{ sidebar.title }}
</template>
<script>
import Icon from "vue-themify-icons";

export default {
  name: "SidebarAlternate",
  components: {
    Icon,
  },
  methods: {
    redirect(url) {
      this.$router.push({
        name: url,
      });
    },
  },
  data() {
    return {
      sidebarProperties: [
        {
          title: "Home",
          icon: "home",
          name: "homepage",
        },
        {
          title: "Account",
          icon: "user",
          name: "homepage",
        },
        {
          title: "Practice",
          icon: "book",
          name: "homepage",
        },
        {
          title: "Kubernetes",
          icon: "slice",
          name: "homepage",
        },
        {
          title: "Settings",
          icon: "settings",
          name: "homepage",
        },
        {
          title: "Logout",
          icon: "arrow-circle-right",
          name: "homepage",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
#sidebar-alternate {
  height: 100%;
  overflow: hidden;
  width: 3.5%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: width 0.3s ease-in-out;
  transition-delay: 0.2s;
  z-index: 99;

  &:hover {
    width: 15%;
  }

  ul {
    background: #e6e6e6;
    list-style: none;
    height: 100%;

    li {
      padding: 1rem;
      cursor: pointer;

      &:hover {
        background: #fff;
      }

      i {
        margin-right: 1rem;
        margin-left: 0.1rem;
        font-size: 1.1rem;
      }

      a {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        color: #404040;
        width: 100%;
        font-size: 0.88rem;
      }
    }
  }
}
</style>
