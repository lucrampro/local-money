<template>
  <l-wrapper-block background="black">
    <template v-slot:title>Mes commerçants préférés</template>
    <template v-slot:default>
    <div
      v-for="(allTransactionsDay, allTransactionIndex) in allTransactions"
      :key="'all_transaction_day_'+allTransactionIndex"
    >
      <p class="transaction__day">{{allTransactionsDay.date}}</p>
      <m-transaction v-for="(transaction, transactionIndex) in allTransactionsDay.transactionsGroup" :key="`transaction_${allTransactions}_${transactionIndex}`">
        <template v-slot:transaction_name>{{transaction.nomDeLaTransaction}}</template>
        <template v-slot:transaction_date>{{transaction.typeDeTransaction}}</template>
        <template v-slot:transaction_sum>{{transaction.MontantDeLaTransaction}}</template>
      </m-transaction>
    </div>
    </template>
  </l-wrapper-block>
</template>

<script>
export default {
  data() {
    return {
      allTransactions: [
        {
          date: 'mardi 12 juin',
          transactionsGroup: [
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
          ],
        },
        {
          date: 'mardi 12 juin',
          transactionsGroup: [
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
          ],
        },
        {
          date: 'mardi 12 juin',
          transactionsGroup: [
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
            {
              heure: '16h00',
              nomDeLaTransaction: 'Pour papa',
              typeDeTransaction: 'restaurant',
              MontantDeLaTransaction: '20',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
 ::v-deep .transaction {
  margin: 16px 0px;
}

.transaction__day {
  font-weight: 800;
}
</style>
