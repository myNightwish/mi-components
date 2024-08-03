import Vue from 'vue';
import App from './App.vue';

import MiComponents from 'mi-components-night';
import 'mi-components-night/dist/css/index.css';
Vue.use(MiComponents);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
