//在现代JavaScript中（ES6版本之后），变量通过let关键字声明

//let
//1、先声明year变量，再给他赋值2023
let year;
year=2023;
//2、声明name变量的同时给他赋值"0xAA"
let username="0xAA";
//3、声明newName变量，同时将变量name的值"0xAA"赋给它
let newUsername=username;

//const
/**在声明常量(constant,值不能改变的变量)是要用const关键字，声明时必须给它赋值。
常量在第一次赋值后不能改变，不然会报错
*/
//声明age变量，并赋值18
const age=18;
//尝试改变常量的值时会报错TypeError:Assignment to constant variable
age=20;

//var
/**在ES6之前的JavaScript中，没有let和const关键字，声明变量只能用var关键字。var
和let使用上相似，但是会造成全局对象污染，是个过时的关键字，不推荐使用
*/
//声明variable变量并赋值"hello"
var variable="hello"