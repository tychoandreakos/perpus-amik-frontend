<template>
  <section class="none" ref="cr" id="create">
    <div v-show="panel" @click="setPanel" class="backdrop-create"></div>
    <div :style="panel ? { width: '30%' } : { width: '0%' }" class="panel">
      <form @submit.prevent="submitHandler">
        <CreateInput :header="header" :createInput="createInput" />
        <div class="footer">
          <SmallButton :disabled="inputParams.length < 1" :btn="button" />
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import CreateInput from './input/CreateInput';
import SmallButton from './button/MiniButton';

export default {
  name: 'create',
  components: {
    CreateInput,
    SmallButton
  },
  methods: {
    ...mapMutations(['setPanel']),
    submitHandler() {
      // console.log(this.inputParams);
    }
  },
  computed: {
    ...mapState(['panel', 'createInput', 'header', 'inputParams'])
  },
  data() {
    return {
      button: {
        title: 'Submit',
        style: {
          background: '#7367f0',
          padding: '.7rem 2.5rem'
        }
      }
    };
  },
  updated() {
    this.$store.state.countUpdate === 2
      ? 0
      : this.$store.commit('setCountUpdate');

    const panelControl = () => {
      const elem = this.$refs.cr;
      let found = elem.classList;

      const closePanelTimeout = () => {
        return setTimeout(() => {
          elem.className = 'none';
        }, 200);
      };

      const checkElemClass = () => {
        if (found[0] === 'none') {
          return (elem.className = 'block');
        }

        return false;
      };

      const panelController = () => {
        if (!checkElemClass()) closePanelTimeout();
      };

      if (this.$store.state.inputParams.length > 0) {
        if (this.$store.state.panel == false) {
          closePanelTimeout();
        } else {
          checkElemClass();
        }
      } else {
        panelController();
      }
    };

    if (this.$store.state.countUpdate === 2) {
      panelControl();
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
  transition: width 0.3s ease;
}

#create .panel .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ddd;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
</style>
