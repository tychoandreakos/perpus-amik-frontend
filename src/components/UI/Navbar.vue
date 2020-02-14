<template>
  <section
    :style="
      search
        ? { position: 'fixed', background: '#fff', width: '100%', zIndex: '99' }
        : { position: 'relative' }
    "
    id="navbar"
  >
    <a href="/" class="logo">
      <img :src="require('../../assets/main-logo-green.svg')" />
      <div class="title">{{ title }}</div>
    </a>
    <div class="menu">
      <a v-for="(link, i) in menuLink" :key="i" :href="link.href">
        {{ link.title }}
      </a>
      <a
        href="#"
        :style="search ? { color: '#ec4439' } : {}"
        @click.prevent="search = !search"
        >{{ search ? "Tutup Pencarian" : "Search" }}</a
      >
    </div>

    <SearchComponent :open="search" />
  </section>
</template>
<script>
import SearchComponent from "./SearchNavbar";

export default {
  name: "Navbar",
  components: {
    SearchComponent
  },
  data() {
    return {
      search: false,
      title: "Manisku Library",
      menuLink: [
        {
          title: "Donate",
          href: "#",
          icon: "@icon/themify-icons/icons/money.svg"
        },
        {
          title: "Library Card",
          href: "/library-card",
          icon: "@icon/themify-icons/icons/credit-card.svg"
        },
        {
          title: "Account",
          href: "/account",
          icon: "@icon/themify-icons/icons/user.svg"
        }
      ]
    };
  }
};
</script>
<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  align-items: center;
  box-shadow: 0 2px 85px rgba(0, 0, 0, 0.5);
}

#navbar a {
  text-decoration: none;
  color: #494949;
}

#navbar a.logo {
  display: flex;
  align-items: center;
}

#navbar a.logo img {
  max-width: 70px;
  max-height: 70px;
}

#navbar a.logo .title {
  margin-left: 0.6rem;
  font-family: "Nunito Sans", sans-serif !important;
  font-size: 1.4rem;
  letter-spacing: 1.5px;
}

#navbar .menu a {
  margin: 0 1rem;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 0.92rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

#navbar .menu a:hover {
  color: #eb9532;
}
</style>
