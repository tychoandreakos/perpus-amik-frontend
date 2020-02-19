<template>
  <section id="circulation-prime">
    <HeaderComponent
      :title="circulation.title"
      :breadcrumbsHeader="circulation.breadcrumbs"
    />
    <router-view></router-view>
  </section>
</template>
<script>
import HeaderComponent from '../../UI/admin/Header';
import { mapState } from 'vuex';

export default {
  name: 'Circulation',
  components: {
    HeaderComponent
  },
  computed: {
    ...mapState(['circulation'])
  }
};
</script>
<style scoped>
#circulation-prime {
  width: 100%;
  height: 100%;
}
</style>
