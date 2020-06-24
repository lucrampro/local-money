/* eslint-disable */
export default [
  {
    path: 'step-one',
    component: () => import('../../components/pages/inscription/TypeDeCompte.vue'),
    meta: {
      nextPath: 'step-two',
      previousPath: '/',
    }
  },
  {
    path: 'step-two',
    component: () => import('../../components/pages/inscription/StepTwo.vue'),
    meta: {
      nextPath: 'step-three',
      previousPath: 'step-one',
    }
  },
  {
    path: 'step-three',
    component: () => import('../../components/pages/inscription/StepThree.vue'),
    meta: {
      nextPath: 'step-four',
      previousPath: 'step-two',
    }
  },
];

/* eslint-enable */
