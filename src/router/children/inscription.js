/* eslint-disable */
export default [

  {
    path: 'acount-type',
    component: () => import('../../components/pages/inscription/AccountType.vue'),
    name: 'AcountType',
    meta: {
      submit : false,
      nextPath: 'first-information',
      subText: 'Quel type de compte souhaitez vous creer ?',
      title: 'Bienvenue sur NeyMo !',
    },
  },
  
  {
    path: 'particular-first-information',
    component: () => import('../../components/pages/inscription/ParticularMainInformation.vue'),
    meta: {
      submit : false,
      nextPath: 'contact-info',
      previousPath: 'acount-type',
    }
  },

  {
    path: 'particular-contact-info',
    component: () => import('../../components/pages/inscription/ParticularContactInformation.vue'),
    meta: {
      nextPath: 'verification-information',
      submit : false,
      previousPath: 'particular-first-information',
    }
  },

  {
    path: 'particular-verification-information',
    component: () => import('../../components/pages/inscription/ParticularVerificationInformation.vue'),
    meta: {
      nextPath: '',
      submit : true,
      previousPath: 'particular-contact-info',
    }
  },
// DONT DELETE THIS

  //company routs

  // {
  //   path: 'company-first-information',
  //   component: () => import('../../components/pages/inscription/ParticularMainInformation.vue'),
  //   meta: {
  //     submit : false,
  //     nextPath: 'contact-info',
  //     previousPath: 'acount-type',
  //   }
  // },
  // {
  //   path: 'company-verification-information',
  //   component: () => import('../../components/pages/inscription/ParticularMainInformation.vue'),
  //   meta: {
  //     submit : false,
  //     nextPath: 'company-contact-info',
  //     previousPath: 'acount-type',
  //   }
  // },
  // {
  //   path: 'company-verification-information',
  //   component: () => import('../../components/pages/inscription/ParticularMainInformation.vue'),
  //   meta: {
  //     nextPath: '',
  //     submit : true,
  //     previousPath: 'acount-type',
  //   }
  // },
];

/* eslint-enable */
