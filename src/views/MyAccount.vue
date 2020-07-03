<template>
  <div class="myAccount">
    <l-header-myCompte :name="userFirstName">
      <template v-slot:mainText>
        Bonjour
        <span class="name">{{ userFirstName }}</span>
      </template>
      <template v-slot:subtText>Bienvenue sur votre espace 😁 !</template>
    </l-header-myCompte>
    <div class="myAccountContenu">
      <router-view />
    </div>
    <m-navbar
      :isOpen="menuIsOpen"
      @updateState="menuIsOpen = !menuIsOpen"
      :navPages="navMain"
      :navPagesSecondary="navSecondary"
      :currentPageName="this.$router.currentRoute.name"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyAccount',
  data() {
    return {
      menuIsOpen: true,
      navMain: [
        {
          functionBind: () => {
            this.switchPage('Home');
          },
          pageNameBind: 'Home',
          pageName: 'Accueil',
          componentId: 'a-icone-home',
        },
        {
          functionBind: () => {
            this.switchPage('Commerce');
          },
          pageNameBind: 'Commerce',
          pageName: 'Mes commerçant',
          componentId: 'a-icone-commerce',
        },
        {
          functionBind: () => {
            this.switchPage('Community');
          },
          pageNameBind: 'Community',
          pageName: 'Communauté',
          componentId: 'a-icone-community',
        },
        {
          functionBind: () => {
            this.switchPage('MyTransaction');
          },
          pageNameBind: 'MyTransaction',
          pageName: 'Mes transaction',
          componentId: 'a-icone-transaction',
        },
      ],
      navSecondary: [
        {
          functionBind: () => {
            this.switchPage('SendMoney');
          },
          pageNameBind: 'Payer',
        },
        {
          functionBind: () => {
            this.switchPage('ConvertMoney');
          },
          pageNameBind: 'Convertire mon argent',
        },
        {
          functionBind: () => {
            this.switchPage('sendPost');
          },
          pageNameBind: 'donner de mes nouvelles',
        },
        {
          functionBind: () => {
            this.switchPage('Commerce');
          },
          pageNameBind: 'Mes favoris',
        },
        {
          functionBind: () => {
            this.switchPage('Community');
          },
          pageNameBind: 'Community',
        },
        {
          functionBind: () => {
            this.switchPage('MyTransaction');
          },
          pageNameBind: 'Mes favoris',
        },
        {
          functionBind: () => {
            this.switchPage('MyTransaction');
          },
          pageNameBind: 'Déconnexion',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['compteType', 'userToken', 'userFirstName']),
  },
  methods: {
    switchPage(pageName) {
      if (this.currentPageName !== pageName) {
        this.$router.push({ name: pageName });
        this.menuIsOpen = false;
      }
    },

    getDetail() {
      if (this.compteType) {
        this.$Api
          .getDetails(this.compteType)
          .then(() => {
            console.log('ok');
          })
          .catch(() => {
            this.$store.dispatch('reset');
            this.$router.push('Register');
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
