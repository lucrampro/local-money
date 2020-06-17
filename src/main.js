import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import './registerServiceWorker';
import requestApi from './RequestApi';

Vue.config.productionTip = false;
Vue.use(requestApi);

new Vue({
  requestApi,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
