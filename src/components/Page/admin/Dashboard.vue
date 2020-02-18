<template>
  <section id="dashboard-admin">
    <div class="cards">
      <CardComponent :cardProperties="welcome" class="welcome-admin">
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
        v-for="x in 2"
        :key="x"
        >x</CardComponent
      >
    </div>
  </section>
</template>
<script>
import CardComponent from '../../UI/admin/Card';
import Icon from 'vue-themify-icons';

export default {
  name: 'DashboardAdmin',
  components: {
    CardComponent,
    Icon
  },
  data() {
    return {
      welcome: {
        background: 'linear-gradient(to bottom,#8075f1, #948bf3)',
        color: '#fff'
      },
      cardProperties: {
        background: '#fff'
      }
    };
  }
};
</script>
<style scoped>
#dashboard-admin {
  width: 100%;
  height: 100%;
}
#dashboard-admin .cards {
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-gap: 2rem;
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
