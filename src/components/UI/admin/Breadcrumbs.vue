<template>
  <div class="breadcrumbs">
    <Icon icon="home" />
    <div class="simple" v-for="(bread, i) in breadcrumbs" :key="i">
      <template v-if="breadcrumbs.length > 1">
        <template v-if="i == breadcrumbs.length - 1">
          <Icon icon="angle-double-right" />
          <router-link to="#">{{ bread }}</router-link>
        </template>
        <template v-else>
          <Icon icon="angle-double-right" />
          <span>{{ bread }}</span>
        </template>
      </template>
      <template v-else>
        <Icon icon="angle-double-right" />
        <router-link to="#">{{ bread }}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-themify-icons';
export default {
  name: 'Breadcrumbs',
  components: {
    Icon
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.breadcrumbs .simple {
  align-self: center;
}

.breadcrumbs .simple i {
  font-size: 0.7rem;
  margin: 0 0.7rem;
}

.breadcrumbs .simple span {
  cursor: default;
  user-select: none;
}

.breadcrumbs .simple a {
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #7b94f5;
}

.breadcrumbs .simple a:hover {
  color: #676363;
}
</style>
