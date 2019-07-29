// 数组的类型
// 1. 简单的表示: 使用「类型 + 方括号」来表示数组
var arrays = [1, 1, 2, 3, 5];
// 1.1 数组的项中不允许出现其他的类型
// 错误示例: 字符串1
// let fibonacci: number[] = [1, '1', 2, 3, 5];
// 1.2 添加进来的元素也必须要是符合类型的
// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8'); //error
// 2. 数组泛型 - 同样的规则限制，数组元素不允许出现其他类型
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci2 = [1, 1, 2, 3, 5];
// 4. 可以用 any 表示数组中允许出现任意类型
var list = ['Xcat Liu', 25, { website: 'http://www.baidu.com' }];
// 5. 类数组
var arguments = [1, 2, 3];
function sum() {
    var args = arguments;
}
function sums() {
    var args = arguments;
}
