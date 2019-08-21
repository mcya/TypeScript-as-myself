// 联合类型（Union Types）表示取值可以为多种类型中的一种。

// 1.变量声明
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

myFavoriteNumber = true; //error: Type 'boolean' is not assignable to type 'string | number'


// 2.访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
    return something.length;
}
// length 不是 string 和 number 的共有属性，所以会报错。
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// 正确做法：
function getString(something: string | number): string {
    return something.toString();
}

// 这种联合声明的还是少点用吧
