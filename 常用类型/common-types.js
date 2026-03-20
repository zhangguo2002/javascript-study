//数值Number
/**数值（Number）是JavaScript中最常用的类型，它既可以声明整数，
也可以声明浮点数(小数)*/
//声明整数
const int =10;
//声明浮点数
const float=10.0;
//JavaScript中有三个特殊的数值，分别是：Infinity、-Infinity和NaN。
const nan=0/0;
const infinity=1/0;
const negativeInfinity=-1/0;


//字符串String
//JavaScript中文本由字符串类型表示，你可以用""号或者''号或者``号来声明字符串
const str1="hello";
const str2='hello';
const str3=`hello`;
//模板字符串
/**在ES6之后的版本中，字符串可以用反引号表示，这样的字符串被称为模板字符串。它
很有意思，可以用作字符串插值，在模板字符串使用${}可以在其中插入变量并解析*/
const name ="0xAA";
const age=18;
const template=`姓名:${name},年龄:${age}`
console.log(template);

//布尔值Boolean
//布尔值类型用于表示真或假，它只有两个值：true和false，if/else语句经常使用它
const bool1=true;
const bool2=false;
