<template>
  <div id="app" class="px-6 py-10">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'userToken',
      'userFirstName',
    ]),
  },
  created() {
    /// // listen whene a user come to log for set a token in the store, add after set other infomation
    this.$Api.addEventListener('session-user-login', (event) => {
      this.$store.dispatch('setToken', event.detail.token);
      /// get information of user if have a token
      this.$Api.setToken(event.detail.token);
      this.$Api.getUserInfo();
    });

    /// set infomation of user
    this.$Api.addEventListener('session-user-information', (event) => {
      /// get information of user if have a token
      this.$store.dispatch('setUserId', event.detail.id);
      this.$store.dispatch('setUserFirstName', event.detail.first_name);

      /// save the user on Storage when this connected
      const oldTokens = JSON.parse(sessionStorage.getItem('token') || '{}');
      const newTokens = oldTokens;
      newTokens[this.userFirstName] = this.userToken;
      sessionStorage.setItem('Users', JSON.stringify(newTokens));
    });
  },
};

</script>

<style>

</style>
