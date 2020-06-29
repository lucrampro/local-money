<template>
  <div id="app">
    <router-view/>
    <div class="navbar flex flex-wrap items-center justify-center">
      <div class="wrapper--links flex flex-col items-center justify-center  mx-1"
        v-for="item in nav"
        :key="item.name"
        @click="changePage"
        >
          <img :src="getImgUrl(item.icon[i])" alt="">
          <a>{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      i: 1,
      nav: [
        {
          name: 'Accueil',
          icon1: 'navbar/home-orange.png',
          icon2: 'navbar/home-white.png',
          icon: ['navbar/home-orange.png', 'navbar/home-white.png'],
        },
        {
          name: 'Communautées',
          icon1: 'navbar/communauté-orange.png',
          icon2: 'navbar/communauté-white.png',
          icon: ['navbar/communauté-orange.png', 'navbar/communauté-white.png'],
        },
        {
          name: 'Commerces',
          icon1: 'navbar/commerce-orange.png',
          icon2: 'navbar/commerce-white.png',
          icon: ['navbar/commerce-orange.png', 'navbar/commerce-white.png'],
        },
        {
          name: 'Transactions',
          icon1: 'navbar/transaction-orange.png',
          icon2: 'navbar/transaction-white.png',
          icon: ['navbar/transaction-orange.png', 'navbar/transaction-white.png'],
        },
      ],
    };
  },
  methods: {
    /**
    * @param { string } src
    * @returns {function}
    */
    getImgUrl(src) {
      const path = require(`./assets/img/${src}`); //eslint-disable-line
      return path;
    },
    changePage(event) {
      const myTarget = event.target;
      const content = event.target.querySelector('a').innerHTML; // eslint-disable-line

      document.querySelectorAll('.wrapper--links').forEach((element) => {
        if (element === myTarget) {
          myTarget.style.backgroundColor = '#de6b48';
          myTarget.style.color = '#ffffff';
        } else {
          element.style.backgroundColor = '#ffffff';
          element.style.color = '#de6b48';
        }
        if (this.i === 0) {
          this.i = 1;
        } else {
          this.i = 0;
        }
      });
    },
  },
  computed: {
    ...mapGetters([
      'userToken',
      'userFirstName',
    ]),
  },
  created() {
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

      // save the user on Storage when this connected
      const oldTokens = JSON.parse(sessionStorage.getItem('token') || '{}');
      const newTokens = oldTokens;
      newTokens[this.userFirstName] = this.userToken;
      sessionStorage.setItem('Users', JSON.stringify(newTokens));
    });
  },
};

</script>

<style lang="scss">
#app {
  min-height: 100vh;
  .navbar {
    height: 70px;
    width: 100%;
    background-color: #f5f5f5;
    position: fixed;
    bottom: 0;
    .wrapper--links {
      font-size: 11px;
      color: #de6b48;
      height: 38px;
      width: 85px;
      border-radius: 8px;
      * {
        pointer-events: none;
      }
    }
  }
}
</style>
