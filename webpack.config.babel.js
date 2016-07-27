import path from 'path';
import webpack from 'webpack';

const js = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '',   // 間違えやすい。webpack-dev-server --content-baseで指定するので、ここでは変えない
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.jsx$/,
        // include: path.resolve('src'),
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
};

export default js;
