<template>
  <section id="signin">
    <form>
      <img
        style="width: 250px"
        :src="require('../../assets/main-logo-green.svg')"
        alt="logo"
      />
      <h3>Sign In</h3>
      <span
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et
        similique hic inventore suscipit mollitia.</span
      >
      <Input
        placeholder="Masukkan username"
        name="username"
        v-model="formData.username"
        typeInput="text"
      />
      <Input
        placeholder="Masukkan password"
        typeInput="password"
        name="password"
        v-model="formData.password"
      />
      <Button
        :style="{ marginTop: '.8rem' }"
        :disabled="true"
        :submit="true"
        :link="link"
      />
    </form>
  </section>
</template>
<script>
import Input from "../UI/InputOne";
import Button from "../UI/ButtonSimple";
export default {
  name: "Signin",
  components: {
    Input,
    Button
  },
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      link: {
        title: "Masuk Sekarang"
      }
    };
  }
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
