/**
JavaScript 是一种基于原型的语言，
这意味着对象之间的关系不是通过类（class）来建立的，
而是通过原型（prototype）。
*/

//原型（Prototype）
/**
原型是 JavaScript 中的一个内部对象，它可以让我们共享方法和属性。
每当创建一个新对象时，我们实际上都是在复制一个存在的原型对象。
新对象继承了原型对象的属性。这种继承是动态的，如果我们改变原型对象，那么所有基于该原型的对象都将受到影响。

原型（Prototype）、原型链（__proto__）、函数、对象是密切相关的概念，简单来说：

每个函数在创建时都会有一个名为 prototype 的属性，它指向函数的原型对象。当以构造函数方式调用（即通过 new 关键字）时，新创建的对象会继承该函数的原型。
*/
function Animal(name) {
    this.name = name;
}
Animal.prototype.breathe = function() {
    console.log(this.name + " can breathe.");
}
let dog = new Animal('Dog');
dog.breathe(); // 输出：Dog can breathe.

/**
每一个 JavaScript 对象（函数也是对象）都有一个通过 __proto__ 属性关联的原型对象
从它那里继承属性，这也被称为原型链。
*/

let animal = {
    eats: true
};
// 创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true
console.log(rabbit.__proto__ === animal); // true


//原型和构造函数
/**
在 JavaScript 中，函数也是对象。
当我们使用 new 关键字来调用一个函数（此时我们称之为构造函数）时，
JavaScript 会创建一个新的对象，
并将这个对象的原型设置为构造函数的prototype属性。
如果按照面向对象的方式编写代码，那么这个属性将非常有用。
*/

// 声明函数对象 Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, 我叫 ${this.name}, 我 ${this.age} 岁了。`);
};

const alice = new Person('Alice', 25);
alice.greet();  // Hello, 我叫 Alice, 我 25 岁了.


/**
在上述代码中，Person是一个构造函数，
我们创建了一个新的Person实例alice。alice 的原型就是 Person.prototype，
即alice.__proto__ === Person.prototype。
因此alice可以访问在Person.prototype上定义的所有属性和方法。
*/

//原型链
/**
在 JavaScript 中，几乎所有的对象在创建的时候都会关联到另一个对象，
这个被关联的对象就是原型对象。当我们试图访问一个对象的某个属性时，
JavaScript 首先在这个对象本身上查找这个属性。
如果找不到，那么 JavaScript 就会去这个对象的原型对象中寻找。
如果原型对象中也没有，那么 JavaScript 就会继续在原型对象的原型对象上查找，
一直这样查找下去，直到找到这个属性，或者查找到原型链的顶端 null 为止。
这就形成了一条原型链。
*/

// 声明函数对象 Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, 我叫 ${this.name}, 我 ${this.age} 岁了。`);
};

const bob = new Person('Bob', 25);

console.log(bob.__proto__ === Person.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

/**
在上述代码中，实例bob是由 Person 构造函数创建而来，
对象可以通过__proto__属性访问该对象的原型对象，
所以bob.__proto__ === Person.prototype。
由于Person.prototype也是一个对象，同样具备__proto__属性，
而该对象是Object的实例，
所以Person.prototype.__proto__ === Object.prototype。
Object.prototype.__proto__是原型链的顶端，即null。

console.log(bob.toString());  // [object Object]

在上述代码中，toString方法并不在bob或Person.prototype上，
但 JavaScript 在Object.prototype上找到了它，
因为Person.prototype的原型就是Object.prototype，
即Person.prototype.__proto__ === Object.prototype。

通过原型链，所有的对象都可以访问Object.prototype上的属性和方法，
这就是我们为什么可以在任何对象上调用toString或hasOwnProperty等方法的原因。
*/