// var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
//
// module.exports = {
//   entry: [
//     './app/index.js'
//   ],
//   module: {
//     loaders: [
//       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
//     ]
//   },
//   output: {
//     filename: "bundle.js",
//     path: __dirname + '/dist'
//   },
//   plugins: [HTMLWebpackPluginConfig]
// };

module.exports = {
     entry: './src/app.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
             }
         }]
     }
 }
