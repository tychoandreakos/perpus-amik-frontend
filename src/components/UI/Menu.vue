<template>
  <section id="menu">
    <div class="menu-shell">
    <div v-for="(list, title) in lists" class="menu-link" :key="title">
      <a @click.prevent="changeHandler" :href="list.link">{{ title }}</a>
      <div :style="{ background: list.color }" class="menu-border"></div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Menu",
  methods: {
    changeHandler(val) {
        this.$emit('changeData', val)
    }
  },
  data() {
    return {
      lists: {
        Visit: {
          color: "#e086a6",
          link: "http://google.com"
        },
        Explore: {
          color: "#f2ba7a",
          link: "#"
        },
        Learn: {
          color: "#78d5ff",
          link: "#"
        },
        Support: {
          color: "#7c98ca",
          link: "#"
        },
        ReImagine: {
          color: "#88be7f",
          link: "#"
        },
        About: {
          color: "#83cdbc",
          link: "#"
        },
        Help: {
          color: "#e76d69",
          link: "#"
        }
      }
    };
  }
};
</script>
<style scoped>
#menu {
  padding-top: 1rem;
  height: 2.5rem;
  box-shadow: 0 4px 45px rgba(0,0,0, .2);
}

#menu .menu-shell {
    display: flex;
    padding-left: 3.5em;
}

#menu .menu-link {
  position: relative;
  margin-right: 2rem;
}

#menu .menu-link a {
  text-decoration: none;
  align-self: center;
  color: #222;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  letter-spacing: 1.4px;
}

#menu .menu-link .menu-border {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 25px;
  height: 2.5px;
  transition: padding-right .3s ease-in-out;
}


#menu .menu-link a:hover ~ .menu-border {
    padding-right: 100%;
}

</style>
