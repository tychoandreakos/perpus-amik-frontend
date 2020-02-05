<template>
  <section id="hero">
    <div class="panel">
      <h1>Take Your Child to</h1>
      <h1>the Library Day!</h1>
      <p>{{ info }}</p>
      <Button class="btn-position" :title="buttonTitle"/>
    </div>
  </section>
</template>
<script>
import Button from "./ButtonSimple.vue";

export default {
  name: "Hero",
  components: {
    Button
  },
  data() {
    return {
      title: "Take Your Child to the Library Day!",
      info:
        "On February 1, drop in to the Library, sign up for your very first Greenwich Library card, create a Lunar New Year craft, and pick up a free copy of Dr. Seuss’s Gerald McBoing Boing in the Children’s Room!",
      buttonTitle: "Attend a Program"
    };
  }
};
</script>
<style scoped>
#hero {
  background: url("https://wallpapersmug.com/download/2560x1024/d00534/facade-building-architecture.jpg")
    center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 77vh;
}

#hero .panel {
  background: rgba(255, 255, 255, 0.92);
  width: 55%;
  padding: 4rem;
  height: 58%;
  position: relative;
}

#hero .panel h1 {
  font-family: "Quicksand", sans-serif;
  font-size: 3.8em;
  font-weight: 400;
  border-bottom: 2px solid #eb9532;
  display: inline-block;
  color: #494949;
  padding-bottom: 0.5rem;
  line-height: 85px;
  margin: 0 !important;
  letter-spacing: 2px;
}

#hero .panel p {
  margin-top: 1.9rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-size: 1rem;
}

#hero .panel .btn-position{
  position: absolute;
  right: 30px;
  bottom: 17px;
}
</style>
