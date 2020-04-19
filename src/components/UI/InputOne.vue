<template>
  <div class="input">
    <label v-if="showLabel" :placeholder="placeholder" :for="formName">{{
      name
    }}</label>
    <input
      :placeholder="placeholder"
      :id="formName"
      :type="typeInput"
      v-model="myInput"
      @keypress.enter="submit"
      @blur="submit"
      required
    />
  </div>
</template>
<script>
// props available

// 1. Name -> name for label & input name
// 2. typeInput -> typeInput determine the input must be type of (text / password / email)
// 3. placeholder -> String, this is for adding placeholder

import { mapMutations } from "vuex";

export default {
  name: "InputOne",
  data() {
    return {
      myInput: "",
    };
  },
  methods: {
    ...mapMutations(["insertInput"]),
    submit() {
      if (this.myInput.length > 0) {
        this.insertInput({
          [this.formName]: this.myInput,
        });
      }
    },
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    formName: {
      required: true,
      type: String,
    },
    typeInput: {
      required: false,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    showLabel: {
      required: false,
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.7rem;
}

.input label {
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
}

.input input:focus {
  border-bottom: 1.8px solid #888;
}

.input input {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  background: inherit;
  border: none;
  position: relative;
  padding: 0.6rem 0.4rem;
  font-size: 0.96rem;
  transition: border-bottom 0.4s ease-in;
  width: 100%;
  border-bottom: 1.5px solid #ccc;
}
</style>
