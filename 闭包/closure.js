/**
在JavaScript中，闭包是一个函数和其所在作用域的组合。
闭包可以让你从内部函数访问到外部函数作用域
*/

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable){
    console.log('outerVariable:', outerVariable);
    console.log('innerVariable:', innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // logs: "outerVariable: outside" and "innerVariable: inside"

/**
在上述代码中，innerFunction 保持对 outerFunction 的 outerVariable 的引用，
即使 innerFunction 在其声明的环境之外执行。
这种情况就形成了一个闭包。*/


//应用
/**
闭包的应用非常广泛，其中最常见的用途是创建私有变量和实现数据封装。
假设我们有这样一个场景：领导让你统计一个业务函数累计被调用的次数。
于是你撸起袖子写出了以下代码
*/
let count1 = 0; // 用于统计func函数被调用次数

function func() {
  count1++;
  // 业务逻辑
  return;
}

console.log(count);
/**
正当你胸有成竹地测试时，发现 count 的值出现了一些问题，有时候甚至会变少，
这时候你就开始排查问题，终于发现了这么一段代码：
*/
var count2 = 0; // 用于统计xxx的数量

function func2() {
  count2 = xxx; // 改变 count 的业务代码
}
/**
这时候你恍然大悟，原来同事之前就在全局定义了一个 count 用于统计其他业务。
第一时间你想到了给自己的 count 改个名，改成 count2 。
当然，这样也可以解决眼下的问题，但是，有没有更好的办法呢。
这时候，闭包就可以发挥它的作用了，下面是用闭包实现
*/

function func2() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let addCount = func2();

console.log(addCount()); // 1
console.log(addCount()); // 2
/**
通过以上代码，每次调用 addCount 函数都会使 count 的值递增1，并且返回最新的 count 值。
通过以上代码，无需改变变量名，保证了代码可读性的同时解决了业务问题。
*/