<template>
  <button class="btn-custom">{{ title }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.btn-custom {
  border: none;
  padding: 0.6rem 2.5rem;
  border-radius: 0.3rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background: #613ff4;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease-in;
}

.btn-custom:hover {
  box-shadow: 0 4px 15px rgb(97, 63, 244, 0.6);
}
</style>
