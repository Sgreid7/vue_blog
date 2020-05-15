<template>
  <div class="post-item">
    <div class="post-item-left">
      <div v-if="!editing" @dblclick="editPost" class="post-item-label">
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
      </div>
      <input
        v-else
        class="post-item-edit"
        type="text"
        v-model="title"
        @blur="editDone"
        @keyup.enter="editDone"
        @keyup.esc="cancelEdit"
        v-focus
      />
    </div>
    <div class="remove-post" @click="removePost(post.id)">
      <button>DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: this.post.id,
      title: this.post.title,
      body: this.post.body,
      editing: this.post.editing,
      beforeEditCache: ""
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    removePost(id) {
      this.$store.dispatch("deletePost", id);
    },
    editPost() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    editDone() {
      if (this.title.length === 0 || this.body.length === 0) {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$store.dispatch("updatePost", {
        id: this.id,
        title: this.title,
        body: this.body,
        editing: this.editing
      });
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    }
  }
};
</script>

<style lang="scss">
.post-item {
  text-align: center;
}
</style>
