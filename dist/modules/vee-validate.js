"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
module.exports = function VeeValidateModule(moduleOptions) {
    // Register plugin
    this.addPlugin({
        src: path_1.resolve(__dirname, '../plugins/vee-validate.js'),
        fileName: 'vee-validate.js',
        options: {
            moduleOptions: moduleOptions
        }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=vee-validate.js.map