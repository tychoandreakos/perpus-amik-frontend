<template lang="pug">
  div.insert-form
    div.header
      template(v-for="(link, k) in headerLink")
        span.header-link(@click="header(k)" ref="els" :key="k") #[Icon(:icon="link.icon")] {{ link.title }} 
      div.border(ref="border")       
    h3.title Please {{ title }} Data.
    form
        div.form
            //- template(v-if="stateData")
            //-     template(v-for="(item, i) in stateData")
            //-         div.form-wrapper
            //-             label {{ item.title }}
            //-             template(v-if="item.type == part[0]")
            //-                 Input(:property="item.property" :value="''" :disabledLabel="false" @input="input")
            //-             template(v-if="item.type == part[1]")
            //-                 dropdown(
            //-                     placeholderID="0" 
            //-                     :typeMember="Array.isArray(item.typeMember) ? {} : item.typeMember"  
            //-                     @choice="input($event, item.id)"
            //-                 )
            //-             template(v-if="item.type == part[2]")
            //-               TextArea(@input="input($event, item.id)" :value="''")
            //-             template(v-if="item.type == part[3]")
            //-               Date.date(v-model="item.date" @input="input($event, item.id)")
        div.btn
            Button(:buttonProp="button")
</template>

<script>
import Button from '../../../UI/admin/Button';
import Input from '../../../UI/admin/Card/Input/Default';
import Dropdown from '../../../UI/admin/ThumbnailTable/Dropdown';
import TextArea from '../../../UI/admin/ThumbnailTable/Textarea';
import Date from 'vue-date-pick';
import Icon from 'vue-themify-icons';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'BibliobigrafiInsert',
  components: {
    Button,
    Input,
    Dropdown,
    TextArea,
    Date,
    Icon,
  },

  methods: {
    input(e) {
      console.log(e);
    },
    header(key) {
      const border = this.$refs.border;
      const el = this.$refs.els[key];
      const left = el.offsetLeft / 10;
      const width = el.offsetWidth / 10 + 1;
      border.style.left = left + '%';
      border.style.width = width + '%';
    },
  },
  data() {
    return {
      headerLink: [
        {
          title: 'Book',
          icon: 'book',
        },
        {
          title: 'Book Additional',
          icon: 'book',
        },
        {
          title: 'Upload PDF',
          icon: 'book',
        },
      ],
      part: ['text', 'dropdown', 'textarea', 'date'],
      title: 'insert',
      stateData: [
        {
          title: 'book title',
          type: 'text',
          property: {
            id: 'id',
            placeholder: 'Insert your title',
            type: 'text',
          },
        },
        {
          title: 'book title',
          type: 'text',
          property: {
            id: 'bebay',
            placeholder: 'Insert your title',
            type: 'text',
          },
        },
        {
          title: 'Edition',
          type: 'text',
          property: {
            id: 'edisi',
            placeholder: 'Insert your edition',
            type: 'text',
          },
        },
        {
          title: 'GMD',
          id: 'gmd_id',
          type: 'dropdown',
          typeMember: {
            0: 'Art Original',
            1: 'Chart',
            2: 'Computer Software',
          },
        },
        {
          title: 'Content Type',
          id: 'contentType_id',
          type: 'dropdown',
          typeMember: {
            0: 'Image',
            1: 'Datasets',
          },
        },
        {
          title: 'Media Type',
          id: 'media_id',
          type: 'dropdown',
          typeMember: {
            0: 'Audio',
            1: 'Computer',
            2: 'Video',
          },
        },
        {
          title: 'IBSN / ISNN',
          type: 'text',
          property: {
            id: 'isbn',
            placeholder: 'Insert your ISBN',
            type: 'text',
          },
        },
        {
          title: 'Publisher',
          id: 'publisher',
          type: 'dropdown',
          typeMember: {
            0: "O'reilly",
            1: 'Manning',
            2: 'Packt',
          },
        },
        {
          title: 'Publisher Year',
          id: 'publisherYear',
          type: 'date',
          date: '2020-01-01',
        },
        {
          title: 'Publishing Place',
          id: 'place',
          type: 'dropdown',
          typeMember: {
            0: 'New York',
            1: 'Manhattan',
            2: 'Texas',
          },
        },
        {
          title: 'Physics (Width x Height)',
          type: 'text',
          property: {
            id: 'width',
            placeholder: 'Insert your Width',
            type: 'text',
          },
        },
        {
          title: 'Physics (Pages)',
          type: 'text',
          property: {
            id: 'pages',
            placeholder: 'Insert your Pages',
            type: 'text',
          },
        },
        {
          title: 'Classification',
          id: 'classification',
          type: 'dropdown',
          typeMember: {
            0: 'Computer',
            1: 'Moral',
            2: 'Engineer',
          },
        },
        {
          title: 'Call Number',
          type: 'text',
          property: {
            id: 'callNumber',
            placeholder: 'Insert your Call Number',
            type: 'text',
          },
        },
        {
          title: 'Language',
          id: 'language',
          type: 'dropdown',
          typeMember: {
            0: 'Indonesia',
            1: 'English',
            2: 'Japan',
          },
        },
        {
          title: 'Notes',
          id: 'notes',
          type: 'textarea',
        },
      ],
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
    };
  },
};
</script>

<style lang="scss">
.insert-form {
  .header {
    width: 100%;
    padding: {
      top: 0.8rem;
      right: 0.8rem;
      bottom: 0.8rem;
    }
    display: flex;
    align-items: center;
    position: relative;

    .header-link {
      margin: {
        left: 0.5rem;
        right: 0.5rem;
      }
      cursor: pointer;
      font: {
        size: 0.89rem;
      }

      &:first-child {
        color: rgba(81, 67, 235, 777);
      }
    }

    .border {
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        118deg,
        rgba(81, 67, 235, 0.596),
        rgba(81, 67, 235, 0.596)
      );
      transition: all 0.5s ease-in-out;
      width: 7%;
      box-shadow: 0 0 3px 1px rgba(98, 98, 98, 0.192);
      height: 1.6px;
    }
  }
  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    width: 100%;
    .form-wrapper {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
    }
  }
}
</style>
