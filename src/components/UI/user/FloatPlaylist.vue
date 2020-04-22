<template lang="pug">
    div#float-playlist(v-if="floatPanel") 
        div.float-playlist-wrapper
            div.close(@click.stop="setFloatPanel")
                Icon(icon="close")
            div.picture
                img(src="https://learning.oreilly.com/library/cover/9781786468093/")
                Button.btn(title="Add")
            div.desc
                h3 Vue.js 2 Cookbook
                div.desc-content
                    span.author by #[a(href="#") Andrea Passaglia]
                    span.publisher Packt Publishing
                div.description-book
                    h3 Book Description
                    div.content(v-html="desc.content")
            div.playlist
                h3 Add Existing Playlist
                ul
                    li(v-for="(list,i) in lists" :key="i") #[span(href="#") {{ list }}]
</template>

<script>
import Icon from "vue-themify-icons";
import Button from "./Button";
import { mapState, mapMutations } from "vuex";

export default {
  name: "FloatPlaylist",
  components: {
    Icon,
    Button,
  },
  computed: {
    ...mapState(["floatPanel"]),
  },
  methods: {
    ...mapMutations(["setFloatPanel"]),
  },
  data() {
    return {
      lists: [
        "php",
        "javascript",
        "ruby",
        "laravel",
        "playlist pribadi",
        "Belajar bersama",
        "playlist pacarku manis",
      ],
      desc: {
        content:
          "<span><p><b>101 hands-on recipes that teach you how to build professional, structured web apps with Vue.js</b></p><p><b>About This Book</b></p><ul><li>Understand and use Vue’s reactivity system, data binding, and computed properties</li><li>Create fluid transitions in your application with Vue’s built-in transition system</li><li>Use Vuex and Webpack to build medium-to-large scale SPAs and enhance your development workflow</li></ul></span>",
      },
    };
  },
};
</script>

<style lang="scss">
@mixin fontH3 {
  font: {
    size: 1.2rem;
    family: "Poppins", sans-serif;
  }
}
#float-playlist {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.459);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .float-playlist-wrapper {
    background: #fff;
    padding: {
      left: 2rem;
      top: 3rem;
      bottom: 2rem;
      right: 2rem;
    }
    display: flex;
    width: 70%;
    position: relative;

    .close {
      position: absolute;
      top: 1rem;
      right: 2rem;
      cursor: pointer;
    }

    .picture {
      display: flex;
      align-items: center;
      flex-direction: column;

      .btn {
        margin-top: 0.8rem;
      }
    }

    .playlist {
      h3 {
        @include fontH3;
        margin-bottom: 0.5rem;
      }
      border-left: 1px solid #ddd;
      padding-left: 2rem;
      width: 250px;

      ul {
        overflow: auto;
        height: 280px;
        li {
          text-transform: capitalize;
          margin-top: 0.8rem;
          overflow: hidden;

          span {
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            padding-bottom: 0.4rem;
            border-bottom: 1px solid #eee;
            display: inline-block;
            width: 100%;
            font: {
              size: 0.9rem;
              family: "Nunito", sans-serif;
            }
            transition: 0.1s margin-left ease-in;

            &:hover {
              margin-left: 0.3rem;
              color: #613ff4;
            }
          }
        }
      }
    }

    .desc {
      margin: {
        left: 2rem;
        right: 1rem;
      }

      h3 {
        text-transform: capitalize;
        @include fontH3;
      }

      .desc-content {
        text-transform: capitalize;
        font: {
          size: 0.9rem;
        }

        a {
          color: inherit;

          &:hover {
            color: red;
          }
        }

        .publisher {
          margin-top: 0.3rem;
          display: block;
        }
      }

      .description-book {
        margin-top: 0.7rem;
        font: {
          family: "Poppins", sans-serif;
        }

        h3 {
          margin-bottom: 0.3rem;
        }

        ul {
          margin: {
            top: 0.7rem;
            left: 1.5rem;
          }
        }

        span {
          font: {
            size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
