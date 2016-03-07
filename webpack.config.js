module.exports = {
  entry: './src/local-scroll.js',
  output: {
    path: __dirname + '/dist',
    filename: 'local-scroll.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  }
};
