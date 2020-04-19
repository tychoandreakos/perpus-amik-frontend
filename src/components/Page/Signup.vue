<template>
  <section id="signup">
    <NavbarComponent />
    <HeroComponent
      :propsInfo="hero.propsInfo"
      :propsButtonEnabled="hero.buttonEnabled"
      :propsHero="hero.propsHero"
      :propsPanel="hero.propsPanel"
      :propsTitle="hero.propsTitle"
    />
    <div class="title-info">
      <h3>{{ info.title }}</h3>
      <span>{{ info.desc }}</span>
    </div>
    <form @submit.prevent="submitForm">
      <div class="input-signup">
        <Input
          v-for="(input, i) in inputs"
          :key="i"
          class="form-input"
          :name="input.name"
          :placeholder="input.placeholder"
          :typeInput="input.typeInput"
          :formName="input.formName"
        />
      </div>
      <Button
        :disabled="buttonChecker"
        :style="{ marginTop: '1rem' }"
        :link="link"
        :submit="true"
      />
    </form>
    <FooterComponent :style="{ marginTop: '4rem' }" />
  </section>
</template>
<script>
import NavbarComponent from "../UI/Navbar";
import HeroComponent from "../UI/Hero";
import Input from "../UI/InputOne";
import Button from "../UI/ButtonSimple";
import FooterComponent from "../UI/Footer";

import { mapGetters } from "vuex";

export default {
  name: "Signup",
  components: {
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    Input,
    Button,
  },
  methods: {
    submitForm() {
      const form = this.getFormData;
      for (let key in form) {
        console.log(`${key}:`, form[key]);
      }
    },
  },
  computed: {
    ...mapGetters(["getFormData"]),
    buttonChecker() {
      const { npm, username, password, name, email } = this.getFormData;
      let check = false;
      if (npm && username && password && name && email) {
        check =
          npm.length > 0 &&
          username.length > 0 &&
          password.length > 0 &&
          name.length > 0 &&
          email.length > 0;
      }
      return !check;
    },
  },
  data() {
    return {
      inputs: [
        {
          name: "NPM",
          placeholder: "Your NPM",
          typeInput: "text",
          formName: "npm",
        },

        {
          name: "Username",
          placeholder: "Your Username",
          typeInput: "text",
          formName: "username",
        },
        {
          name: "Password",
          placeholder: "Your Password",
          typeInput: "password",
          formName: "password",
        },
        {
          name: "Name",
          placeholder: "Your name",
          typeInput: "text",
          formName: "name",
        },
        {
          name: "Email",
          placeholder: "Your Email",
          typeInput: "email",
          formName: "email",
        },
        {
          name: "Telephone",
          placeholder: "Your Telephone",
          typeInput: "text",
          formName: "telp",
        },
      ],
      link: {
        title: "Daftar Sekarang",
        href: "#",
      },
      info: {
        title: "Start your free 10-day trial",
        desc:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos alias sequi illum placeat excepturi pariatur, ipsam assumenda!",
      },
      hero: {
        propsInfo: {
          title: "Registrasi Member",
        },
        buttonEnabled: false,
        propsHero: {
          height: "40vh",
          background:
            "url('https://www.greenwichlibrary.org/wp-content/uploads/2016/04/Pattern-BG-About.svg') center/cover no-repeat fixed",
        },
        propsPanel: {
          width: "32%",
          padding: "4rem",
          height: "80%",
        },
        propsTitle: {
          fontSize: "2.9rem",
          lineHeight: "50px",
          borderBottom: "0",
        },
      },
    };
  },
};
</script>
<style scoped>
#signup {
  width: 100%;
  overflow-x: hidden;
}
#signup .title-info {
  padding: 2rem;
  padding-left: 7rem;
}

#signup .title-info h3 {
  font-family: "Quicksand", sans-serif;
  font-size: 1.8rem;
}

#signup .title-info span {
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  width: 70%;
  display: inline-block;
}

#signup form {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 1rem;
  justify-items: center;
  align-items: center;
  width: 80%;
}

#signup form .input-signup {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  position: relative;
}

#signup form .input-signup input {
  width: 200%;
}

#signup form .input-signup .form-input {
  width: 100%;
  position: relative;
}
</style>
