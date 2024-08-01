import Vue from 'vue';
import App from './App.vue';
import '../components/css/demo.scss';
import '../components/css/card.scss';

import testDemo from '../components/lib/demo/index.js';
import card from '../components/lib/card/index.js';

Vue.use(testDemo);
Vue.use(card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
