// 元组 Tuple

// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#）,在这些语言中频繁使用元组。

// ==> 在typescript中 数组中的元素的数据类型都必须是一致的。
// ===> 而在js中数组里面的元素是可以混合各种类型的，而在typescript中要达到这个目的就需要元组，所以元组合并了不同类型的对象。

let xcatliu: [string, number] = ['Xcat Liu', 25];
xcatliu[0] = 'Xcat'; //ok
// xcatliu[1] = 25; //ok
xcatliu[1] = 'Xcat Liu'; //error: 需要在对应的坐标也出对应的数据类型 但是可以没有


console.log(xcatliu)



// 越界元素：
let xcatliu2: [string, number];
xcatliu2 = ['Xcat Liu', 25];
xcatliu2.push('http://xcatliu2.com/'); //ok: 越界元素可以在规定的数据类型之一，但是不能超出
xcatliu2.push(true);// error: 'boolean' is not assignable to parameter of type 'string | number'

// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
