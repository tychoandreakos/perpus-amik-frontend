<template lang="pug">
  div.panel-action
    div.panel-wrap
      DropdownComponent(v-if="!settings.action" :restoreState="restore" :settings="settings")
      div.panel-wrap(v-if="button.type == 'add'" @click="setPanel")
        ButtonComponent( 
        :style="{ marginLeft: '1.2rem' }"
        :buttonProp="button"
        )
      div.panel-wrap(v-if="button.type == 'delete'" @click="deleteHandler")
        ButtonComponent( 
        :style="{ marginLeft: '1.2rem' }"
        :buttonProp="button"
        )
      div.panel-wrap(v-if="button.type == 'membership'" @click="membershipHandler")
        ButtonComponent( 
        :style="{ marginLeft: '1.2rem' }"
        :buttonProp="button"
        )
    div.panel-wrap
      PageNumberComponent(:total="total" @count="count")
      SearchComponent(:search="search")
</template>
<script>
import DropdownComponent from './Dropdown';
import ButtonComponent from './Button';
import PageNumberComponent from './PageNumber';
import SearchComponent from './Search';
import { mapMutations, mapActions } from 'vuex';

import { dialog, destroyAll } from '../../../store/module/API/type';

export default {
  name: 'PanelAction',
  components: {
    DropdownComponent,
    ButtonComponent,
    PageNumberComponent,
    SearchComponent,
  },
  methods: {
    ...mapMutations(['setPanel']),
    ...mapMutations({
      dialog: dialog,
    }),
    ...mapActions({
      destroyAll: destroyAll,
    }),
    deleteHandler() {
      this.dialog(() => {
        this.destroyAll();
      });
    },
    membershipHandler() {
      this.$router.push({
        name: 'membership.add',
      });
    },
    count(e) {
      this.$emit('count', e);
    },
  },
  props: {
    restore: {
      types: Boolean,
      required: false,
    },
    button: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    search: {
      type: Object,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.panel-action {
  width: 100%;

  &,
  .panel-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
