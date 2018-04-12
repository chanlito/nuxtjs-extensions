var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var os = require('os');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = function TypeScriptModule(moduleOptions) {
    // Add .ts extension for store, middleware and more
    this.nuxt.options.extensions.push('ts');
    // Extend build
    this.extendBuild(function (config) {
        var tsLoader = {
            use: [
                { loader: 'cache-loader' },
                {
                    loader: 'thread-loader',
                    options: {
                        workers: os.cpus().length - moduleOptions.forkTSCheckerOptions.workers,
                    },
                },
                {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true,
                        happyPackMode: true,
                    },
                },
            ],
        };
        // Add TypeScript loader
        config.module.rules.push(__assign({ test: /\.tsx?$/, exclude: /node_modules/ }, tsLoader));
        // Add TypeScript loader for vue files
        // eslint-disable-next-line
        for (var _i = 0, _a = config.module.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.loader === 'vue-loader') {
                rule.options.loaders = rule.options.loaders || {};
                rule.options.loaders.ts = rule.options.loaders.ts || [];
                rule.options.loaders.ts = tsLoader;
                rule.options.loaders.tsx = rule.options.loaders.tsx || [];
                rule.options.loaders.tsx = tsLoader;
            }
        }
        // Add .ts extension in webpack resolve
        if (config.resolve.extensions.indexOf('.ts') === -1) {
            config.resolve.extensions.push('.ts');
        }
        if (config.resolve.extensions.indexOf('.tsx') === -1) {
            config.resolve.extensions.push('.tsx');
        }
        // Add a fork ts checker webpack plugin
        if (config.name === 'client') {
            var forkTSCheckerOptions = __assign({ checkSyntacticErrors: true, workers: ForkTsCheckerWebpackPlugin.ONE_CPU, formatter: 'codeframe', watch: ['client'], vue: true }, moduleOptions.forkTSCheckerOptions);
            config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTSCheckerOptions));
        }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=typescript.js.map