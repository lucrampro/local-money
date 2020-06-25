/* eslint-disable */
export default [
  {
    path: 'TypeOfAccount',
    component: () => import('../../components/pages/inscription/TypeOfAccount.vue'),
    meta: {
      nextPath: 'NomPrenom',
      previousPath: '/',
    }
  },
  {
    path: 'NomPrenom',
    component: () => import('../../components/pages/inscription/InformationName.vue'),
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
