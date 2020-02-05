<template>
  <a href="#" class="btn btn-attend">
      {{ title }}
  </a>
</template>
<script>
export default {
    name: "ButtonSimple",
    props: ['title']
}
</script>>
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
