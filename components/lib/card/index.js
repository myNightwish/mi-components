import card from './src/main.vue';

card.install = function(Vue) {
  Vue.component(card.name, card);
};

export default card;