<template>
  <div class="app">
    <ul class="navbar">
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link to="/signup">Sign Up</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </li>
    </ul>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";

.v-enter-active {
  animation: bounceIn 0.2s;
}

.v-leave-active {
  animation: bounceIn 0.2s reverse;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: (1);
    opacity: 1;
  }
}

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
  background: #42b983;
  border-bottom: 0.2rem solid #000;
  margin-bottom: 2rem;
  list-style: none;

  a {
    color: #fff;
    text-shadow: 0.05rem 0.05rem 0.05rem #000;
    padding: 0 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s ease;

    &:hover {
      color: #000;
      text-shadow: 0.05rem 0.05rem 0.05rem #fff;
      transform: translateY(-0.25rem);
    }
  }
}
</style>
