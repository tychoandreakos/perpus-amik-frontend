<template lang="pug">
  section.card-default
    form(@submit.prevent="submitForm")
      div.form-wrapper(v-for="update in getDetails.result.data" :key="update.id")
        h3.title Update GMD dengan CODE: {{ update.gmd_code }}
        div.input
          div(@click="why(elem.id, update.id)" :key="i" v-for="(elem, i) in createInput")
            Input(:property="elem" :value="update[elem.id]"  @input="inputPlaceholder")
      Button.btn(:buttonProp="button")
  </template>

<script>
import Input from './Input/Default';
import Button from '../Button';
import { mapGetters, mapActions } from 'vuex';
import {
  updateOrEditGmd,
  tableId,
  getDetailsGmd,
  updateSomeGmd,
} from '../../../../store/module/API/type';

export default {
  name: 'CardDefault',
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapGetters({
      createInput: updateOrEditGmd,
      tableId: tableId,
      getDetails: getDetailsGmd,
    }),
  },
  created() {
    if (this.createInput.length < 1) {
      this.$router.push({
        name: 'gmd',
      });
    }
    this.getDetailsGmd();
  },
  methods: {
    ...mapActions({
      getDetailsGmd: getDetailsGmd,
      updateSomeGmd: updateSomeGmd,
    }),
    checkForm() {
      const forms = Object.keys(this.form);
      const details = this.getDetails.result.data;
      let x;
      if (forms.length > 0) {
        for (let form of forms) {
          for (let i = 0; i < details.length; i++) {
            for (let k = 0; k < this.createInput.length; k++) {
              if (!(this.createInput[k].id in this.form[details[i].id])) {
                this.form[details[i].id] = {
                  ...this.form[details[i].id],
                  [this.createInput[k].id]: details[i][this.createInput[k].id],
                };
              }
            }
          }
        }
      } else {
        console.log('wow you dont insert anything');
      }
    },
    submitForm() {
      this.checkForm();
      this.updateSomeGmd(this.form);
    },
    why(elem, id) {
      this.tempData = elem;
      this.tempId = id;
    },
    inputPlaceholder(val) {
      this.form = {
        ...this.form,
        [this.tempId]: {
          ...this.form[this.tempId],
          [this.tempData]: val,
        },
      };
    },
  },
  data() {
    return {
      form: {},
      tempData: '',
      tempId: '',
      button: {
        style: {},
        icon: 'check',
        title: 'Update All GMD',
      },
    };
  },
};
</script>

<style lang="scss">
.card-default {
  width: 100%;
  box-shadow: 0 5px 15px #f1f1f1;
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 7px;

  form {
    padding: 0.2rem 0.8rem;
  }

  .btn {
    margin: auto;
  }

  .form-wrapper {
    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }

    .title {
      margin-bottom: 0.5rem;
      font: {
        size: 0.9rem;
      }
    }
  }

  .input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.3rem;
    column-gap: 1rem;
    margin-bottom: 1.5rem;
  }
}
</style>
