import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://127.0.0.1:8001/api";

export const store = new Vuex.Store({
  state: {
    posts: [
      // {
      //   id: 1,
      //   title: "This",
      //   body: "That",
      //   editing: false,
      // },
      // {
      //   id: 2,
      //   title: "Other",
      //   body: "which",
      //   editing: false,
      // },
    ],
  },
  getters: {
    totalPosts(state) {
      return state.posts.length;
    },
  },
  mutations: {
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
