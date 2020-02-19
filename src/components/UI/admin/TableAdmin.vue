<template>
  <section id="table">
    <table>
      <thead>
        <th>
          <div @click="selectAllHandler">
            <CheckBox :checkbox="checkboxControl" />
          </div>
        </th>
        <th v-for="(header, i) in tableProps.title" :key="i">{{ header }}</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="(body, i) in tableProps.sample" :key="i">
          <td><CheckBox :checkbox="checkboxControl" /></td>
          <template v-for="(list, i) in body">
            <td v-if="checkList(list)" :key="i">{{ list }}</td>
            <td v-else :key="i">
              <div class="book-info" :key="i">
                <span class="title">{{ body.book.title }}</span>
                <span
                  class="author"
                  v-for="(author, i) in body.book.author"
                  :key="i"
                  >{{ author }}</span
                >
              </div>
            </td>
          </template>
          <td class="action">
            <router-link to="#">
              <Icon icon="pencil" />
            </router-link>
            <router-link to="#">
              <Icon icon="trash" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import Icon from 'vue-themify-icons';
import CheckBox from '../../UI/admin/Checkbox';

export default {
  name: 'tableAdmin',
  components: {
    Icon,
    CheckBox
  },
  data() {
    return {
      checkboxControl: false
    };
  },
  props: {
    tableProps: {
      required: true,
      type: Object
    }
  },
  methods: {
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
}

#table tr {
  line-height: 30px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in;
  font-size: 0.9rem;
}

#table tr:hover {
  transform: translateY(-4px);
}

#table tr td {
  padding: 1rem;
  background: #fff;
}

#table tr td .book-info .title {
  display: block;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
}

#table tr td .book-info .author + .author:before {
  content: ', ';
}

#table tr td a:last-child {
  margin: 0 1rem;
}

#table tr td a:first-child:hover {
  color: #7367f0;
}

#table tr td a:last-child:hover {
  color: red;
}

#table tr td a {
  text-decoration: none;
  color: inherit;
}
</style>
