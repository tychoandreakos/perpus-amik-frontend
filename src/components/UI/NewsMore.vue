<template>
  <section id="another-news">
    <h3 class="title-news">{{ titleNews }}</h3>
    <div v-for="(post, i) in posts" :key="i" class="card">
      <img :src="post.image" :alt="post.title" />
      <div class="news-info">
        <a class="news-link" :href="post.href">{{ post.title }}</a>
        <p>{{ post.description }}</p>
        <Button :title="buttonTitle" />
      </div>
    </div>
  </section>
</template>
<script>
import Button from "./ButtonSimple";

export default {
  name: "NewsMore",
  components: {
    Button
  },
  data() {
    return {
      buttonTitle: "Baca Selengkapnya",
      titleNews: "Berita Lainnya",
      posts: [
        {
          title: "Leap of Kindness",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem blanditiis aut, quo obcaecati necessitatibus? landitiis aut, quo obcaecati necessitatibus?",
          href: "#",
          image:
            "https://cphlibrary.org/wp-content/uploads/2019/01/tax-forms1.png"
        },
        {
          title: "Leap of Kindness",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate exercitationem blanditiis aut, quo obcaecati necessitatibus? landitiis aut, quo obcaecati necessitatibus?",
          href: "#",
          image:
            "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5257%252C3503%252C0%252C441%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1066%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-04%252Fffaf30c0-5565-11e9-9fff-114c0fa55c4f%26client%3Da1acac3e1b3290917d92%26signature%3Dc937a68b4db46491bab50b3847bc95a4fa0c8a0b&client=amp-blogside-v2&signature=5745f6ee327b4fb0aa51365e926d972c24d406b5"
        }
      ]
    };
  }
};
</script>
<style scoped>
#another-news {
  margin-top: 14rem;
  padding: 0 7rem;
  color: #494949;
}

#another-news .title-news {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #494949;
  display: inline-block;
}

#another-news .card {
  display: flex;
  align-items: center;
  margin: 3rem 0;
}

#another-news .card img {
  width: 500px;
  height: 300px;
}

#another-news .card .news-info {
  padding-left: 2rem;
}

#another-news .card .news-info a.news-link {
  text-decoration: none;
  color: #494949;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
}

#another-news .card .news-info p {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 0.99rem;
  margin: 1rem 0 1.5rem 0;
}
</style>
