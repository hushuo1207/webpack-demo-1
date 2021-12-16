const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'hushuo - 阿星',
    template: 'src/assets/index.html'
  }),
  ],
  module: {
    rules: [
        {
            test: /\.(jpg|png|svg|gif)$/,
            use: ["file-loader"],
        },
        {
            test: /\.styl$/i,
            use: [
                'style-loader', 
                'css-loader',
                'stylus-loader'
                ],
        },
        {
            test: /\.less$/i,
            use: [
                'style-loader', 
                'css-loader',
                'less-loader'
                ],
        },
      {
        test: /\.scss$/i,
        use: [
            'style-loader', 
            'css-loader',
            {
                loader: "sass-loader",
                options: {
                    implementation: require('dart-sass')
                }
            }
            ],
      },
    ],
  },
};

