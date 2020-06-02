const path = require('path');
const common = require("./webpack.common");
const merge  = require("webpack-merge");


module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"], // 1. CSS Loaders transform css into JS, 2. Style Loader injects it to the DOM
        }
    ],
}
});