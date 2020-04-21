<template lang="pug">
  section#navbar-user(
     :style="showSearch ? { height: $mq === 'mobile' ? '140px' : $mq === 'tabletOrDesktop' ? '155px' : '104px' } : {}"
  )
    div.logo 
      router-link(:to="{ name: 'landing' }").wrapper #[Icon(icon="book" v-if="showIcon")] {{ title }}
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
    div.user-button(@click="userButton = !userButton" 
    :class="userButton ? 'true-user-button' : 'false-user-button'")
      div.user-wrapper
       span Elang Indra
       Icon(icon="angle-down")
      div.backdrop(v-if="userButton" @click.stop="userButton = false")
      ul
        li 
          a(href="#") Profile
        li 
          a(href="#") History
        li 
          a(href="#") Logout
      
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
      showIcon: true,
      userButton: false,
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
@mixin shadow {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}

#navbar-user {
  background: #fff;
  width: 100%;
  display: flex;
  position: relative;
  height: 104px;
  align-items: center;
  transition: all 0.7s ease;
  position: fixed;
  z-index: 8;
  @include shadow;

  .logo {
    width: 18.7%;
    height: 100%;
    background: #3d3b49;

    .wrapper {
      background: #613ff4;
      position: absolute;
      left: 0.8rem;
      top: 1.5rem;
      color: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      text-decoration: none;
      font: {
        size: 0.96rem;
        weight: 500;
        family: "Poppins", sans-serif;
      }
      padding: 0.9rem 1.2rem;

      i {
        margin-right: 0.8rem;
      }
    }

    .show-sidebar {
      display: none;
      cursor: pointer;
      margin-left: 1rem;
    }
  }

  .true-user-button {
    height: 182px;
    @include shadow;
  }

  .false-user-button {
    height: 50px;
  }

  .user-button {
    margin: {
      right: 3rem;
      top: 1.5rem;
    }
    width: 18%;
    cursor: pointer;
    border-radius: 15px;
    transition: 0.2s box-shadow ease-in, 0.3s height ease-in;
    position: relative;
    padding: 0.9rem;
    align-self: baseline;
    overflow: hidden;
    background: #fff;

    .user-wrapper {
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      z-index: 3;
    }

    .backdrop {
      position: fixed;
      background: transparent;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    ul {
      margin-top: 1rem;
      list-style: none;
      padding: 0 0.9rem;

      li {
        padding: {
          top: 0.8rem;
          bottom: 0.4rem;
        }
        border-bottom: 1px solid #eee;

        a {
          text-decoration: none;
          color: inherit;
          transition: 0.3s margin-left ease-in-out;
          display: block;

          &:hover {
            margin-left: 0.3rem;
            color: #613ff4;
          }
        }
      }
    }

    font: {
      size: 0.9rem;
    }

    &:hover {
      box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
        0 2px 2px 0 rgba(40, 44, 53, 0.08);
    }

    span {
      font-family: "Poppins", sans-serif;
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
      width: 80%;
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
