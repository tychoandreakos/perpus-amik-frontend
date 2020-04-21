<template lang="pug">
  section#dropdown
    div.dropdown(@click="panelHandler = !panelHandler")
      h3 {{ info.title }}
      div.arrow
        div.icon(:style="panelHandler ? 'transform: rotate(90deg)' : ''") 
          Icon(icon="angle-down")
    div.panel-dropdown(:style="panelHandler ? 'height: 125px' : 'height: 0'")
      div.panel-text {{ info.description }}
</template>
<script>
import Icon from "vue-themify-icons";

export default {
  name: "Dropdown",
  components: {
    Icon,
  },
  data() {
    return {
      panelHandler: false,
    };
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
#dropdown {
  display: block;
}

#dropdown .dropdown {
  border: 1.5px solid #d5d8d6;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: "Quicksand", sans-serif;
  font-weight: 400 !important;
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

#dropdown .dropdown h3 {
  font-size: 1.1rem;
  padding: 0.8rem;
}

#dropdown .dropdown .arrow {
  background: #d5d8d6;
  padding: 0 1.5rem;
  display: flex;
}

#dropdown .dropdown .arrow .icon {
  align-self: center;
  transition: 0.2s transform ease;
}

#dropdown .panel-dropdown {
  background: #fff;
  width: 100%;
  border-left: 1.5px solid #d5d8d6;
  border-right: 1.5px solid #d5d8d6;
  border-bottom: 1.5px solid #d5d8d6;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.2);
  transition: height 0.2s ease-in;
  overflow: hidden;
  z-index: 2;
  max-height: 150px;
  position: relative;
  margin-top: -18px;
}

#dropdown .panel-dropdown .panel-text {
  padding: 0.8rem;
}
</style>
