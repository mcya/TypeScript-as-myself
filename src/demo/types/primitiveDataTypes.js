// Primitive data types 原始数据类型
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
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
