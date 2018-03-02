var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var resolve = require('path').resolve;
module.exports = function VuetifyModule(moduleOptions) {
    var options = __assign({ css: true, materialIcons: true }, moduleOptions);
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
        options: { options: options }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=vuetify.js.map