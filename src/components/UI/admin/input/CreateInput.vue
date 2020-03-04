<template>
  <section class="create-input" v-if="panel">
    <div class="header">
      <h3>{{ header }}</h3>
      <div @click="setPanel">
        <Icon class="icon" icon="close" />
      </div>
    </div>
    <div class="border"></div>
    <div class="input" v-for="(inputElem, i) in createInput" :key="i">
      <label :for="inputElem.id">{{ inputElem.label }}</label>
      <DropdownComponent v-if="inputElem.dropdown">
        <template v-slot:inputText>
          <div
            style="cursor: pointer"
            @click="dropdownOpen = !dropdownOpen"
            class="input-text"
          >
            <div class="input-group">
              <input
                type="text"
                readonly
                :value="dropdownWatch[inputElem.id]"
                ref="inputElem"
                :id="inputElem.id"
              />
              <Icon icon="angle-down" />
            </div>
          </div>
        </template>
        <template v-slot:dropdownList>
          <ul v-if="dropdownOpen" class="dropdown-list">
            <li
              @click="dropdownHandler(listElm, inputElem.id)"
              v-for="(listElm, i) in inputElem.dropdownList"
              :key="i"
            >
              {{ listElm }}
            </li>
          </ul>

          <div
            @click="dropdownOpen = !dropdownOpen"
            class="dropdown-backdrop"
            v-if="dropdownOpen"
          ></div>
        </template>
      </DropdownComponent>
      <input
        class="input-text"
        v-else
        type="text"
        :placeholder="inputElem.placeholder"
        :id="inputElem.id"
        v-model.lazy="inputParams[i]"
        ref="inputElem"
      />
    </div>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
import { mapMutations, mapState, mapGetters } from 'vuex';
import DropdownComponent from '../dropdown/Default';

export default {
  name: 'CreateInput',
  components: {
    Icon,
    DropdownComponent
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
            [this.$refs.inputElem[key].getAttribute('id')]: newVal[key]
          };
        }
      }
      this.$store.commit('setInputParams', modifiedVal);
    }
  },
  computed: {
    ...mapState(['panel']),
    ...mapGetters({
      dropdownWatch: 'dropdownChoice'
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
      }
    }
  },
  data() {
    return {
      dropdownOpen: false,
      updated: []
    };
  },
  methods: {
    ...mapMutations(['setPanel', 'setClearupdateInputState']),
    dropdownHandler(val, key) {
      this.$store.commit('setSelectedDropdown', {
        [key]: val
      });
      this.$store.commit('setDropdownChoice', {
        [key]: val
      });
      this.dropdownOpen = false;
    }
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

.dropdown-backdrop {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vw;
  z-index: 4;
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

.input .input-text {
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  background: #fcfcfc;
  transition: box-shadow 0.4s ease, border 0.4s ease;
  border-radius: 5px;
  z-index: 10;
}

.input .input-text .input-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.input .input-text .input-group i {
  color: #222;
  font-size: 0.8rem;
}

.input .input-text:focus {
  box-shadow: 0 5px 15px #e8e8e8;
  border: 1px solid #7367f0;
}
</style>
