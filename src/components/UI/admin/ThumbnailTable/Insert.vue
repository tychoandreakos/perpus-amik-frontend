<template lang="pug">
    div.insert-form
        h3.title Please Insert Data.
        form
            div.form-wrapper
                label First Name
                Input(:property="property" value="" :disabledLabel="true" @input="input")
            div.form-wrapper
                label Sex
                Choice(:state="choiceData" @choice="choiceHandler")
            div.form-wrapper
                label Member Type
                Dropdown(:typeMember="typeMember" @choice="typeMemberHandler")
</template>

<script>
import Input from '../Card/Input/Default';
import Choice from './CircleChoice';
import Dropdown from './Dropdown';

export default {
  name: 'InsertFormMembership',
  components: {
    Input,
    Choice,
    Dropdown,
  },
  methods: {
    input(e) {
      console.log(e);
    },
    typeMemberHandler(val) {
      console.log(val);
    },
    choiceHandler(key) {
      key == 0
        ? (this.choiceData[1].selected = false)
        : (this.choiceData[0].selected = false);
      this.choiceData[key].selected = !this.choiceData[key].selected;
    },
  },
  data() {
    return {
      typeMember: ['mahasiswa', 'dosen', 'satpam'],
      choiceData: [
        {
          selected: true,
          title: 'female',
          icon: 'crown',
        },
        {
          selected: false,
          title: 'male',
          icon: 'user',
        },
      ],
      property: {
        id: 'baby',
        placeholder: 'I love you',
        type: 'text',
      },
    };
  },
};
</script>

<style lang="scss">
.insert-form {
  padding: 2rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  width: 100%;

  .title {
    margin-bottom: 0.9rem;
    font: {
      size: 1rem;
      family: 'Poppins', sans-serif;
      weight: 500;
    }
    color: #2c2c2c;
  }

  form {
    width: 100%;

    .form-wrapper {
      display: grid;
      grid-template-columns: 15% auto;
      align-items: center;
      margin-bottom: 1.5rem;

      label {
        font: {
          family: 'Poppins', sans-serif;
          size: 0.95rem;
        }
        color: #626262;
      }
    }
  }
}
</style>
