const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './src/index.ts', // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](joi[\\\/]lib[\\\/]|isemail[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel-loader'
      }
    ]
    /* Advanced module configuration (click to show) */
  },
  node: {
    global: true,
    Buffer: true,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    // ...
  ],
  optimization: {
    minimizer: [new TerserPlugin()]
  }
  // list of additional plugins
  /* Advanced configuration (click to show) */
};
