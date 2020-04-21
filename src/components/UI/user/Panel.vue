<template lang="pug">
  section#panel-user
    NewsPanel
    HistoryComponent
</template>
<script>
import HistoryComponent from "./History";
import NewsPanel from "./NewsPanel";

export default {
  name: "PanelUser",
  components: {
    HistoryComponent,
    NewsPanel,
  },
};
</script>
<style scoped>
#panel-user {
  width: 100%;
  background: #f8f8f8;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 2fr 1fr;
}

@media only screen and (max-width: 870px) {
  #panel-user {
    display: flex;
    flex-direction: column;
  }
}
</style>
