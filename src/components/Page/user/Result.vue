<template>
  <section id="result">
    <SidebarComponent />
    <div class="result--main-wrapper">
      <ResultComponent />
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/user/SidebarAlternate';
import ResultComponent from '../../UI/user/Result';

export default {
  name: 'Result',
  components: {
    SidebarComponent,
    ResultComponent
  }
};
</script>
<style scoped>
#result {
  height: 100%;
  background: #f5f5f5;
}

.result--main-wrapper {
  margin-left: 3.2rem;
  padding-top: 2rem;
}
</style>
