<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap")
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap")
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500&display=swap")
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400&display=swap")

#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

*
  margin: 0;
  padding: 0;
  box-sizing: border-box;

html,
body,
#app
  width: 100%;
  height: 100%;
</style>
