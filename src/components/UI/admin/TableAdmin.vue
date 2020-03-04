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
        <tr v-for="body in tableProps.sample" :key="body.id">
          <td v-if="tableProps.enabled.checkbox">
            <CheckBox :checkbox="checkboxControl" />
          </td>
          <slot v-if="tableProps.enabled.slot"></slot>
          <template v-for="(list, i) in body">
            <td
              :class="tableProps.enabled.normal ? 'normal' : ''"
              v-if="checkList(list)"
              :key="i"
            >
              <span>{{ list }}</span>
            </td>
            <td v-else :key="i">
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
          </template>
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
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'tableAdmin',
  components: {
    Icon,
    CheckBox
  },
  computed: {
    ...mapGetters(['getUpdate', 'tableTypes'])
  },
  data() {
    return {
      checkboxControl: false,
      headerEdit: 'Update '
    };
  },
  props: {
    tableProps: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapMutations([
      'setPanel',
      'setHeader',
      'setUpdateInputState',
      'setEditProps',
      'deleteMaster'
    ]),
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
        this.deleteMaster({
          key: this.tableTypes,
          id
        });
      }, 500);
    },
    editHandler(val) {
      this.setUpdateInputState({
        ...val
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
    }
  }
};
</script>
<style scoped>
#table {
  margin-top: 1rem;
  width: 100%;
}

#table table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.3em;
  cursor: pointer;
}

#table table thead {
  font-family: 'Poppins', sans-serif;
}

#table th {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  padding: 0.5rem;
  text-transform: capitalize;
}

#table tr {
  line-height: 30px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in;
  font-size: 0.9rem;
}

#table tr:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

#table .none {
  display: none;
}

#table .remove {
  opacity: 0;
  transform: translateX(-70rem);
}

#table tr td {
  padding: 1rem;
  background: #fff;
  text-align: center;
}

#table tr td:nth-child(2) {
  display: none;
}

#table tr td .book-info .title {
  display: block;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
}

#table tr .normal:last-child {
  font-size: 0.7rem;
  opacity: 0.6;
  width: 120px;
}

#table tr td .book-info .author + .author:before {
  content: ', ';
}

#table tr td button:last-child {
  margin: 0 1rem;
}

#table tr td button:first-child:hover {
  color: #7367f0;
}

#table tr td button:last-child:hover {
  color: red;
}

#table tr td button {
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
