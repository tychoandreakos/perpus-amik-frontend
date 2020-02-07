<template>
  <router-link v-if="!submit" :to="link.href" class="btn btn-attend">
    {{ link.title }}
  </router-link>
  <button v-else class="btn btn-attend">
    {{ link.title }}
  </button>
</template>
<script>
export default {
  name: "ButtonSimple",
  props: {
    link: {
      type: Object,
      required: false
    },
    submit: {
      type: Boolean,
      required: false
    }
  }
};
</script>
<style scoped>
.btn.btn-attend {
  background: transparent;
  border: 2.5px solid #f2ba7a;
  color: #494949;
  font-family: "Poppins", sans-serif;
  font-size: 0.88rem;
  padding: 0.6rem 1rem;
  letter-spacing: 1.1px;
  cursor: pointer;
  transition: background 0.5s ease;
  text-decoration: none;
}

.btn.btn-attend:hover {
  background: #f2ba7a;
  color: #fff;
}
</style>
