<template>
  <section id="loans">
    <div class="input">
      <span>{{ config.placeholder }}</span>
      <div class="input-text">
        <InputComponent :config="config" />
        <PlaceholderComponent v-if="false" :placeholder="placeholderData" />
      </div>
      <ButtonComponent class="btn" :buttonProp="button" />
    </div>
    <div class="table" v-if="false">
      <TableComponent :tableProps="table" />
    </div>
  </section>
</template>
<script>
import InputComponent from '../../../UI/admin/input/Default';
import ButtonComponent from '../../../UI/admin/Button';
import TableComponent from '../../../UI/admin/TableAdmin';
import PlaceholderComponent from '../../../UI/admin/input/suggestion/Default';

export default {
  name: 'Loans',
  components: {
    InputComponent,
    ButtonComponent,
    TableComponent,
    PlaceholderComponent
  },
  data() {
    return {
      config: {
        placeholder: 'Masukkan ID Buku yang ingin Dipinjam',
        type: 'text',
        name: 'search-loans'
      },
      placeholderData: [
        {
          search: 'B0002',
          result:
            'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases'
        }
      ],
      table: {
        enabled: {
          checkbox: false,
          edit: false,
          remove: true,
          action: true,
          slot: false
        },
        title: ['code', 'Title', 'Loan Date', 'Due Date'],
        sample: [
          {
            code: 'B0002',
            title:
              'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
            loan: '2020-02-19',
            due: '2020-02-26'
          }
        ]
      },
      button: {
        icon: 'search',
        title: 'Search Book'
      }
    };
  }
};
</script>
<style scoped>
#loans {
  width: 100%;
}

#loans .input {
  width: 100%;
}

#loans .input span {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}

#loans .input .input-text {
  margin: 0.8rem 0;
  position: relative;
}

#loans .input .btn {
  margin: auto;
  margin-top: 0.6rem;
}
</style>
