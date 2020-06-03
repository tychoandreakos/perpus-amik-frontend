<template lang="pug">
    div.insert-form
        h3.title Please Insert Data.
        form
            template(v-for="(item, i) in stateData")
              div.form-wrapper
                  label {{ item.title }}
                  template(v-if="item.type == typeForm[0]")
                    Input(:property="item.property" value="" :disabledLabel="true" @input="input")
                  template(v-if="item.type == typeForm[1]")
                    Choice(:state="item.choiceData" @choice="choiceHandler")
                  template(v-if="item.type == typeForm[2]")
                    Dropdown(:typeMember="item.typeMember" @choice="typeMemberHandler")
                  template(v-if="item.type == typeForm[3]")
                    TextArea
                  template(v-if="item.type == typeForm[4]")
                    Upload
            Button(:buttonProp="button")
</template>

<script>
import Input from '../Card/Input/Default';
import Choice from './CircleChoice';
import Dropdown from './Dropdown';
import TextArea from './Textarea';
import Upload from './Upload';
import Button from '../Button';

export default {
  name: 'InsertFormMembership',
  components: {
    Input,
    Choice,
    Dropdown,
    TextArea,
    Upload,
    Button,
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
      button: {
        title: 'Submit Data',
        icon: 'plus',
        type: 'add',
        style: {
          margin: 'auto',
        },
      },
      stateData: [
        {
          title: 'member id',
          type: 'text',
          property: {
            id: 'member',
            placeholder: 'Insert your member id',
            type: 'text',
          },
        },
        {
          title: 'member name',
          type: 'text',
          property: {
            id: 'name',
            placeholder: 'Insert Your Name',
            type: 'text',
          },
        },
        {
          title: 'membersip type',
          type: 'dropdown',
          typeMember: ['mahasiswa', 'dosen', 'satpam'],
        },
        {
          title: 'sex',
          type: 'choice',
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
        },
        {
          title: 'address',
          type: 'textarea',
        },
        {
          title: 'phone number',
          type: 'text',
          property: {
            id: 'phone',
            placeholder: 'Insert Your Phone',
            type: 'text',
          },
        },
        {
          title: 'Photo Member',
          type: 'upload',
        },
        {
          title: 'email',
          type: 'text',
          property: {
            id: 'email',
            placeholder: 'Insert Email',
            type: 'email',
          },
        },
        {
          title: 'password',
          type: 'text',
          property: {
            id: 'password',
            placeholder: 'Insert Password',
            type: 'password',
          },
        },
        {
          title: 'confirm password',
          type: 'text',
          property: {
            id: 'confirm',
            placeholder: 'Re enter password',
            type: 'password',
          },
        },
      ],
      typeForm: ['text', 'choice', 'dropdown', 'textarea', 'upload'],
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
        text-transform: capitalize;
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
