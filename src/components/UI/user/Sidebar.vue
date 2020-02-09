<template>
  <section id="sidebar-user">
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
  data() {
    return {
      sidebarData: [
        {
          title: "Home",
          icon: "fa fa-home",
          href: "#",
          active: true
        },
        {
          title: "Featured",
          icon: "fa fa-home",
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
          icon: "fa fa-home",
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
          icon: "fa fa-home",
          href: "#"
        },
        {
          title: "Settings",
          icon: "fa fa-home",
          href: "#"
        },
        {
          title: "Sign out",
          icon: "fa fa-home",
          href: "#"
        }
      ]
    };
  }
};
</script>
<style scoped>
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
</style>
