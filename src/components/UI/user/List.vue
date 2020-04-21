<template lang="pug">
  section#list-user
    li( :class="list.active ? 'active' : ''" v-if="!list.child" )
      div.link-wrap
        router-link.link(:to="list.href") #[ThemifyIcon(:icon="list.icon")] {{ list.title }}
    li(
      @click="dropdownPanel = !dropdownPanel"
      :class="list.active ? 'active' : ''"
      v-else
    )
      div.link(
        :style=" dropdownPanel ? { background: '#27262f', borderLeft: '4px solid #613ff4' } : {}"
        class="dropdown"
      )
        div #[ThemifyIcon(:icon="list.icon")] {{ list.title }}
        ThemifyIcon(
          :class="[dropdownPanel ? 'rotate' : '', 'caret']"
          :icon="caret"
        )
      template(v-for="(listData, i) in list.child")
        DropdownComponent(
          v-if="dropdownPanel"
          :key="i"
          :list="listData"
          :status="dropdownPanel"
        )
</template>

<script>
import DropdownComponent from "./DropdownSidebar";
import ThemifyIcon from "vue-themify-icons";

export default {
  name: "List",
  components: {
    DropdownComponent,
    ThemifyIcon
  },
  data() {
    return {
      dropdownPanel: false,
      caret: "angle-down"
    };
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
li {
  display: inline-block;
  width: 100%;
}

li a {
  transition: all 0.2s ease-in-out;
}

li a i,
.dropdown i {
  font-size: 0.9rem;
  margin-right: 0.8rem;
}

.active,
li a:hover,
.dropdown:hover {
  background: #27262f;
  border-left: 4px solid #613ff4;
}

li .link {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 0.9rem;
}

li .dropdown {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li .dropdown .caret {
  font-size: 0.7rem;
  transition: transform 0.4s ease;
}

.rotate {
  transform: rotate(180deg);
}
</style>
