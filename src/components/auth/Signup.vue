<template>
  <div class="flex-center">
    <h1>Sign Up Here</h1>

    <form @submit.prevent="signup">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="John Doe"
        autocomplete="new-password"
        v-model="name"
      />

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
    margin: 0.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    width: 50%;
  }
}
</style>