const path = require('path'); 
const glob = require('glob');
const { VueLoaderPlugin } = require('vue-loader');

const list  = {};

async function makeList(dirPath) {
  const files = glob.sync(`${dirPath}/**/index.js`);

  for(let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
} 

makeList('components/lib');
console.log("list---", list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    // card.umd.js
    filename: '[name].umd.js',
    // filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'miui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }
    ]
  }
}