const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function TypeScriptModule(moduleOptions) {
  const defaults = {
    tsconfig: undefined
  };

  const options = { ...defaults, ...moduleOptions };

  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts');
  // Extend build
  this.extendBuild(config => {
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true
      }
    };
    // Add TypeScript loader
    config.module.rules.push({
      test: /((client|server)\.js)|(\.tsx?)$/,
      exclude: [/server/, /node_modules/],
      ...tsLoader
    });
    // Add TypeScript loader for vue files
    for (const rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = tsLoader;
      }
    }
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts');
    }
    // Add a webpack plugin
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        tsconfig: options.tsconfig,
        vue: true,
        watch: ['client']
      })
    );
  });
};

module.exports.meta = require('../../package.json');
