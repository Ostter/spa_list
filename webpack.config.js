var webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
				options:{
                  presets:["env", "react"]    // используемые плагины
              }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
				options:{
                  presets:["env", "react"]    // используемые плагины
              }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
    /*plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'  // а тут надо прописать имя css которое вы хотите
        })
    ]*/



}