<template>
  <section
    id="navbar-user"
    :style="showSearch ? { height: $mq === 'mobile' ? '140px' : '104px' } : {}"
  >
    <div class="logo">
      s
      <div class="edges">
        <div class="show-search" @click="setSearch">
          <Icon :icon="icons.search" />
        </div>
        <div class="show-sidebar" @click="setSidebar">
          <Icon :icon="icons.menu" />
        </div>
      </div>
    </div>
    <template v-if="showSearch">
      <div class="element">
        <SearchComponent
          @valueList="listSelected"
          class="search"
          :dropdown="filterBy"
          :placeholder="placeholder"
        />
        <div class="btn-wrapper">
          <Button class="btn" title="Cari" />
        </div>
      </div>
    </template>
  </section>
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
        search: "search"
      },
      anotherHandler: true
    };
  },
  computed: {
    showSearch() {
      return this.$mq === "mobile" ? this.$store.state.showSearch : true;
    }
  },
  methods: {
    ...mapMutations(["setSidebar", "setSearch"]),
    listSelected(val) {
      this.listData = val;
    }
  },
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  components: {
    SearchComponent,
    Button,
    Icon
  }
};
</script>
<style>
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
}

#navbar-user .logo {
  width: 15%;
  height: 100%;
  background: #3d3b49;
}

#navbar-user .edges {
  display: flex;
  align-items: center;
}

#navbar-user .element {
  margin-left: 3.5rem;
  display: flex;
  width: 100%;
}

#navbar-user .element .search {
  width: 67%;
  margin-right: 1.5rem;
}

#navbar-user .edges .show-search {
  cursor: pointer;
  margin-right: 0.4rem;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

#navbar-user .element .dropdown {
  width: 15%;
  position: relative;
  z-index: 5;
}

#navbar-user .element .dropdown-list {
  position: absolute;
  left: 0;
  right: 0;
}

#navbar-user .element .btn-wrapper {
  align-self: center;
}

#navbar-user .logo .show-sidebar {
  display: none;
  cursor: pointer;
  margin-left: 1rem;
}

@media only screen and (min-width: 365px) and (max-width: 800px) {
  #navbar-user {
    flex-direction: column;
    height: 140px;
  }
  #navbar-user .logo {
    width: 100%;
    height: 50px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2.4rem;
  }

  #navbar-user .logo .show-sidebar {
    display: block;
  }

  #navbar-user .element {
    height: 45px;
    margin-top: 1.3rem;
  }
}

@media only screen and (max-width: 365px) {
  #navbar-user {
    flex-direction: column;
    height: 50px;
  }
  #navbar-user .logo {
    width: 100%;
    height: 50px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 2.4rem;
  }

  #navbar-user .logo .show-sidebar {
    display: block;
  }

  #navbar-user .element {
    height: 45px;
    margin-top: 1.3rem;
    margin-left: 0;
    align-items: center;
    padding: 1rem;
  }

  #navbar-user .element .btn-wrapper {
    display: none;
  }

  #navbar-user .element .search {
    width: 100%;
  }
}
</style>
