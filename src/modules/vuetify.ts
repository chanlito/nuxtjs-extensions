const { resolve } = require('path');

module.exports = function VuetifyModule(moduleOptions) {
  const options = { css: true, materialIcons: true, ...moduleOptions };

  if (options.css) {
    this.options.css.unshift('vuetify/dist/vuetify.min.css');
  }

  if (options.materialIcons) {
    this.options.head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    });
  }

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, '../plugins/vuetify.js'),
    fileName: 'vuetify.js',
    options: { options }
  });
};

module.exports.meta = require('../../package.json');
