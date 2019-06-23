const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    common: './src/index.tsx'
  },
  optimization: {
    splitChunks: {
      name: 'sidebar_vendor',
      chunks: 'initial'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'sidebar-test',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
      }
    ]
  }
}
