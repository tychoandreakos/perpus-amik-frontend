<template lang="pug">
  div.container
    div.special
      div.special-info {{ posted }}
      div.shadow
    section#news
      div.news-info
        a.title(:href="post.href") {{ post.title }}
        p {{ post.description }}
        div.btn-news
          Button(:title="readMore")
      div.panel-img
        div.img(:style="{ background: 'url(' + post.img + ')' }")
</template>
<script>
import Button from "./ButtonSimple";

export default {
  name: "News",
  components: {
    Button
  },
  data() {
    return {
      posted: "Berita Terbaru",
      readMore: "Baca Selengkapnya",
      post: {
        title: "Valentines For Vets",
        href: "#",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea eaqueat dicta harum consequatur, obcaecati sed alias saepe recusandae,blanditiis ipsam in eos placeat accusamus quidem, nemo eius quibusdam animi nobis. Laboriosam possimus impedit fugit animi magnam magni, voluptate voluptatem aut architecto doloremque in!",
        img:
          "https://cdn-image.realsimple.com/sites/default/files/styles/medium_2x/public/valentines-day-history-origin-story-saint-info-when.jpg?itok=rOhr0N5t&1576256541"
      }
    };
  }
};
</script>
<style scoped>
.container {
  background: #78cbc2;
  padding: 4rem 10rem 0 10rem;
  position: relative;
  height: 20rem;
}

.container .special {
  position: absolute;
  top: 55px;
  left: 140px;
}

.container .special .special-info {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.7rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 0.77rem;
  position: relative;
  z-index: 2;
}

.container .special .shadow {
  background: rgba(242, 186, 122, 0.8);
  height: 30px;
  width: 105px;
  position: absolute;
  top: 13px;
  left: -5px;
  z-index: 1;
}

#news {
  width: inherit;
  /* margin:  6rem; */
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  max-height: 29rem;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
}

#news .news-info {
  padding: 3rem 5rem;
}

#news .news-info a.title {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 4px;
  line-height: 3.5rem;
  color: #494949;
  text-decoration: none;
}

#news .news-info a.title:hover {
  color: #eb9532;
}

#news .news-info p {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: #494949;
  font-size: 0.98rem;
  padding: 0.9rem 0.1rem;
  margin: 0.8rem 0;
}

#news .news-info .btn-news {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

#news .panel-img {
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  overflow: hidden;
  background: #5c427d;
}

#news .panel-img .img {
  width: 100%;
  height: 100%;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
}

#news .panel-img:hover .img {
  transform: scale(2) rotate(25deg);
}
</style>
