/* eslint-disable */
export default [
  {
    path: 'acount-type',
    component: () => import('../../components/pages/inscription/AccountType.vue'),
    meta: {
      nextPath: 'names',
      previousPath: '/',
    }
  },
  {
    path: 'names',
    component: () => import('../../components/pages/inscription/InfoNames.vue'),
    meta: {
      nextPath: 'contact-info',
      previousPath: 'acount-type',
    }
  },
  {
    path: 'contact-info',
    component: () => import('../../components/pages/inscription/ContactInformation.vue'),
    meta: {
      nextPath: '',
      previousPath: 'names',
    }
  },
];

/* eslint-enable */
