<template lang="pug">
  section#table
    p.find(v-if="search") {{ found }} #[b {{ search }}].
    table
      thead
        th(v-if="tableProps.enabled.checkbox")
          div(@click="selectAllHandler")
            CheckBox(:checkbox="checkboxControl")
        th(v-for="(header, i) in tableProps.title" :key="i") 
          span {{ header }}
        th(v-if="tableProps.enabled.action") Action
      tbody
        tr(
          v-for="body in tableProps.content.result" :key="body.id")
          td(v-if="tableProps.enabled.checkbox")
            CheckBox(:checkbox="checkboxControl")
          slot(v-if="tableProps.enabled.slot")
          td
          td(v-for="(field, i) in tableProps.field" :key="i")
            template(v-if="body[field].toLowerCase().includes(search)") 
              span.action {{ body[field] }}
            template(v-else)
              span {{ body[field] }}
          td.action(v-if="tableProps.enabled.action")
            button(
              @click="editHandler(body, body.id)"
              v-if="tableProps.enabled.edit"
            ) #[Icon(icon="pencil")]
            button(
              @click="deleteHandler(body.id, $event)"
              v-if="tableProps.enabled.remove"
            ) #[Icon(icon="trash")]
</template>
<script>
import Icon from 'vue-themify-icons';
import CheckBox from '../../UI/admin/Checkbox';
import { mapMutations, mapGetters, mapActions } from 'vuex';

import { deleteGMD, IDPOST, searchPOST } from '../../../store/module/API/type';

export default {
  name: 'tableAdmin',
  components: {
    Icon,
    CheckBox,
  },
  computed: {
    ...mapGetters(['getUpdate', searchPOST]),
    found() {
      return `Found ${this.tableProps.content.length || 0} of keyword`;
    },
    search() {
      const text = this[searchPOST];
      if (text.length > 1) {
        return text.toLowerCase();
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      checkboxControl: false,
      headerEdit: 'Update ',
    };
  },
  props: {
    tableProps: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapMutations([
      'setPanel',
      'setHeader',
      'setUpdateInputState',
      'setEditProps',
      IDPOST,
    ]),
    ...mapActions([deleteGMD]),
    splitUpdate() {
      return this.getUpdate.split('/')[1];
    },
    deleteHandler(id, e) {
      const parent = e.originalTarget.offsetParent.parentElement;
      const confirmSubmit = confirm('Are you sure want to delete it?');
      alert(confirmSubmit);
      if (confirmSubmit) {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 450);
      }
      setTimeout(() => {
        this[deleteGMD]({
          id,
        });
      }, 500);
    },
    editHandler(val, id) {
      this[IDPOST](id);
      this.setUpdateInputState({
        ...val,
      });
      this.setHeader(this.headerEdit + this.splitUpdate());
      this.setEditProps();
      this.setPanel();
    },
    checkList(val) {
      return !val.hasOwnProperty('title');
    },
    selectAllHandler() {
      this.checkboxControl = !this.checkboxControl;
    },
  },
};
</script>
<style lang="scss">
#table {
  margin-top: 1rem;
  width: 100%;

  .find {
    float: right;
    font: {
      size: 0.9rem;
    }
  }

  b {
    text-transform: capitalize;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1.3em;
    cursor: pointer;

    thead {
      font-family: 'Poppins', sans-serif;
    }
  }

  th {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    padding: 0.5rem;
    text-transform: capitalize;
  }

  tr {
    line-height: 30px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease-in;
    font-size: 0.9rem;
    animation: {
      name: loading;
      duration: 0.4s;
      timing-function: linear;
    }

    @keyframes loading {
      from {
        opacity: 0;
        transform: translateX(70rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    }

    td {
      padding: 1rem;
      background: #fff;
      text-align: center;

      .action {
        background: #7c71f13f;
        padding: 0.5rem 1.5rem;
      }

      &:nth-child(2) {
        display: none;
      }

      .book-info .title {
        display: block;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
      }

      .book-info .author + .author:before {
        content: ', ';
      }

      button {
        text-decoration: none;
        color: inherit;
        background: none;
        border: none;
        cursor: pointer;

        &:last-child {
          margin: 0 1rem;
        }

        &:first-child:hover {
          color: #7367f0;
        }

        &:last-child:hover {
          color: red;
        }
      }
    }

    .normal:last-child {
      font-size: 0.7rem;
      opacity: 0.6;
      width: 120px;
    }
  }

  .none {
    display: none;
  }

  .remove {
    opacity: 0;
    transform: translateX(-70rem);
  }
}
</style>
