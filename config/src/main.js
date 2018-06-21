import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueI18n);

new Vue({
  VueI18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
