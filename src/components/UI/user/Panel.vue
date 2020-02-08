<template>
  <section id="panel-user">
    <div class="ax"></div>
    <HistoryComponent />
  </section>
</template>
<script>
import HistoryComponent from "./History";
export default {
  name: "PanelUser",
  components: {
    HistoryComponent
  }
};
</script>
<style scoped>
#panel-user {
  width: 100%;
  background: #f8f8f8;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>
