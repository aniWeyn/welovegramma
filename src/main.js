import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.config.productionTip = false;

import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
