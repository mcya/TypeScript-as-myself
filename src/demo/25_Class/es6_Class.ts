// 类 class

// 1.ES6中类的用法

// 1.1 属性和方法
// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数。
class Animal {
  constructor(name) { // constructor 定义构造函数
    this.name = name;
  }
  sayHi() {
    console.log('sayHi==> My name is:', this.name)
    return `My name is ${this.name}`;
  }
}
let a = new Animal('Jack'); // 通过 new 生成新实例的时候，会自动调用构造函数。
// a.name = 'Jc'; //可以改变变量的值
console.log(a.sayHi()); // My name is Jack


// 1.2 类的继承
class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}
let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom


// 1.3 存取器
// 使用 getter 和 setter 可以改变属性的赋值和读取行为：
class Animals {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    get names() {
        return this.name;
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}
let a = new Animals('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log('name:', a.name); // name: Jack
console.log('names:', a.names); // names: Jack
