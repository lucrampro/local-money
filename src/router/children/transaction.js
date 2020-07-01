/* eslint-disable */
export default [
  {
    path: 'envoi',
    component: () => import('@/components/pages/my-account/transaction/SendMoney.vue'),
    name: 'SendMoney',
    meta: {
      requireAuth: true,
      nextName: 'ChoiceBankCard',
    },
  },
  {
    path: 'conversion',
    component: () => import('@/components/pages/my-account/transaction/ConvertMoney.vue'),
    name: 'ConvertMoney',
    meta: {
      requireAuth: true,
      nextName: 'ChoiceBankCard',
    },
  },

  {
    path: 'choisissez-votre-carte',
    component: () => import('@/components/pages/my-account/transaction/ChoiceBankCard.vue'),
    name: 'ChoiceBankCard',
    meta: {
      requireAuth: true,
      nextName: 'SendMoney',
      previousName: 'SendMoney',
    },
  },

];

/* eslint-enable */
