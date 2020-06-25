/* eslint-disable */
export default [
  {
    path: 'TypeOfAccount',
    component: () => import('../../components/pages/inscription/TypeOfAccount.vue'),
    meta: {
      nextPath: 'nom-prenom',
      previousPath: '/',
    }
  },
  {
    path: 'NomPrenom',
    component: () => import('../../components/pages/inscription/InformationName.vue'),
    meta: {
      nextPath: 'information-contact',
      previousPath: 'type-de-compte',
    }
  },
  {
    path: 'information-contact',
    component: () => import('../../components/pages/inscription/InformationContact.vue'),
    meta: {
      nextPath: '',
      previousPath: 'nom-prenom',
    }
  },
];

/* eslint-enable */
