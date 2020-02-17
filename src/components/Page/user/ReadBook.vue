<template>
  <section id="read-book">
    <SidebarComponent />
    <div class="main-wrapper">
      <PdfComponent />
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/user/SidebarAlternate';
import PdfComponent from '../../UI/user/PdfRead';

export default {
  name: 'ReadBook',
  components: {
    SidebarComponent,
    PdfComponent
  }
};
</script>
<style scoped>
#read-book {
  height: 100%;
  width: 100%;
}

#read-book .main-wrapper {
  margin-left: 3rem;
  padding: 1rem;
}
</style>
