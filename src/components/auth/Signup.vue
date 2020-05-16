<template>
  <div class="flex-center">
    <h1>Sign Up Here</h1>

    <form @submit.prevent="signup">
      <label for="name">Name</label>
      <input type="text" name="name" placeholder="John Doe" autocomplete="off" v-model="name" />

      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="John@Doe.com"
        autocomplete="off"
        v-model="email"
      />

      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Enter password" v-model="password" />

      <button>Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch("signup", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$router.push("/login");
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