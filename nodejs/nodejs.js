/**nodejs是一个开源的、跨平台的JavaScript运行环境，它可以让JavaScript脱离浏览器
环境运行，从而实现服务器端编程。
*/

/**
1、NODEJS REPL（Read-Eval-Print Loop，交互式解释器）
在 REPL 中，你可以输入并执行 JavaScript 代码，查看代码的执行结果。
*/

/**
2、Node.js 模块
在 Node.js 中，每个文件都是一个模块。
你可以使用 require 函数导入其他模块，
使用 module.exports 或 exports 导出模块：
*/
// lib.js
module.exports = 'Hello, WTF Node.js!';

// app.js
let message = require('./lib');
console.log(message);  // 输出 'Hello, WTF Node.js!'

/**
在上面的例子中，我们创建了两个 js 文件 lib.js 和 app.js，
你可以在命令行输入 node app.js，会得到输出 'Hello, WTF Node.js!'。
*/


/**
3、npm（Node 包管理器）
npm 是 Node.js 的默认包管理器。
你可以使用 npm 来安装和管理你的项目的依赖。
在命令行中输入 npm -v 可以查看你的 npm 版本

要使用 npm 创建一个新的项目，你可以使用 npm init 命令。
这个命令会引导你创建一个 package.json 文件，
这个文件用来保存你的项目的配置和依赖信息。

要安装一个新的依赖，你可以使用 npm install 命令

*/