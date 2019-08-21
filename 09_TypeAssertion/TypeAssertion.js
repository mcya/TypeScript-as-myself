// 类型断言（Type Assertion
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 1.基本语法
// ` <类型>值 `
// 或者: ` 值 as 类型 `
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。即  ` 值 as 类型 `
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function getLength2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 需要注意的是：
// 1.类型断言不是类型转换
// 2.断言成一个联合类型中不存在的类型是不允许的
function toBoolean(something) {
    return something; //boolean类型不在string和number之间 是不被允许的
}
