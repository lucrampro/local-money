/* eslint-disable */
export default [
  {
<<<<<<< HEAD
    path: 'TypeOfAccount',
    component: () => import('../../components/pages/inscription/TypeOfAccount.vue'),
=======
    path: 'acount-type',
    component: () => import('../../components/pages/inscription/AccountType.vue'),
>>>>>>> refacto/folder-name-inscription
    meta: {
      nextPath: 'names',
      previousPath: '/',
    }
  },
  {
<<<<<<< HEAD
    path: 'NomPrenom',
    component: () => import('../../components/pages/inscription/InformationName.vue'),
=======
    path: 'names',
    component: () => import('../../components/pages/inscription/InfoName.vue'),
>>>>>>> refacto/folder-name-inscription
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
