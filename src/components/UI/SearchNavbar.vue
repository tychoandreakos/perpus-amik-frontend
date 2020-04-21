<template lang="pug">
  section#search(:style="open ? { height: '100vh' } : { height: '0' }")
    div.info
      h3 {{ title }}
      span {{ desc }}
    form(@submit.prevent="submitForm")
      Input(
        class="input"
        typeInput="text"
        placeholder="Ingin baca buku apa hari ini?"
        name="cari"
        formName="search"
      )
      div.btn
        Button( :submit="true" :link="link" )
    div.backdrop(
      v-if="dropdownHandler"
      @click="dropdownHandler = !dropdownHandler"
    )
    div.dropdown(:style="dropdownHandler")
      div.dropdown-elem
        div.dropdown-text(@click="dropdownHandler = !dropdownHandler")
          input(type="text" v-model="defaultDropdown")
        div.dropdown-list( :style="dropdownHandler ? { height: '130px' } : { height: '0' }" )
          ul
            li(v-for="(list, i) in dropdown" :key="i" @click="liHandler(list)") {{ list }}
</template>
<script>
import Input from "./InputOne";
import Button from "./ButtonSimple";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SearchNavbar",
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getFormData"]),
    dropdown() {
      const list = ["buku", "pengarang", "ISBN", "Tahun Terbit"];
      return this.removeList(list);
    },
  },
  components: {
    Input,
    Button,
  },
  created() {
    this.insertInput({
      filter: this.defaultDropdown,
    });
  },
  methods: {
    ...mapMutations(["insertInput"]),
    removeList(list) {
      const newList = [];
      for (let key of list) {
        if (key != this.defaultDropdown) newList.push(key);
      }
      return newList;
    },
    liHandler(list) {
      this.insertInput({
        filter: list,
      });
      this.defaultDropdown = list;
      this.dropdownHandler = false;
    },
    submitForm() {
      const form = this.getFormData;
      for (let key in form) {
        console.log(`${key}:`, form[key]);
      }
    },
  },
  data() {
    return {
      link: {
        title: "Cari!",
      },
      title: "Lorem ipsum dolor sit amet.",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam\
        eligendi in rem officia repudiandae.",
      defaultDropdown: "buku",
      dropdownHandler: false,
    };
  },
};
</script>
<style scoped>
#search {
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  background: #fff;
  z-index: 99;
  display: flex;
  justify-content: center;
  transition: height 0.3s ease;
  overflow: hidden;
  flex-direction: column;
}

#search .info {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
}

#search .info h3 {
  font-family: "Quicksand", sans-serif;
  font-size: 1.4rem;
}

#search .info span {
  font-family: "Poppins", sans-serif;
  font-size: 0.87rem;
  display: inline-block;
  width: 60%;
  font-weight: 400;
  margin-top: 0.4rem;
}

#search form {
  background: #fff;
  width: 70%;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin: 0 auto;
}

#search form .input {
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  transition: border 0.3s ease-in;
}

#search form .input:focus {
  border: 1px solid #019875;
}

#search .backdrop {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  z-index: 2;
}

#search .dropdown {
  margin: 0 auto;
  margin-top: 1rem;
  font-family: "Quicksand", sans-serif;
  z-index: 3;
  display: flex;
}

#search .dropdown-elem {
  width: 100%;
  border: 1px solid #019875;
  border-radius: 5px;
}

#search .dropdown .dropdown-text {
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  font-size: 0.89rem;
}

#search .dropdown .dropdown-text input {
  background: inherit;
  width: 100%;
  border: none;
  pointer-events: none;
  font-size: inherit;
  font-weight: 400;
  color: inherit;
  font-family: inherit;
  text-transform: capitalize;
}

#search .dropdown .dropdown-list {
  overflow: hidden;
  transition: height 0.4s ease-in;
}

#search .dropdown .dropdown-list ul {
  list-style: none;
  text-transform: capitalize;
}

#search .dropdown .dropdown-list ul li {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 0.89rem;
  transition: background 0.1s ease-in;
}

#search .dropdown .dropdown-list ul li:hover {
  background: #019875;
  color: #fff;
}
</style>
