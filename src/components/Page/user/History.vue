<template lang="pug">
  section#history-wrapper
    h3 Your History
    div.user-history-wrapper
        UserHistory(v-for="(history, i ) in histories" :key="i" :history="history")
</template>

<script>
import UserHistory from "../../UI/user/UserHistory";
export default {
  name: "History",
  components: {
    UserHistory,
  },
  data() {
    return {
      histories: [
        {
          img: {
            src: "https://learning.oreilly.com/library/cover/9781491990070/",
            alt: "image",
          },
          title: "WordPress Academy: Learn WordPress step by step",
          tag: "Book",
          author: "Chris Dixon",
          progress: 5,
        },

        {
          img: {
            src: "https://learning.oreilly.com/library/cover/9781789532012/",
            alt: "image",
          },
          title: "WordPress 5 Complete - Seventh Edition",
          tag: "Book",
          author: "Chris Dixon",
          progress: 20,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#history-wrapper {
  padding: 2.5rem 3.5rem;

  h3 {
    font: {
      size: 1.8rem;
      family: "Nunito", sans-serif;
      weight: 400;
    }
  }

  .user-history-wrapper {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
