import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://127.0.0.1:8001/api";

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    posts: [],
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    totalPosts(state) {
      return state.posts.length;
    },
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    deleteToken(state, token) {
      state.token = null;
    },
    getToken(state, token) {
      state.token = token;
    },
    getPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push({
        id: post.id,
        title: post.title,
        body: post.body,
        editing: false,
      });
    },
    updatePost(state, post) {
      const index = state.posts.findIndex((item) => item.id == post.id);
      state.posts.splice(index, 1, {
        id: post.id,
        title: post.title,
        body: post.body,
        editing: post.editing,
      });
    },
    deletePost(state, id) {
      const index = state.posts.findIndex((item) => item.id == id);
      state.posts.splice(index, 1);
    },
  },
  actions: {
    async signup(context, data) {
      await axios
        .post("/signup", {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    async deleteToken(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;

      if (context.getters.loggedIn) {
        await axios
          .post("/logout")
          .then((res) => {
            localStorage.removeItem("access_token");
            context.commit("deleteToken");
            console.log(res);
          })
          .catch((err) => {
            localStorage.removeItem("access_token");
            context.commit("deleteToken");
            console.log(err);
          });
      }
    },
    async getToken(context, user) {
      await axios
        .post("/login", {
          username: user.username,
          password: user.password,
        })
        .then((res) => {
          const token = res.data.access_token;

          localStorage.setItem("access_token", token);
          context.commit("getToken", token);
        })
        .catch((err) => console.log(err));
    },
    getPosts(context) {
      axios
        .get("/posts")
        .then((res) => {
          context.commit("getPosts", res.data);
        })
        .catch((err) => console.log(err));
    },
    addPost(context, post) {
      axios
        .post("/posts", {
          title: post.title,
          body: post.body,
        })
        .then((res) => {
          context.commit("addPost", res.data);
        })
        .catch((err) => console.log(err));
    },
    updatePost(context, post) {
      axios
        .put(`/posts/${post.id}`, {
          title: post.title,
          body: post.body,
        })
        .then((res) => {
          context.commit("updatePost", res.data);
        })
        .catch((err) => console.log(err));
    },
    deletePost(context, id) {
      axios
        .delete(`/posts/${id}`)
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          context.commit("deletePost", id);
        })
        .catch((err) => console.log(err));
    },
  },
});
