import Vue from 'vue';
import VueRouter from 'vue-router';
import Inscription from '@/views/Inscription.vue';
import Register from '@/views/Register.vue';
import MyAccount from '@/views/MyAccount.vue';
import inscriptionChildrens from './children/inscription';
import myAccountChildrens from './children/myAccount';

Vue.use(VueRouter);

const routes = [
  {
    path: '/mon-compte',
    name: 'MyAccount',
    component: MyAccount,
    children: myAccountChildrens,
  },
  {
    path: '/',
    name: 'register',
    component: Register,
  },
  {
    path: '/inscription/',
    name: 'inscription',
    component: Inscription,
    children: inscriptionChildrens,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
