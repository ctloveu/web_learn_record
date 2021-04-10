const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin') // 可以同时输出多个HTML
const copyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./plugins/remove-comments-plugin')

module.exports = {
    // 打包模式
    mode: 'none',
    entry: './src/index.js',
    // entry: './src/assets/css/main.css',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    // tree shaking相关打包配置
    optimization: {
        // 模块只导出被使用的的成员
        usedExports: true, // 标记哪些模块是否被导出
        // 尽可能合并到每一个模块到一个函数中
        concatenateModules: true,
        // 压缩输出结果，没有被用到的代码就会被删除掉
        // minimize: true, // 清除掉没有被导出的模块
    },
    // webpack的Source Map 映射源文件，适合调试
    // devtool: '', // none eval等等

    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个loader
    //             // 这里的执行顺序是从后往前，先执行css-loader
    //             // style-loader 将css-loader创建的样式以style标签加载到HTML中
    //             use: ['style-loader', 'css-loader'] // 指定具体的loader
    //         },
    //         {
    //             test: /\.md$/,
    //             use: ['./loader/markdown-loader.js']
    //         }
    //     ],
    // },
    // webpack插件机制 钩子机制
    // 为了增强webpack在项目自动化构建方面的能力
    // 常见场景：清除之前的dist目录，自动生成HTML文件，拷贝不需要参与打包的资源文件
    //         压缩文件，自动发布打包到服务器自动部署
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin(
            // {
            //     title: 'webpack-demo',
            //     meta: {
            //         viewport: 'width=device-width, initial-scale=1.0',
            //     }
            // }
            // 或者指定模板去配置
            {
                title: 'webpack-demo',
                template: './index.html'
            }
        ),
        // new htmlWebpackPlugin({
        //     title: 'copy-webpack-demo',
        //     filename: './indexCopy.html'
        // }),
        // new copyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, './public'),
        //             to: 'public'
        //         }
        //     ]
        // }),
        new RemoveCommentsPlugin(),
    ]
}

// 引起思考问题：为什么webpack要在js中载入css?不是应该将样式和行为分离嘛？其实webpack建议任何文件都引入js中
// 如果是单独引入，后期需维护两个。如果所有资源都是js控制，后期只需要控制一条线

// watch模式
// webpack完成初次构建后，项目中的源文件会被监视，一旦发生任何改动，webpack都会自动重新运行打包任务

// watch模式+BrowserSync插件满足文件改变后自动刷新页面的需求。但是有很多弊端
// 操作繁琐，同时需使用两个工具
// 效率低下，在文件改变后，webpack会将文件写入磁盘，BrowserSync在进行读取，存在大量的磁盘读写操作，对性能要求太高，导致影响效率

// webpack-dev-server官方退出一款工具，解决自动编译和刷新问题，集成在一个插件中

// 模块热替换HMR
// 哪里发生了改变，去更新哪个地方
// 为什么CSS改变后，页面能看到效果，js改变后还是会刷新页面。
// CSS是经过loader处理的，在loader处理的时候就已经自动处理了样式文件的自动更新
// 因为一般的脚本js是没有规律的，webpack不知道如何处理它，但是用Vue等框架，js一样能热替换，因为框架的的模块是有规律的。
// 也可以使用module.hot.accept()去手动处理，它内部报错时，会回退到自动刷新。可以配置使用hotOnly: true,解决这个问题
