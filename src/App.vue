<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    // fetch('http://localhost/api/me')
    //   .then((response) => {
    //     console.log(response);
    //   });
    fetch('http://localhost/api/login_check', {
      method: 'post',
      body: JSON.stringify({
        username: 'admin@neymo.com',
        password: '123456',
      }),
    });
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
