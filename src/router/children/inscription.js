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
    component: () => import('../../components/pages/inscription/InfoName.vue'),
    meta: {
      nextPath: 'contact-information',
      previousPath: 'acount-type',
    }
  },
  {
    path: 'contact-information',
    component: () => import('../../components/pages/inscription/ContactInformation.vue'),
    meta: {
      nextPath: '',
      previousPath: 'names',
    }
  },
];

/* eslint-enable */
