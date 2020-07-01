/* eslint-disable */
export default [
  {
    path: 'envoi',
    component: () => import('@/components/pages/my-account/transaction/SendMoney.vue'),
    name: 'SendMoney',
    meta: {
      requireAuth: true,
    },
  },
  {
    path: 'conversion',
    component: () => import('@/components/pages/my-account/transaction/ConvertMoney.vue'),
    name: 'ConvertMoney',
    meta: {
      requireAuth: true,
    },
  },
];

/* eslint-enable */
