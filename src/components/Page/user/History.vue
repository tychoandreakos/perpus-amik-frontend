<template lang="pug">
  section#history-wrapper
    h3 Your History
    div.user-history-wrapper
        UserHistory(v-for="(history, i ) in getHistory" :key="i" :history="history")
</template>

<script>
import UserHistory from "../../UI/user/UserHistory";
import { mapGetters } from "vuex";

export default {
  name: "History",
  components: {
    UserHistory,
  },
  computed: {
    ...mapGetters(["getHistory"]),
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
