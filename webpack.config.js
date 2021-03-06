const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    bail: true,
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.ejs",
            filename: "index.html",
            inject: "body"
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: path.join(__dirname, "public"),
        port: 9000,
        hot: true
    }
};
