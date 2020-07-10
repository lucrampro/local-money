<template>
  <div>

    <l-header-informations :name="name">
      <template v-slot:mainText >{{ name }}</template>
      <template v-slot:subText >
        <div class="compteType">
          <span class="compteType" v-if="userInfomations.type ==='company'" >Entreprise</span>
          <span v-else>Particulier</span>
        </div>
      </template>
    </l-header-informations>
   <a-switch-button
      name="switch__page__transaction"
      v-model="mode"
      :leftText="switchButton.leftText"
      :rightText="switchButton.rightText"
    />
    <router-view :contacts="contacts" ></router-view>
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
        this.$router.push({ name: newPageName }).catch(() => {});
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
      'userInfomations',
      'compteType',
      'companyPosts',
      'solde',
      'accountNumber',
      'contacts',
    ]),
    name() {
      return this.userInfomations.type === 'company' ? this.userInfomations.name : `${this.userInfomations.last_name} ${this.userInfomations.first_name}`;
    },
  },
};
</script>

<style lang="scss">
.compteType {
  color: #909090;
}
</style>
