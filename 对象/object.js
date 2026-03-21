//JavaScript中对象类型是一系列属性和方法的集合

//创建空对象
const emptyObject = {};
//创建包含三个属性的对象
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
}
//创建包含函数属性的对象
const person2 = {
  name: 'John',
  age: 30,
  gender: 'male',
  sayHello: function() {
    console.log('Hello, my name is ' + this.name);
  }
}

//读取对象
console.log(person.name); //输出：John
console.log(person['name']); //输出：John

//写入对象
person.name = 'Jane';

//遍历对象
//使用for...in循环遍历对象的所有属性
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
//使用Object.keys()方法获取对象的所有属性名
const keys = Object.keys(person);
console.log(keys); //输出：["name", "age", "gender", "sayHello"]
//利用keys获取所有key的值
for(let i = 0; i < keys.length; i++){
  console.log('data '+ keys[i] + ': ' + intro[keys[i]])
}
//使用Object.values()方法获取对象的所有属性值
const values = Object.values(person);
//使用Object.entries()方法获取对象的所有属性名和属性值
const entries = Object.entries(person);

//删除对象
delete person.name;