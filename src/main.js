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
import styleGuild from './handlerColorPlugin';
import Atoms from './components/atoms';
import Modules from './components/molecules';
import Organisme from './components/organisms';
import Layouts from './components/layouts';
import i18n from './i18n';

Vue.config.productionTip = false;

localize('fr', fr);

// Add a rule.
extend('email', email);
extend('required', required);
extend('min', min);

extend('majority', {
  message: () => 'vous n\'avez pas l\'âge requis',
  validate: (value) => {
    console.log(value);

    const currentDate = new Date();
    let fielDate = value;
    const year = fielDate.match(/^(\d+)-/i)[1];
    const month = fielDate.match(/-(\d+)-/i)[1];
    const day = fielDate.match(/-(\d+)$/i)[1];
    fielDate = new Date(year, month, day);

    const age = currentDate.getFullYear() - fielDate.getFullYear();
    return age > 18;
  },
});
// Register it globally

// Atoms
console.warn(Atoms, 'Atoms');
Vue.component('a-button', Atoms.AButton);
Vue.component('a-radio', Atoms.ARadio);
Vue.component('a-link', Atoms.Alink);
Vue.component('a-submit-button', Atoms.ASubmitButton);
Vue.component('a-navbar-picto', Atoms.ANavbarPicto);
Vue.component('a-picto', Atoms.APicto);
Vue.component('a-switch-button', Atoms.ASwitchButton);
Vue.component('a-user-picture', Atoms.AUserPicture);

// Molecules
console.warn(Modules, 'Modules');
Vue.component('m-input', Modules.MInputText);
Vue.component('m-textarea', Modules.MTextarea);
Vue.component('m-radio', Modules.MRadio);
Vue.component('m-navbarre', Modules.MNavbarre);
Vue.component('m-menu', Modules.MMenu);
Vue.component('m-transaction', Modules.MTransaction);
Vue.component('m-card-transaction', Modules.MCardTransaction);
Vue.component('m-card-post', Modules.MCardPost);
Vue.component('m-my-money', Modules.MMyMoney);
Vue.component('o-transaction-input', Modules.MTransactionInput);

// Layouts
console.warn(Layouts, 'Layouts');
Vue.component('l-regitster', Layouts.LRegister);
Vue.component('l-overlay', Layouts.LOverlay);
Vue.component('l-wrapper-block', Layouts.LWrapperBlock);
Vue.component('l-transaction-form', Layouts.LTransactionForm);
Vue.component('l-header-myCompte', Layouts.LHeaderMyCompte);

// Organisme
Vue.component('o-transaction-input', Organisme.OTransactionInput);

// global
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(requestApi);
Vue.use(styleGuild);
new Vue({
  styleGuild,
  requestApi,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
