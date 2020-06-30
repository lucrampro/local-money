<template>
  <div class="my-money">
    <l-wrapper-block>
      <template v-slot:title >
      <p>Le solde de votre compte</p>
      </template>
      <p class="my-solde">1200MLC</p>
      <a-button  width="100%" >Fair un envoi</a-button>
      <a-button  width="100%" background="#D16228"> Convertir</a-button>
    </l-wrapper-block>
  </div>
</template>

<script>
export default {
  name: 'MyMoney',
};
</script>

<style lang="scss" scoped>
  .my-money {
    p{
      font-weight: bold;
    }
    .my-solde{
      font-size: 50px;
    }
  }
</style>
