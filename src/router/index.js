import Vue from 'vue';
import VueRouter from 'vue-router';
import Inscription from '@/views/Inscription.vue';
import Register from '@/views/Register.vue';
import inscriptionChildren from './children/inscription';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'register',
    component: Register,
  },
  {
    path: '/inscription/',
    name: 'inscription',
    component: Inscription,
    children: inscriptionChildren,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
