/* eslint-disable */
export default [
  {
    path: '/mes-contacts',
    component: () => import('@/components/pages/my-account/MyProfile/myContact.vue'),
    name: 'MyContact',
    meta: {
      requireAuth: true,
    },
  },
];

/* eslint-enable */
