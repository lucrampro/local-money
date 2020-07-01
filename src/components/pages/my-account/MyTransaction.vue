<template>
  <l-wrapper-block background="black">
    <template v-slot:title>Mes commerçants préférés</template>
    <template v-slot:default>
      <div v-for="(transactionDay, index ) in lastTransaction" :key="index">
        <p>{{ transactionDay.date }}</p>
        <m-card-transaction v-for="(transaction, index) in transactionDay.transaction" :key="index"
        :name="`utilisateur ${transaction.id}`" :date="transactionDay.date" :sum="transaction.transfered_money" ></m-card-transaction>
      </div>
    </template>
  </l-wrapper-block>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      lastTransaction: [],
    };
  },
  mounted() {
    this.$Api.getMyTransaction().then((response) => { this.lastTransaction = response; });
    setTimeout(() => { console.log('maybe is ok', this.lastTransaction); }, 3000);
  },
  computed: {
    ...mapGetters([
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

<style lang="scss" scoped>
 ::v-deep .transaction {
  margin: 16px 0px;
}

.transactionDay {
  font-weight: 800;
}
</style>
