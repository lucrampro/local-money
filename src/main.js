import Vue from 'vue';
import {
  ValidationProvider, extend,
  localize, ValidationObserver,
} from 'vee-validate';

import { required, email, min } from 'vee-validate/dist/rules';
import fr from 'vee-validate/dist/locale/fr.json';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import './registerServiceWorker';
import requestApi from './RequestApi';
import Atoms from './components/atoms';
import Modules from './components/molecules';
import Layouts from './components/layouts';
import i18n from './i18n';

Vue.config.productionTip = false;

localize('fr', fr);

// Add a rule.
extend('email', email);
extend('required', required);
extend('min', min);

// Register it globally

// Atoms
console.warn(Atoms, 'Atoms');
Vue.component('a-button', Atoms.AButton);
Vue.component('a-radio', Atoms.ARadio);
Vue.component('a-link', Atoms.Alink);

// Molecules
console.warn(Modules, 'Modules');
Vue.component('m-input', Modules.MInputText);
Vue.component('m-radio', Modules.MRadio);
// Layouts
console.warn(Layouts, 'Layouts');
Vue.component('LRegitster', Layouts.LRegister);

// global
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(requestApi);

new Vue({
  requestApi,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
