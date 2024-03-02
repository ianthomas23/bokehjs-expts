const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: { filename: "bundle.js" },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@bokehjs": path.resolve(__dirname, "node_modules/@bokeh/bokehjs/build/js/lib/")
        }
    },
    module: {
        rules: [
            { test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'assets'),
        },
        port: 4500,
    },
}