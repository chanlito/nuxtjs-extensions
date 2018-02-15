import { resolve } from 'path';

module.exports = function VeeValidateModule(moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, '../plugins/vee-validate.js'),
    fileName: 'vee-validate.js',
    options: {
      moduleOptions
    }
  });
};

module.exports.meta = require('../../package.json');
