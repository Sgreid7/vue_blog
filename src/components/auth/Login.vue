<template>
  <div class="flex-center">
    <h1>Login Here</h1>

    <form @submit.prevent="login">
      <label for="email">Username / Email</label>
      <input
        type="email"
        name="email"
        placeholder="John@Doe.com"
        autocomplete="off"
        v-model="username"
      />

      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Enter password" v-model="password" />

      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("getToken", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          this.$router.push("/posts");
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  color: #fff;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 30vh;
  background: rgba(0, 0, 0, 0.7);

  label {
    font-size: 1.5rem;
    text-shadow: 0.05rem 0.05rem 0.05rem #41b883;
  }

  input {
    padding: 0.5rem;
    border: 0.05rem solid #41b883;

    &:focus {
      outline: none;
    }
  }

  button {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    width: 50%;
  }
}
</style>