/* eslint-disable */
export default [

  {
    path: 'account-type',
    component: () => import('../../components/pages/inscription/AccountType.vue'),
    name: 'AccountType',
    meta: {
      submit : false,
      nextPath: 'first-information',
      title: 'Quel type de compte souhaitez vous creer ?',
      subText: 'Bienvenue sur NeyMo !',
    },
  },
  
  {
    path: 'particular-first-information',
    component: () => import('../../components/pages/inscription/ParticularMainInformation.vue'),
    meta: {
      submit : false,
      nextPath: 'contact-info',
      previousPath: 'account-type',
      title: 'Inscription',
      subText: 'Nous avons besoin de quelques informations',
    }
  },



  {
    path: 'particular-contact-info',
    component: () => import('../../components/pages/inscription/ParticularContactInformation.vue'),
    meta: {
      nextPath: 'verification-information',
      submit : false,
      previousPath: 'particular-first-information',
      title: 'Inscription',
      subText: 'Ces information nous sont utiles afin de vous identifier',
    }
  },

  {
    path: 'particular-verification-information',
    component: () => import('../../components/pages/inscription/ParticularVerificationInformation.vue'),
    meta: {
      nextPath: '',
      submit : true,
      previousPath: 'particular-contact-info',
      title:  'Inscription',
      subText: 'Des information qui pour nous confirmer vôtre identitée',
    }
  },


// DONT DELETE THIS

  //company routs

  {
    path: 'company-first-information',
    component: () => import('../../components/pages/inscription/CompanyMainInformation.vue'),
    meta: {
      submit : false,
      nextPath: 'contact-info',
      previousPath: 'account-type',
      title: 'Inscription',
      subText: 'Nous avons besoin de quelques informations',
    }
  },



  {
    path: 'company-contact-info',
    component: () => import('../../components/pages/inscription/CompanyContactInformation.vue'),
    meta: {
      nextPath: 'verification-information',
      submit : false,
      previousPath: 'company-first-information',
      title: 'Inscription',
      subText: 'Ces information nous sont utiles afin de vous identifier',
    }
  },

  {
    path: 'company-verification-information',
    component: () => import('../../components/pages/inscription/CompanyVerificationInformation.vue'),
    meta: {
      nextPath: '',
      submit : true,
      previousPath: 'company-contact-info',
      title: 'Inscription',
      subText: 'Ces information nous sont utiles afin de vous identifier',
    }
  },
  
];

/* eslint-enable */
