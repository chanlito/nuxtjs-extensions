const os = require('os');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function TypeScriptModule(moduleOptions) {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts');

  // Extend build
  this.extendBuild((config) => {
    const tsLoader = {
      use: [
        { loader: 'cache-loader' },
        {
          loader: 'thread-loader',
          options: {
            workers:
              os.cpus().length - moduleOptions.forkTSCheckerOptions.workers,
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
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      ...tsLoader,
    });

    // Add TypeScript loader for vue files
    // eslint-disable-next-line
    for (const rule of config.module.rules) {
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
      const forkTSCheckerOptions = {
        checkSyntacticErrors: true,
        workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
        formatter: 'codeframe',
        watch: ['client'],
        vue: true,
        ...moduleOptions.forkTSCheckerOptions,
      };
      config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTSCheckerOptions));
    }
  });
};

module.exports.meta = require('../../package.json');
