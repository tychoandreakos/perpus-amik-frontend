<template>
  <section id="list-user">
    <li :class="list.active ? 'active' : ''" v-if="!list.child">
      <ThemifyIcon icon="user" />
      <a class="link" :href="list.href">{{ list.title }}</a>
    </li>
    <li
      @click="dropdownPanel = !dropdownPanel"
      :class="list.active ? 'active' : ''"
      v-else
    >
      <div
        :style="
          dropdownPanel
            ? { background: '#27262f', borderLeft: '4px solid #613ff4' }
            : {}
        "
        class="link dropdown"
      >
        {{ list.title }}
      </div>
      <template v-for="(listData, i) in list.child">
        <DropdownComponent
          v-if="dropdownPanel"
          :key="i"
          :list="listData"
          :status="dropdownPanel"
        />
      </template>
    </li>
  </section>
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
      dropdownPanel: false
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
}
</style>
