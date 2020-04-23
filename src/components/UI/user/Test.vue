<template lang="pug">
div
    .card-carousel-wrapper
        .card-carousel--nav__left(
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
        )
        .card-carousel
            .card-carousel--overflow-container
                .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
                  .card-carousel--card(:to="{ name: 'result', params: { book: slug(item.titleBook.title) } }" v-for="item in items")
                      img(:src="item.imgBook.img")
                      .card-carousel--card--footer
                          div.label #[Icon(icon="book")] Book
                          router-link.title(:to="{ name: 'result',query: { type: typeBook }, params: {isbn: item.titleBook.isbn, book: slug(item.titleBook.title) } }" style="display: block") {{ item.titleBook.title | titleSplice}}
                          <template v-if="checkingObject(item.authorBook.author)">
                            p.tag(v-for="(tag,index) in item.authorBook.author" :class="index > 0 ? 'secondary' : ''") 
                              router-link(:to="{ name: 'result', params: {  book: slug(tag) } }") {{ tag }}.
                          </template>
                            p.tag(v-else)
                                router-link(:to="{ name: 'result', params: { book: slug(item.authorBook.author) } }") {{ item.authorBook.author }}.
                            div.desc(style={marginTop: '20px'})
                              span Ubuntu Server has taken the data centers by storm. Whether you're deploying Ubun ....
                            Playlist(:drop="false")
                            
        .card-carousel--nav__right(
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
        )    
</template>
<script>
import Playlist from "./Playlist";
import Icon from "vue-themify-icons";

export default {
  name: "Test",
  data() {
    return {
      currentOffset: 0,
      windowSize: this.$mq == "mobile" ? 10 : 3,
      paginationFactor: this.$mq == "mobile" ? 150 : 220,
    };
  },
  components: {
    Playlist,
    Icon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    typeBook: {
      type: String,
      required: true,
    },
  },
  computed: {
    atEndOfList() {
      if (this.currentOffset === -5760) return true;
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  filters: {
    titleSplice(val) {
      return val.substring(0, 40) + " ...";
    },
  },
  methods: {
    slug(text) {
      return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
    },
    checkingObject(val) {
      return Array.isArray(val);
    },
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      const responsive = this.$mq === "mobile";
      if (direction === 1 && !this.atEndOfList) {
        responsive
          ? (this.currentOffset -= this.paginationFactor)
          : (this.currentOffset -= this.paginationFactor * 4);
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 88%;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 28px;
    height: 28px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $vue-teal;
    border-right: 2px solid $vue-teal;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
  width: 100%;

  .card-carousel--card {
    margin: 15px 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: fff;
    border-radius: 2px;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 1rem;
    border: 1.5px solid white;
    text-decoration: none;
    color: inherit;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      border: 1.5px solid #613ff4;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      vertical-align: bottom;
      transition: opacity 150ms linear;
      user-select: none;
      width: 110px;
      margin: 0 40px;
    }

    &--footer {
      border-top: 0;
      padding: 7px 1px;

      .desc {
        font-size: 0.9rem;
        margin-bottom: 2rem;

        span {
          margin-top: 6rem;
        }
      }

      .label {
        margin-top: 0.8rem;
        color: #613ff4;
        font: {
          size: 0.9rem;
          weight: 500;
          family: "Nunito", sans-serif;
        }
      }

      p {
        margin-top: 0.6rem;
        &.tag {
          font-size: 0.8rem;
          font-weight: 300;
          padding: 4px;
          background: rgba(40, 44, 53, 0.06);
          display: inline-block;
          position: relative;
          margin-left: 4px;
          color: $gray;

          a {
            text-decoration: none;
            color: inherit;

            &:hover {
              text-decoration: underline;
            }
          }

          &:before {
            content: "";
            float: left;
            position: absolute;
            top: 0;
            left: -12px;
            width: 0;
            height: 0;
            border-color: transparent rgba(40, 44, 53, 0.06) transparent
              transparent;
            border-style: solid;
            border-width: 8px 12px 12px 0;
          }
          &.secondary {
            margin-left: 0;
            border-left: 1.45px dashed white;
            &:before {
              display: none !important;
            }
          }

          &:after {
            content: "";
            position: absolute;
            top: 8px;
            left: -3px;
            float: left;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: white;
            box-shadow: -0px -0px 0px #004977;
          }
        }
      }

      .title {
        padding: 0.3rem 0;
        margin: 0;
        margin-bottom: 0.3rem;
        font-size: 1.1rem;
        font-family: "Quicksand", sans-serif;
        font-weight: 600;
        color: $vue-navy;
        user-select: none;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $vue-teal;
}

@media only screen and (min-width: 580px) and (max-width: 870px) {
  .card-carousel {
    width: 80%;
  }
}

@media only screen and (max-width: 580px) {
  .card-carousel {
    width: 60%;
  }
}

@media only screen and (max-width: 550px) {
  .card-carousel {
    width: 60%;
  }
}
</style>
