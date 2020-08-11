import Vue from 'vue';
import App from './App.vue';
import './plugins/elements';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});
