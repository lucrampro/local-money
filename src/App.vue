<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$Api.request.get('https://gorest.co.in/public-api/users?_format=json&acdcess-token=wj7f8PZOMg6beM3GF92bm12CXXo4weZ44fKQ')
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
