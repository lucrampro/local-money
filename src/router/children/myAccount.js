/* eslint-disable */
export default [
    {
      path: 'home',
      component: () => import('../../components/pages/my-account/Home.vue'),
      name: 'Home',
    },
    {
      path: 'commerce',
      component: () => import('../../components/pages/my-account/Commerce.vue'),
      name: 'Commerce',
    },
    {
      path: 'transaction',
      component: () => import('../../components/pages/my-account/Transaction.vue'),
      name: 'Transaction',
    },
    {
      path: 'community',
      component: () => import('../../components/pages/my-account/Community.vue'),
      name: 'Community',
    },
  ];
  
/* eslint-enable */
