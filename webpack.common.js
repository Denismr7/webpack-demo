const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        remain: "./src/main.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // 1. CSS Loaders transform css into JS, 2. Style Loader injects it to the DOM
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Word Mixer Webpack!",
        template: "./src/index.html"
    })]
}