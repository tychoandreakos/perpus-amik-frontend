<template lang="pug">
  section#signin
    form(@submit.prevent="submitForm")
      img(
        style="width: 250px"
        :src="require('../../assets/main-logo-green.svg')"
        alt="logo"
      )
      h3 {{ signin.title }}
      span {{ signin.desc }}
      Input(
        placeholder="Masukkan username atau Npm"
        name="username / NPM"
        class="input"
        typeInput="text"
        :showLabel="true"
        formName="username"
      )
      Input(
        placeholder="Masukkan password"
        typeInput="password"
        name="password"
        class="input"
        :showLabel="true"
        formName="password"
      )
      Button(
        :style="{ marginTop: '.8rem' }"
        :disabled="buttonChecker"
        :submit="true"
        :link="link"
        :showLabel="true"
      )
</template>
<script>
import Input from "../UI/InputOne";
import Button from "../UI/ButtonSimple";

import { mapGetters } from "vuex";

export default {
  name: "Signin",
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapGetters(["getFormData"]),
    buttonChecker() {
      const { username } = this.getFormData;
      let check = false;
      if (username) {
        check = username.length > 0;
      }
      return !check;
    },
  },
  methods: {
    submitForm() {
      const form = this.getFormData;
      for (let key in form) {
        console.log(`${key}:`, form[key]);
      }
    },
  },
  data() {
    return {
      signin: {
        title: "Sign In",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et\
        similique hic inventore suscipit mollitia.",
      },
      link: {
        title: "Masuk Sekarang",
      },
    };
  },
};
</script>
<style scoped>
#signin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#signin form {
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
}

#signin form h3 {
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  margin-top: 0.4rem;
}

#signin form span {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  margin: 0.7rem 0;
}
</style>
