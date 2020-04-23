<template lang="pug">
    section#read-book
      SidebarComponent
      div.main-wrapper
        div.header
          span Prev
          span.title Learning React Second Edition
          span Next
        section.content
          div.element(v-html="content")
</template>
<script>
import SidebarComponent from "../../UI/user/SidebarAlternate";
import content from "./content";

export default {
  name: "ReadBook",
  components: {
    SidebarComponent,
  },
  data() {
    return {
      content,
    };
  },
};
</script>
<style lang="scss">
#read-book {
  height: 100%;
  width: 100%;
  .main-wrapper {
    margin-left: 3rem;

    .content {
      padding: 0.8rem;
      overflow: hidden;

      .element {
        display: flex;
        justify-content: center;
        transform: scale(1.15);

        font: {
          size: 20px !important;
        }
      }
    }

    .header {
      border-bottom: 1px solid #ddd;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      text-align: center;
      cursor: pointer;
      font: {
        family: "Poppins", sans-serif;
      }

      span {
        padding: 1.2rem;
      }

      .title {
        font: {
          weight: 500;
        }
        border: {
          left: 1px solid #ddd;
          right: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
