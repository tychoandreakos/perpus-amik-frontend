<template>
  <section id="slider-user">
    <div class="card">
      <div class="img"></div>
      <div class="desc">
        <a class="title">Lorem ipsum dolor sit amet.</a>
        <div class="span">By <a href="#">Lorem, ipsum.</a></div>
        <div class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit
          laboriosam excepturi vero molestiae porro?
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "History"
};
</script>
<style scoped>
#slider-user {
  width: 100%;
}

#slider-user .card {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

#slider-user .card img {
  width: 75px;
  height: 100px;
  background: red;
}
</style>
