<template lang="pug">
    div#advanced-search(@click="dropdownHandler" :style="handler ? dropdownTrue : dropdownFalse ")
        div.wrapper
            span {{ label | capitalize }} 
            Icon(icon="angle-down")
        ul
            li 
                input#one(type="checkbox") 
                label(for="one") All
            li 
                input#two(type="checkbox") 
                label(for="two") Books (1209)
        div.backdrop(v-if="handler" @click.stop="handler = !handler")
                
</template>

<script>
import Icon from "vue-themify-icons";
export default {
  name: "AdvancedSearch",
  components: {
    Icon,
  },
  methods: {
    dropdownHandler() {
      this.handler = !this.handler;
    },
  },
  data() {
    return {
      handler: false,
      dropdownTrue: {
        height: "120px",
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
    li {
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      font: {
        size: 0.9rem;
        family: "Poppins", sans-serif;
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
