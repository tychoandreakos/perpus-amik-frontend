<template lang="pug">
  section#navbar-user(
     :style="showSearch ? { height: $mq === 'mobile' ? '140px' : $mq === 'tabletOrDesktop' ? '155px' : '104px' } : {}"
  )
    div.logo {{ title }}
      div.edges
        div.show-search(@click="setSearch")
          Icon(:icon="icons.search")
        div.show-sidebar(@click="setSidebar")
          Icon(:icon="icons.menu")
    template(v-if="showSearch")
      div.element
        SearchComponent(
          @valueList="listSelected"
          class="search"
          :dropdown="filterBy"
          :placeholder="placeholder"
        )
        div.btn-wrapper
          Button.btn(title="cari")
</template>
<script>
import SearchComponent from "./Search";
import Button from "./Button";
import Icon from "vue-themify-icons";
import { mapMutations } from "vuex";

export default {
  name: "NavbarUser",
  data() {
    return {
      filterBy: ["Buku", "Pengarang", "ISBN"],
      listData: "",
      icons: {
        menu: "menu",
        search: "search",
      },
      title: "Manisku Library",
      anotherHandler: true,
    };
  },
  computed: {
    showSearch() {
      return this.$mq === "mobile" ? this.$store.state.showSearch : true;
    },
  },
  methods: {
    ...mapMutations(["setSidebar", "setSearch"]),
    listSelected(val) {
      this.listData = val;
    },
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  components: {
    SearchComponent,
    Button,
    Icon,
  },
};
</script>
<style lang="scss">
#navbar-user {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  position: relative;
  height: 104px;
  align-items: center;
  transition: all 0.7s ease;
  position: fixed;
  z-index: 8;

  .logo {
    width: 15%;
    height: 100%;
    background: #3d3b49;

    .show-sidebar {
      display: none;
      cursor: pointer;
      margin-left: 1rem;
    }
  }

  .edges {
    display: flex;
    align-items: center;

    .show-search {
      cursor: pointer;
      margin-right: 0.4rem;
      font-size: 0.9rem;
      margin-top: 0.2rem;
      display: none;
    }
  }

  .element {
    margin-left: 3.5rem;
    display: flex;
    width: 100%;

    .search {
      width: 67%;
      margin-right: 1.5rem;
    }

    .dropdown {
      width: 15%;
      position: relative;
      z-index: 5;
    }

    .dropdown-list {
      position: absolute;
      left: 0;
      right: 0;
    }

    .element .btn-wrapper {
      align-self: center;
    }
  }
}

@media only screen and (min-width: 580px) and (max-width: 872px) {
  #navbar-user {
    flex-direction: column;
    height: 155px;

    .logo {
      width: 100%;
      height: 70px;
      display: flex;
      color: #fff;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 2.4rem;

      .show-sidebar {
        display: block;
      }
    }

    .element {
      height: 45px;
      margin-top: 1.3rem;
    }
  }
}

@media only screen and (max-width: 580px) {
  #navbar-user {
    flex-direction: column;
    height: 50px;

    .logo {
      width: 100%;
      height: 50px;
      display: flex;
      color: #fff;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 2.4rem;

      .show-sidebar {
        display: block;
      }
    }

    .edges .show-search {
      display: block;
    }

    .element {
      height: 45px;
      margin-top: 1.3rem;
      margin-left: 0;
      align-items: center;
      padding: 1rem;

      .btn-wrapper {
        display: none;
      }

      .search {
        width: 100%;
      }
    }
  }
}
</style>
