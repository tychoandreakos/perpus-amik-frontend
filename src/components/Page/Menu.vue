<template lang="pug">
  section#menu
    MenuComponent(
      :activeStatus="showPanel"
      @changeData="updateData"
    )
    div.backdrop(@click="disabledPanel" v-if="showPanel")
    PanelComponent(
      :oldMenu="oldMenu ? oldMenu : 'default'"
      :dataMenu="newMenu.length >= 1 ? newMenu : oldMenu"
      :showPanel="showPanel"
    )
</template>
<script>
import MenuComponent from "../UI/Menu.vue";
import PanelComponent from "../UI/Panel.vue";

export default {
  name: "Menu",
  components: {
    MenuComponent,
    PanelComponent,
  },
  data() {
    return {
      showPanel: false,
      oldMenu: "",
      newMenu: "",
    };
  },
  methods: {
    disabledPanel() {
      if (this.newMenu.length === 0) this.newMenu = this.oldMenu;
      else this.oldMenu = this.newMenu;
      this.showPanel = false;
      setTimeout(() => {
        this.oldMenu = "";
        this.newMenu = "";
      }, 600);
    },
    updateData(e) {
      if (this.oldMenu.length <= 0) {
        this.oldMenu = e.target.innerHTML;
        this.showPanel = !this.showPanel;
      } else if (this.oldMenu === this.newMenu) {
        this.showPanel = !this.showPanel;
      } else if (this.oldMenu != this.newMenu) {
        if (this.newMenu.length >= 1) {
          this.oldMenu = this.newMenu;
          this.newMenu = "";
        }
        if (this.oldMenu != e.target.innerHTML)
          this.newMenu = e.target.innerHTML;
        this.showPanel = false;
        setTimeout(() => {
          this.showPanel = !this.showPanel;
        }, 600);
      } else this.newMenu = e.target.innerHTML;
    },
  },
};
</script>
<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  z-index: 3;
}
</style>
