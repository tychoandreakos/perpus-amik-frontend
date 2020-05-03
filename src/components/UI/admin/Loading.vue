<template lang="pug">
    div.loading
        LoadingBar.loading-bar(:color="color")
</template>
<script>
import LoadingBar from 'vue-spinner/src/ScaleLoader';
export default {
  name: 'Loading',
  components: {
    LoadingBar,
  },
  data() {
    return {
      color: '#5643eb',
    };
  },
};
</script>

<style lang="scss">
.loading {
  background: rgba(255, 255, 255, 0.575);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 1;
  animation: opacity 0.4s;
  animation-timing-function: linear;

  .loading-bar {
    animation: shake 0.2s;
    animation-timing-function: linear;
  }

  @keyframes shake {
    from {
      transform: translateX(-50px);
    }
    to {
      transform: translateX(0);
    }
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
