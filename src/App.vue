<template>
  <div id="app">
    <div class="welcome">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

.welcome {
  width: 100%;
  height: 110vh;
}
</style>
