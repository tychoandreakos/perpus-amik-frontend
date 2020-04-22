<template lang="pug">
    div#advanced-search(@click="dropdownHandler" :style="handler ? dropdownTrue : dropdownFalse ")
        div.wrapper
            span(:style="choosing ? {fontWeight: 'bold'} : {}") {{ label | capitalize }} 
            Icon(icon="angle-down")
        ul
          template(v-for="(item, i) in list")
            li(:key="i") 
                template(v-if="label == 'rating'")
                  div.rating
                    Rating(
                    :max-rating="5"
                    :increment="1"
                    :rating="item.rating"
                    :star-size="15"
                    active-color="#613ff4"
                    :show-rating="false"
                  )
                    span.point 5 Star
                template(v-else)
                  input(type="checkbox" @click="checkLabel = label" :value="i" v-model="checked" :id="i") 
                  label(:for="i") {{ i | capitalize }} ( {{ item.total }} )
          .btn(@click.stop="submit(label)")
            Button.btn-click(:disabled="enabledButton" title="Find")
                
        div.backdrop(v-if="handler" @click.stop="handler = !handler")
                
</template>

<script>
import Icon from "vue-themify-icons";
import Rating from "vue-star-rating";
import Button from "./Button";

export default {
  name: "AdvancedSearch",
  components: {
    Icon,
    Rating,
    Button,
  },
  computed: {
    enabledButton() {
      return this.checked.length > 0 ? false : true;
    },
  },
  methods: {
    dropdownHandler() {
      this.handler = !this.handler;
    },
    submit(label) {
      this.$emit("checked", {
        label: this.checkLabel,
        checked: this.checked,
      });
    },
  },
  data() {
    return {
      checkLabel: "",
      checked: [],
      handler: false,
      choosing: false,
      dropdownTrue: {
        height: "170px",
      },
      dropdownFalse: {
        height: "40px",
      },
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    list: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
#advanced-search {
  border: 1px solid #ccc;
  padding: 0.5rem 1.5rem;
  margin-left: 1.5rem;
  cursor: pointer;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: 250px;
  position: relative;
  z-index: 5;

  &:hover {
    box-shadow: 0 10px 15px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.08);
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.329);
    z-index: 2;
    cursor: default;
  }

  ul {
    margin-top: 0.9rem;
    list-style: none;
    position: relative;
    z-index: 5;
    background: #fff;

    .btn {
      width: 100%;

      .btn-click {
        width: 100%;
      }
    }

    li {
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      font: {
        size: 0.9rem;
        family: "Poppins", sans-serif;
      }

      .rating {
        display: flex;
        flex-direction: column;
        align-items: center;

        span.point {
          margin-top: 0.3rem;
          // font
        }
      }

      label {
        margin-left: 0.9rem;
        display: inline-block;
        width: 100%;
        cursor: pointer;
      }
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    text-align: center;
    display: inline-block;
    transition: 0.2s box-shadow ease;
    width: 100%;
    position: relative;
    z-index: 5;
    background: #fff;

    font: {
      size: 0.9rem;
      weight: 500;
    }
  }
}
</style>
