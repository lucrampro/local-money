<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'transactions',
      'userToken',
      'userFirstName',
      'compteType',
      'userId',
      'solde',
      'transferId',
      'companiesList',
    ]),
  },
  created() {
    if (this.userToken) {
      this.$Api.setToken(this.userToken);
    } if (this.compteType) {
      this.$Api.setUserType(this.compteType);
    }

    // listen whene a user come to log for set a token in the store, add after set other infomation
    this.$Api.addEventListener('session-user-login', (event) => {
      this.$store.dispatch('setToken', event.detail.token);
      // get information of user if have a token
      this.$Api.setToken(event.detail.token);
      this.$Api.getUserInfo();
    });

    // set infomation of user
    this.$Api.addEventListener('session-user-information', (event) => {
      // get information of user if have a token
      this.$store.dispatch('setUserId', event.detail.id);
      this.$store.dispatch('setUserFirstName', event.detail.first_name);
      this.$store.dispatch('setCompteType', event.detail.type);

      this.$Api.setUserType(event.detail.type);

      // save the user on Storage when this connected
      const oldTokens = JSON.parse(sessionStorage.getItem('token') || '{}');
      const newTokens = oldTokens;
      newTokens[this.userFirstName] = this.userToken;
      sessionStorage.setItem('Users', JSON.stringify(newTokens));
    });

    // set infomation of user
    this.$Api.addEventListener('session-user-details', (event) => {
      this.$store.dispatch('setSolde', event.detail.available_cash);
      this.$store.dispatch('setTransferId', event.detail.account_id);
    });

    this.$Api.addEventListener('user-registred', (event) => {
      this.$Api.login({
        username: event.detail.email,
        password: event.detail.password,
      }).then((resLogin) => resLogin);
    });

    this.$Api.addEventListener('session-user-transactions', (event) => {
      this.$store.dispatch('setTransactions', event.detail);
    });

    this.$Api.addEventListener('companies-list', (event) => {
      this.$store.dispatch('setCompaniesList', event.detail);
    });
  },
};

</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
