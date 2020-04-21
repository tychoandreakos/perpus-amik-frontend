<template lang="pug">
  div#news-panel
    h3 {{ title }}
    div.panel-wrap
      img(
        :src="panel.src"
        :alt="panel.alt"
      )
      div.side
        div.img
        div.desc
        div.desc-outer
          a(href="#")
            h3 {{ panel.title }}
            span {{ panel.desc }}
            span.link {{ panel.link }}
</template>
<script>
export default {
  name: "newsPanel",
  data() {
    return {
      title: "On Our Radar",
      panel: {
        src:
          "https://cdn.oreillystatic.com/images/on-our-radar/deep-learning-with-tensorFlow-keras-and-pytorch-448x280.jpg",
        alt: "image",
        title: "Build State of the Art Deep Learning Models",
        desc:
          "In this first scenario, we'll explore how you can start and connect to your first container using Docker. The environment has b",
        link: "Watch me",
      },
    };
  },
};
</script>
<style scoped>
#news-panel {
  width: 100%;
  padding: 1.4rem 1rem 1.4rem 2rem;
}
h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
}

#news-panel .panel-wrap {
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 55% 45%;
}

#news-panel .panel-wrap .side {
  width: 100%;
  position: relative;
}

#news-panel .panel-wrap .side .img {
  background: url("https://cdn.oreillystatic.com/images/on-our-radar/deep-learning-with-tensorFlow-keras-and-pytorch-448x280.jpg");
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#news-panel .panel-wrap .side .desc {
  position: absolute;
  color: #fff;
  background: rgba(0, 0, 0, 0.836);
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(2px);
}

#news-panel .panel-wrap .side .desc-outer {
  position: relative;
  height: 100%;
  padding: 2rem 3rem;
}

#news-panel .panel-wrap .side .desc-outer a {
  text-decoration: none;
  color: #fff;
}

#news-panel .panel-wrap .side .desc-outer span.link {
  text-decoration: underline;
  display: block;
  margin-top: 0.9rem;
}

#news-panel .panel-wrap .side .desc-outer h3 {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  font-family: "Nunito", sans-serif;
  margin-bottom: 1rem;
}
</style>
