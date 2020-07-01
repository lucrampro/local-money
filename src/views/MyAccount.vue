<template>
  <div class="myAccount">
    <m-menu :currentPageName="this.$router.currentRoute.name" @updataState="(newState) => {navMenuState = newState}" :isActive="navMenuState" />
    <div @click="navMenuState = true" class="burger__menu">
      <div>____</div>
      <div>____</div>
      <div>____</div>
    </div>
    <div class="myAccountContenu">
      <router-view />
    </div>
    <m-navbarre :navPages="navStates" :currentPageName="this.$router.currentRoute.name"/>
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
import { mapGetters } from 'vuex';

export default {
  name: 'MyAccount',
  data() {
    return {
      navMenuState: false,
      navStates: [
        {
          pageNameBind: 'Home',
          defaultImage: homeDefault,
          selectedImage: homeSelected,
        },
        {
          pageNameBind: 'Commerce',
          defaultImage: commerceDefault,
          selectedImage: commerceSelected,
        },
        {
          pageNameBind: 'Community',
          defaultImage: communityDefault,
          selectedImage: communitySelected,
        },
        {
          pageNameBind: 'MyTransaction',
          defaultImage: transactionDefault,
          selectedImage: transactionSelected,
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'compteType',
    ]),
  },
  methods: {
    getDetail() {
      if (this.compteType) {
        this.$Api.details(this.compteType);
      }
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

.burger__menu {
  position: absolute;
  right: 10px;
}
</style>
