<template lang="pug">
  section#table
    p.find(v-if="search") {{ found }} #[b {{ search }}].
    table
      thead
        th(v-if="tableProps.enabled.checkbox")
          div(style="margin-left: .5rem" @click="selectAllHandler")
            CheckBox(:check="checkBoxControl")
        th(v-for="(header, i) in tableProps.title" :key="i") 
          span {{ header }}
        th(v-if="tableProps.enabled.action") Action
      template(v-if="tableProps.content.dataCount > 0")
        tbody
            tr(
              v-for="(body, key) in tableProps.content.result" 
              :key="body.id"
              @click="checkboxHandler(key)"
              :class="{'select': checkbox[key]}"
              )
              td(v-show="tableProps.enabled.checkbox")
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
                    @click.stop="reloadHandler(body.id, $event)"
                    v-if="tableProps.enabled.retrieve"
                  ) #[Icon(icon="reload")]
                button(
                  @click.stop="editHandler(body, body.id)"
                  v-if="tableProps.enabled.edit"
                ) #[Icon(icon="pencil")]
                button(
                  @click.stop="deleteHandler(body.id, $event)"
                  v-if="tableProps.enabled.remove"
                ) #[Icon(icon="trash")]
      template(v-else)
        div.empty 
          img(src="https://cdn.dribbble.com/users/1537480/screenshots/5299696/artboard_copy_21.jpg" alt="not found")
          h3 {{ notFound }}
    template
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
  removeTableId,
  checkbox,
  cleanCheckBox,
  selectCheckBoxAll,
  restoreSome,
  destroyData,
  checkBoxControl,
  messagePrompt,
  msgPrompt,
  titleComponent,
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
      checkbox: checkbox,
      checkBoxControl: checkBoxControl,
      msg: msgPrompt,
      titleComponent: titleComponent,
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
      headerEdit: 'Update ',
      notFound: 'Stop baby!! Your data seems empty.',
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
      checkbox,
    ]),
    ...mapMutations({
      messagePrompt: messagePrompt,
      tableId: tableId,
      cleanTableId: cleanTableId,
      removeTableId,
      cleanCheckBox: cleanCheckBox,
      selectCheckBoxAll: selectCheckBoxAll,
      setCheckboxAll: checkBoxControl,
    }),
    ...mapActions([deleteGMD]),
    ...mapActions({
      restoreSome: restoreSome,
      destroyData: destroyData,
    }),
    checkboxHandler(key) {
      this[checkbox](key);
      const id = this.tableProps.content.result[key].id;
      this.checkbox[key] ? this.tableId(id) : this.removeTableId(id);
    },
    deleteHandler(id, e) {
      this.messagePrompt(this.msg.delete);
      const parent = e.originalTarget.offsetParent.parentElement;
      this[dialog](() => {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 200);

        setTimeout(() => {
          if (this.tableProps.enabled.destroy) {
            this.destroyData({
              id,
            });
          } else {
            this[deleteGMD]({
              id,
            });
          }
        }, 500);
      }, 'are you sure want delete the data?');
    },
    reloadHandler(id, e) {
      this.messagePrompt(this.msg.restore);
      const parent = e.originalTarget.offsetParent.parentElement;
      this[dialog](() => {
        parent.classList.add('remove');
        setTimeout(() => {
          parent.classList.add('none');
        }, 200);

        setTimeout(() => {
          this.restoreSome({
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
      this.setHeader(this.headerEdit + this.titleComponent);
      this.setEditProps();
      this.setPanel();
    },
    checkList(val) {
      return !val.hasOwnProperty('title');
    },
    selectAllHandler() {
      const limit = this.tableProps.content.dataCount;
      this.setCheckboxAll();
      if (this.checkBoxControl) {
        for (let i = 0; i < limit; i++) {
          let control = this.checkBoxControl;
          this.selectCheckBoxAll({
            key: i,
            control,
          });
          try {
            this.tableId(this.tableProps.content.result[i].id);
          } catch (err) {
            // console.log()
          }
        }
      } else {
        this.cleanCheckBox();
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

  .empty {
    position: absolute;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: default;

    img {
      width: 35%;
    }

    h3 {
      margin-top: 0.8rem;
      font: {
        family: 'Poppins', sans-serif;
        weight: 600;
      }
    }
  }

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
