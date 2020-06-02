const path = require('path');
const common = require("./webpack.common");
const merge  = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsWebpackPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [new MiniCSSExtractPlugin({
        filename: "styles.[contentHash].css"
    }),new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"], // 1. CSS Loaders transform css into JS, 2. Mini CSS Loader extracts it to a new file
            }
        ]
    }
});