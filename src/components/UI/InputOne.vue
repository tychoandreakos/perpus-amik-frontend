<template>
  <div class="input">
    <label :placeholder="placeholder" :for="name">{{ name }}</label>
    <input :placeholder="placeholder" :id="name" :type="typeInput" />
  </div>
</template>
<script>
export default {
  name: "InputOne",
  props: {
    name: {
      required: true,
      type: String
    },
    typeInput: {
      required: false,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    }
  }
};
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  margin: 0.7rem;
}

.input label {
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
}

.input input {
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  background: inherit;
  border: none;
  position: relative;
  padding: 0.6rem 0.4rem;
  border-bottom: 1.5px solid #ccc;
  font-size: 0.96rem;
  transition: border-bottom 0.7s ease-in;
}

.input input:focus {
  border-bottom: 1.5px solid #019875;
}
</style>
