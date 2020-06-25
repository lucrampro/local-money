/* eslint-disable */
export default [
  {
    path: 'TypeDeCompte',
    component: () => import('../../components/pages/inscription/TypeDeCompte.vue'),
    meta: {
      nextPath: 'NomPrenom',
      previousPath: '/',
    }
  },
  {
    path: 'NomPrenom',
    component: () => import('../../components/pages/inscription/InfoName.vue'),
    meta: {
      nextPath: 'InformationContact',
      previousPath: 'step-one',
    }
  },
  {
    path: 'InformationContact',
    component: () => import('../../components/pages/inscription/InformationContact.vue'),
    meta: {
      nextPath: 'step-four',
      previousPath: 'step-two',
    }
  },
];

/* eslint-enable */
