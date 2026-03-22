/**
ES6（也被称为 ECMAScript 2015）是 JavaScript 语言的一个重要的更新，
引入了许多新的特性和语法，使得 JavaScript 更加强大和灵活。
在这一章中，我们将介绍一些 ES6 的主要特性。
*/

//let 和 const
/**
在 ES6 之前，JavaScript 中只有 var 用来声明变量，
但它的作用域规则经常会引发一些混淆。
ES6 引入了 let 和 const 两种新的声明方式，使得变量的作用域更加清晰。

let：用来声明一个块级作用域的变量。
const：用来声明一个块级作用域的常量，这个常量的值不能被重新赋值。
*/
let x = 10;
if (true) {
  let x = 20;  // 这个 x 是一个新的变量
  console.log(x);  // 输出 20
}
console.log(x);  // 输出 10

const y = 30;
y = 40;  // 报错，y 的值不能被改变

//箭头函数
// 箭头函数是一种新的函数语法，它更简洁，而且不绑定 this。
const arr = [1, 2, 3, 4];
const squares = arr.map(x => x * x);
console.log(squares);  // 输出 [1, 4, 9, 16]


//模板字符串
//模板字符串提供了一种方便的方式来嵌入变量或表达式到字符串中。
let name = 'Alice';
console.log(`Hello, ${name}!`);  // 输出 "Hello, Alice!"

//扩展运算符
/**
ES6中可以通过三个点（...）将一个可迭代对象（如数组或字符串）展开，
将其元素或字符序列分别提取出来，用于函数调用、数组字面量等场景
*/

function addNumbers(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// 使用扩展运算符将数组中的元素展开作为函数的参数
const result = addNumbers(...numbers);

console.log(result); // 输出: 6


// 解构赋值
// 解构赋值允许我们将数组或对象的属性赋值给单独的变量。

let [a1, b1, c1] = [1, 2, 3];
console.log(a1, b1, c1);  // 输出 1 2 3

let {x1, y1} = {x: 10, y: 20};
console.log(x1, y1);  // 输出 10 20

//Promises 和异步函数
/**
ES6 引入了 Promises，它提供了一种更好的方式来处理异步操作。
此外，ES6 也引入了 async/await 语法，使得异步代码更像同步代码。
*/ 
// 使用Promise封装一个异步操作
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: 'John' };
      resolve(user);
    }, 2000);
  });
}

// 使用async/await来处理异步任务
async function getUser() {
  try {
    const user = await fetchUser();
    console.log('User:', user);
  } catch (error) {
    console.log('Error:', error);
  }
}

// 调用异步函数
getUser();//2s后输出 User: {id: 1, name: 'John'}
