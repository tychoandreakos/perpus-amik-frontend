<template lang="pug">
    div#dropdown
        ul
            li(@click.stop="setFloatPanel")
                div.add
                    Icon(icon="plus")
                    span(v-text="add")
            li(v-if="false" v-for="(list, i) in dummy" :key="i")
               a(href="#")
                Icon(icon="thumb-up")
                span(v-text="list") 
</template>
<script>
import { mapMutations } from "vuex";
import Icon from "vue-themify-icons";
export default {
  name: "PlaylistDrop",
  components: {
    Icon,
  },
  methods: {
    ...mapMutations(["setFloatPanel"]),
  },
  data() {
    return {
      add: "Add New Playlist",
      dummy: ["PHP", "Javascript"],
    };
  },
};
</script>
<style lang="scss" scoped>
#dropdown {
  background: #fff;
  position: absolute;
  box-shadow: 0 14px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(34, 35, 37, 0.26);
  padding: 0.8rem;
  z-index: 99;
  top: 1rem;
  right: 0;

  ul {
    list-style: none;
    width: 150px;
    overflow: auto;
    li {
      font-size: 0.9rem;
      display: flex;
      align-content: center;
      padding-bottom: 0.8rem;
      border-bottom: 0.7px solid #ddd;
      margin-bottom: 0.8rem;
      transition: 0.3s border-bottom ease-in;

      .add {
        cursor: pointer;
      }

      &:last-child {
        margin-bottom: 0;
        border-bottom: 0;
      }

      &:hover {
        color: #613ff4;
      }

      a {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
      }

      span {
        font-size: 0.8rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>
