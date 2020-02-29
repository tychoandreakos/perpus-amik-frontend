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
      <DropdownComponent v-if="inputElem.dropdown">
        <template v-slot:inputText>
          <div
            style="cursor: pointer"
            @click="dropdownOpen = !dropdownOpen"
            class="input-text"
          >
            <div class="input-group">
              <input type="text" readonly :value="dropddownWatch" />
              <Icon icon="angle-down" />
            </div>
          </div>
        </template>
        <template v-slot:dropdownList>
          <ul v-if="dropdownOpen" class="dropdown-list">
            <li
              @click="dropdownHandler(listElm)"
              v-for="(listElm, i) in inputElem.dropdownList"
              :key="i"
            >
              {{ listElm }}
            </li>
          </ul>
        </template>
      </DropdownComponent>
      <input
        class="input-text"
        v-else
        value=""
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
import { mapMutations, mapState } from 'vuex';
import DropdownComponent from '../dropdown/Default';

export default {
  name: 'CreateInput',
  components: {
    Icon,
    DropdownComponent
  },
  watch: {
    inputParams(newVal, oldVal) {
      let modifiedVal = [];
      if (
        this.$refs.inputElem != undefined &&
        newVal.length > this.createInput.length - 1
      ) {
        for (let i = 0; i < newVal.length; i++) {
          modifiedVal.push({
            [this.$refs.inputElem[i].getAttribute('id')]: newVal[i]
          });
        }
        console.log(modifiedVal);
        this.$store.commit('setInputParams', modifiedVal);
      }
    }
  },
  computed: {
    dropddownWatch() {
      return this.$store.state.selectedDropdown;
    }
  },
  data() {
    return {
      dropdownOpen: false,
      inputParams: []
    };
  },
  methods: {
    ...mapMutations(['setPanel']),
    dropdownHandler(val) {
      this.$store.commit('setSelectedDropdown', val);
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