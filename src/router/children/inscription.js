/* eslint-disable */
export default [
  {
    path: 'step-one',
    component: () => import('../../component/pages/inscription/StepOne.vue'),
    meta: {
      nextPath: 'step-two',
      previousPath: '/',
    }
  },
  {
    path: 'step-two',
    component: () => import('../../component/pages/inscription/StepTwo.vue'),
    meta: {
      nextPath: 'step-three',
      previousPath: 'step-one',
    }
  },
  {
    path: 'step-three',
    component: () => import('../../component/pages/inscription/StepThree.vue'),
    meta: {
      nextPath: 'step-four',
      previousPath: 'step-two',
    }
  },
];

/* eslint-enable */
