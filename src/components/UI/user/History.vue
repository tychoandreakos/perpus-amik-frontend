<template>
  <section id="history-user">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(history, i) in bookHistory" :key="i">
        <div class="card">
          <a
            href="#"
            class="img"
            :style="{ background: 'url(' + history.img + ')' }"
          ></a>
          <div class="desc">
            <a class="link" href="#">{{ history.title }}</a>
            <span
              >By <a href="#">{{ history.author }}</a></span
            >
          </div>
        </div>
      </li>
    </ul>
    <a class="see" :href="more.href">{{ more.title }}</a>
  </section>
</template>
<script>
export default {
  name: "History",
  computed: {
    bookHistory() {
      return this.$store.state.bookHistory;
    }
  },
  data() {
    return {
      title: "Your History",
      more: {
        title: "See All",
        href: "#"
      }
    };
  }
};
</script>
<style scoped>
#history-user {
  width: 100%;
  padding: 1.4rem 1rem 1.4rem 0;
}

#history-user h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
}

#history-user ul {
  list-style-type: none;
}

#history-user ul li {
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
}

#history-user ul li .card {
  display: grid;
  padding: 0.5rem 0.5rem 1.5rem 0.5rem;
  grid-template-columns: 1fr 3.5fr;
}

#history-user ul li .card .img {
  width: 65px;
  height: 90px;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: none !important;
}

#history-user ul li .card .desc {
  font-family: "Poppins", sans-serif;
}

#history-user ul li .card .desc .link {
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
}

#history-user ul li .card .desc .link:hover,
#history-user .see:hover {
  text-decoration: underline;
  color: #613ff4;
}

#history-user ul li .card .desc span {
  font-size: 0.9rem;
}

#history-user ul li .card .desc span a {
  color: inherit;
}

#history-user ul li .card .desc span a:hover {
  color: #613ff4;
}
#history-user .see {
  float: right;
  padding-right: 1rem;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: inherit;
  font-size: 0.95rem;
}

@media only screen and (min-width: 200px) and (max-width: 800px) {
  #history-user {
    width: 90%;
    margin: auto;
  }

  #history-user ul li .card {
    display: flex;
    flex-direction: column;
  }

  #history-user ul li .card .img {
    width: 200px;
    height: 300px;
    align-self: center;
    margin-bottom: 1rem;
  }

  #history-user ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
}
</style>
