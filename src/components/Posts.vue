<template>
  <div class="wrapper">
    <form @submit.prevent="addPost">
      <input type="text" class="post-input" placeholder="Title" v-model="post.title" />
      <input type="text" class="post-input" placeholder="Body" v-model="post.body" />
      <button class="post-btn">POST</button>
    </form>
    <h1>All Posts</h1>

    <post v-for="post in this.$store.state.posts" :key="post.id" :post="post"></post>

    <div class="extra-container">
      <div>{{ totalPosts }} total posts</div>
    </div>
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "posts",
  components: {
    Post
  },
  data() {
    return {
      idForPost: 3,
      post: {
        id: "id",
        title: "",
        body: ""
      }
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    totalPosts() {
      return this.$store.getters.totalPosts;
    }
  },
  methods: {
    addPost() {
      if (this.post.title.length === 0 || this.post.body.length === 0) {
        alert("NOT A VALID POST");
        this.post.title = "";
        this.post.body = "";
        this.getPosts();
        return;
      }

      this.$store.dispatch("addPost", {
        id: this.idForPost,
        title: this.post.title,
        body: this.post.body
      });

      this.post.title = "";
      this.post.body = "";
      this.idForPost++;
    }
  }
};
</script>

<style lang="scss">
h1,
h2 {
  font-weight: normal;
}

h1 {
  font-style: italic;
  text-align: center;
  color: #41b883;
  text-shadow: 0.1rem 0.1rem 0.1rem #000;
  margin: 1rem;
  font-size: 2.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0.5rem;
}

a {
  color: #42b983;
}

.post-input {
  width: 100%;
  padding: 0.6rem 1.1rem;
  font-size: 1.1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: 0;
    border: 0.1rem solid #42b983;
  }
}

.post-item {
  margin-bottom: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 0.2rem solid #42b983;
  background: #000;
  padding: 0.5rem;

  h3,
  p {
    margin: 1rem;
  }
}

.remove-post {
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    color: #000;
  }
}

.post-item-left {
  display: flex;
  align-items: center;
}

.post-item-label {
  padding: 1rem;
  color: #fff;
  font-size: 1.2rem;
  margin-left: 0.7rem;
  text-shadow: 0.1rem 0.1rem 0.1rem #42b983;
}

.post-item-edit {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-left: 0.7rem;
  width: 100%;
  padding: 0.5rem;
  border: 0.05rem solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &:focus {
    outline: none;
  }
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-shadow: 0.05rem 0.05rem 0.05rem #42b983;
  border-top: 0.05rem solid lightgray;
  padding-top: 0.8rem;
  margin-bottom: 0.7rem;
}

button {
  font-size: 0.8rem;
  background: #fff;
  appearance: none;
  width: 5rem;
  height: 2rem;
  transition: 0.3s ease;
  border: 0.1rem solid #42b983;

  &:hover {
    background: #42b983;
    color: #fff;
    border: 0.1rem solid #fff;
    box-shadow: 0 0.2rem 0.2rem #fff;
    transform: translateY(-0.2rem);
  }

  &:focus {
    outline: none;
  }
}

.post-btn {
  width: 100%;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  transition: 0.5s ease;
  height: 2.5rem;

  &:hover {
    border: 0.1rem solid #000;
    box-shadow: 0 0.2rem 0.2rem #000;
  }
}
</style>
