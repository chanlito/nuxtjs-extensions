import { resolve } from 'path';

module.exports = function FiltersModule(moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, '../plugins/filters.js'),
    fileName: 'filters.js',
    options: {
      moduleOptions
    }
  });
};

module.exports.meta = require('../../package.json');
