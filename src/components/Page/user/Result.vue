<template>
  <section id="result">
    <NavbarComponent class="result--navbar" />
    <SidebarComponent />
    <div class="result--main-wrapper">
      <ResultComponent />
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/user/SidebarAlternate';
import ResultComponent from '../../UI/user/Result';
import NavbarComponent from '../../UI/user/NavbarAlternate';

export default {
  name: 'Result',
  components: {
    SidebarComponent,
    ResultComponent,
    NavbarComponent
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
  margin-top: 2rem;
}

#result .result--navbar {
  position: fixed;
  top: 0;
  height: 30px;
}
</style>
