<template>
  <div class="myAccount">
    <l-header-myCompte :name="userFirstName">
      <template v-slot:mainText >Bonjour <span class="name">{{ userFirstName }}</span> </template>
      <template v-slot:subtText >Bienvenue sur votre espace 😁 !</template>
    </l-header-myCompte>
    <m-menu :currentPageName="this.$router.currentRoute.name" @updataState="(newState) => {navMenuState = newState}" :isActive="navMenuState" />
    <div class="myAccountContenu">
      <router-view />
    </div>
    <m-navbar :navPages="navStates" :currentPageName="this.$router.currentRoute.name"/>
  </div>
</template>

<script>

import commerceDefault from '@/assets/img/navbar/commerce-orange.png';
import commerceSelected from '@/assets/img/navbar/commerce-white.png';
import communityDefault from '@/assets/img/navbar/community-orange.png';
import communitySelected from '@/assets/img/navbar/community-white.png';
import homeDefault from '@/assets/img/navbar/home-orange.png';
import homeSelected from '@/assets/img/navbar/home-white.png';
import transactionDefault from '@/assets/img/navbar/transaction-orange.png';
import transactionSelected from '@/assets/img/navbar/transaction-white.png';
import menuVertical from '@/assets/img/navbar/carbon_overflow-menu-vertical.png';

import { mapGetters } from 'vuex';

export default {
  name: 'MyAccount',
  data() {
    return {
      navMenuState: false,

      navStates: [
        {
          functionBind: () => { this.switchPage('Home'); },
          pageNameBind: 'Home',
          defaultImage: homeDefault,
          selectedImage: homeSelected,
        },
        {
          functionBind: () => { this.switchPage('Commerce'); },
          pageNameBind: 'Commerce',
          defaultImage: commerceDefault,
          selectedImage: commerceSelected,
        },
        {
          functionBind: () => { this.switchPage('Community'); },
          pageNameBind: 'Community',
          defaultImage: communityDefault,
          selectedImage: communitySelected,
        },
        {
          functionBind: () => { this.switchPage('MyTransaction'); },
          pageNameBind: 'MyTransaction',
          defaultImage: transactionDefault,
          selectedImage: transactionSelected,
        },
        {
          functionBind: () => { this.navMenuState = true; },
          defaultImage: menuVertical,
          selectedImage: menuVertical,
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'compteType',
      'userToken',
      'userFirstName',
    ]),
  },
  methods: {
    switchPage(pageName) {
      if (this.currentPageName !== pageName) {
        this.$router.push({ name: pageName });
      }
    },

    getDetail() {
      if (this.compteType) {
        this.$Api.getDetails(this.compteType)
          .then(() => {
            console.log('ok');
          })
          .catch(() => {
            this.$store.dispatch('reset'); this.$router.push('Register');
          });
      }
      // else {
      //   this.$Api.getUserInfo(this.userToken)
      //     .then(() => {
      //       this.getDetail();
      //     })
      //     .catch(() => {
      //       this.$store.dispatch('reset'); this.$router.push('Register');
      //     });
      // }
    },
  },
  mounted() {
    this.getDetail();
  },
  watch: {
    compteType() {
      this.getDetail();
    },
    $route() {
      this.navMenuState = false;
    },
  },

};
</script>

<style lang="scss" scoped>
.myAccountContenu {
  /* padding: 0 20px; */
}

.myAccount {
  padding: 0px 10px;
  padding-bottom: 60px;
}

.burger__menu {
  position: absolute;
  right: 10px;
}
</style>
