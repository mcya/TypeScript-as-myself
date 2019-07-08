// Primitive data types 原始数据类型
// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。


// 1 - boolean
// boolean 布尔值  ==> let booleanName: boolean = false  ==> let name: type = value
let isDone: boolean = false;

// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
// let name1: boolean = new Boolean(1);
// 编译器会报错：
// error TS2322: Type 'Boolean' is not assignable to type 'boolean'. ==> 出了编译报错的代码片段，表示编译未通过

// 事实上 new Boolean() 返回的是一个 Boolean 对象
let name2: Boolean = new Boolean(1);//true
// 这样不会报错

let name5: boolean = Boolean(1); //true
let name3: boolean = Boolean(1+1>2); //false

/*
 *关于 类型 的声明
 1. let name1: boolean = false / true;
 2. let name2: Boolean = new Boolean(1); //使用new生成新的boolean类型 需要大写声明
 3. let name3: boolean = Boolean(1);
*/



// 2 - number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
