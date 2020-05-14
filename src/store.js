import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: "This",
        body: "That",
        editing: false,
      },
      {
        id: 2,
        title: "Other",
        body: "which",
        editing: false,
      },
    ],
  },
  getters: {
    totalPosts(state) {
      return state.posts.length;
    },
  },
  mutations: {
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
    addPost(context, post) {
      setTimeout(() => {
        context.commit("addPost", post);
      }, 100);
    },
    updatePost(context, post) {
      setTimeout(() => {
        context.commit("updatePost", post);
      }, 100);
    },
    deletePost(context, id) {
      setTimeout(() => {
        context.commit("deletePost", id);
      }, 100);
    },
  },
});
