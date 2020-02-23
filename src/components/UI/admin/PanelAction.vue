<template>
  <div class="panel-action">
    <div class="panel-wrap">
      <DropdownComponent />
      <div @click="setPanel" class="panel-wrap">
        <ButtonComponent
          :style="{ marginLeft: '1.2rem' }"
          :buttonProp="button"
        />
      </div>
    </div>
    <div class="panel-wrap">
      <PageNumberComponent />
      <SearchComponent :search="search" />
    </div>
  </div>
</template>
<script>
import DropdownComponent from './Dropdown';
import ButtonComponent from './Button';
import PageNumberComponent from './PageNumber';
import SearchComponent from './Search';
import { mapMutations } from 'vuex';

export default {
  name: 'PanelAction',
  components: {
    DropdownComponent,
    ButtonComponent,
    PageNumberComponent,
    SearchComponent
  },
  methods: {
  ...mapMutations(['setPanel'])
  },
  props: {
    button: {
      type: Object,
      required: true
    },
    search: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.panel-action,
.panel-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.panel-action {
  width: 100%;
}
</style>
