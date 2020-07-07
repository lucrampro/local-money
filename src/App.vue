<template>
  <div id="app">
    <div class="overlayTransition"></div>
    <transition @leave="leave" @enter="enter" :css='false' mode='out-in' appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from 'gsap';

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
      'companyPosts',
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
      if (event.detail[0]) {
        // get information of user if have a token
        this.$store.dispatch('setUserId', event.detail[0].id);
        this.$store.dispatch('setUserFirstName', event.detail[0].first_name);
        this.$store.dispatch('setCompteType', event.detail[0].type);
        this.$Api.setUserType(event.detail[0].type);
      } else {
        this.$store.dispatch('setUserId', event.detail.id);
        this.$store.dispatch('setUserFirstName', event.detail.first_name);
        this.$store.dispatch('setCompteType', event.detail.type);
        this.$Api.setUserType(event.detail.type);
      }

      // save the user on Storage when this connected
      // const oldTokens = JSON.parse(sessionStorage.getItem('token') || '{}');
      // const newTokens = oldTokens;
      // newTokens[this.userFirstName] = this.userToken;
      // sessionStorage.setItem('Users', JSON.stringify(newTokens));
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
      }).then(() => this.$router.push({ name: 'Home' }));
    });

    this.$Api.addEventListener('session-user-transactions', (event) => {
      this.$store.dispatch('setTransactions', event.detail);
    });

    this.$Api.addEventListener('companies-list', (event) => {
      this.$store.dispatch('setCompaniesList', event.detail);
    });

    this.$Api.addEventListener('session-user-companypost', (event) => {
      this.$store.dispatch('setCompanyPosts', event.detail);
    });
  },
  mounted() {
    if (this.$route.name === 'Landing') {
      this.setAppMargin();
    }
  },
  methods: {
    leave(el, done) {
      console.log(el, done);
      gsap.timeline({ onComplete: () => { done(); } }).to('.overlayTransition', 1, { left: '0vw', ease: 'expo.out' });
    },
    enter(el, done) {
      console.log(el, done);
      gsap.timeline({ onComplete: () => { done(); } }).to('.overlayTransition', 0.8, { left: '100vw', ease: 'expo.out' })
        .set('.overlayTransition', { left: '-100vw' });
    },
    setAppMargin() {
      document.querySelector('#app').style.margin = '0px';
    },
  },
  watch: {
    $route(to) {
      if (to.name === 'Langing') {
        this.setAppMargin();
      }
    },
  },
};

</script>

<style lang="scss">
#app {
  min-height: 100vh;
  max-width: 687px;
  margin: auto;
  position: relative;
  .overlayTransition {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: -101vw;
    background: $primary-color;
    z-index: 999;
  }
}
body {
   background-color: #00000005;
}
</style>
