const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry : './app/index.js',
    output :{
        path : path.resolve(__dirname, 'dist'),
        filename:'index_bundle.js'
    },
    module:{
        rules: [
            //babel - babel loader
            {test : /\.(js)$/, use : 'babel-loader'},
            //styles - css loader 
            {test : /\.(css)$/, use : ['style-loader','css-loader']}
        ]
    },
    mode : 'development',
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.html'
        })
      ]
    }