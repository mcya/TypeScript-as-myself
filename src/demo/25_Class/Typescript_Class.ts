// 类 class

// 2.TypeScript 中类的用法

// 2.1 public private 和 protected
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

// ==>
// public: 公共的，可以允许任何位置访问
// private: 私有的，只能在class中使用
// protected: 受保护的，可以在子类(extends)中使用
class Animal {
    public name; //name设置了 public 类型 故直接访问实例的 name 属性是允许的
    private privateName; // privateName 设置 private 故 只能在该class内使用, 其子类也是不允许访问的。
    protected protectedName; //也只是class内使用 但是其子类是可以访问的
    public constructor(name) {
        this.name = name;
        this.privateName = name;
        this.protectedName = name;
    }
}
let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom

class Cat extends Animal {
    constructor(protectedName) { //protectedName设置 protected 类型 其子类是允许访问的 但是访问不了 private 定义的变量
        super(protectedName);
        console.log(this.protectedName);
    }
}

// 2.2 抽象类
// abstract 用于定义抽象类和其中的抽象方法。
// 首先，抽象类是不允许被实例化的
// 其次，抽象类中的抽象方法必须被子类实现

abstract class Animals {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

// 抽象类是不允许被实例化的
// let a = new Animals('Jack'); //实例化
// error TS2511: Cannot create an instance of an abstract class.
abstract class Animales {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();// 如果定义了抽象方法 需要在子类实现它
}

class Cates extends Animales {
    public sayHi() { //由于 abstract定义的抽象类 存在了 抽象方法 sayHi() 故这里需要去实现才可以 否则报错
        console.log(`Meow, My name is ${this.name}`);
    }
    public eat() {
        console.log(`${this.name} is eating.`);
    }
}

let cat = new Cat('Tom');


// 3.类的类型
class Animaies {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
}

let a: Animaies = new Animaies('Jack');
console.log(a.sayHi()); // My name is Jack
