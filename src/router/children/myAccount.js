/* eslint-disable */
export default [
    {
      path: 'home',
      component: () => import('../../components/pages/my-account/Home.vue'),
      name: 'Home',
      meta: {
        requireAuth: true,
      },
    },
    {
      path: 'commerce',
      component: () => import('../../components/pages/my-account/Commerce.vue'),
      name: 'Commerce',
      meta: {
        requireAuth: true,
      },
    },
    {
      path: 'transaction',
      component: () => import('../../components/pages/my-account/MyTransaction.vue'),
      name: 'MyTransaction',
      meta: {
        requireAuth: true,
      },
    },
    {
      path: 'community',
      component: () => import('../../components/pages/my-account/Community.vue'),
      name: 'Community',
      meta: {
        requireAuth: true,
      },
    },
  ];
  
/* eslint-enable */
