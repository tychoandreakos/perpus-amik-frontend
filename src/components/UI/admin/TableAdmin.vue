<template lang="pug">
  section#table
    p.find(v-if="search") {{ found }} #[b {{ search }}].
    table
      thead
        th(v-if="tableProps.enabled.checkbox")
          div(@click="selectAllHandler")
            CheckBox(:check="checkboxControl")
        th(v-for="(header, i) in tableProps.title" :key="i") 
          span {{ header }}
        th(v-if="tableProps.enabled.action") Action
      tbody
        tr(
          v-for="(body, key) in tableProps.content.result" 
          :key="body.id"
          @click="checkboxHandler(key)"
          :class="{'select': checkbox[key]}"
          )
          td(v-if="tableProps.enabled.checkbox")
            CheckBox(:check="checkbox[key] || false" @click="checkboxHandler(key)")
          slot(v-if="tableProps.enabled.slot")
          td
          td(v-for="(field, i) in tableProps.field" :key="i")
            template(v-if="body[field].toLowerCase().includes(search)") 
              span.action {{ body[field] }}
            template(v-else)
              span {{ body[field] }}
          td.action(v-if="tableProps.enabled.action")
            button(
              @click.stop="editHandler(body, body.id)"
              v-if="tableProps.enabled.edit"
            ) #[Icon(icon="pencil")]
            button(
              @click.stop="deleteHandler(body.id, $event)"
              v-if="tableProps.enabled.remove"
            ) #[Icon(icon="trash")]
</template>
<script>
import Icon from 'vue-themify-icons';
import CheckBox from '../../UI/admin/Checkbox';
import { mapMutations, mapGetters, mapActions } from 'vuex';

import {
  deleteGMD,
  IDPOST,
  searchPOST,
  dialog,
  decision,
  tableId,
  cleanTableId,
} from '../../../store/module/API/type';

export default {
  name: 'tableAdmin',
  components: {
    Icon,
    CheckBox,
  },
  computed: {
    ...mapGetters(['getUpdate', searchPOST]),
    ...mapGetters({
      decision: decision,
    }),
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
      checkbox: {},
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
      dialog,
    ]),
    ...mapMutations({
      tableId: tableId,
      cleanTableId: cleanTableId,
    }),
    ...mapActions([deleteGMD]),
    splitUpdate() {
      return this.getUpdate.split('/')[1];
    },
    checkboxHandler(key) {
      this.checkbox = {
        ...this.checkbox,
        [key]: this.checkbox[key] ? !this.checkbox[key] : true,
      };
    },
    deleteHandler(id, e) {
      const parent = e.originalTarget.offsetParent.parentElement;
      this[dialog](() => {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 200);

        setTimeout(() => {
          this[deleteGMD]({
            id,
          });
        }, 500);
      });
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
      if (this.checkboxControl) {
        for (let i = 0; i < 5; i++) {
          this.checkbox = {
            ...this.checkbox,
            [i]: this.checkboxControl ? true : false,
          };
          this.tableId(this.tableProps.content.result[i].id);
        }
      } else {
        this.checkbox = {};
        this.cleanTableId();
      }
    },
  },
};
</script>
<style lang="scss">
#table {
  margin-top: 1rem;
  width: 100%;

  .select {
    background: #f1f0f8;
    box-shadow: none;
    color: #5148f1;

    &:hover {
      box-shadow: none;
      transform: none;
    }
  }

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
    background: #fff;
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
