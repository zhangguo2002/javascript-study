//定义数组
//没有元素的空数组
const emptyArray=[];
//包含字符串元素的数组
const stringArray=["JavaScript","HTML","CSS"];
//包含不同类型元素的数组
const mixedArray=[1,"JavaScript",true];
//包含对象的数组
const objectArray=[{name:"JavaScript"},{name:"HTML"},{name:"CSS"}];
//包含数组的数组
const nestedArray=[["JavaScript","HTML","CSS"],["JavaScript","HTML","CSS"]];
const nestedArray2=[mixedArray,objectArray,stringArray];
//包含函数的数组
const functionArray=[function(){console.log("Hello World");},function(){console.log("Hello JavaScript");}];


//读数组
const array=[1,2,3,4,["Solidity",true]];
console.log(array[0]); //1

//写数组
const array2=[1,2,3,4,["Solidity",true]];
array2[0]=10;

//遍历数组
const array3=[1,2,3,4,["Solidity",true]];
for(let i=0;i<array3.length;i++){
    console.log(array3[i]);
}

//数组方法
const array4=[1,2,3,4,["Solidity",true]];
//添加元素
console.log(array4.push("Hello World")); //6
//删除元素
console.log(array4.pop()); //Hello World