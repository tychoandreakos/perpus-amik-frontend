<template lang="pug">
    div.insert-form
        h3.title Please Insert Data.
        form
            div.form-wrapper
                label First Name
                Input(:property="property" value="" :disabledLabel="true" @input="input")
            div.form-wrapper
                label Sex
                Choice(:state="choiceData")
</template>

<script>
import Input from '../Card/Input/Default';
import Choice from './CircleChoice';

export default {
  name: 'InsertFormMembership',
  components: {
    Input,
    Choice,
  },
  methods: {
    input(e) {
      console.log(e);
    },
  },
  data() {
    return {
      choiceData: [
        {
          selected: true,
          title: 'female',
          icon: 'wand',
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
          family: 'Nunito', sans-serif;
          size: 0.98rem;
        }
        color: #626262;
      }
    }
  }
}
</style>
