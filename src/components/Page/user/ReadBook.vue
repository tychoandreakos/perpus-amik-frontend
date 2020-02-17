<template>
  <section id="read-book">
    <SidebarComponent />
    <div class="main-wrapper">
      <PdfComponent v-bind="{ url, scale }" />
    </div>
  </section>
</template>
<script>
import SidebarComponent from '../../UI/user/SidebarAlternate';
import PdfComponent from '../../UI/user/PdfDocument';

export default {
  name: 'ReadBook',
  components: {
    SidebarComponent,
    PdfComponent
  },
  data() {
    return {
      url: 'https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS', // a PDF
      scale: 2
    };
  }
};
</script>
<style scoped>
#read-book {
  height: 100%;
  width: 100%;
}

#read-book .main-wrapper {
  margin-left: 2rem;
  padding: 1rem;
}
</style>
