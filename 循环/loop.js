//for循环
/**
for(循环变量初始化;循环结束条件;增量表达式){
    执行语句
}
*/
for (let i = 0; i < 10; i++) {
  console.log(`i 当前的值为：${i}`);
}

//while循环
/**
语句包括一个循环条件和一段代码块，每次循环前会先检查循环条件
若为true，就继续执行代码块

while(条件){
    语句
}
*/

//do while循环
/**
与while类似，不过是先执行语句，然后再检查循环条件
*/
let i=0;
do{
    console.log(`i 当前的值为：${i}`);
    i++;
}while(i<10);

//break语句
/**
用于跳出循环，且终止循环
*/ 
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(`i 当前的值为：${i}`);
}

//continue语句
//跳出本次循环，继续下一次循环
for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(`i 当前的值为：${i}`);
}