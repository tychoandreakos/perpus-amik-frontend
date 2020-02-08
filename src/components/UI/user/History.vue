<template>
  <section id="history-user">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(history, i) in bookHistory" :key="i">
        <div class="card">
          <img :src="history.img" :alt="history.img" />
          <h3>{{ history.title }}</h3>
          <span>{{ history.author }}</span>
        </div>
      </li>
    </ul>
    <a :href="more.href">{{ more.title }}</a>
  </section>
</template>
<script>
export default {
  name: "History",
  data() {
    return {
      title: "Your History",
      more: {
        title: "See All",
        href: "#"
      },
      bookHistory: [
        {
          img:
            "https://learning.oreilly.com/library/view/expert-performance-indexing/9781484254646/images/978-1-4842-5464-6_CoverFigure.jpg",
          title:
            "Expert Performance Indexing in SQL Server 2019 Toward Faster Results and Lower Maintenance",
          author: "Jason Strate"
        },
        {
          img: "https://learning.oreilly.com/library/cover/9781492041207/",
          title: "Laravel: Up & Running, 2nd Edition",
          author: "Matt Stauffer"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
