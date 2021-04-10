module.exports = (sources) => {
    // 加载的模块的内容

    // TODE
    console.log(sources)
    // 
    // webpack规定这里必须返回JavaScript代码或者JavaScript代码字符串
    // return "我即将返回一个Markdown-loader格式化后的内容"
    return `console.log("我即将返回一个Markdown-loader格式化后的内容")`
}