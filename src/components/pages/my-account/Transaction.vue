<template>
  <l-wrapper-bloc background="black">
    <m-transaction>
      <template name="transaction_name">fdsafadsadsa</template>
      <template name="transaction_date">dsfdsfds</template>
    </m-transaction>
  </l-wrapper-block>
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
