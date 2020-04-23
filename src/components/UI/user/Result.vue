<template lang="pug">
  section#result-book
    div.info-book
      div.img(:style="{background: 'url('+ bookResult.imgBook.img +') no-repeat'}")
      div.book-description
        h3 {{ bookResult.titleBook.title }}
        div.rating
          Rating(
            :max-rating="5"
            :increment="1"
            :rating="bookResult.rating"
            :star-size="19"
            active-color="#613ff4"
            :show-rating="false"
          )
          span {{ bookResult.rating }} Review
        template(v-if="Array.isArray(bookResult.authorBook.author)")
          router-link.author(
            to="#"
            v-for="(author, i) in bookResult.authorBook.author"
            :key="i"
          ) {{ author | capitalize}}
        template(v-else)
          router-link.author(to="#") {{ bookResult.authorBook.author | capitalize }}
        span.info(v-for="(title, key) in label" :key="key") {{ title | capitalize }}: {{ bookResult[title] }}
        span.info ISBN: {{ bookResult.titleBook.isbn }}
        span.info Topic: 
          router-link.topic(
          to="#"
          v-for="(topic, index) in bookResult.topic"
          :key="index"
        ) {{ topic.toUpperCase() }}
      div.button-info
        .btn(@click="goToReading")
          Button(:title="title")
        router-link(v-for="(info, indexKey) in buttonInfo" :key="indexKey" :to="info.href") {{ info.title }}
    
    section.description-book
      h3 {{ desc }}
      div.desc(v-html="description")
</template>
<script>
import Rating from "vue-star-rating";
import Button from "./Button";
import { mapGetters } from "vuex";

export default {
  name: "Result",
  components: {
    Rating,
    Button,
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters(["getBook"]),
    bookResult() {
      const temp = {
        publisher: "O'reily Media",
        release: "March 2020",
        topic: ["php"],
      };
      return {
        ...this.getBook({
          params: this.$route.params.isbn,
          query: this.$route.query.type,
        }),
        ...temp,
      };
    },
  },
  methods: {
    goToReading() {
      this.$router.push({
        name: "bookView",
      });
    },
  },
  data() {
    return {
      label: ["publisher", "release"],
      desc: "Book Description",
      buttonInfo: [
        {
          href: "#",
          title: "View List of Book",
        },
        {
          href: "#",
          title: "Adding to Playlist",
        },
      ],
      description:
        "<p>Why is PHP the most widely used programming language on the web? This updated edition teaches everything you need to know to create effective web applications using the latest features in PHP 7.3. You’ll start with the big picture and then dive into language syntax, programming techniques, and other details, using examples that illustrate both correct usage and common idioms.</p><br /><p>If you have a working knowledge of HTML, authors Kevin Tatroe and Peter MacIntyre provide many style tips and practical programming advice in a clear and concise manner to help you become a top-notch PHP programmer.</p><br /><ul><li>Understand what’s possible when you use PHP programs</li><li>Learn language fundamentals, including data types, variables, operators, and flow control statements</li><li>Explore functions, strings, arrays, and objects</li><li>Apply common web application techniques, such as form processing, data validation, session tracking, and cookies</li><li>Interact with relational databases like MySQL or NoSQL databases such as MongoDB</li><li>Generate dynamic images, create PDF files, and parse XML files</li><li>Learn secure scripts, error handling, performance tuning, and other advanced topics</li><li>Get a quick reference to PHP core functions and standard extensions</li></ul>",
      title: "Start Reading Now",
    };
  },
};
</script>
<style lang="scss">
#result-book {
  margin: 0 2rem;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 5px 10px #e3e3e3;
  margin-bottom: 2rem;

  .info-book {
    display: flex;

    .img {
      width: 150px;
      height: 180px;
      box-shadow: 0 5px 10px #e3e3e3;
      margin-right: 1rem;
    }

    .rating {
      display: flex;
      align-items: center;
      padding-bottom: 0.2rem;
    }

    .rating span {
      font-family: "Nunito", sans-serif;
      font-size: 0.9rem;
      margin-left: 0.3rem;
    }

    .book-description {
      flex-basis: 64%;

      h3 {
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 0.2rem;
      }

      span {
        display: block;
      }

      .author,
      span.info .topic {
        color: #613ff4;
      }

      .author:hover {
        color: #222;
      }

      .author + .author:before {
        content: ", ";
      }

      .info {
        font-size: 0.8rem;
        font-family: "Poppins", sans-serif;
        color: #949090;

        &:first-child {
          margin-top: 0.8rem;
        }

        .topic:hover {
          color: #222;
        }
      }
    }

    .button-info {
      align-self: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-items: center;

      .btn {
        margin-bottom: 0.7rem;
      }

      a {
        font-family: "Nunito", sans-serif;
        font-size: 0.8rem;
        text-decoration: none;
        margin: 0.2rem 0;
        color: #949090;
      }

      a:hover {
        color: #222;
      }
    }
  }

  .description-book {
    margin-top: 2.5rem;

    h3 {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
    }

    .desc {
      margin-top: 1rem;
      font-family: "Nunito", sans-serif;
      font-size: 0.9rem;
    }

    .desc >>> ul {
      margin-left: 1.5rem;
    }
  }
}
</style>
