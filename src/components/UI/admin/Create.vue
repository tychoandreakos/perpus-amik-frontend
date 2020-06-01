<template lang="pug">
  section.none(ref="cr" id="create")
    div.backdrop-create(@click="setPanel" v-show="panel")
    div.panel(:style="panel ? {width: '30%'} : { width: '0%' }")
      form(@submit.prevent="submitHandler")
        CreateInput(:header="header" :createInput="createInput")
        div.footer
          SmallButton(:btn="button")
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import CreateInput from './input/CreateInput';
import SmallButton from './button/MiniButton';
import {
  getType,
  createPost,
  updatePOST,
  IDPOST,
  dialog,
  messagePrompt,
  msgPrompt,
} from '../../../store/module/API/type';

export default {
  name: 'create',
  components: {
    CreateInput,
    SmallButton,
  },
  methods: {
    ...mapMutations([
      'setPanel',
      'setDefaultParams',
      'setCountUpdate',
      'setDropdownVal',
      'setClearEditProps',
      'updateMaster',
    ]),
    ...mapMutations({
      dialog: dialog,
      messagePrompt: messagePrompt,
    }),
    checkDropdown() {
      let dropdownData;
      for (let key in this.selectedDropdown) {
        if (this.selectedDropdown.hasOwnProperty(key)) {
          dropdownData = {
            ...this.inputParams[this.inputParams.length - 1],
            ...this.selectedDropdown,
          };
        }
      }

      if (!dropdownData) {
        dropdownData = {
          ...this.inputParams[this.inputParams.length - 1],
        };
      }

      return dropdownData;
    },
    cleanState() {
      this.setPanel();
      this.setClearEditProps();
      this.setDefaultParams();
    },
    submitWithAlert(dataSubmit) {
      this.messagePrompt(this.msgPrompt.save);
      this.dialog(() => {
        this.$store.dispatch(this.getType, {
          title: this.getType,
          data: {
            method: createPost,
            ...dataSubmit,
          },
        });

        this.cleanState();
      });
    },
    updateHandler(dataSubmit) {
      this.messagePrompt(this.msgPrompt.update);
      this.dialog(() => {
        this.$store.dispatch(this.getType, {
          title: this.getType,
          data: {
            method: updatePOST,
            id: this.IDPOST,
            ...dataSubmit,
          },
        });

        this.cleanState();
      });
    },
    submitHandler() {
      const dropdownVal = this.checkDropdown();
      if (this.editPropsUpdate) {
        this.updateHandler(dropdownVal);
      } else {
        this.submitWithAlert(dropdownVal);
      }
    },
  },
  computed: {
    ...mapState([
      'panel',
      'createInput',
      'header',
      'inputParams',
      'countUpdate',
      'dropdownChoice',
    ]),
    ...mapGetters({
      dropdownChoice: 'dropdownChoice',
      selectedDropdown: 'selectedDropdown',
      editPropsUpdate: 'editPropsUpdate',
      table: 'tableTypes',
      getType,
      IDPOST,
      msgPrompt: msgPrompt,
    }),
  },
  data() {
    return {
      button: {
        title: 'Submit',
        style: {
          background: '#7367f0',
          padding: '.7rem 2.5rem',
        },
      },
    };
  },
  updated() {
    this.countUpdate === 2 ? 0 : this.setCountUpdate();

    const panelControl = () => {
      const elem = this.$refs.cr;
      let found = elem.classList;

      const closePanelTimeout = () => {
        return setTimeout(() => {
          elem.className = 'none';
          this.setClearEditProps();
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

      if (this.inputParams.length > 0) {
        if (this.panel == false) {
          closePanelTimeout();
        } else {
          checkElemClass();
        }
      } else {
        panelController();
      }
    };

    if (this.countUpdate === 2) {
      panelControl();
    }
  },
};
</script>
<style lang="scss">
#create {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  overflow: hidden;

  .backdrop-create {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .panel {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    box-shadow: 5px 0 10px #c8c8c8;
    max-width: 90vw;
    transition: width 0.3s ease;

    .footer {
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
  }
}

.none {
  width: 0% !important;
}

.block {
  width: 100% !important;
}
</style>
