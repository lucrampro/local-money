<template>
  <l-wrapperBloc background="black">
    <m-transaction />
  </l-wrapperBloc>
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
