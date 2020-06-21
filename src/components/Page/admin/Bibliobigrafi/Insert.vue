<template lang="pug">
  div.insert-form
    div.header
      template(v-for="(link, k) in headerLink")
        span.header-link(@click="header(k)" ref="els" :key="k") #[Icon(:icon="link.icon")] {{ link.title }} 
      div.border(ref="border")       
    h3.title Please {{ title }} Data.
    form
        div.form
            template(v-if="stateData")
                template(v-for="(item, i) in stateData")
                    transition(name="slide")
                      div.form-wrapper(v-if="item.tabs == countTab")
                          label {{ item.title }}
                          template(v-if="item.type == part[0]")
                              Input(:property="item.property" :value="''" :disabledLabel="false" @input="input")
                          template(v-if="item.type == part[1]")
                              dropdown(
                                  placeholderID="0" 
                                  :typeMember="Array.isArray(item.typeMember) ? {} : item.typeMember"  
                                  @choice="input($event, item.id)"
                              )
                          template(v-if="item.type == part[2]")
                            TextArea(@input="input($event, item.id)" :value="''")
                          template(v-if="item.type == part[3]")
                            Date.date(v-model="item.date" @input="input($event, item.id)")
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
      this.show = !this.show;
      const border = this.$refs.border;
      const el = this.$refs.els[key];
      const left = el.offsetLeft / 10;
      const width = el.offsetWidth / 10 + 1;
      border.style.left = left + '%';
      border.style.width = width + '%';
      this.countTab = key;
    },
  },
  data() {
    return {
      countTab: 0,
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
          tabs: 0,
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
          tabs: 0,
          property: {
            id: 'bebay',
            placeholder: 'Insert your title',
            type: 'text',
          },
        },
        {
          title: 'Edition',
          tabs: 0,
          type: 'text',
          property: {
            id: 'edisi',
            placeholder: 'Insert your edition',
            type: 'text',
          },
        },
        {
          title: 'GMD',
          tabs: 1,
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
          tabs: 1,
          id: 'contentType_id',
          type: 'dropdown',
          typeMember: {
            0: 'Image',
            1: 'Datasets',
          },
        },
        {
          title: 'Media Type',
          tabs: 1,
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
          tabs: 0,
          type: 'text',
          property: {
            id: 'isbn',
            placeholder: 'Insert your ISBN',
            type: 'text',
          },
        },
        {
          title: 'Publisher',
          tabs: 0,
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
          tabs: 0,
          id: 'publisherYear',
          type: 'date',
          date: '2020-01-01',
        },
        {
          title: 'Publishing Place',
          tabs: 0,
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
          tabs: 0,
          type: 'text',
          property: {
            id: 'width',
            placeholder: 'Insert your Width',
            type: 'text',
          },
        },
        {
          title: 'Physics (Pages)',
          tabs: 0,
          type: 'text',
          property: {
            id: 'pages',
            placeholder: 'Insert your Pages',
            type: 'text',
          },
        },
        {
          title: 'Classification',
          tabs: 1,
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
          tabs: 1,
          type: 'text',
          property: {
            id: 'callNumber',
            placeholder: 'Insert your Call Number',
            type: 'text',
          },
        },
        {
          title: 'Language',
          tabs: 0,
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
          tabs: 0,
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
.slide-leave-active,
.slide-enter-active {
  transition: opacity 0.3s ease-in-out, transform 0.25s ease-out;
}
.slide-enter {
  opacity: 1;
  transform: translate(-100%, 0);
}
.slide-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}

.insert-form {
  .header {
    width: 100%;
    padding: {
      top: 0.8rem;
      right: 0.8rem;
      bottom: 0.8rem;
    }
    margin-bottom: 1rem;
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
      box-shadow: 0 0 2px 1px rgba(98, 98, 98, 0.192);
      height: 1.8px;
    }
  }
  .form {
    display: grid;
    overflow: hidden;
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
