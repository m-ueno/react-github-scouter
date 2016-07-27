import path from 'path';

const js = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '',   // 間違えやすい。webpack-dev-server --content-baseで指定するので、ここでは変えない
    filename: 'bundle.js',
  },
  devtool: 'source-map',
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
        loader: 'babel',
      },
      {
        test: /\.jsx$/,
        // include: path.resolve('src'),
        loader: 'babel',
      },
    ],
  },
};

export default js;
