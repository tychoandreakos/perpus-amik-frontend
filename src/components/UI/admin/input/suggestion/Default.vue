<template>
  <ul class="suggest-default">
    <li><b>1702018</b> - Elang Indra</li>
    <li><b>1702018</b> - Elang Indra</li>
  </ul>
</template>
<script>
export default {
  name: 'SuggestDefault'
};
</script>
<style scoped>
.suggest-default {
  position: absolute;
  width: 100%;
  top: 115%;
  background: #fff;
  border: 0.5px solid #cacaca;
  border-radius: 4px;
  z-index: 7;
  list-style: none;
   box-shadow: 0 5px 15px #ebebeb;
}

.suggest-default li {
  padding: 0.5rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  cursor: pointer;
}

.suggest-default li:hover {
  color: #7367f0;
  background: linear-gradient(60% 40%, #7367f0, hsla(0, 0%, 100%, 0.253));
}

.suggest-default li:not(:first-child) {
  border-top: 1px solid #ddd;
}
</style>
