<template>
  <div class="myMoney">
    <l-wrapper-block>
      <template v-slot:title >
      <p>Le solde de votre compte</p>
      </template>
      <p class="mySolde">{{solde}} MLC</p>
      <a-button  width="100%" >Fair un envoi</a-button>
      <a-button  width="100%" background="#D16228"> Convertir</a-button>
    </l-wrapper-block>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'MyMoney',
  computed: {
    ...mapGetters([
      'solde',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .myMoney {
    p{
      font-weight: bold;
    }
    .mySolde{
      font-size: 50px;
    }
  }
</style>
