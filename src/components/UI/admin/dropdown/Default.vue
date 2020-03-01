<template>
  <section class="dropdown-default">
    <div class="input">
      <slot name="inputText"></slot>
    </div>
    <slot name="dropdownList"></slot>
  </section>
</template>
<script>
export default {
  name: 'DropdownDefault'
};
</script>
<style scoped>
.dropdown-default,
.dropdown-default .input,
.dropdown-default .input input {
  width: 100%;
  z-index: 10;
}

.dropdown-default .input input {
  background: inherit;
  border: none;
  cursor: inherit;
  user-select: none;
}

.dropdown-default {
  position: relative;
}

.dropdown-default ul {
  list-style: none;
  background: #fff;
  box-shadow: 0 5px 15px #fafafa;
  border: 0.1px solid #eee;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.dropdown-default ul li {
  padding: 0.7rem 1rem;
  cursor: pointer;
  font-size: 0.81rem;
  font-family: 'Noto Sans', sans-serif;
  color: #222;
}

.dropdown-default ul li:hover {
  background: #f8f8f8;
}
</style>
