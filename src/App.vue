<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    fetch('http://localhost/api/me')
      .then((res) => {
        console.log(res);
      });
    this.$Api.get('/me')
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.warn(data);
      });
  },
};
</script>

<style>

</style>
