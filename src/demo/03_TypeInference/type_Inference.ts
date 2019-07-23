// 类型推论(Type Inference)

// 在typescript中如果不声明变量类型，其会根据变量的第一赋值来判断该变量的类型，且默认赋予其类型。

// 1.没有定义变量的类型，但是变量存在值，变量的值是string类型，那就默认该变量的值为string类型
let myFavoriteNumber = 'seven'; //等价于 let myFavoriteNumber:string = 'seven';
myFavoriteNumber = 7;

// 执行的时候typescript会报错：
// Type 'number' is not assignable to type 'string'.

// 2.没有定义变量的类型，但是变量没有值，只是声明，那就默认是 any 任意值类型。
// 即是02_any部分分内容
let myFavoriteNumber; // 等价于let myFavoriteNumber:any;
