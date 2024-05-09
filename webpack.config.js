const path = require('path');

module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js', /* allows for multiple bundle names */
    path: path.resolve(__dirname, 'dist'),
    
  },
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
        /* chain is executed in reverse order. the order of the loaders matters! */
      },
    ]
  },
  devtool: 'inline-source-map', /* traces stack for errors */
}

// run "npx webpack" for node modules
// Run these changes with npx webpack --config webpack.config.js