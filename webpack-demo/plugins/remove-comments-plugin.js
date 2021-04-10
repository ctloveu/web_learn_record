// 必须是一个函数或者包含apply的对象

class RemoveCommentsPlugin{
    /**
     * author: chentao
     * description: 利用apply注册钩子上
     * @param complier => 包含了此次构建的所有配置信息
     * TODO: since: 创建时间  2021-04-06 16:22:24
     **/
    
    apply(complier) {
        // console.log('RemoveCommentsPlugin', complier)
        console.log('RemoveCommentsPlugin')
        complier.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
            // compilation可理解为此次打包的上下文
            for (const name in compilation.assets) {
                // name输出文件名称
                if (name.endsWith('.js')) {
                    // console.log(compilation.assets[name].source())
                    const val = compilation.assets[name].source()
                    const newVal = val.replace(/\/\*{2,}\/\s?/g, '')
                    compilation.assets[name] = {
                        source: () => newVal,
                        size: () => newVal.length
                    }
                }
            }
        })
    }
}
module.exports = RemoveCommentsPlugin