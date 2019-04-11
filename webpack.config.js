const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devServer: {
        host: 'localhost',
        publicPath: "/",
        contentBase: './build',
        noInfo: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8087,
        stats: {
            colors: true
        }
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index_bundle.js"
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        alias: {
            '~': path.resolve('./src'),
        },
        extensions: ['.js', '.es6', '.jsx', '.ts', '.tsx',],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    "awesome-typescript-loader",
                ],
            },
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
