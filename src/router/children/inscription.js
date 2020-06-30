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
      subText: 'Inscription',
      title: 'Ces information nous sont utiles afin de vous identifier',
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

  {
    path: 'company-first-information',
    component: () => import('../../components/pages/inscription/CompanyMainInformation.vue'),
    meta: {
      submit : false,
      nextPath: 'contact-info',
      previousPath: 'acount-type',
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
      subText: 'Inscription',
      title: 'Ces information nous sont utiles afin de vous identifier',
    }
  },

  {
    path: 'company-verification-information',
    component: () => import('../../components/pages/inscription/CompanyVerificationInformation.vue'),
    meta: {
      nextPath: '',
      submit : true,
      previousPath: 'company-contact-info',
    }
  },
  
];

/* eslint-enable */
