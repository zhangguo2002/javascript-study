//JavaScript 错误对象
/**
JavaScript 有一种特殊的对象类型，名为 Error，
它用于表示在程序执行过程中发生的错误。
当 JavaScript 引擎遇到错误时，会抛出一个 Error 对象。
Error 对象包含两个主要的属性：name 和 message。name 属性表示错误的名称，
message 属性则包含了错误的详细信息。
*/
let error = new Error("This is an error message");
console.log(error.name); // "Error"
console.log(error.message); // "This is an error message"

//抛出错误
/**
在 JavaScript 中，我们可以使用 throw 关键字来手动抛出一个错误。
当我们抛出一个错误时，程序的执行会立即停止，
JavaScript 引擎会寻找处理这个错误的代码。
如果没有找到任何错误处理代码，程序就会完全停止执行。
*/
throw new Error("This is an error message");
console.log("This will not be logged"); // 该行代码不会被执行

//捕获错误
/**
JavaScript 提供了 try...catch 语句来捕获和处理错误。
在 try 块中的代码发生错误时，控制流会立即跳到对应的 catch 块。
*/
try {
  // 可能会抛出错误的代码
  const a = 1
  a() // 这里会抛出一个 TypeError
} catch (error) {
  // 处理错误
  console.log(error.message) // 输出 'a is not a function'
}
/**
在这个例子中，我们在 try 块中抛出了一个错误，
然后在 catch 块中捕获并处理了这个错误。
*/

//finally 语句
/**
try...catch 结构还可以包含一个 finally 块。
无论 try 块中的代码是否抛出错误，finally 块中的代码总是会被执行。
*/
try {
  // 可能会抛出错误的代码
  const a = 1
  a() // 这里会抛出一个 TypeError
} catch (error) {
  // 处理错误
  console.log(error.message) // 输出 'a is not a function'
} finally {
  // 无论是否抛出错误，这里都会被执行
  console.log('执行完毕')
}
/**
在上面的例子中，无论 try 块中的代码是否抛出错误，
finally 块中的代码总是会被执行。
*/ 

