<template>
  <section id="circulation">
    <CirculationPanelComponent>
      <h3>Search Member ID</h3>
      <div class="member-search">
        <InputDefaultComponent :config="config">
          <SuggestSearchComponent v-if="false"
        /></InputDefaultComponent>
      </div>
      <ButtonComponent :buttonProp="button" />
    </CirculationPanelComponent>
  </section>
</template>
<script>
import CirculationPanelComponent from '../../UI/admin/CirculationPanel';
import InputDefaultComponent from '../../UI/admin/input/Default';
import ButtonComponent from '../../UI/admin/Button';
import SuggestSearchComponent from '../../UI/admin/input/suggestion/Default';

export default {
  name: 'Circulation',
  components: {
    CirculationPanelComponent,
    InputDefaultComponent,
    ButtonComponent,
    SuggestSearchComponent
  },
  mounted() {
    this.$store.commit('setCirculation', {
      title: this.title,
      breadcrumbs: this.breadcrumbs
    });
  },
  data() {
    return {
      breadcrumbs: ['Search Member ID'],
      title: 'Circulation',
      config: {
        placeholder: 'Masukkan Member ID',
        type: 'text',
        name: 'search-member'
      },
      button: {
        icon: 'search',
        title: 'Start Transaction'
      }
    };
  }
};
</script>
<style scoped>
#circulation {
  width: 100%;
  height: 100%;
}

#circulation h3 {
  font-size: 1.4rem;
  font-family: 'Quicksand', sans-serif;
  color: #322c2c;
}

#circulation .member-search {
  width: 60%;
  height: 20%;
  /* background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  position: relative;
}
</style>
