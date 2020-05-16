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
  justify-content: center;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 25%;

  input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 0.05rem solid #41b883;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 0.5rem;
    width: 50%;
  }
}
</style>