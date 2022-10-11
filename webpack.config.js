const path = require('path');

module.exports = {
  mode: 'development', // -> so do NOT have to configure mode in script like  "build": "webpack --mode production"
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'), // define multiple entries for code splitting
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // name = key of entry object
  },
};
