<template lang="pug">
  ul#user-history
    li
      img(:src="history.img.src" :alt="history.img.alt")
      div.desc
          div.tag #[Tag(icon="book" :tag="history.tag")]
          Link(href="#" :title="history.title")
          span.author By {{ history.author | capitalize }}
          div.progress
            span {{ widthPercentage.width }} Progress
            div.progress-bar
              div.progress-percentage(:style="widthPercentage")
          div.btn
            Button(title="continue")
</template>

<script>
import Tag from "./Tag";
import Link from "./HeaderLink";
import Button from "./Button";

export default {
  name: "UserHistory",
  components: {
    Tag,
    Link,
    Button,
  },
  props: {
    history: {
      type: Object,
      required: true,
    },
  },
  computed: {
    widthPercentage() {
      let progress = this.history.progress;
      if (progress >= 100) progress = 100;
      else if (progress <= 0) progress = 0;
      return {
        width: `${progress}%`,
      };
    },
  },
};
</script>

<style lang="scss">
#user-history {
  width: 100%;

  li {
    display: grid;
    grid-template-columns: 16% 84%;
    padding: 1.7rem 0;
    border-bottom: 1px solid #ddd;

    img {
      width: 70%;
    }

    .author {
      margin: 0.8rem 0;
      font: {
        size: 0.9rem;
        family: "Poppins", sans-serif;
      }
    }

    .btn {
      margin-top: 0.8rem;
    }

    .progress {
      margin-top: 0.4rem;
      display: flex;
      align-items: center;
      font: {
        weight: 500;
        size: 0.8rem;
      }

      span {
        display: inline;
        margin-right: 0.8rem;
      }

      .progress-bar {
        height: 6px;
        width: 80%;
        background: #eee;
        border-radius: 5px;
        position: relative;

        .progress-percentage {
          background: #613ff4;
          top: 0;
          left: 0;
          bottom: 0;
          height: inherit;
          border-radius: inherit;
        }
      }
    }
  }
}
</style>
