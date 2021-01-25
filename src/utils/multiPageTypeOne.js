const glob = require('glob');//node内置glob模块
//配置pages多页面获取当前文件夹下的html和js(ts)
module.exports =  function configPages(globPath){
    let entries = {}; // 按照vue cli pages的结构生成的对象
    let templatePaths = {}; // 获取所有的html路径
    // 过滤掉 html 和 js 文件之外的文件路径， glob.sync(globPath)： 使用node的glob.sync(path) 同步获取path匹配的所有文件路径，以数组形式
    
    /* node glob 参考文档
    https://www.jianshu.com/p/5274cb9d1fc6
    https://www.cnblogs.com/liulangmao/p/4552339.html
    https://github.com/isaacs/node-glob */

    /* filterGlobPaths = [
        './src/pages/page1/page1.html',
        './src/pages/page1/page1.js',
        ...
    ] */
    let filterGlobPaths = glob.sync(globPath).filter((item) => { return /(\.html|\.js)$/g.test(item) });
    filterGlobPaths.forEach((entry) => {
        let tmp = entry.split('/').splice(-2, 1)[0];
        if(/\.html$/g.test(entry)){
            templatePaths[tmp] = entry;
        }else{
            // 自定义路径名称
            // const CustomPath = tmp === 'mobile' ? 'h5' : tmp;
            // entries[CustomPath]={
            entries[tmp]={
                entry,
                template: templatePaths[tmp],
                filename: tmp + ".html",
                title: tmp
            }
        }    
    });
    return entries;
}