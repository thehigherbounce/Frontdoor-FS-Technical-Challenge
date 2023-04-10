const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        popup: path.join(__dirname, 'src/index.tsx'),
        content: path.join(__dirname, 'src/chrome/content.tsx'),
        background: path.join(__dirname, 'src/chrome/background.ts'),
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'static/js/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            chunks: ['popup'],
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: "public/manifest.json",
                to: ".",
            }, {
                from: "public/icons",
                to: "icons",
            }]
        }),
    ],
    devtool: "source-map",
    devServer: {
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
};