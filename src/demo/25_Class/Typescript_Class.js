// 类 class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.privateName = name;
        this.protectedName = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(protectedName) {
        var _this = _super.call(this, protectedName) || this;
        console.log(_this.protectedName);
        return _this;
    }
    return Cat;
}(Animal));
// 2.2 抽象类
// abstract 用于定义抽象类和其中的抽象方法。
// 首先，抽象类是不允许被实例化的
// 其次，抽象类中的抽象方法必须被子类实现
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    return Animals;
}());
// 抽象类是不允许被实例化的
// let a = new Animals('Jack'); //实例化
// error TS2511: Cannot create an instance of an abstract class.
var Animales = /** @class */ (function () {
    function Animales(name) {
        this.name = name;
    }
    return Animales;
}());
var Cates = /** @class */ (function (_super) {
    __extends(Cates, _super);
    function Cates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cates.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    Cates.prototype.eat = function () {
        console.log(this.name + " is eating.");
    };
    return Cates;
}(Animales));
var cat = new Cat('Tom');
