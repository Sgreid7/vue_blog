<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <Posts></Posts>
  </div>
</template>

<script>
  import Posts from "./components/Posts";

  export default {
    name: "App",
    components: {
      Posts,
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 70vw;
    margin: 0 auto;
  }

  .logo {
    display: block;
    margin: 1.2rem auto;
    height: 4.5rem;
  }
</style>
