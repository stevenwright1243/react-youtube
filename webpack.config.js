var path = require('path');

module.exports = {
  entry: [
    './development/index.js'
  ],
  output: {
    path: path.resolve(__dirname, "production"),
    filename: 'app.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
