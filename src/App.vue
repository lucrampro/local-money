<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$Api.post('/login_check', {
      username: 'admin@neymo.com',
      password: '123456',
    })
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
