import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import './registerServiceWorker';
import requestApi from './RequestApi';

Vue.config.productionTip = false;

// Add a rule.
extend('secret', {
  validate: (value) => value === 'example',
  message: 'This is not the magic word',
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(requestApi);

new Vue({
  requestApi,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
