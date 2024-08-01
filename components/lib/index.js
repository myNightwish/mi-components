import card from './card/index.js';
import demo from './demo/index.js';

const components = {
  demo,
  card
}

const install = function(Vue) {
  if(install.installed) {
    return;
  }
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};
const API = {
  install
}
export default API;