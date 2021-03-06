import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
