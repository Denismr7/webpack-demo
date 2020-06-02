const path = require('path');
const common = require("./webpack.common");
const merge  = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"], // 1. CSS Loaders transform css into JS, 2. Style Loader injects it to the DOM
        }
    ],
    plugins: [new HtmlWebpackPlugin({
        title: "Word Mixer Webpack!",
        template: "./src/index.html"
    })]
});