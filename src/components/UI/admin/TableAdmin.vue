<template>
  <section id="table">
    <table>
      <thead>
        <th v-if="tableProps.enabled.checkbox">
          <div @click="selectAllHandler">
            <CheckBox :checkbox="checkboxControl" />
          </div>
        </th>
        <th v-for="(header, i) in tableProps.title" :key="i">{{ header }}</th>
        <th v-if="tableProps.enabled.action">Action</th>
      </thead>
      <tbody>
        <tr v-for="body in tableProps.content.result" :key="body.id">
          <td v-if="tableProps.enabled.checkbox">
            <CheckBox :checkbox="checkboxControl" />
          </td>
          <slot v-if="tableProps.enabled.slot"></slot>
          <td></td>
          <td v-for="(field, i) in tableProps.field" :key="i">
            {{ body[field] }}
          </td>
          <!-- <template v-for="(list, i) in body">
            <td
              :class="tableProps.enabled.normal ? 'normal' : ''"
              v-if="checkList(list)"
              :key="i"
            >
              <span>{{ list }}</span>
            </td>
            <td :key="i">
              <div class="book-info" :key="i">
                <span
                  :class="tableProps.normal ? ['title', 'normal'] : ['active']"
                  >{{ body.book.title }}</span
                >
                <span
                  class="author"
                  v-for="(author, i) in body.book.author"
                  :key="i"
                  >{{ author }}</span
                >
              </div>
            </td>
          </template> -->
          <td class="action" v-if="tableProps.enabled.action">
            <button
              @click="editHandler(body, body.id)"
              v-if="tableProps.enabled.edit"
            >
              <Icon icon="pencil" />
            </button>
            <button
              @click="deleteHandler(body.id, $event)"
              v-if="tableProps.enabled.remove"
            >
              <Icon icon="trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
import CheckBox from '../../UI/admin/Checkbox';
import { mapMutations, mapGetters, mapActions } from 'vuex';

import { deleteGMD } from '../../../store/module/API/type';

export default {
  name: 'tableAdmin',
  components: {
    Icon,
    CheckBox,
  },
  computed: {
    ...mapGetters(['getUpdate']),
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
    editHandler(val) {
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

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    }

    td {
      padding: 1rem;
      background: #fff;
      text-align: center;

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
