<template>
  <div class="app">
    <ul class="navbar">
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Login</a></li>
      <li><a href="/">Sign Up</a></li>
    </ul>

    <div>
      <h1>Content goes here</h1>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #2c3e50;
    height: 100vh;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }

  .navbar {
    display: flex;
    padding: 1rem 0;
    margin: 0;
    justify-content: flex-end;
    background: #f5f8fa;
    border-bottom: 0.15rem solid lightgrey;
    margin-bottom: 2rem;
    list-style: none;

    a {
      color: #636b6f;
      padding: 0 1.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
</style>
