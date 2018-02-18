"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
module.exports = function FiltersModule(moduleOptions) {
    // Register plugin
    this.addPlugin({
        src: path_1.resolve(__dirname, '../plugins/filters.js'),
        fileName: 'filters.js',
        options: {
            moduleOptions: moduleOptions
        }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=filters.js.map