var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none', // (배포용)production, dvelopment, none
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['css-loader'] // 에러는 안나지만 css가 적용되지 않는다.
                // use: ['css-loader', 'style-loader'], // 순성에 영향받아 에러
                // use: ['style-loader', 'css-loader']
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader"
                ]

            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}