<template>
  <section class="tab">
    <li ref="tab" @click="tabHandler(iKey)">
      <Icon :icon="tab.icon" />
      <router-link :to="{ name: tab.href }">{{ tab.title }}</router-link>
    </li>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'Tab',
  components: {
    Icon
  },
  methods: {
    tabHandler(tabIndex) {
      const { clientWidth, offsetLeft } = this.$refs.tab;
      this.$emit('tabElem', {
        clientWidth,
        offsetLeft,
        tabIndex
      });
    }
  },
  props: {
    tab: {
      type: Object,
      required: true
    },
    iKey: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped>
.tab li i {
  margin-right: 0.5rem;
}

.tab li a {
  text-decoration: none;
  color: inherit;
}

.tab li:hover {
  color: #7367f0;
  cursor: pointer;
}
</style>
