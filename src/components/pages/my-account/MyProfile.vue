<template>
  <div>
    <l-header-informations :name="userFirstName">
      <template v-slot:mainText >{{ userFirstName }}</template>
      <template v-slot:subText >Votre identifiant : {{userId}}<br> <span v-if="compteType ==='company'">Compte profesionne</span></template>
    </l-header-informations>
   <a-switch-button
      name="switch__page__transaction"
      v-model="mode"
      :leftText="switchButton.leftText"
      :rightText="switchButton.rightText"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderInformation from '@/components/molecules/MHeaderInformation.vue';

export default {
  data() {
    return {
      mode: this.$route.name,
      switchButton: {
        leftText: {
          text: 'Mes contacts',
          value: 'myContacts',
        },
        rightText: {
          text: 'Mes informations',
          value: 'MyInformations',
        },
      },
    };
  },
  components: {
    'l-header-informations': HeaderInformation,
  },
  watch: {
    mode(newPageName) {
      if (newPageName !== 'myContacts' || newPageName !== 'MyInformation') {
        this.$router.push({ name: newPageName });
      }
    },
    $route(to) {
      this.mode = to.name;
    },
  },
  computed: {
    ...mapGetters([
      'transactions',
      'userToken',
      'userFirstName',
      'compteType',
      'userId',
      'solde',
      'transferId',
    ]),
  },
};
</script>
