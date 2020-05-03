<template lang="pug">
  section#master-file
    Loading(v-if="loading")
    router-view
</template>
<script>
import Loading from '../../UI/admin/Loading';
import { mapGetters } from 'vuex';
import { loadingBackdrop } from '../../../store/module/API/type';
export default {
  name: 'master',
  components: {
    Loading,
  },
  computed: {
    ...mapGetters({ loading: loadingBackdrop }),
  },
};
</script>
<style scoped>
#master-file {
  width: 100%;
  height: 100%;
}
</style>
