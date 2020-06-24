<template lang="pug">
    section.insert-pattern
        div.preview
            span.title preview pattern
            div.preview-wrapper
                span P00000S
        div.form
            template(v-for="(item, i) in stateData")
                div.form-wrapper(:key="i")
                    label {{ item.title }}
                    Input(:property="item.property" :value="''" :disabledLabel="false" @input="input")
        div.btn
            Button(:buttonProp="button")
        div.border-pattern
</template>

<script>
import Input from '../Card/Input/Default';
import Button from '../Button';

export default {
  name: 'InsertPattern',
  components: {
    Input,
    Button,
  },
  methods: {
    input(e) {},
  },
  data() {
    return {
      button: {
        title: 'Submit Data',
        icon: 'check',
        type: 'add',
        style: {
          margin: 'auto',
          borderRadius: '4px',
          padding: '.8rem 2rem',
          fontSize: '.9rem',
        },
      },
      stateData: [
        {
          title: 'Prefix',
          type: 'text',
          property: {
            id: 'prefix',
            placeholder: 'Please insert your prefix',
            type: 'text',
          },
        },
        {
          title: 'Suffix',
          type: 'text',
          property: {
            id: 'suffix',
            placeholder: 'Please insert your suffix',
            type: 'text',
          },
        },
        {
          title: 'Length Serial Number',
          type: 'text',
          property: {
            id: 'length',
            placeholder: 'Please insert your length',
            type: 'text',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.insert-pattern {
  background: rgb(248, 245, 245);
  padding: 1rem;
  .form {
    display: grid;
    grid-template-columns: repeat(3, 1fr) !important;
    grid-gap: 0.9rem !important;
    margin-top: 2rem !important;
  }

  .preview {
    .title {
      text-transform: capitalize;
      color: inherit;
      font: {
        weight: 400;
        size: 0.9rem;
        family: 'Nunito', sans-serif;
      }
    }

    .preview-wrapper {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(115, 103, 240);
      border-radius: 5px;
      margin: 0.5rem;
      color: rgb(115, 103, 240);

      span {
        font: {
          size: 1.3rem;
          family: sans-serif;
        }
      }
    }
  }

  .border-pattern {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.164);
    margin-top: 1rem;
  }
}
</style>
