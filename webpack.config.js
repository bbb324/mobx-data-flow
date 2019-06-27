/**
 * Created by junxie on 18/5/27.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        pageOne: './src/todoList/index.jsx',
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    plugins: [
        // 参照 index.html 模板生成对应可使用的页面，自带所有js的关联
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ],
    // 自动刷新 npm run start, 如果出现报错大多需要 host绑定  127.0.0.1 localhost
    devServer: {
        contentBase: './build',
        open: true, //自动打开浏览器
        // port: 8080, //默认8080
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.jsx']
    }
};
