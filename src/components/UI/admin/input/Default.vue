<template>
  <div class="input-default">
    <transition name="fade">
      <label v-if="label" :for="config.name">{{ config.placeholder }}</label>
    </transition>
    <input v-model="search" :id="config.name" :type="config.type" required />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'default',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  watch: {
    search(val) {
      val.length > 0 ? (this.label = false) : (this.label = true);
    }
  },
  data() {
    return {
      search: '',
      label: true
    };
  }
};
</script>
<style scoped>
.input-default {
  width: 100%;
  position: relative;
}

.input-default input {
  width: 100%;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  width: 100%;
  background: #fff;
  border: 0.5px solid #cacaca;
  border-radius: 4px;
  padding: 0.6rem 0.6rem;
  transition: all 0.2s ease-in;
}

.input-default label {
  position: absolute;
  left: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  color: #b5b5ad;
  top: 25%;
  cursor: text;
}

.input-default input:focus {
  border: 0.5px solid #7367f0;
  box-shadow: 0 5px 15px #ebebeb;
}

.input-default input:focus + label {
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
