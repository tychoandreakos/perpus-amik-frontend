<template>
  <section id="circulation">
    <HeaderComponent :title="title" :breadcrumbsHeader="breadcrumbs" />
    <CirculationPanelComponent>
        <h3>Its Working!</h3>
    </CirculationPanelComponent>
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
import CirculationPanelComponent from '../../UI/admin/CirculationPanel';

export default {
  name: 'Circulation',
  components: {
    HeaderComponent,
    CirculationPanelComponent
  },
  data() {
    return {
      breadcrumbs: ['Data List'],
      title: 'Circulation'
    };
  }
};
</script>
<style scoped>
#circulation {
  width: 100%;
  height: 100%;
}
</style>
