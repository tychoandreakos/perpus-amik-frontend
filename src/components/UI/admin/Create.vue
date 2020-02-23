<template>
  <section class="none" ref="cr" id="create">
    <div v-show="panel" @click="setPanel" class="backdrop-create"></div>
    <div :style="panel ? { width: '30%' } : { width: '0%' }" class="panel">
      xx
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'create',
  methods: {
    ...mapMutations(['setPanel'])
  },
  computed: {
    ...mapState(['panel'])
  },
  updated() {
    const elem = this.$refs.cr;

    let found = elem.classList;
    if (found[0] === 'none') {
      elem.className = 'block';
    } else {
      setTimeout(() => {
        elem.className = 'none';
      }, 550);
    }
  }
};
</script>
<style scoped>
#create {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  overflow: hidden;
}

.none {
  width: 0% !important;
}

.block {
  width: 100% !important;
}

#create .backdrop-create {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

#create .panel {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 5px 0 10px #c8c8c8;
  max-width: 90vw;
  transition: width 0.5s ease;
}
</style>
