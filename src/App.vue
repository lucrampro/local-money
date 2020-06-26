<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    /// // listen whene a user come to log for set a token in the store, add after set other infomation
    this.$Api.addEventListener('session-user-login', (event) => {
      this.$store.dispatch('setToken', event.detail);
      /// get information of user if have a token
      this.$Api.setToken(event.detail.token);
      this.$Api.getUserInfo();
    });

    /// set infomation of user
    this.$Api.addEventListener('session-user-information', (event) => {
      // this.$store.dispatch('addToken', event.detail);
      /// get information of user if have a token
      this.$store.dispatch('setUserId', event.detail.id);
      this.$store.dispatch('setUserFirstName', event.detail.first_name);

      console.log(event.detail);
    });
  },
};

</script>

<style>

</style>
