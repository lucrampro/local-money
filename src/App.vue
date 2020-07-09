<template>
<div class="mainWrapper">
  <div id="app">
    <div class="overlayTransition">
      <div class="second">
        <p>Nous chargons vos données</p>
      </div>
    </div>
    <transition @leave="leave" @enter="enter" :css='false' mode='out-in' appear>
      <router-view/>
    </transition>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from 'gsap';

export default {
  name: 'app',
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters([
      'transactions',
      'userToken',
      'userInfomations',
      'compteType',
      'userId',
      'solde',
      'transferId',
      'companiesList',
      'companyPosts',
      'contacts',
      'appDownload',
    ]),
  },
  mounted() {
    this.$Api.getDetails();
  },
  created() {
    if (this.userToken) {
      this.$Api.setToken(this.userToken);
    } if (this.userInfomations.type) {
      this.$Api.setUserType(this.userInfomations.type);
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
      this.$store.dispatch('setUserInformations', event.detail);
      this.$Api.setUserType(event.detail.type);
      this.$Api.getDetails();
      this.$Api.getContacts();
    });

    // set infomation of user
    this.$Api.addEventListener('session-user-details', (event) => {
      this.$store.dispatch('setSolde', event.detail.available_cash);
      this.$store.dispatch('setAccountNumber', event.detail.account_number);
      this.$store.dispatch('setAppDownload', true);
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

    this.$Api.addEventListener('user-contacts', (event) => {
      if (event.detail.Information) {
        return this.$store.dispatch('setContacts', []);
      }
      return this.$store.dispatch('setContacts', event.detail);
    });

    this.$Api.addEventListener('', (event) => {
      if (event.detail.Information) {
        return this.$store.dispatch('setContacts', []);
      }
      return this.$store.dispatch('setContacts', event.detail);
    });

    this.$Api.addEventListener('remove-contact', (event) => this.$store.dispatch('removeContact', event.detail));
    this.$Api.addEventListener('composant-gouvernanceList', (event) => this.$store.dispatch('setGouvernanceList', event.detail));
  },
  methods: {
    leave(el, done) {
      if (!this.appDownload) {
        this.$anime.gsap.timeline({ onComplete: () => { done(); } })
          .to('.overlayTransition', 1, { left: '0vw', ease: 'expo.out' }, 'stepOne')
          .to('.overlayTransition .second', 1, { width: '100%', ease: 'expo.out' }, 'stepOne');
      } else {
        done();
      }
    },
    enter(el, done) {
      if (!this.appDownload) {
        switch (this.$route.name) {
          case 'Home':
            this.$anime.gsap.to('.second p', 0.5, { scale: 1, opacity: 1 });
            break;
          default:
            this.$anime.gsap.timeline({ onComplete: () => { done(); } }).to('.overlayTransition', 0.8, { left: '100vw', ease: 'expo.out' })
              .set('.overlayTransition', { left: '-100vw' })
              .set('.overlayTransition .second', { width: '90%' });
        }
      } else {
        done();
      }
    },
    setAppMargin() {
      document.querySelector('#app').style.margin = '0px';
    },
  },
  watch: {
    appDownload: (download) => {
      if (download) {
        gsap.timeline().to('.second p', 0.2, { opacity: 0, scale: 0.8 })
          .to('.overlayTransition', 0.8, { left: '100vw', ease: 'expo.out' })
          .set('.overlayTransition', { left: '-100vw' })
          .set('.overlayTransition .second', { width: '90%' });
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
    background: #8BCDB9;
    z-index: 999;
    .second {
      background: $primary-color;
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: wheat;
        font-weight: bold;
        opacity: 0;
        transform: scale(0.7);
      }
    }
  }
}

.mainWrapper {
  @media screen and (min-width: 1085px) {
    padding-left: 350px;
    padding-right: calc(60vh - 350px);
  }
}
body {
   background-color: #00000005;
}
</style>
