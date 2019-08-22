// 元组 Tuple
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#）,在这些语言中频繁使用元组。
// ==> 在typescript中 数组中的元素的数据类型都必须是一致的。
// ===> 而在js中数组里面的元素是可以混合各种类型的，而在typescript中要达到这个目的就需要元组，所以元组合并了不同类型的对象。
var xcatliu = ['Xcat Liu', 25];
xcatliu[0] = 'Xcat'; //ok
// xcatliu[1] = 25; //ok
xcatliu[1] = 'Xcat Liu'; //ok
console.log(xcatliu);
