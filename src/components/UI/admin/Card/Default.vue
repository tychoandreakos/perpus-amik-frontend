<template lang="pug">
  section.card-default
    form
      div.form-wrapper
        h3.title Update #1
        div.input
          div(@click="why(elem.id)" :key="i" v-for="(elem, i) in createInput")
            Input(:property="elem"  @input="inputPlaceholder")
      div.form-wrapper
        h3.title Update #2
        div.input
          div(@click="why(elem.id)" :key="i" v-for="(elem, i) in createInput")
            Input(:property="elem"  @input="inputPlaceholder")
      Button.btn(:buttonProp="button")
  </template>

<script>
import Input from './Input/Default';
import Button from '../Button';
import { mapState } from 'vuex';

export default {
  name: 'CardDefault',
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapState(['createInput']),
  },

  methods: {
    why(elem) {
      this.tempData = elem;
    },
    inputPlaceholder(val) {
      this.form = {
        ...this.form,
        [this.tempData]: val,
      };
    },
  },
  data() {
    return {
      form: {},
      tempData: '',
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
