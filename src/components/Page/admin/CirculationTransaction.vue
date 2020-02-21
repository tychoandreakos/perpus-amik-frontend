<template>
  <section id="circulation-transaction">
    <CardComponent :cardProperties="styleCard">
      <section class="user">
        <div class="img"></div>
        <div class="profil">
          <StripedTableComponent>
            <thead v-if="userList.includeHead">
              <th v-for="(head, i) in userList.head" :key="i">{{ head }}</th>
            </thead>
            <tbody>
              <tr v-for="(body, i) in userList.body" :key="i">
                <td>{{ i }}</td>
                <td>{{ body }}</td>
              </tr>
            </tbody>
          </StripedTableComponent>
        </div>
      </section>
    </CardComponent>
    <div class="transaction">
      <CardComponent :cardProperties="styleCard">
        x
      </CardComponent>
    </div>
  </section>
</template>
<script>
import CardComponent from '../../UI/admin/Card';
import StripedTableComponent from '../../UI/admin/table/Striped';

export default {
  name: 'CirculationTransaction',
  components: {
    CardComponent,
    StripedTableComponent
  },
  mounted() {
    this.$store.commit('setCirculation', {
      title: this.title,
      breadcrumbs: this.breadcrumbs
    });
  },
  data() {
    return {
      breadcrumbs: ['Search Member ID', '1702018 - Elang Indra'],
      title: 'Circulation',
      styleCard: {
        background: '#fff'
      },
      userList: {
        includeHead: false,
        body: {
          'Member Name': 'Elang Indra',
          'Member Email': 'elangindra15@gmail.com',
          'Register Date': '2020-02-19',
          'Member ID': 1702018,
          'Member Type': 'Mahasiswa',
          'Expiry Date': '2021 - 02 - 18'
        }
      }
    };
  }
};
</script>
<style scoped>
#circulation-transaction {
  width: 100%;
}

#circulation-transaction .transaction {
  margin-top: 3rem;
}

#circulation-transaction .user .img {
  width: 250px;
  height: 250px;
  flex-basis: 37%;
  background: url('https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 3%;
}

#circulation-transaction .user .profil {
  width: 100%;
  flex-basis: 60%;
}

#circulation-transaction .user {
  padding: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
}
</style>
