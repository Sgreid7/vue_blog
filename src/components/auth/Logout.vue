<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("deleteToken").then(res => {
      this.$router.push("/");
      console.log(res);
    });
  }
};
</script>

<style>
</style>