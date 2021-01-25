const configPagesTwo = require('./src/utils/multiPageTypeTwo');
// const configPagesOne = require('./src/utils/multiPageTypeOne');

// let pages = configPagesOne('./src/pages/**?/*');
let pages = configPagesTwo('./src/pages/**?/*');
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== "development";
var projectname = process.argv[3];
const pName = projectname === "index" ? "pc" : projectname;
console.log(pages);
//配置end
module.exports = {
    publicPath: isProduction ? "./" : "/", // 基本路径
    outputDir: "dist/" + pName, // 输出文件目录
    productionSourceMap: false, 
    pages,
    // outputDir: 'output', //  打包后的文件夹名称，默认dist
    devServer: {
        // index: 'page1.html', // 默认打开的不是index，需要指定
        host: '',
        port: 8088,
        open: false, //  npm run serve 自动打开浏览器
    }
};