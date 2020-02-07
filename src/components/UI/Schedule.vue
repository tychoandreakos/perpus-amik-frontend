<template>
  <section id="schedule">
    <h3 class="title">Jadwal Perpustakan</h3>
    <div class="schedule-library">
      <ul>
        <li v-for="(schedule, i) in schedules" :key="i">
          <div class="schedule-left">
            <div class="calendar">
              <p>{{ schedule.buka.month }}</p>
              <h3>{{ schedule.buka.date }}</h3>
            </div>
          </div>
          <div class="day-open">
            <h2>Jam Buka</h2>
            <p>{{ schedule.buka.schedule }}</p>
            <p>{{ schedule.buka.day }}</p>
          </div>
          <div class="istirahat">
            <h2>Istirahat</h2>
            <p>{{ schedule.istirahat.schedule }}</p>
            <p>{{ schedule.istirahat.status }}</p>
          </div>
        </li>
        <div class="btn">
          <Button :link="title" />
        </div>
      </ul>

      <div class="schedule-right">
        <div class="img"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "./ButtonSimple";

export default {
  name: "Schedule",
  components: {
    Button
  },
  data() {
    return {
      title: {
        href: "#",
        title: "Lihat Jadwal Selengkapnya"
      },
      schedules: [
        {
          buka: {
            month: "Feb",
            date: "03",
            schedule: "11:00 am - 08:00 pm",
            day: "Kamis"
          },
          istirahat: {
            schedule: "12:00 am - 01:00 pm",
            status: "Closed"
          }
        },
        {
          buka: {
            month: "Feb",
            date: "04",
            schedule: "11:00 am - 08:00 pm",
            day: "Jumat"
          },
          istirahat: {
            schedule: "12:00 am - 01:00 pm",
            status: "Closed"
          }
        },
        {
          buka: {
            month: "Feb",
            date: "05",
            schedule: "11:00 am - 04:00 pm",
            day: "Sabtu"
          },
          istirahat: {
            schedule: "12:00 am - 01:00 pm",
            status: "Closed"
          }
        }
      ]
    };
  }
};
</script>
<style scoped>
#schedule {
  background: #f8f8f8;
  padding: 5rem;
  color: #494949;
}

#schedule .title {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  margin-bottom: 0.8rem;
  background: rgba(242, 186, 122, 0.301);
  display: inline-block;
  padding: 0.6rem;
}

#schedule .schedule-library {
  display: grid;
  grid-template-columns: 55% 45%;
  grid-gap: 3rem;
}

#schedule .schedule-library ul {
  list-style: none;
}

#schedule .schedule-library ul .btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

#schedule .schedule-library ul li {
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  justify-content: space-between;
  padding: 1.5rem;
}

#schedule .schedule-library ul li .schedule-left {
  border-left: 3px solid green;
  padding-left: 2rem;
}

#schedule .schedule-library ul li .calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#schedule .schedule-library ul li .calendar p {
  font-size: 1.2rem;
  font-weight: 500;
}

#schedule .schedule-library ul li .calendar h3 {
  font-size: 3rem;
  font-weight: 400;
}

#schedule .schedule-library ul li .day-open {
  display: flex;
  flex-direction: column;
}

#schedule .schedule-library ul li .day-open h2 {
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

#schedule .schedule-library ul li .day-open p {
  font-size: 1.1rem;
}

#schedule .schedule-library ul li .istirahat {
  display: flex;
  flex-direction: column;
}

#schedule .schedule-library ul li .istirahat h2 {
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

#schedule .schedule-library ul li .istirahat p {
  font-size: 1.1rem;
}

#schedule .schedule-right {
  background: #f15922;
  width: 80%;
  height: 70vh;
  border-radius: 3px;
  position: relative;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
}

#schedule .schedule-right .img {
  background: url("https://cphlibrary.org/wp-content/uploads/2019/12/Untitled-design.png");
  width: 90%;
  height: 70vh;
  position: absolute;
  top: 30px;
  left: -30px;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
}
</style>
