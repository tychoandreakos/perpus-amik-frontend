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
        <div class="card-action">
          <div class="head">
            <ul>
              <TabComponent
                :tab="tab"
                v-for="(tab, i) in headTab"
                :key="i"
                :iKey="i"
                ref="tab"
                @tabElem="tabHandler"
                :class="[tab.active ? 'active' : '', 'tab']"
              />
            </ul>
            <div
              class="border"
              :style="{ width: `${borderWidth}px`, left: `${borderLeft}px` }"
            ></div>
          </div>
          <div class="body">
            <router-view />
          </div>
        </div>
      </CardComponent>
    </div>
  </section>
</template>
<script>
import CardComponent from '../../UI/admin/Card';
import StripedTableComponent from '../../UI/admin/table/Striped';
import TabComponent from '../../UI/admin/Tab';

export default {
  name: 'CirculationTransaction',
  components: {
    CardComponent,
    StripedTableComponent,
    TabComponent
  },
  created() {
    this.headTab[0] = {
      ...this.headTab[0],
      active: true
    };
  },
  mounted() {
    this.$store.commit('setCirculation', {
      title: this.title,
      breadcrumbs: this.breadcrumbs
    });
  },
  methods: {
    tabHandler(val) {
      if (
        JSON.stringify(this.headTab[this.current]) !=
        JSON.stringify(this.headTab[val.tabIndex])
      ) {
        setTimeout(() => {
          this.borderWidth = val.clientWidth;
          this.borderLeft = val.offsetLeft;
          delete this.headTab[this.current].active;
          this.current = val.tabIndex;
          this.headTab[val.tabIndex] = {
            ...this.headTab[val.tabIndex],
            active: true
          };
        }, 100);
      }
    }
  },
  data() {
    return {
      breadcrumbs: ['Circulation', 'Search Member ID', '1702018 - Elang Indra'],
      title: 'Member List',
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
      },
      borderWidth: 80,
      borderLeft: 14,
      headTab: [
        {
          title: 'Loans',
          icon: 'check',
          href: 'loans'
        },
        {
          title: 'Current Loans',
          icon: 'reload',
          href: 'current'
        },
        {
          title: 'Reserve',
          icon: 'back-right',
          href: 'reserve'
        },
        {
          title: 'Fines',
          icon: 'hummer',
          href: 'fines'
        },
        {
          title: 'Loan History',
          icon: 'agenda',
          href: 'history'
        }
      ],
      current: 0
    };
  }
};
</script>
<style scoped>
#circulation-transaction {
  width: 100%;
}

#circulation-transaction .transaction .card-action .head ul .active {
  color: #7367f0;
}

#circulation-transaction .transaction .card-action .head ul {
  display: flex;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;

  font-weight: 500;
  padding-bottom: 0.5rem;
}

#circulation-transaction
  .transaction
  .card-action
  .head
  ul
  .tab:not(:last-child) {
  margin-right: 2rem;
}

#circulation-transaction .transaction .card-action .head ul .tab.active {
  color: #7367f0;
  cursor: pointer;
}

#circulation-transaction .transaction {
  margin-top: 3rem;
}

#circulation-transaction .transaction .card-action .head {
  padding: 1rem;
  width: 100%;
  box-shadow: 0 5px 15px #fcfcfc;
  position: relative;
}

#circulation-transaction .transaction .card-action .head .border {
  position: absolute;
  border: 1px solid #aea7f5;
  box-shadow: 0 5px 10px #f6f5fe;
  transition: left 0.2s ease;
  transition-delay: 0.1s;
}

#circulation-transaction .transaction .card-action .body {
  padding: 1rem;
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
