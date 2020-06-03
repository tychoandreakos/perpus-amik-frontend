<template lang="pug">
    div.insert-form
        h3.title Please {{ title }} Data.
        form
            template(v-for="(item, i) in stateData")
              div.form-wrapper
                  label {{ item.title }}
                  template(v-if="item.type == typeForm[0]")
                    Input(:property="item.property" value="" :disabledLabel="true" @input="input($event, item.property.id)")
                  template(v-if="item.type == typeForm[1]")
                    Choice(:state="item.choiceData" @choice="choiceHandler($event, item.id)")
                  template(v-if="item.type == typeForm[2]")
                    Dropdown(:typeMember="item.typeMember" @choice="input($event, item.id)")
                  template(v-if="item.type == typeForm[3]")
                    TextArea(@input="input($event, item.id)")
                  template(v-if="item.type == typeForm[4]")
                    Upload(@upload="input($event, item.id)")
                  template(v-if="item.type == typeForm[5]")
                    Date.date(v-model="item.date" @input="input($event, item.id)")
            div.btn(@click.prevent="submitHandler")
              Button(:buttonProp="button")
</template>

<script>
import Input from '../Card/Input/Default';
import Choice from './CircleChoice';
import Dropdown from './Dropdown';
import TextArea from './Textarea';
import Upload from './Upload';
import Button from '../Button';
import Date from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'InsertFormMembership',
  components: {
    Input,
    Choice,
    Dropdown,
    TextArea,
    Upload,
    Button,
    Date,
  },
  methods: {
    submitHandler() {
      console.log(this.form);
    },
    input(e, key) {
      this.form[key] = e;
    },
    setForm(key) {
      this.form[key] = e;
    },
    choiceHandler(key, id) {
      const choices = this.stateData[2];
      key == 0
        ? (choices.choiceData[1].selected = false)
        : (choices.choiceData[0].selected = false);
      choices.choiceData[key].selected = !choices.choiceData[key].selected;
      this.form[id] = key;
    },
  },
  data() {
    return {
      title: 'insert',
      form: {
        membertype_id: '',
        name: '',
        birthdate: '',
        member_since: '',
        alamat: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        image: '',
        pending: false,
        sex: '',
      },
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
          title: 'member id',
          type: 'text',
          property: {
            id: 'membertype_id',
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
          title: 'sex',
          id: 'sex',
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
          title: 'birth date',
          id: 'birthdate',
          type: 'date',
          date: '2020-01-01',
        },
        {
          title: 'register date',
          id: 'member_since',
          type: 'date',
          date: '2019-01-01',
        },
        {
          title: 'membership type',
          id: 'membership_type',
          type: 'dropdown',
          typeMember: ['mahasiswa', 'dosen', 'satpam'],
        },

        {
          title: 'address',
          id: 'alamat',
          type: 'textarea',
        },
        {
          title: 'phone number',
          id: 'phone',
          type: 'text',
          property: {
            id: 'phone',
            placeholder: 'Insert Your Phone',
            type: 'text',
          },
        },
        {
          title: 'Photo Member',
          id: 'image',
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
      typeForm: ['text', 'choice', 'dropdown', 'textarea', 'upload', 'date'],
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

      .date {
        width: 100%;

        input {
          width: 100%;
          padding: 0.5rem;
          background: #fcfcfc;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 7px;
          cursor: pointer;
        }
      }

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
