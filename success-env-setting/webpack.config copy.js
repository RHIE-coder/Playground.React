const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
		extensions: ['.js', '.jsx']
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      }
    ]
  },
  mode: 'development'
};