// Primitive data types 原始数据类型
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
// 1 - boolean
// boolean 布尔值  ==> let booleanName: boolean = false  ==> let name: type = value
var isDone = false;
// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
// let name1: boolean = new Boolean(1);
// 编译器会报错：
// error TS2322: Type 'Boolean' is not assignable to type 'boolean'. ==> 出了编译报错的代码片段，表示编译未通过
// 事实上 new Boolean() 返回的是一个 Boolean 对象
var name2 = new Boolean(1); //true
// 这样不会报错
var name5 = Boolean(1); //true
var name3 = Boolean(1 + 1 > 2); //false
/*
 *关于 类型 的声明
 1. let name1: boolean = false / true;
 2. let name2: Boolean = new Boolean(1); //使用new生成新的boolean类型 需要大写声明
 3. let name3: boolean = Boolean(1);
*/
// 2 - number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
