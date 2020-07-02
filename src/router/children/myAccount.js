import transactionChildrens from './transaction';
import profileChildrens from './myProfile';

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
      path: 'mes-transaction',
      component: () => import('../../components/pages/my-account/MyTransaction.vue'),
      name: 'MyTransaction',
      meta: {
        requireAuth: true,
      },
    },
    
    {
      path: 'transaction',
      component: () => import('../../components/pages/my-account/Transaction.vue'),
      name: 'Transaction',
      children : transactionChildrens,
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

    {
      path: 'je-donne-de-mes-nouvelles',
      component: () => import('../../components/pages/my-account/SendPost.vue'),
      name: 'SendPost',
      meta: {
        requireAuth: true,
      },
    },
    {
      path: 'mon-profil',
      component: () => import('../../components/pages/my-account/MyProfile.vue'),
      name: 'MyProfile',
      children : profileChildrens,
      meta: {
        requireAuth: true,
      },
    },
  ];
  
/* eslint-enable */
