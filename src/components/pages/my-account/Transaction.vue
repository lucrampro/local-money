<template>
  <div>
    Transaction
    <div v-for="(transactionOfDay, transactionOfDayIndex) in allTransaction" :key="'transaction_of_day_'+transactionOfDayIndex">
      {{transactionOfDay.date}}
      <div v-for="(transactions, transactionsIndex) in transactionOfDay.transactionsGroup" :key="'transactions_'+transactionsIndex" >
        {{transactions.nomDeLaTransaction}}
        {{transactions.heure}}
        {{transactions.typeDeTransaction}}
        {{transactions.MontantDeLaTransaction}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTransaction: [
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
