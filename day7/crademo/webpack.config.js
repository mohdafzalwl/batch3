
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//entry 
module.exports = {
    entry: './app/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            //babel -loader 
            {test :/\.(js)$/, use :'babel-loader'},
            //css-loader
            {test: /\.(css)$/, use:['css-loader', 'style-loader']}
        ]
    },
    mode: 'development',
    plugins :[
        new HtmlWebpackPlugin({
            template : 'app/index.html'
        })]
}