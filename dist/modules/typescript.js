var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = function TypeScriptModule(moduleOptions) {
    var defaults = {
        tsconfig: undefined,
        tslint: undefined
    };
    var options = __assign({}, defaults, moduleOptions);
    // Add .ts extension for store, middleware and more
    this.nuxt.options.extensions.push('ts');
    // Extend build
    this.extendBuild(function (config) {
        var tsLoader = {
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true
            }
        };
        // Add TypeScript loader
        config.module.rules.push(__assign({ test: /\.tsx?$/, exclude: /node_modules/ }, tsLoader));
        // Add TypeScript loader for vue files
        for (var _i = 0, _a = config.module.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.loader === 'vue-loader') {
                rule.options.loaders.ts = tsLoader;
            }
        }
        // Add .ts extension in webpack resolve
        if (config.resolve.extensions.indexOf('.ts') === -1) {
            config.resolve.extensions.push('.ts');
        }
        // Add a fork ts checker webpack plugin
        if (config.name === 'client') {
            config.plugins.push(new ForkTsCheckerWebpackPlugin({
                formatter: 'codeframe',
                tsconfig: options.tsconfig,
                tslint: options.tslint,
                watch: ['client'],
                workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
                vue: true
            }));
        }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=typescript.js.map