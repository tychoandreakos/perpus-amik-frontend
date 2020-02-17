<template>
  <section id="result-book">
    <div class="info-book">
      <div class="img"></div>
      <div class="book-description">
        <h3>{{ bookResult.title }}</h3>
        <div class="rating">
          <Rating
            :max-rating="5"
            :increment="1"
            :rating="bookResult.rating"
            :star-size="19"
            active-color="#613ff4"
            :show-rating="false"
          />
          <span>{{ bookResult.rating }} Review</span>
        </div>
        <router-link
          to="#"
          class="author"
          v-for="(author, i) in bookResult.author"
          :key="i"
          >{{ author }}</router-link
        >
        <span class="info" style="margin-top: .5rem"
          >Publisher : {{ bookResult.publisher }}</span
        >
        <span class="info">Release Date: {{ bookResult.release }}</span>
        <span class="info">ISBN: {{ bookResult.isbn }}</span>
        <span class="info"
          >Topic:
          <router-link
            class="topic"
            to="#"
            v-for="(topic, i) in bookResult.topic"
            :key="i"
            >{{ topic.toUpperCase() }}</router-link
          ></span
        >
      </div>
      <div class="button-info">
        <Button class="btn" :title="title" />
        <router-link to="#">View List Of Book</router-link>
        <router-link to="#">Adding to Playlist</router-link>
      </div>
    </div>

    <section class="description-book">
      <h3>Book Description</h3>
      <div class="desc" v-html="description"></div>
    </section>
  </section>
</template>
<script>
import Rating from 'vue-star-rating';
import Button from './Button';

export default {
  name: 'Result',
  components: {
    Rating,
    Button
  },
  data() {
    return {
      description:
        '<p>Why is PHP the most widely used programming language on the web? This updated edition teaches everything you need to know to create effective web applications using the latest features in PHP 7.3. You’ll start with the big picture and then dive into language syntax, programming techniques, and other details, using examples that illustrate both correct usage and common idioms.</p><br /><p>If you have a working knowledge of HTML, authors Kevin Tatroe and Peter MacIntyre provide many style tips and practical programming advice in a clear and concise manner to help you become a top-notch PHP programmer.</p><br /><ul><li>Understand what’s possible when you use PHP programs</li><li>Learn language fundamentals, including data types, variables, operators, and flow control statements</li><li>Explore functions, strings, arrays, and objects</li><li>Apply common web application techniques, such as form processing, data validation, session tracking, and cookies</li><li>Interact with relational databases like MySQL or NoSQL databases such as MongoDB</li><li>Generate dynamic images, create PDF files, and parse XML files</li><li>Learn secure scripts, error handling, performance tuning, and other advanced topics</li><li>Get a quick reference to PHP core functions and standard extensions</li></ul>',
      title: 'Start Reading Now',
      bookResult: {
        title: 'Programming PHP, 4th Edition',
        rating: 1,
        author: ['Peter Macintyre', 'Kevin Traore'],
        publisher: "O'reily Media",
        release: 'March 2020',
        isbn: '9781492054139',
        topic: ['php']
      }
    };
  }
};
</script>
<style scoped>
#result-book {
  margin: 0 2rem;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 5px 10px #e3e3e3;
  margin-bottom: 2rem;
}

#result-book .info-book {
  display: flex;
}

#result-book .info-book .img {
  width: 150px;
  height: 180px;
  background: url('https://learning.oreilly.com/library/cover/9781492054122/');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 5px 10px #e3e3e3;
  margin-right: 1rem;
}

#result-book .info-book .rating {
  display: flex;
  align-items: center;
  padding-bottom: 0.2rem;
}

#result-book .info-book .rating span {
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  margin-left: 0.3rem;
}

#result-book .info-book .book-description {
  flex-basis: 64%;
}

#result-book .info-book .book-description h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
}

#result-book .info-book .book-description span {
  display: block;
}

#result-book .info-book .book-description .author,
#result-book .info-book .book-description span.info .topic {
  color: #613ff4;
}

#result-book .info-book .book-description .author:hover {
  color: #222;
}

#result-book .info-book .book-description .author + .author:before {
  content: ', ';
}

#result-book .info-book .book-description span.info:first-child {
  margin-top: 0.8rem;
}

#result-book .info-book .book-description span.info {
  font-size: 0.8rem;
  font-family: 'Poppins', sans-serif;
  color: #949090;
}

#result-book .info-book .book-description span.info .topic:hover {
  color: #222;
}

#result-book .info-book .button-info {
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

#result-book .info-book .button-info .btn {
  margin-bottom: 0.7rem;
}

#result-book .info-book .button-info a {
  font-family: 'Nunito', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  margin: 0.2rem 0;
  color: #949090;
}

#result-book .info-book .button-info a:hover {
  color: #222;
}

#result-book .description-book {
  margin-top: 2.5rem;
}

#result-book .description-book h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}

#result-book .description-book .desc {
  margin-top: 1rem;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
}

#result-book .description-book .desc >>> ul {
  margin-left: 1.5rem;
}
</style>
