<template>
  <section id="list-book">
    <div class="media-wrapper">
      <div class="media-info-wrapper">
        <a
          :href="item.imgBook.href"
          class="img"
          :style="{
            background: 'url(' + item.imgBook.img + ')'
          }"
        ></a>
        <div class="media-info">
          <div class="media-categories">
            <div class="category">Video</div>
            <div class="playlist">x</div>
          </div>
          <a :href="item.titleBook.href" class="title">{{
            item.titleBook.title
          }}</a>
          <span
            >By :
            <template v-if="isArray(item.authorBook.author)">
              <a
                v-for="(author, i) in item.authorBook.author"
                :key="i"
                href="#"
                >{{ author }}</a
              >
            </template>
            <template v-else>
              <a :href="item.authorBook.href">{{ item.authorBook.author }}</a>
            </template></span
          >
        </div>
      </div>
      <div class="media-description">
        <div class="info-rating">
          <div class="rating">
            <template v-if="item.rating">
              <!-- <Icon
                v-for="(rating, i) in item.rating"
                :key="i"
                class="fully-color"
                icon="star"
              /> -->
              <Rating
                :max-rating="5"
                :increment="1"
                :rating="item.rating"
                :star-size="15"
                active-color="#613ff4"
                :show-rating="false"
              />
            </template>
            <template v-else>
              <Icon
                v-for="(restRating, i) in item.rating - 5"
                :key="i"
                icon="star"
              />
            </template>
          </div>
          <span>{{ item.rating }} Reviews</span>
        </div>
        <p>Pack Publishing May 2018</p>
        <span class="description">{{ item.description | descFilter }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import Icon from "vue-themify-icons";
import Rating from "vue-star-rating";

export default {
  name: "ListBook",
  components: {
    Icon,
    Rating
  },
  methods: {
    isArray(val) {
      return Array.isArray(val);
    }
  },
  filters: {
    descFilter(val) {
      if (val.length >= 400) return val.substring(0, 400) + " ...";
      else return val;
    }
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>
<style scoped>
#list-book {
  width: 100%;
  padding: 0 4rem;
  background: #fff;
}

#list-book .media-wrapper {
  border-bottom: 1px solid #ddd;
  padding: 1.5rem 0;
}

#list-book .media-wrapper .media-info-wrapper {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
}

#list-book .media-wrapper .media-info-wrapper .img {
  width: 85px;
  height: 95px;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  margin-right: 1.5rem;
}

#list-book .media-wrapper .media-info-wrapper .media-info {
  width: 100%;
}

#list-book .media-wrapper .media-info-wrapper .media-info .media-categories {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

#list-book
  .media-wrapper
  .media-info-wrapper
  .media-info
  .media-categories
  .category {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 0.88rem;
  color: #613ff4;
}

#list-book .media-wrapper .media-info-wrapper .media-info .title {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: inherit;
  font-weight: bold;
  display: block;
  text-decoration: none;
}

#list-book .media-wrapper .media-info-wrapper .media-info span {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
}

#list-book .media-wrapper .media-info-wrapper .media-info span a {
  color: inherit;
}

#list-book .media-wrapper .media-info-wrapper .media-info span a:hover,
#list-book .media-wrapper .media-info-wrapper .media-info .title:hover {
  color: #613ff4;
}

#list-book .media-wrapper .media-description .info-rating {
  display: flex;
  width: 15%;
  justify-content: space-between;
  align-items: center;
}

#list-book .media-wrapper .media-description .info-rating span {
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
}

#list-book .media-wrapper .media-description p {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

#list-book .media-wrapper .media-description .description {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.07rem;
}
</style>
