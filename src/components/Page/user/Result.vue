<template lang="pug">
  section#result
    NavbarComponent.navbar
    SidebarCopmnent(style="margin-top: 30px")
    div.main-wrapper
      ResultComponent
</template>
<template>
  <section id="result">
    <NavbarComponent class="result--navbar" />
    <SidebarComponent style="margin-top: 30px" />
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

.main-wrapper {
  margin-left: 3.2rem;
  padding-top: 2rem;
  margin-top: 2rem;
}

#result .navbar {
  position: fixed;
  top: 0;
  height: 30px;
}
</style>
