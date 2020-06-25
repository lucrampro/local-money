/* eslint-disable */
export default [
  {
    path: 'type-de-compte',
    component: () => import('../../components/pages/inscription/TypeDeCompte.vue'),
    meta: {
      nextPath: 'nom-prenom',
      previousPath: '/',
    }
  },
  {
    path: 'nom-prenom',
    component: () => import('../../components/pages/inscription/InfoName.vue'),
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
