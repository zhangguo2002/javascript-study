//if语句
/**
if 语句会计算圆括号内的表达式，并将计算结果转换为布尔类型，
下列值将会被计算为 false ：
false
undefined
null
0
NaN
空字符串（""）

当传递给 if 语句所有其他的值，包括所有对象会被计算为 true

当if语句的条件为true时，会执行if语句块中的代码
let x = 1;
if (x > 0) {
  x = x + 1;
}
*/
//if-else语句
let y = 1;
if (y != 1) {
  y = y + 1;
} else {
  y = y - 1;
}
//else-if语句
let z=2
if (z===0){
    console.log('z的值为0');
}else if(z===1){
    console.log('z的值为1');
}else if(z===2){
    console.log('z的值为2');
}else{
    console.log('z为其他值');
}
/**三元运算符
使用规则： 条件 ? 表达式1 : 表达式2。当条件为真时，执行表达式1，否则执行表达式2
*/
// 返回 x 和 z 之中更大的数
const bigger = x < z ? z : x;
console.log(bigger);