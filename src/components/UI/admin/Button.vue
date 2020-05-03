<template lang="pug">
  button.btn(:style="buttonProp.style" :disabled="!loadingState")
    template(v-if="loadingState")
      Icon(:icon="buttonProp.icon")
      span {{ buttonProp.title }}
    template(v-else)
      Loader(:color="loading.color" :size="loading.size")    
</template>
<script>
import Icon from 'vue-themify-icons';
import Loader from 'vue-spinner/src/ClipLoader';
import { loadingState } from '../../../store/module/API/type';
import { mapGetters } from 'vuex';

export default {
  name: 'Button',
  components: {
    Icon,
    Loader,
  },
  computed: {
    ...mapGetters([loadingState]),
    loadingState() {
      return this[loadingState];
    },
  },
  data() {
    return {
      loading: {
        color: '#5143eb',
        size: '1rem',
      },
    };
  },
  props: {
    buttonProp: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.btn {
  padding: 0.7rem 1rem;
  background: none;
  border: 1px solid #7367f0;
  color: #7367f0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  display: flex;
  font-size: 0.83rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.7rem;
  cursor: pointer;
  position: relative;
  transition: background 0.4s ease;
}

.btn:disabled,
.btn[disabled] {
  color: #666666;
  cursor: no-drop;
  padding-top: 1rem;
}

.btn:not([disabled]):hover {
  background: #7367f0;
  color: #fff;
}

.btn i {
  margin-right: 0.7rem;
}
</style>
