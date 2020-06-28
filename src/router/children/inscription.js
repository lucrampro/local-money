/* eslint-disable */
export default [
  {
    path: 'acount-type',
    component: () => import('../../components/pages/inscription/AccountType.vue'),
    meta: {
      nextPath: 'names',
      subText: 'Quel type de compte souhaitez vous creer ?',
      title: 'Bienvenue sur NeyMo !',
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
