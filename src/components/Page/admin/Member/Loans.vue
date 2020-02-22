<template>
  <section id="loans">
    <div class="input">
      <span>{{ config.placeholder }}</span>
      <InputComponent class="input-text" :config="config" />
      <ButtonComponent class="btn" :buttonProp="button" />
      <TableComponent :tableProps="table" />
    </div>
    <div class="table"></div>
  </section>
</template>
<script>
import InputComponent from '../../../UI/admin/input/Default';
import ButtonComponent from '../../../UI/admin/Button';
import TableComponent from '../../../UI/admin/TableAdmin';

export default {
  name: 'Loans',
  components: {
    InputComponent,
    ButtonComponent,
    TableComponent
  },
  data() {
    return {
      config: {
        placeholder: 'Masukkan ID Buku yang ingin Dipinjam',
        type: 'text',
        name: 'search-loans'
      },
      table: {
        enabled: {
          checkbox: false,
          edit: false,
          remove: true,
          action: true
        },
        title: ['item code', 'Title', 'Loan Date', 'Due Date'],
        sample: [
          {
            name: 'Valade, Janet',
            updated: '2020-02-19'
          },
          {
            name: 'Rosen, Richart',
            updated: '2020-02-19'
          },
          {
            name: 'Woychowsky, Edmond',
            updated: '2020-02-19'
          },
          {
            name: 'Taylor, Arlene G.',
            updated: '2020-02-19'
          },
          {
            name: 'Stueart, Robert D.',
            updated: '2020-02-19'
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
}

#loans .input .btn {
  margin: auto;
  margin-top: 0.6rem;
}
</style>
