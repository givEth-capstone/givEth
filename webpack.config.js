const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      crypto: false,
      stream: require.resolve('stream-browserify'),
      assert: false,
      util: false,
      // http: false,
      https: false,
      os: false,
      url: false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
     process: "process/browser",
    }),
    new NodePolyfillPlugin(),
],
};
