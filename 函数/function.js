/**函数是JavaScript的基本组件之一，它将一串指令包装起来，方便重复利用，
让代码更加系统化*/

function foo(input){
    return input;
}
function bar(input){
    const output = input * 2;
    return output;
}

function sum(x, y){
    return x + y;
}

//调用函数
sum(1,2)

//一个函数中调用另一个函数
function sumCall(x, y){
    const output = sum(x, y)
    return output;
}

//函数表达式和箭头函数
/**函数表达式：函数表达式: 它与上面的方式声明几乎一样，
唯一的区别就是函数名 sum1 被提到前面作为变量，并且多了赋值操作*/
const sum = function(x, y){
    return x + y;
}
/**箭头函数: ES6 版本新增了使用箭头语法 => 来定义函数，
这种语法比另外两种方法更为简洁*/
const sum = (x, y) => {
    return x + y;
}