<template>
  <section id="sidebar-user" v-show="sidebarState">
    <ul>
      <template v-for="(list, i) in sidebarData">
        <ListComponent :key="i" :list="list" />
      </template>
    </ul>
  </section>
</template>
<script>
import ListComponent from "./List";

export default {
  name: "Sidebar",
  components: {
    ListComponent
  },
  computed: {
    sidebarState() {
      return this.$store.state.sidebarState;
    }
  },
  data() {
    return {
      sidebarData: [
        {
          title: "Home",
          icon: "home",
          href: { name: "homepage" },
          active: true
        },
        {
          title: "Featured",
          icon: "star",
          child: [
            {
              title: "Resource Centers",
              href: "#"
            },
            {
              title: "Expert Playlist",
              href: "#"
            }
          ]
        },
        {
          title: "Practive",
          icon: "link",
          child: [
            {
              title: "Katacoda",
              href: "#"
            },
            {
              title: "Scenario Jupyters",
              href: "#"
            },
            {
              title: "Notebooks",
              href: "#"
            }
          ]
        },
        {
          title: "Kubernetes",
          icon: "book",
          href: "#"
        },
        {
          title: "Settings",
          icon: "settings",
          href: "#"
        },
        {
          title: "Sign out",
          icon: "arrow-circle-right",
          href: "#"
        }
      ]
    };
  }
};
</script>
<style>
#sidebar-user {
  background: #3d3b49;
  width: 12.5%;
  position: fixed;
  height: 85vh;
}

#sidebar-user ul {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
}

@media only screen and (min-width: 200px) and (max-width: 800px) {
  #sidebar-user {
    width: 100%;
    position: fixed;
    z-index: 99;
    top: 3rem;
  }

  #sidebar-user ul {
    font-size: 1.5rem;
  }
}
</style>
