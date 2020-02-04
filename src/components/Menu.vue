<template>
  <section id="menu">
    <MenuComponent @changeData="updateData"/>
    <PanelComponent :showPanel="showPanel" />
  </section>
</template>
<script>
import MenuComponent from "./UI/Menu.vue";
import PanelComponent from "./UI/Panel.vue";

export default {
  name: "Menu",
  components: {
    MenuComponent,
    PanelComponent
  },
  data() {
      return {
          showPanel: false,
          oldMenu: '',
          newMenu: ''
      }
  },
  methods: {
    updateData(e) {
        if(this.oldMenu.length <= 0) {this.oldMenu = e.target.innerHTML; this.showPanel = !this.showPanel;}
        else if(this.oldMenu === this.newMenu) { 
            this.showwPanel = !this.showPanel;
        }
        else if(this.oldMenu != this.newMenu) {
            if(this.newMenu.length >= 1) this.oldMenu = this.newMenu;
            this.newMenu = e.target.innerHTML;
            this.showPanel = false;
            setTimeout(() => {
                this.showPanel = !this.showPanel;
            }, 600)     
        }
        else this.newMenu = e.target.innerHTML;

    },
  }
};
</script>
<style></style>
