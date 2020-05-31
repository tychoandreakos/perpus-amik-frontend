<template>
  <section id="dashboard-admin">
    <div class="cards">
      <CardComponent :cardProperties="welcome" class="welcome-admin">
        <img
          class="img-left"
          src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/decore-left.2d9d23e0.png"
        />
        <img
          src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/decore-right.da0ab5cd.png"
          class="img-right"
        />
        <section class="welcome-card">
          <div class="congrulation">
            <Icon icon="star" />
          </div>
          <h3>Congrulation Jhon</h3>
          <span
            >Lorem ipsum dolor, <b>sit</b> amet consectetur adipisicing elit.
            Minus debitis culpa cum</span
          >
        </section>
      </CardComponent>
      <CardComponent
        :cardProperties="cardProperties"
        class="card"
        v-for="(chart, i) in cardData"
        :key="i"
      >
        <div class="chart">
          <div class="text">
            <div :style="{ background: chart.softBg }" class="icon-wrapper">
              <div :style="{ color: chart.background }" class="icon-graph">
                <Icon :icon="chart.icon" />
              </div>
            </div>
            <div class="text-wrapper">
              <h3>{{ chart.title }}</h3>
              <span>{{ chart.desc }}</span>
            </div>
          </div>
          <ChartOne
            :graphData="chart.data"
            :bg="chart.background"
            class="chart-ok"
            :style="{ paddingBottom: '.7rem' }"
          />
        </div>
      </CardComponent>
      <CardComponent :cardProperties="cardProperties">
        x
      </CardComponent>
      <CardComponent class="speedo" :cardProperties="cardProperties">
        x
      </CardComponent>
      <CardComponent :cardProperties="cardProperties">
        x
      </CardComponent>
      <CardComponent class="table" :cardProperties="cardProperties">
        <h3>{{ table.title }}</h3>
        <div class="hr"></div>
        <TableComponent :tableData="table.body" :tableHead="table.head" />
      </CardComponent>
    </div>
  </section>
</template>
<script>
import CardComponent from '../../UI/admin/Card';
import Icon from 'vue-themify-icons';
import ChartOne from './analytics/ChartOne';
import TableComponent from '../../UI/admin/table/Checkout';

export default {
  name: 'DashboardAdmin',
  components: {
    CardComponent,
    Icon,
    ChartOne,
    TableComponent,
  },
  data() {
    return {
      welcome: {
        background: 'linear-gradient(to bottom,#8075f1, #948bf3)',
        color: '#fff',
      },
      table: {
        title: 'Checkout Items',
        head: ['item code', 'member ID', 'title', 'loan date', 'due date'],
        body: [
          {
            code: 'B0002',
            id: 1702018,
            title:
              'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
            loan: '2020-02-22',
            due: '2020-02-29',
          },
          {
            code: 'B0002',
            id: 1702018,
            title:
              'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
            loan: '2020-02-22',
            due: '2020-02-29',
          },
        ],
      },
      cardData: [
        {
          data: [0, 10, 50, 40, 50, 29, 40, 72, 90, 82, 22, 12],
          background: '#7367f0',
          softBg: '#eae8fd',
          title: '6.6K',
          desc: 'Costumer Today',
          icon: 'stats-up',
        },
        {
          data: [20, 0, 20, 60, 9, 4, 40, 2, 9, 90, 25, 23],
          background: '#ff9f43',
          softBg: '#fff1e3',
          title: '1.1K',
          desc: 'Book Loans',
          icon: 'book',
        },
      ],
      cardProperties: {
        background: '#fff',
      },
    };
  },
};
</script>
<style scoped>
#dashboard-admin {
  width: 100%;
  height: 100%;
}
#dashboard-admin .cards {
  display: grid;
  width: 100%;
  margin-top: 1rem;
  grid-template-columns: 45% repeat(2, 25%);
  grid-gap: 2rem;
  grid-template-rows: repeat(4, 1fr);
}

#dashboard-admin .cards .table {
  grid-column: 1 / 4;
}

#dashboard-admin .cards .table h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  padding: 1rem;
  color: #3f3932;
}

#dashboard-admin .cards .table .hr {
  border-bottom: 3px solid #f8f8f8;
  width: 100%;
  height: 2px;
}

#dashboard-admin .cards .speedo {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
}

#dashboard-admin .cards .chart .text {
  padding: 1rem 1.2rem;
  flex-basis: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#dashboard-admin .cards .chart .text .icon-wrapper {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

#dashboard-admin .cards .chart .text .icon-graph {
  font-size: 1.3rem;
}

#dashboard-admin .cards .chart .text h3 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.8rem;
  margin-top: 0.4rem;
}

#dashboard-admin .cards .chart .text span {
  font-size: 0.88rem;
  color: #626262;
}

#dashboard-admin .cards .chart {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: space-between;
}

#dashboard-admin .cards .welcome-admin {
  position: relative;
}

#dashboard-admin .cards .welcome-admin .img-left {
  position: absolute;
  width: 42%;
  top: 0;
  left: 0;
}

#dashboard-admin .cards .welcome-admin .img-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
}

#dashboard-admin .cards .welcome-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
}

#dashboard-admin .cards .welcome-card .congrulation {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #7367f0;
  box-shadow: 0 5px 25px #847aec;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dashboard-admin .cards .welcome-card .congrulation i {
  font-size: 2rem;
}

#dashboard-admin .cards .welcome-card h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
}

#dashboard-admin .cards .welcome-card span {
  font-size: 0.83rem;
  text-align: center;
  margin-top: 0.8rem;
}
</style>
