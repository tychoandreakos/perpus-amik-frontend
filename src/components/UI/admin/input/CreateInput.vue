<template>
  <section class="create-input">
    <div class="header">
      <h3>Add new {{ header }}</h3>
      <div @click="setPanel">
        <Icon class="icon" icon="close" />
      </div>
    </div>
    <div class="border"></div>
    <div class="input" v-for="(inputElem, i) in createInput" :key="i">
      <label :for="inputElem.id">{{ inputElem.label }}</label>
      <input
        value=""
        type="text"
        :placeholder="inputElem.placeholder"
        :id="inputElem.id"
      />
    </div>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
import { mapMutations } from 'vuex';

export default {
  name: 'CreateInput',
  components: {
    Icon
  },
  methods: {
    ...mapMutations(['setPanel'])
  },
  props: {
    header: {
      type: String,
      required: true
    },
    createInput: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.create-input {
  padding: 0.5rem;
  width: 100%;
}

.create-input .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  width: 100%;
}

.create-input .header h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.create-input .header .icon {
  cursor: pointer;
}

.create-input .border {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 0.5rem;
}

.input {
  display: flex;
  flex-direction: column;
  margin-top: 0.9rem;
  padding: 0 0.5rem;
  width: 100%;
}

.input label {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #676363;
}

.input input {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  background: #fcfcfc;
  transition: box-shadow 0.4s ease, border 0.4s ease;
  border-radius: 5px;
}

.input input:focus {
  box-shadow: 0 5px 15px #e8e8e8;
  border: 1px solid #7367f0;
}
</style>
