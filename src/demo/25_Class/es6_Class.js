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
// 1.ES6中类的用法
// 1.1 属性和方法
// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数。
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        console.log('sayHi==> My name is:', this.name);
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack'); // 通过 new 生成新实例的时候，会自动调用构造函数。
// a.name = 'Jc'; //可以改变变量的值
console.log(a.sayHi()); // My name is Jack
// 1.2 类的继承
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'Meow, ' + _super.prototype.sayHi.call(this); // 调用父类的 sayHi()
    };
    return Cat;
}(Animal));
var c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
// 1.3 存取器
// 使用 getter 和 setter 可以改变属性的赋值和读取行为：
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Object.defineProperty(Animals.prototype, "name", {
        get: function () {
            return 'Jack';
        },
        set: function (value) {
            console.log('setter: ' + value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animals.prototype, "names", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    return Animals;
}());
var a = new Animals('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log('name:', a.name); // name: Jack
console.log('names:', a.names); // names: Jack
