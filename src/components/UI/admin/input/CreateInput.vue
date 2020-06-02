<template lang="pug">
  section.create-input(v-if="panel")
    div.header
      h3 {{ header }}
      div(@click="setPanel")
        Icon.icon(icon="close")
    div.border
    div.input(
      v-for="(inputElem, i) in createInput" 
      :key="i" 
    )
        label(:for="inputElem.id") {{ inputElem.label }}
        DropdownComponent(v-if="inputElem.dropdown")
          template(v-slot:inputText)
            div.input-text(style="cursor: pointer" @click="dropdownOpen = !dropdownOpen")
              div.input-group
                input(
                    type="text"
                  readonly
                  :value="dropdownWatch[inputElem.id]"
                  ref="inputElem"
                  :id="inputElem.id"
                )
                Icon(icon="angle-down")
          template(v-slot:dropdownList)
            ul.dropdown-list(
              v-if="dropdownOpen" 
              @click="dropdownOpen = !dropdownOpen")
              li(
                @click="dropdownHandler(listElm, inputElem.id)"
                v-for="(listElm, i) in inputElem.dropdownList"
                :key="i"
              ) {{ listElm }}
            div.dropdown-backdrop(
                @click="dropdownOpen = !dropdownOpen"
                v-if="dropdownOpen"
            )
        input.input-text(
          v-else
          type="text"
          :placeholder="inputElem.placeholder"
          :id="inputElem.id"
          v-model.lazy="inputParams[i]"
          ref="inputElem"
        )
</template>
<script>
import Icon from 'vue-themify-icons';
import { mapMutations, mapState, mapGetters } from 'vuex';
import DropdownComponent from '../dropdown/Default';

export default {
  name: 'CreateInput',
  components: {
    Icon,
    DropdownComponent,
  },
  watch: {
    panel(newVal) {
      this.inputParams = [];
      this.dropdownOpen = false;
      this.setClearupdateInputState();
      return newVal;
    },
    inputParams(newVal) {
      let modifiedVal = {};

      for (let key = 0; key < newVal.length; key++) {
        if (
          this.$refs.inputElem !== undefined &&
          this.$refs.inputElem[key] !== undefined
        ) {
          modifiedVal = {
            ...modifiedVal,
            [this.$refs.inputElem[key].getAttribute('id')]: newVal[key],
          };
        }
      }
      this.$store.commit('setInputParams', modifiedVal);
    },
  },
  computed: {
    ...mapState(['panel']),
    ...mapGetters({
      dropdownWatch: 'dropdownChoice',
    }),
    inputParams: {
      get() {
        return this.updated;
      },

      set(val) {
        this.updated = this.$store.getters.updateInputState
          ? this.$store.getters.updateInputState
          : val
          ? val
          : [];
      },
    },
  },
  data() {
    return {
      dropdownOpen: false,
      updated: [],
    };
  },
  methods: {
    ...mapMutations(['setPanel', 'setClearupdateInputState']),
    dropdownHandler(val, key) {
      this.$store.commit('setSelectedDropdown', {
        [key]: val,
      });
      this.$store.commit('setDropdownChoice', {
        [key]: val,
      });
    },
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    createInput: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.create-input {
  padding: 0.5rem;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    width: 100%;

    h3 {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    .icon {
      cursor: pointer;
    }
  }

  .border {
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 0.5rem;
  }

  .dropdown-backdrop {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vw;
    z-index: 4;
  }

  .input {
    display: flex;
    flex-direction: column;
    margin-top: 0.9rem;
    padding: 0 0.5rem;
    width: 100%;

    label {
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
      color: #676363;
    }

    .input-text {
      padding: 0.6rem 1rem;
      border: 1px solid #ddd;
      background: #fcfcfc;
      transition: box-shadow 0.4s ease, border 0.4s ease;
      border-radius: 5px;
      z-index: 10;

      .input-group {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        i {
          color: #222;
          font-size: 0.8rem;
        }
      }

      &:focus {
        box-shadow: 0 5px 15px #e8e8e8;
        border: 1px solid #7367f0;
      }
    }
  }
}
</style>
