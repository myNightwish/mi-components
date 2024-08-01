import testDemo from './src/main.vue';

testDemo.install = function(Vue) {
  Vue.component(testDemo.name, testDemo);
};

export default testDemo;