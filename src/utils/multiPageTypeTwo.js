const glob = require('glob');//node内置glob模块
var projectname = process.argv[3];
//配置pages多页面获取当前文件夹下的html和js(ts)
module.exports =  function getEntry(url) {
    var entries = {};
    if (process.env.NODE_ENV == "production") {
      entries = {
        index: {
          // page的入口
          entry: "src/pages/" + projectname + "/index.js",
          // 模板来源
          template: "public/index.html",
          // 在 dist/index.html 的输出
          filename: "index.html",
          title: projectname,
          chunks: ["chunk-vendors", "chunk-common", "index"]
        }
      };
    } else {
      var items = glob.sync(url);
      for (var i in items) {
        var filepath = items[i];
        var fileList = filepath.split("/");
        var fileName = fileList[fileList.length - 2];
        var pageKeys = fileName === "mobile" ? "m" : fileName;
        entries[pageKeys] = {
          entry: `src/pages/${fileName}/index.js`,
          // 模板来源
          template: `public/index.html`,
          // 在 dist/index.html 的输出
          filename: `${fileName}.html`,
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ["chunk-vendors", "chunk-common", pageKeys]
        };
      }
    }
    return entries;
  }